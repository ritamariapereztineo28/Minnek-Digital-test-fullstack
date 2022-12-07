const { uploadImage } = require("../utils/cloudinary");

const productSchema = require("../database/models/product");

export const addProduct = async (req: any, res: any) => {
  try {
    console.log(req.file)
    const product = new productSchema(req.body);
    //   if (req.body.imgUrl) {
    //     const result = await uploadImage(req.file)
    //    console.log("----result------>",result)
    //     // await fs.unlink(req.files.image.tempFilePath)
    // }
    await product.save()
    res.json(product);
  } catch (err) {
    console.log("Ha ocurrido un error: ", err);
  }
};
