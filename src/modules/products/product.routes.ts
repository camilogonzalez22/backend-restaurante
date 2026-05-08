import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

const controller = new ProductController();

router.post("/", controller.create);

router.get("/", controller.findAll);

router.get("/:id", controller.findById);

router.put("/:id", controller.update);

router.delete("/:id", controller.delete);

console.log("Products routes cargadas");

export default router;