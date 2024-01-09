require("dotenv").config();
const devConfig = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: parseInt(process.env.DB_POOL_MAX),
    min: parseInt(process.env.DB_POOL_MIN),
    acquire: parseFloat(process.env.DB_POOL_ACQUIRE),
    idle: parseFloat(process.env.DB_POOL_IDLE),
  },
};
module.exports = {
  development: devConfig,
  production: devConfig,
};
