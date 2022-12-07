const uploadImageCloud = require("../utils/cloudinary");
export const uploadImg = async (req: any, res: any) => {
  try {
    const file = await uploadImageCloud(req.file.path);
    console.log("---------",file)
    res.json({ data: req.file.path });
  } catch (err) {
    console.log("Ha ocurrido un error: ", err);
  }
};
