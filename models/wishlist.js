module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define(
    "Wishlist",
    {
      product_id: DataTypes.STRING,
      user_id: DataTypes.STRING,
      Quantity: DataTypes.STRING,
      price: DataTypes.STRING,
      variations: DataTypes.STRING,
    },
    {}
  );
  Wishlist.associate = function (models) {
    // associations can be defined here
    Wishlist.belongsTo(models.Products, {
      foreignKey: "product_id",
      onDelete: "CASCADE",
    });
  };
  return Wishlist;
};
