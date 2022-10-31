module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      rating: DataTypes.STRING,
      review: DataTypes.STRING,
      productid: DataTypes.STRING,
      orderid: DataTypes.STRING,
      userid: DataTypes.STRING,
      store: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.Products, {
      foreignKey: "productid",
      onDelete: "CASCADE",
    });
  };
  return Review;
};
