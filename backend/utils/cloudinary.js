const { v2 } = require("cloudinary");
const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_API_KEY,
} = require("../config-env.ts");

v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

const uploadImageCloud = async (filePath) => {
  return await v2.uploader.upload(
    filePath,
    { folder: "replit-2022" },
  );
};
module.exports = uploadImageCloud;
