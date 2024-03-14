const { validationResult } = require("express-validator");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
const db = require("../models");
const Resource = db.Resource;

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

		Resource.create({
			name: req.body.name,
			format: req.body.format,
			type: req.body.type,
			size: req.body.size,
			owner_id: req.body.owner_id,
			category: req.body.category,
			can_share: req.body.can_share,
			visibility: req.body.visibility,
			parent_folder_id: req.body.parent_folder_id,
			sharing_link: req.body.sharing_link,
			content_link: req.body.content_link,
			thumbnail: req.body.thumbnail,
			description: req.body.description,
		})
			.then((resource) => {
				res
					.status(200)
					.send({ id: resource.id, message: "Resource added successfully" });
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
                    re.*,
                    JSON_OBJECT('id', u.id, 'name', u.name, 'user_name', u.user_name, 'profile_image_url', u.profile_image_url) AS user
                FROM
                    Resources AS re
                INNER JOIN
                    Users AS u ON re.owner_id = u.id
                WHERE
                    re.visibility = 1;
                `;
		await sequelize
			.query(query, {
				type: QueryTypes.SELECT,
			})
			.then((resource) => {
				if (!resource) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No resources found",
					});
				} else {
					res.status(200).send(resource);
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
                    re.*,
                    JSON_OBJECT('id', u.id, 'name', u.name, 'user_name', u.user_name, 'profile_image_url', u.profile_image_url) AS user
                FROM
                    Resources AS re
                INNER JOIN
                    Users AS u ON re.owner_id = u.id
                WHERE
                    re.visibility = 1
                AND
                    re.id = ?
                `;
		await sequelize
			.query(query, {
				replacements: [req.params.id],
				type: QueryTypes.SELECT,
			})
			.then((resource) => {
				if (!resource) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No resources found",
					});
				} else {
					res.status(200).send(resource.length > 0 ? resource[0] : {});
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

		Resource.update(
			{
				name: req.body.name,
				format: req.body.format,
				type: req.body.type,
				size: req.body.size,
				category: req.body.category,
				can_share: req.body.can_share,
				visibility: req.body.visibility,
				parent_folder_id: req.body.parent_folder_id,
				sharing_link: req.body.sharing_link,
				content_link: req.body.content_link,
				thumbnail: req.body.thumbnail,
				description: req.body.description,
			},
			{ returning: true, where: { id: req.params.id } }
		)
			.then((feed) => {
				if (!feed) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No resources found",
					});
				} else {
					res
						.status(200)
						.send({ id: feed.id, message: "Resource updated successfully" });
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

		Resource.destroy({ where: { id: req.params.id } })
			.then((resource) => {
				res.status(200).send({
					id: resource.id,
					message: "Resource deleted successfully",
				});
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
