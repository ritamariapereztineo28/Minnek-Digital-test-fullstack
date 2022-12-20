const uploadImageCloud = require("../utils/cloudinary");
export const uploadImg = async (req: any, res: any) => {
  try {
    const file = await uploadImageCloud(req.file.path);
    res.json(file.url);
  } catch (err) {
    console.log("Ha ocurrido un error rr: ", err);
  }
};
