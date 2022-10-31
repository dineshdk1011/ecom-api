module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "Cart",
    {
      product_id: DataTypes.STRING,
      user_id: DataTypes.STRING,
      Quantity: DataTypes.STRING,
      price: DataTypes.STRING,
      variations: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {}
  );
  Cart.associate = function (models) {
    // associations can be defined here
    Cart.belongsTo(models.Products, {
      foreignKey: "product_id",
      onDelete: "CASCADE",
    });
  };
  return Cart;
};
