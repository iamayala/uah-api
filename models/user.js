"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {}
	}
	User.init(
		{
			name: DataTypes.STRING,
			user_name: DataTypes.STRING,
			location: DataTypes.STRING,
			profile_location: DataTypes.STRING,
			description: DataTypes.STRING,
			url: DataTypes.STRING,
			protected: DataTypes.BOOLEAN,
			followers_count: DataTypes.INTEGER,
			verified: DataTypes.BOOLEAN,
			language: DataTypes.STRING,
			email_address: DataTypes.STRING,
			phone_number: DataTypes.STRING,
			role_id: DataTypes.STRING,
			password: DataTypes.STRING,
			profile_image_url: DataTypes.STRING,
			is_active: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
