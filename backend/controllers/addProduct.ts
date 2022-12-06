const productSchema = require("../database/models/product");

export const addProduct = async (req: any, res: any) => {
  try {
    const product = new productSchema(req.body);
    await product.save()
    res.json(product);
  } catch (err) {
    console.log("Ha ocurrido un error: ", err);
  }
};
