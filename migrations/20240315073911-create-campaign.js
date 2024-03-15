"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Campaigns", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			campaign_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			start_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			end_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			organizer_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			goals: {
				type: Sequelize.TEXT,
			},
			target_audience: {
				type: Sequelize.STRING,
			},
			messages: {
				type: Sequelize.TEXT,
			},
			activities: {
				type: Sequelize.TEXT,
			},
			budget_currency: {
				type: Sequelize.STRING,
			},
			budget: {
				type: Sequelize.INTEGER,
			},
			staff: {
				type: Sequelize.INTEGER,
			},
			volunteers: {
				type: Sequelize.INTEGER,
			},
			target: {
				type: Sequelize.INTEGER,
			},
			current_value: {
				type: Sequelize.INTEGER,
			},
			evaluation_criteria: {
				type: Sequelize.TEXT,
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
		await queryInterface.dropTable("Campaigns");
	},
};
