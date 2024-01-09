"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      IdUser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Rol: {
        type: Sequelize.INTEGER,
        references: { model: "Roles", key: "IdRol" },
      },

      FirstName: {
        type: Sequelize.STRING,
      },
      LastName: {
        type: Sequelize.STRING,
      },
      Email: {
        type: Sequelize.STRING,
      },
      Status: {
        type: Sequelize.BOOLEAN,
      },
      CreatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      UpdatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
