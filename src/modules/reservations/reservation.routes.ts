import { Router } from "express";
import { ReservationController } from "./reservation.controller";

const router = Router();

const controller = new ReservationController();
 /**
 * @openapi
 * /reservations:
 *   post:
 *     tags:
 *       - Reservations
 *     summary: Crear reservación
 *     description: Registrar una reserva en el restaurante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientId:
 *                 type: string
 *                 example: 6a04c188c933c3cc1413ef55
 *               tableNumber:
 *                 type: number
 *                 example: 4
 *               date:
 *                 type: string
 *                 example: 2026-05-20
 *               time:
 *                 type: string
 *                 example: "19:30"
 *               people:
 *                 type: number
 *                 example: 3
 *     responses:
 *       201:
 *         description: Reservación creada correctamente
 */
router.post("/", controller.create);
/**
 * @openapi
 * /reservations:
 *   post:
 *     tags:
 *       - Reservations
 *     summary: Crear reserva
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientId:
 *                 type: string
 *               tableId:
 *                 type: string
 *               date:
 *                 type: string
 *                 example: 2025-05-20
 *               people:
 *                 type: number
 *                 example: 4
 *     responses:
 *       201:
 *         description: Reserva creada correctamente
 */
router.get("/", controller.findAll);
/**
 * @openapi
 * /reservations:
 *   get:
 *     tags:
 *       - Reservations
 *     summary: Obtener reservas
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reservas
 */
router.get("/:id", controller.findById);
/**
 * @openapi
 * /reservations/{id}:
 *   get:
 *     tags:
 *       - Reservations
 *     summary: Obtener reserva por ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reserva encontrada
 */
router.put("/:id", controller.update);
/**
 * @openapi
 * /reservations/{id}:
 *   put:
 *     tags:
 *       - Reservations
 *     summary: Actualizar reserva
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reserva actualizada
 */
router.delete("/:id", controller.delete);
/**
 * @openapi
 * /reservations/{id}:
 *   delete:
 *     tags:
 *       - Reservations
 *     summary: Cancelar reserva
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reserva eliminada
 */
console.log("Reservations routes cargadas");

export default router;