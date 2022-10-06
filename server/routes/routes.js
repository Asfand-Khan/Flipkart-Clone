import express from "express";
import { getallproducts } from "../controllers/product-controller.js";
import { userLogin, userSignup } from "../controllers/user-controller.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/products", getallproducts);

export default router;
