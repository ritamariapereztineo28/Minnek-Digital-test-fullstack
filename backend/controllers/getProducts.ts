const Products = require("../database/models/product.ts");

export const getProducts = (req: any, res: any) => {
  Products.find()
    .then((products: any) => res.send(products))
    .catch((err: any) => {
      console.log("Ha ocurrido un error: ", err);
    });
};
