import { Router } from "express";
import auth_controller from "../controller/auth_controller.js";
const router = Router();

console.log("test");

router.post("/signup", auth_controller.signup);
router.post("/login", auth_controller.login);

export default router;
