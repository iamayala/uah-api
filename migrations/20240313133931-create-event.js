"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Events", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				defaultValue: "N/A",
			},
			start: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			end: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			url: {
				type: Sequelize.STRING,
			},
			vanity_url: {
				type: Sequelize.STRING,
			},
			is_active: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			visibility: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			online_event: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			organizer_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			event_profile_picture: {
				type: Sequelize.STRING,
			},
			venue_name: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.TEXT,
			},
			format_name: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			capacity: {
				type: Sequelize.INTEGER,
			},
			locale: {
				type: Sequelize.STRING,
				defaultValue: "en-US",
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Events");
	},
};
