'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coverimg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coverimg.belongsTo(models.Store, {
        foreignKey: "store",
        onDelete: "CASCADE",
      });
    }
  }
  Coverimg.init({
    image: DataTypes.STRING,
    store: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coverimg',
  });
  return Coverimg;
};