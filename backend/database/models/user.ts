const mongooseSchema = require("mongoose");
import bcrypt from "bcryptjs";
const { Schema } = mongooseSchema;

const UsersSchema = new Schema({
  name: { type: String, required: true, unique: true, },
  password: { type: String, required: true },
});
// UsersSchema.statics.comparePassword = async (password:string, receivedPassword:string) => {
//   return await bcrypt.compare(password, receivedPassword)
// }
module.exports = mongooseSchema.model("Users", UsersSchema);
