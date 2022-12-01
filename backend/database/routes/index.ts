import { addProduct } from "../../controllers/addProduct";
import { auth } from "../../controllers/auth";
import { getProducts } from "../../controllers/getProducts";
import { login } from "../../controllers/login";

const expRouter = require("express");
const router = expRouter.Router();

router.post("/product", auth, addProduct);
router.get("/products", auth, getProducts);
router.post("/login", login);

module.exports = router;