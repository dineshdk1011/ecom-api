"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Navbar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Navbar.belongsTo(models.Store, {
        foreignKey: "store",
        onDelete: "CASCADE",
      });
    }
  }
  Navbar.init(
    {
      name: DataTypes.STRING,
      store: DataTypes.STRING,
      categories: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Navbar",
    }
  );
  return Navbar;
};
