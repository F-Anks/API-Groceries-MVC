import { Router } from "express";
import customersController from "../controllers/customers.controller.js";
const router = Router();

router.get("/getAll", customersController.getAll);

export default router;