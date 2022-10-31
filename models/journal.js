'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Journal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Journal.belongsTo(models.Store, {
        foreignKey: "store",
        onDelete: "CASCADE",
      });
    }
  }
  Journal.init({
    heading: DataTypes.STRING,
    subheading: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    store: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Journal',
  });
  return Journal;
};