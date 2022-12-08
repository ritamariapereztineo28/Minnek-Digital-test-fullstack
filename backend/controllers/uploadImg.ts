const uploadImageCloud = require("../utils/cloudinary");
export const uploadImg = async (req: any, res: any) => {
  try {
    const file = await uploadImageCloud(req.file.path);
    res.json({ data: 'file' });
  } catch (err) {
    console.log("Ha ocurrido un error rr: ", err);
  }
};
