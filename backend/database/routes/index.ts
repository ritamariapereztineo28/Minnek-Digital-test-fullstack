import { addProduct } from "../../controllers/addProduct";
import { getProducts } from "../../controllers/getProducts";
import { login } from "../../controllers/login";

const expRouter = require("express");
const router = expRouter.Router();

router.post("/product", addProduct);
router.get("/products", getProducts);
router.post("/login", login);

module.exports = router;