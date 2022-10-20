"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Store.init(
    {
      storename: DataTypes.STRING,
      user_id: DataTypes.STRING,
      country: DataTypes.STRING,
      currency: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      pincode: DataTypes.STRING,
      type_of_product: DataTypes.STRING,
      website: DataTypes.STRING,
      theme: DataTypes.STRING,
      domain: DataTypes.STRING,
      logo:DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Store",
    }
  );
  return Store;
};
