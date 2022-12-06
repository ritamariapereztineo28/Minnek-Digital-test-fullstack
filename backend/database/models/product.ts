const mongooseSchema = require("mongoose");
const { Schema } = mongooseSchema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  price: { type: String, required: true },
});

export {};
module.exports = mongooseSchema.model("Products", ProductSchema);
