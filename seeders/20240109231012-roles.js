"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        IdRol: 1,
        Name: "admin",
        Status: true,
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        IdRol: 2,
        Name: "films",
        Status: true,
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        IdRol: 3,
        Name: "people",
        Status: true,
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        IdRol: 4,
        Name: "locations",
        Status: true,
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        IdRol: 5,
        Name: "species",
        Status: true,
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        IdRol: 6,
        Name: "vehicles",
        Status: true,
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
