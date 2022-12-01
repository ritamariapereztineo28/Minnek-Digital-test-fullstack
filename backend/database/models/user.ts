const mongooseSchema = require("mongoose");

const { Schema } = mongooseSchema;

const UsersSchema = new Schema({
  name: { type: String, required: true, unique: true, },
  password: { type: String, required: true },
});

module.exports = mongooseSchema.model("Users", UsersSchema);
