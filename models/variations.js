module.exports = (sequelize, DataTypes) => {
  const Variations = sequelize.define(
    "Variations",
    {
      productID: DataTypes.STRING,
      value: DataTypes.STRING,
      type: DataTypes.STRING,
      price: DataTypes.STRING,
      stock:DataTypes.STRING,
    },
    {}
  );
  Variations.associate = function (models) {
    // associations can be defined here
    Variations.belongsTo(models.Products, {
      foreignKey: "productID",
      onDelete: "CASCADE",
    });
  };
  return Variations;
};
