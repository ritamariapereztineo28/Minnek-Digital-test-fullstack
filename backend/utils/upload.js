const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename(req, file = {}, cb) {
    const { originalname, fieldname } = file;
    cb(null, `${fieldname}__${Date.now()}${originalname}`);
  },
});
const upload = multer({ storage });
module.exports = upload;
