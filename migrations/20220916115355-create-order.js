"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Products",
          key: "id",
          as: "product_id",
        },
      },
      user_id: {
        type: Sequelize.STRING,
      },
      Quantity: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      variations: {
        type: Sequelize.STRING,
      },
      store: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      order_id: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      coupon: {
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
    await queryInterface.dropTable("Orders");
  },
};
