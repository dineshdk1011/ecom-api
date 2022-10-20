"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      product_id: DataTypes.STRING,
      user_id: DataTypes.STRING,
      Quantity: DataTypes.STRING,
      price: DataTypes.STRING,
      variations: DataTypes.STRING,
      status: DataTypes.STRING,
      store: DataTypes.STRING,
      order_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};