require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      pool: {
        max: parseInt(process.env.DB_POOL_MAX),
        min: parseInt(process.env.DB_POOL_MIN),
        acquire: process.env.DB_POOL_ACQUIRE,
      },
    },
  }
);
const ListModels = [require("../models/usersModel.js")];

for (const modelList of ListModels) {
  modelList(sequelize);
}

module.exports = { sequelize };
