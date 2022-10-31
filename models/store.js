module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define(
    "Store",
    {
      storename: DataTypes.STRING,
      user_id: DataTypes.STRING,
      country: DataTypes.STRING,
      currency: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      pincode: DataTypes.STRING,
      type_of_product: DataTypes.STRING,
      website: DataTypes.STRING,
      theme: DataTypes.STRING,
      domain: DataTypes.STRING,
      logo:DataTypes.STRING,
    },
    {}
  );
  Store.associate = function (models) {
    // associations can be defined here
    Store.hasMany(models.Category, {
      foreignKey: "store",
    });
    Store.hasMany(models.Navbar, {
      foreignKey: "store",
    });
    Store.hasMany(models.Coverimg, {
      foreignKey: "store",
    });
    Store.hasMany(models.Journal, {
      foreignKey: "store",
    });
    Store.hasMany(models.Products, {
      foreignKey: "store",
    });
  };
  return Store;
};
