import { addProduct } from "../../controllers/addProduct";
import { getProducts } from "../../controllers/getProducts";
import { login } from "../../controllers/login";
import { authenticator } from "../authenticator";
import { auth } from "../../controllers/auth";

const expRouter = require("express");
const router = expRouter.Router();

router.post("/auth", authenticator, auth);
router.post("/product", authenticator, addProduct);
router.get("/products", authenticator, getProducts);
router.post("/login", login);

module.exports = router;
