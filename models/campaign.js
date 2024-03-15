"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Campaign extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Campaign.init(
		{
			campaign_name: DataTypes.STRING,
			description: DataTypes.STRING,
			start_date: DataTypes.DATE,
			end_date: DataTypes.DATE,
			organizer_id: DataTypes.INTEGER,
			goals: DataTypes.TEXT,
			target_audience: DataTypes.STRING,
			messages: DataTypes.TEXT,
			activities: DataTypes.TEXT,
			budget_currency: DataTypes.STRING,
			budget: DataTypes.INTEGER,
			staff: DataTypes.INTEGER,
			volunteers: DataTypes.INTEGER,
			target: DataTypes.INTEGER,
			current_value: DataTypes.INTEGER,
			evaluation_criteria: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: "Campaign",
		}
	);
	return Campaign;
};
