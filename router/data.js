import { Router } from "express";
import data_controller from "../controller/data_controller.js";
import validate_data from "../middleware/data_validation.js";

// Router helps to organise the routes in express
const router = Router();

// router.method("path", middleware, controller.method)
router.get("/alldata", data_controller.get_data);
router.post("/dataupload", validate_data, data_controller.send_data);
router.patch("/updatedata", validate_data, data_controller.update_data);
router.delete("/deletedata", validate_data, data_controller.delete_data);

export default router;