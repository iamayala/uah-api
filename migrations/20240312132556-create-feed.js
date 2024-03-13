"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Feeds", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			content: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			likes: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			retweets: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			hashtags: {
				type: Sequelize.STRING,
			},
			mentions: {
				type: Sequelize.STRING,
			},
			media: {
				type: Sequelize.TEXT,
			},
			location: {
				type: Sequelize.STRING,
			},
			source: {
				type: Sequelize.STRING,
			},
			replyTo: {
				type: Sequelize.STRING,
			},
			parentFeedId: {
				type: Sequelize.STRING,
			},
			visibility: {
				type: Sequelize.BOOLEAN,
			},
			language: {
				type: Sequelize.STRING,
				defaultValue: "en-US",
			},
			sentiment: {
				type: Sequelize.STRING,
			},
			verified: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
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
		await queryInterface.dropTable("Feeds");
	},
};
