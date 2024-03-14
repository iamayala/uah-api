"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Resources", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			format: {
				type: Sequelize.STRING,
			},
			type: {
				type: Sequelize.STRING,
			},
			size: {
				type: Sequelize.STRING,
			},
			owner_id: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			category: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			can_share: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			visibility: {
				type: Sequelize.BOOLEAN,
			},
			parent_folder_id: {
				type: Sequelize.STRING,
			},
			sharing_link: {
				type: Sequelize.STRING,
			},
			content_link: {
				type: Sequelize.STRING,
			},
			thumbnail: {
				type: Sequelize.STRING,
			},
			description: {
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
		await queryInterface.dropTable("Resources");
	},
};
