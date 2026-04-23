import { Router } from "express";
import { ClientsController } from "./clients.controller";

const router = Router();
const controller = new ClientsController();


router.post("/", controller.create);
router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
console.log("Clients routes cargadas");

export default router;