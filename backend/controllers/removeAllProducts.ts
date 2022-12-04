const productSchema = require("../database/models/product");

export const removeAllProducts = async () => {
  await productSchema.deleteMany({});
};
