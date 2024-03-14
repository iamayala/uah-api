'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Resource.init({
    name: DataTypes.STRING,
    format: DataTypes.STRING,
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    owner_id: DataTypes.STRING,
    category: DataTypes.STRING,
    can_share: DataTypes.BOOLEAN,
    visibility: DataTypes.BOOLEAN,
    parent_folder_id: DataTypes.STRING,
    sharing_link: DataTypes.STRING,
    content_link: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Resource',
  });
  return Resource;
};