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

const signUpload = async () => {
  const timestamp = Math.round(Date() / 1000);
  const params = {
    timestamp: timestamp,
  };
  const signature = await v2.utils.api_sign_request(
    params,
    CLOUDINARY_API_SECRET
  );

  return { timestamp, signature };
};

const uploadImageCloud = async (filePath) => {
  const { signature } = await signUpload();
  console.log("signature----", signature);
  return await v2.uploader.upload(
    filePath,
    { folder: "replit-2022" },
    signature
  );
};
module.exports = uploadImageCloud;
