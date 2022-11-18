'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class About extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  About.init({
    about: DataTypes.STRING,
    milestone: DataTypes.STRING,
    vission: DataTypes.STRING,
    whychoose: DataTypes.STRING,
    instagram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    fromtime: DataTypes.STRING,
    totime: DataTypes.STRING,
    store: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'About',
  });
  return About;
};