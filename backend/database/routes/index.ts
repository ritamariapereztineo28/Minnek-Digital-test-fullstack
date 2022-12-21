import { uploadImg } from "../../controllers/uploadImg";

const { addProduct } = require("../../controllers/addProduct");
const { getProducts } = require("../../controllers/getProducts");
const { login } = require("../../controllers/login");
const { authenticator } = require("../authenticator");
const { auth } = require("../../controllers/auth");
const { removeAllProducts } = require("../../controllers/removeAllProducts");
const expRouter = require("express");
const multer = require("multer");
const router = expRouter.Router();
// var uploadImageOL = multer({dest: './uploads/'})
const upload = require('../../utils/upload')
router.post("/auth", authenticator, auth);
router.post(
  "/product",
  addProduct
);
router.get("/products", authenticator, getProducts);
router.post("/image", upload.single("imgUrl"), uploadImg);
router.delete("/products", removeAllProducts);
router.post("/login", login);

module.exports = router;
