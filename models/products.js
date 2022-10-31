module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      description: DataTypes.STRING,
      slug: DataTypes.STRING,
      name: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
      original: DataTypes.STRING,
      price: DataTypes.STRING,
      sale_price: DataTypes.STRING,
      category: DataTypes.STRING,
      stock: DataTypes.STRING,
      store: DataTypes.STRING,
      featured: DataTypes.STRING,
    },
    {}
  );
  Products.associate = function (models) {
    // associations can be defined here
    Products.hasMany(models.Gallery, {
      foreignKey: "productID",
    });
    Products.hasMany(models.Variations, {
      foreignKey: "productID",
    });
    Products.hasMany(models.Review, {
      foreignKey: "productid",
    });
    Products.hasMany(models.Wishlist, {
      foreignKey: "product_id",
    });
    Products.hasMany(models.Order, {
      foreignKey: "product_id",
    });
    Products.hasMany(models.Cart, {
      foreignKey: "product_id",
    });
    Products.belongsTo(models.Store, {
      foreignKey: "store",
      onDelete: "CASCADE",
    });
  };
  return Products;
};
