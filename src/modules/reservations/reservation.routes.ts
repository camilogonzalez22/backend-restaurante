import { Router } from "express";
import { ReservationController } from "./reservation.controller";

const router = Router();

const controller = new ReservationController();

router.post("/", controller.create);

router.get("/", controller.findAll);

router.get("/:id", controller.findById);

router.put("/:id", controller.update);

router.delete("/:id", controller.delete);

console.log("Reservations routes cargadas");

export default router;