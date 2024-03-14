const { validationResult } = require("express-validator");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
const db = require("../models");
const Event = db.Event;

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

		Event.create({
			name: req.body.name,
			description: req.body.description,
			start: req.body.start,
			end: req.body.end,
			url: req.body.url,
			vanity_url: req.body.vanity_url,
			is_active: req.body.is_active,
			visibility: req.body.visibility,
			online_event: req.body.online_event,
			organizer_id: req.body.organizer_id,
			event_profile_picture: req.body.event_profile_picture,
			venue_name: req.body.venue_name,
			address: JSON.stringify(req.body.address),
			format_name: req.body.format_name,
			password: req.body.password,
			capacity: req.body.capacity,
			locale: req.body.locale,
		})
			.then((feed) => {
				res
					.status(200)
					.send({ id: feed.id, message: "Event added successfully" });
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
                    ev.*,
                    JSON_OBJECT('id', u.id, 'name', u.name, 'user_name', u.user_name, 'profile_image_url', u.profile_image_url) AS organizer
                FROM
                    Events AS ev
                INNER JOIN
                    Users AS u ON ev.organizer_id = u.id
                WHERE
                    ev.visibility = 1;
                `;
		await sequelize
			.query(query, {
				type: QueryTypes.SELECT,
			})
			.then((event) => {
				if (!event) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No events found",
					});
				} else {
					res.status(200).send(event);
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
                    ev.*,
                    JSON_OBJECT('id', u.id, 'name', u.name, 'user_name', u.user_name, 'profile_image_url', u.profile_image_url) AS organizer
                FROM
                    Events AS ev
                INNER JOIN
                    Users AS u ON ev.organizer_id = u.id
                WHERE
                    ev.visibility = 1
                AND 
                    ev.id = ?
                `;
		await sequelize
			.query(query, {
				replacements: [req.params.id],
				type: QueryTypes.SELECT,
			})
			.then((event) => {
				if (!event) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No events found",
					});
				} else {
					res.status(200).send(event.length > 0 ? event[0] : {});
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

		Event.update(
			{
				description: req.body.description,
				start: req.body.start,
				end: req.body.end,
				url: req.body.url,
				vanity_url: req.body.vanity_url,
				is_active: req.body.is_active,
				visibility: req.body.visibility,
				online_event: req.body.online_event,
				organizer_id: req.body.organizer_id,
				venue_name: req.body.venue_name,
				address: JSON.stringify(req.body.address),
				password: req.body.password,
				capacity: req.body.capacity,
			},
			{ returning: true, where: { id: req.params.id } }
		)
			.then((feed) => {
				if (!feed) {
					res.status(404).send({
						status: false,
						type: "empty",
						message: "No events found",
					});
				} else {
					res
						.status(200)
						.send({ id: feed.id, message: "Event updated successfully" });
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
