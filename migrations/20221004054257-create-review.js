"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rating: {
        type: Sequelize.STRING,
      },
      review: {
        type: Sequelize.STRING,
      },
      productid: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Products",
          key: "id",
          as: "productid",
        },
      },
      orderid: {
        type: Sequelize.STRING,
      },
      userid: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      store: {
        type: Sequelize.STRING,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Reviews");
  },
};
