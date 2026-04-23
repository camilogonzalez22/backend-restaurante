import { Router } from "express";
import { SalesController } from "./sales.controller";

const router = Router();
const controller = new SalesController();

router.post("/", controller.create);
router.get("/", controller.findAll);
router.get("/:id", controller.findById);

export default router;