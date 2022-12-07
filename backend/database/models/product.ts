const mongooseSchema = require("mongoose");
const { Schema } = mongooseSchema;
const {HOST, PORT} = require("../../config-env.ts");

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: Array , required: true },
  price: { type: String, required: true },
});
ProductSchema.methods.setImg = function setImg(file:string){
  console.log("el valor del file de uploads: ", file)
  this.imgUrl = `${HOST}:${PORT}/public/${file}`
}
export {};
module.exports = mongooseSchema.model("Products", ProductSchema);
