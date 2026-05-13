import { Router } from "express";
import { SalesController } from "./sales.controller";

const router = Router();
const controller = new SalesController();

 /**
 * @openapi
 * /sales:
 *   post:
 *     tags:
 *       - Sales
 *     summary: Registrar venta
 *     description: Crear una venta de restaurante
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
 *               total:
 *                 type: number
 *                 example: 25000
 *               paymentMethod:
 *                 type: string
 *                 example: efectivo
 *     responses:
 *       201:
 *         description: Venta registrada correctamente
 */
router.post("/", controller.create);
/**
 * @openapi
 * /sales:
 *   post:
 *     tags:
 *       - Sales
 *     summary: Registrar venta
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
 *               total:
 *                 type: number
 *                 example: 85000
 *               paymentMethod:
 *                 type: string
 *                 example: efectivo
 *     responses:
 *       201:
 *         description: Venta registrada
 */
router.get("/", controller.findAll);
/**
 * @openapi
 * /sales:
 *   get:
 *     tags:
 *       - Sales
 *     summary: Obtener ventas
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de ventas
 */
router.get("/:id", controller.findById);
/**
 * @openapi
 * /sales/{id}:
 *   get:
 *     tags:
 *       - Sales
 *     summary: Obtener venta por ID
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
 *         description: Venta encontrada
 */
router.delete("/:id", controller.delete);
/**
 * @openapi
 * /sales/{id}:
 *   delete:
 *     tags:
 *       - Sales
 *     summary: Eliminar venta
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
 *         description: Venta eliminada correctamente
 */
router.put("/:id", controller.put);
/**
 * @openapi
 * /sales/{id}:
 *   put:
 *     tags:
 *       - Sales
 *     summary: Actualizar venta
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               total:
 *                 type: number
 *                 example: 95000
 *               paymentMethod:
 *                 type: string
 *                 example: tarjeta
 *     responses:
 *       200:
 *         description: Venta actualizada correctamente
 */
export default router;