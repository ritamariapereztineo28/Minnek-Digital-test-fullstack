const productSchema = require("../database/models/product");

export const addProduct = async (req: any, res: any) => {
  await productSchema.create(req.body).then((data: any) => {
    res.send(data);
  });
};
