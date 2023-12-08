import { Router } from "express";
import data_controller from "../controller/data_controller.js";

// Router helps to organise the routes in express
const router = Router();

// router.method("path", middleware, controller.method)
router.get("/alldata", data_controller.get_data);
router.post("/dataupload", data_controller.send_data);
router.patch("/updatedata", data_controller.update_data);

export default router;