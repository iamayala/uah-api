const { validationResult } = require("express-validator");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
const db = require("../models");
const Feed = db.Feed;

module.exports = {
	async create(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send({
				status: false,
				type: "errors",
				message: "Error in validation",
				errors: errors.array(),
			});
		}

		Feed.create({
			content: req.body.content,
			mentions: req.body.mentions,
			media: req.body.media,
			hashtags: req.body.hashtags,
			location: req.body.location,
			source: req.body.source,
			replyTo: req.body.replyTo,
			parentFeedId: req.body.parentFeedId,
			visibility: req.body.visibility,
			language: req.body.language,
			sentiment: req.body.sentiment,
			verified: req.body.verified,
			userId: req.body.userId,
		})
			.then((feed) => {
				res
					.status(200)
					.send({ id: feed.id, message: "Feed added successfully" });
			})
			.catch((err) =>
				res.status(500).send({
					status: false,
					type: "error",
					message: err.message,
				})
			);
	},
	async findAll(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send({
				status: false,
				type: "errors",
				message: "Error in validation",
				errors: errors.array(),
			});
		}

		const query = `
                SELECT
                    f.*,
                    JSON_OBJECT('id', u.id, 'name', u.name, 'user_name', u.user_name, 'profile_image_url', u.profile_image_url) AS user,
                    JSON_ARRAYAGG(
                        JSON_OBJECT('id', mu.id, 'name', mu.name, 'user_name', mu.user_name, 'profile_image_url', mu.profile_image_url)
                    ) AS mentions
                FROM
                    Feeds AS f
                INNER JOIN
                    Users AS u ON f.userId = u.id
                LEFT JOIN
                    Users AS mu ON FIND_IN_SET(mu.id, f.mentions) > 0
                GROUP BY
                    f.id
                HAVING
                    f.visibility = 1;
                `;
		await sequelize
			.query(query, {
				type: QueryTypes.SELECT,
			})
			.then((feed) => {
				if (!feed) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No feeds found",
					});
				} else {
					res.status(200).send(feed);
				}
			})
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	},
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

		const query = `
                SELECT
                    f.*,
                    JSON_OBJECT('id', u.id, 'name', u.name, 'user_name', u.user_name, 'profile_image_url', u.profile_image_url) AS user,
                    JSON_ARRAYAGG(
                        JSON_OBJECT('id', mu.id, 'name', mu.name, 'user_name', mu.user_name, 'profile_image_url', mu.profile_image_url)
                    ) AS mentions
                FROM
                    Feeds AS f
                INNER JOIN
                    Users AS u ON f.userId = u.id
                LEFT JOIN
                    Users AS mu ON FIND_IN_SET(mu.id, f.mentions) > 0
                GROUP BY
                    f.id
                HAVING
                    f.visibility = 1
                AND
                    f.id = ?
                `;
		await sequelize
			.query(query, {
				replacements: [req.params.id],
				type: QueryTypes.SELECT,
			})
			.then((feed) => {
				if (!feed) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No feeds found",
					});
				} else {
					res.status(200).send(feed.length > 0 ? feed[0] : {});
				}
			})
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
	},
	update(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send({
				status: false,
				type: "errors",
				message: "Error in validation",
				errors: errors.array(),
			});
		}

		Feed.update(
			{
				content: req.body.content,
				mentions: req.body.mentions,
				media: req.body.media,
				visibility: req.body.visibility,
				sentiment: req.body.sentiment,
				likes: req.body.likes,
				hashtags: req.body.hashtags,
			},
			{ returning: true, where: { id: req.params.id } }
		)
			.then((feed) => {
				if (!feed) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No feeds found",
					});
				} else {
					res
						.status(200)
						.send({ id: feed.id, message: "Feed updated successfully" });
				}
			})
			.catch((err) =>
				res.status(500).send({
					status: false,
					type: "error",
					message: err.message,
				})
			);
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

		Feed.destroy({ where: { id: req.params.id } })
			.then((feed) => {
				console.log(feed);
				if (!feed) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No feeds found",
					});
				} else {
					res
						.status(200)
						.send({ id: feed.id, message: "Feed deleted successfully" });
				}
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
