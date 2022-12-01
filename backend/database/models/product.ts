const mongooseSchema = require("mongoose");

const { Schema } = mongooseSchema;

const cardSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
});
export {};
module.exports = mongooseSchema.model("Products", cardSchema);
