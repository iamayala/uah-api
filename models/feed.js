"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Feed extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Feed.belongsTo(models.User, {
				foreignKey: "userId",
				as: "author",
			});
		}
	}
	Feed.init(
		{
			content: DataTypes.STRING,
			likes: DataTypes.INTEGER,
			retweets: DataTypes.INTEGER,
			hashtags: DataTypes.STRING,
			mentions: DataTypes.STRING,
			media: DataTypes.TEXT,
			location: DataTypes.STRING,
			source: DataTypes.STRING,
			replyTo: DataTypes.STRING,
			parentFeedId: DataTypes.STRING,
			visibility: DataTypes.BOOLEAN,
			language: DataTypes.STRING,
			sentiment: DataTypes.STRING,
			verified: DataTypes.STRING,
			userId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Feed",
		}
	);
	return Feed;
};
