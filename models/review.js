'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    rating: DataTypes.STRING,
    review: DataTypes.STRING,
    productid: DataTypes.STRING,
    orderid: DataTypes.STRING,
    userid: DataTypes.STRING,
    store: DataTypes.STRING,
    image:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};