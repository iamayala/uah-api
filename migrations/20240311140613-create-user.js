"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			user_name: {
				type: Sequelize.STRING,
			},
			location: {
				type: Sequelize.STRING,
			},
			profile_location: {
				type: Sequelize.STRING,
				defaultValue: "",
			},
			description: {
				type: Sequelize.STRING,
				defaultValue: "",
			},
			url: {
				type: Sequelize.STRING,
				defaultValue: "http://localhost",
			},
			protected: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			followers_count: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
			},
			verified: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			language: {
				type: Sequelize.STRING,
				defaultValue: "en",
			},
			email_address: {
				type: Sequelize.STRING,
			},
			phone_number: {
				type: Sequelize.STRING,
			},
			role_id: {
				type: Sequelize.STRING,
				defaultValue: "user",
			},
			password: {
				type: Sequelize.STRING,
			},
			profile_image_url: {
				type: Sequelize.STRING,
				defaultValue: "",
			},
			is_active: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
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
		await queryInterface.dropTable("Users");
	},
};
