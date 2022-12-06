const { addProduct } = require("../../controllers/addProduct");
const { getProducts } = require("../../controllers/getProducts");
const { login } = require("../../controllers/login");
const { authenticator } = require("../authenticator");
const { auth } = require("../../controllers/auth");
const { removeAllProducts } = require("../../controllers/removeAllProducts");
const expRouter = require("express");
const router = expRouter.Router();


router.post("/auth", authenticator, auth);
router.post("/product", authenticator, addProduct);
router.get("/products", authenticator, getProducts);
router.delete("/products", removeAllProducts);
router.post("/login", login);

module.exports = router;
