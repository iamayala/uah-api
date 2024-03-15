const { validationResult } = require("express-validator");
const db = require("../models");
const User = db.User;

module.exports = {
	async findOne(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send({
				status: false,
				type: "errors",
				message: "Error in validation",
				errors: errors.array(),
			});
		}
		User.findAll({
			where: {
				id: req.params.id,
				is_active: true,
			},
			attributes: { exclude: ["password"] },
		})
			.then((user) => {
				if (!user) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No User found",
					});
				} else {
					res.status(200).send(user[0]);
				}
			})
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	},
	async update(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send({
				status: false,
				type: "errors",
				message: "Error in validation",
				errors: errors.array(),
			});
		}
		User.update(
			{
				name: req.body.name,
				user_name: req.body.user_name,
				location: req.body.location,
				description: req.body.description,
				email_address: req.body.email_address,
				phone_number: req.body.phone_number,
				profile_location: req.body.profile_location,
				url: req.body.url,
				protected: req.body.protected,
				followers_count: req.body.followers_count,
				verified: req.body.verified,
				language: req.body.language,
				profile_image_url: req.body.profile_image_url,
				is_active: req.body.is_active,
			},
			{
				where: {
					id: req.params.id,
					is_active: true,
				},
			}
		)
			.then((user) => {
				if (!user) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No User found",
					});
				} else {
					res.status(200).send(user[0]);
				}
			})
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	},
	delete(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send({
				status: false,
				type: "errors",
				message: "Error in validation",
				errors: errors.array(),
			});
		}

		User.destroy({ where: { id: req.params.id } })
			.then((feed) => {
				res
					.status(200)
					.send({ id: feed.id, message: "User deleted successfully" });
			})
			.catch((err) =>
				res.status(500).send({
					status: false,
					type: "error",
					message: err.message,
				})
			);
	},
};
