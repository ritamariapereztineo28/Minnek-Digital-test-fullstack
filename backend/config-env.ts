const dotenv = require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3002,
  DATABASE: process.env.DATABASE || "",
  JWT_SECRET: process.env.JWT_SECRET || "",
};
