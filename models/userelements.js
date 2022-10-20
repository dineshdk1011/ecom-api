'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Userelements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Userelements.init({
    page_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    element_list: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Userelements',
  });
  return Userelements;
};