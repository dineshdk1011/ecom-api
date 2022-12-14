"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.belongsTo(models.Store, {
        foreignKey: "store",
        onDelete: "CASCADE",
      });
    }
  }
  Category.init(
    {
      category_name: DataTypes.STRING,
      category_image: DataTypes.STRING,
      slug: DataTypes.STRING,
      store: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
