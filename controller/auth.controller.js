const config = require("../config/auth.config");
const { email } = require("../services");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.User;
const VerificationToken = db.Verification_tokens;

module.exports = {
	async signup(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send({
				status: false,
				type: "errors",
				message: "Error in validation",
				errors: errors.array(),
			});
		}
		// Save User to Database
		const salt = await bcrypt.genSalt(10);
		const hashedPwd = await bcrypt.hash(req.body.password, salt);

		User.create({
			name: req.body.name,
			user_name: req.body.user_name,
			location: req.body.location,
			description: req.body.description,
			email_address: req.body.email_address,
			phone_number: req.body.phone_number,
			password: hashedPwd,
		})
			.then(async (user) => {
				let JWTVerificationToken = jwt.sign(
					{
						id: user.id,
						name: user.name,
						user_name: user.user_name,
					},
					config.secret,
					{ expiresIn: "1h" }
				);
				const code = generateRandomOTP();

				VerificationToken.create({
					u_id: user.id,
					code: code,
					token: JWTVerificationToken,
				});

				// sending verificaiton email
				await email.sendVerificationEmail(
					user.email,
					code,
					JWTVerificationToken
				);

				res.status(200).send({
					id: user.id,
					mobile: user.mobile,
					accessToken: JWTVerificationToken,
				});
			})
			.catch((err) => {
				res.status(500).send({
					status: false,
					type: "error",
					message: err.message,
				});
			});
	},

	signin(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send({
				status: false,
				type: "errors",
				message: "Error in validation",
				errors: errors.array(),
			});
		}
		User.findOne({
			where: {
				email_address: req.body.email,
			},
		})
			.then(async (user) => {
				if (!user) {
					res.status(404).send({
						status: false,
						type: "error",
						message: "Failed! User not found.",
					});
				} else {
					const passwordIsValid = await bcrypt.compare(
						req.body.password,
						user.password
					);
					if (!passwordIsValid) {
						res.status(401).send({
							status: false,
							type: "error",
							message: "Failed! Invalid password.",
						});
					} else {
						let JWTVerificationToken = jwt.sign(
							{
								id: user.id,
								name: user.name,
								user_name: user.user_name,
							},
							config.secret,
							{ expiresIn: "1h" }
						);
						const code = generateRandomOTP();

						VerificationToken.create({
							u_id: user.id,
							code: code,
							token: JWTVerificationToken,
						});

						// sending verificaiton email
						await email.sendVerificationEmail(
							user.email,
							code,
							JWTVerificationToken
						);

						res.status(200).send({
							id: user.id,
							mobile: user.mobile,
							accessToken: JWTVerificationToken,
						});
					}
				}
			})
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	},

	async verify(req, res) {
		try {
			const { otp, token } = req.body;

			const decoded = jwt.verify(token, config.secret);
			const verificationEntry = await VerificationToken.findOne({
				where: {
					u_id: decoded.id,
					code: otp,
					token: token,
				},
			});

			if (!verificationEntry) {
				return res.status(400).send("Invalid OTP or Token");
			}

			const user = await User.findByPk(decoded.id);
			user.is_active = true;
			await user.save();

			var jwt_token = jwt.sign(
				{
					id: user.id,
					name: user.name,
					user_name: user.user_name,
				},
				config.secret,
				{
					expiresIn: 7890000, // 3 months
				}
			);

			res.status(200).send({
				id: user.id,
				name: user.name,
				user_name: user.user_name,
				email_address: user.email_address,
				phone_number: user.phone_number,
				accessToken: jwt_token,
			});
		} catch (error) {
			console.log(error);
			res.status(500).send("Internal Server Error");
		}
	},
};

function generateRandomOTP() {
	// return Math.floor(100000 + Math.random() * 900000);
	return 123456;
}
