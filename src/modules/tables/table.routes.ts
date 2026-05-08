import { Router } from "express";
import { TableController } from "./table.controller";

const router = Router();

const controller = new TableController();

router.post("/", controller.create);

router.get("/", controller.findAll);

router.get("/:id", controller.findById);

router.put("/:id", controller.update);

router.delete("/:id", controller.delete);

console.log("Tables routes cargadas");

export default router;