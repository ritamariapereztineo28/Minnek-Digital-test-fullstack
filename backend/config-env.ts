const dotenv = require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3002,
  HOST: process.env.HOST || 'http://localhost',
  DATABASE: process.env.DATABASE || "",
  JWT_SECRET: process.env.JWT_SECRET || "",
};
