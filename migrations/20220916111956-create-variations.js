"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Variations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productID: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Products",
          key: "id",
          as: "productID",
        },
      },
      value: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      stock: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Variations");
  },
};
