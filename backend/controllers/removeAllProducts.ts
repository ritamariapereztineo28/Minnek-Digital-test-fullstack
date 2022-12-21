const productSchema = require("../database/models/product");

export const removeAllProducts = async (req: any, res: any) => {
  try {
    const products = await productSchema.deleteMany({});
    res.send({ data: products, message: "Productos eliminados correctamente" });
  } catch (error) {
    console.log("No se han podido eliminar todos los productos");
  }
};
