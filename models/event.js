"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Event extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {}
	}
	Event.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			start: DataTypes.DATE,
			end: DataTypes.DATE,
			url: DataTypes.STRING,
			vanity_url: DataTypes.STRING,
			is_active: DataTypes.BOOLEAN,
			visibility: DataTypes.BOOLEAN,
			online_event: DataTypes.BOOLEAN,
			organizer_id: DataTypes.STRING,
			event_profile_picture: DataTypes.STRING,
			venue_name: DataTypes.STRING,
			address: DataTypes.STRING,
			format_name: DataTypes.STRING,
			password: DataTypes.STRING,
			capacity: DataTypes.INTEGER,
			locale: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Event",
		}
	);
	return Event;
};
