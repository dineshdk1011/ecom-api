module.exports = (sequelize, DataTypes) => {
  const Gallery = sequelize.define(
    "Gallery",
    {
      thumbnail: DataTypes.STRING,
      original: DataTypes.STRING,
      productID: DataTypes.STRING,
    },
    {}
  );
  Gallery.associate = function (models) {
    // associations can be defined here
    Gallery.belongsTo(models.Products, {
      foreignKey: "productID",
      onDelete: "CASCADE",
    });
  };
  return Gallery;
};
