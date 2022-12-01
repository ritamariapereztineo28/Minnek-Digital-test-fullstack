const mongooseDB = require("mongoose");
const { DATABASE } = require("./config-env.ts");
const URI = `mongodb://localhost:27017/${DATABASE}`;
const userSchema = require("./database/models/user");
mongooseDB
  .connect(URI)
  .then((db: any) => {
    console.log("Conexión exitosa con la base de datos");
  })
  .catch((err: any) => console.log("err -", err));

module.exports = mongooseDB;
