const db = require("../models");
const User = db.User;

checkExistingUsername = (req, res, next) => {
	User.findOne({
		where: {
			username: req.body.username,
		},
	})
		.then((user) => {
			console.log(user);
			if (user) {
				res.status(400).send({
					status: false,
					type: "error",
					message: "Failed! Email is already in use!",
					// message: req.body
				});
				return;
			}

			next();
		})
		.catch((err) => {
			res.status(500).send({
				status: false,
				type: "error",
				message: err.message,
			});
		});
};

const utils = {
	checkExistingUsername: checkExistingUsername,
};

module.exports = utils;
