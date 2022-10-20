'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    slug: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    original: DataTypes.STRING,
    price: DataTypes.STRING,
    sale_price: DataTypes.STRING,
    category: DataTypes.STRING,
    stock: DataTypes.STRING,
    store: DataTypes.STRING,
    featured:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};

