module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      product_id: DataTypes.STRING,
      user_id: DataTypes.STRING,
      Quantity: DataTypes.STRING,
      price: DataTypes.STRING,
      variations: DataTypes.STRING,
      status: DataTypes.STRING,
      store: DataTypes.STRING,
      order_id: DataTypes.STRING,
      address: DataTypes.STRING,
      coupon:DataTypes.STRING,
    },
    {}
  );
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.Products, {
      foreignKey: "product_id",
      onDelete: "CASCADE",
    });
  };
  return Order;
};
