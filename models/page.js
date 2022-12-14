'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Page.init({
    page_id: DataTypes.STRING,
    page_name: DataTypes.STRING,
    page_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Page',
  });
  return Page;
};