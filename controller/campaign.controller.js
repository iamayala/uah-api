const { validationResult } = require("express-validator");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
const db = require("../models");
const Campaign = db.Campaign;

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

		Campaign.create({
			campaign_name: req.body.campaign_name,
			description: req.body.description,
			start_date: req.body.start_date,
			end_date: req.body.end_date,
			organizer_id: req.body.organizer_id,
			goals: JSON.stringify(req.body.goals),
			target_audience: req.body.target_audience,
			messages: JSON.stringify(req.body.messages),
			activities: JSON.stringify(req.body.activities),
			budget_currency: req.body.budget_currency,
			budget: req.body.budget,
			staff: req.body.staff,
			volunteers: req.body.volunteers,
			target: req.body.target,
			current_value: req.body.current_value,
			evaluation_criteria: JSON.stringify(req.body.evaluation_criteria),
		})
			.then((campaign) => {
				res
					.status(200)
					.send({ id: campaign.id, message: "Campaign added successfully" });
			})
			.catch((err) =>
				res.status(500).send({
					status: false,
					type: "error",
					message: err.message,
				})
			);
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

		/**
         * @TODO: Add this statement in the WHERE clause 
                WHERE 
                    CURDATE() IS NOT BETWEEN ca.start_date AND ca.end_date
         */

		const query = `
                SELECT
                    ca.*,
                    JSON_OBJECT('id', u.id, 'name', u.name, 'user_name', u.user_name, 'profile_image_url', u.profile_image_url) AS organizer
                FROM
                    Campaigns AS ca
                INNER JOIN
                    Users AS u ON ca.organizer_id = u.id
                WHERE 
                    ca.id = ?
                `;
		await sequelize
			.query(query, {
				replacements: [req.params.id],
				type: QueryTypes.SELECT,
			})
			.then((campaign) => {
				if (!campaign) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No campaigns found",
					});
				} else {
					res.status(200).send(campaign.length > 0 ? campaign[0] : {});
				}
			})
			.catch((err) => {
				res.status(500).send({ message: err.message });
			});
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

		/**
         * @TODO: Add this statement in the WHERE clause 
                WHERE 
                    CURDATE() IS NOT BETWEEN ca.start_date AND ca.end_date
         */

		const query = `
                SELECT
                    ca.*,
                    JSON_OBJECT('id', u.id, 'name', u.name, 'user_name', u.user_name, 'profile_image_url', u.profile_image_url) AS organizer
                FROM
                    Campaigns AS ca
                INNER JOIN
                    Users AS u ON ca.organizer_id = u.id
                `;
		await sequelize
			.query(query, {
				type: QueryTypes.SELECT,
			})
			.then((campaign) => {
				if (!campaign) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No campaigns found",
					});
				} else {
					res.status(200).send(campaign);
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

		Campaign.update(
			{
				campaign_name: req.body.campaign_name,
				description: req.body.description,
				start_date: req.body.start_date,
				goals: JSON.stringify(req.body.goals),
				target_audience: req.body.target_audience,
				messages: JSON.stringify(req.body.messages),
				activities: JSON.stringify(req.body.activities),
				budget_currency: req.body.budget_currency,
				budget: req.body.budget,
				staff: req.body.staff,
				volunteers: req.body.volunteers,
				target: req.body.target,
				current_value: req.body.current_value,
				evaluation_criteria: JSON.stringify(req.body.evaluation_criteria),
			},
			{ returning: true, where: { id: req.params.id } }
		)
			.then((campaign) => {
				if (!campaign) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No Campaign found",
					});
				} else {
					res.status(200).send({
						id: campaign.id,
						message: "Campaign updated successfully",
					});
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

		Campaign.destroy({ where: { id: req.params.id } })
			.then((feed) => {
				res
					.status(200)
					.send({ id: feed.id, message: "Campaign deleted successfully" });
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
