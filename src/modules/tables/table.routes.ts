import { Router } from "express";
import { TableController } from "./table.controller";

const router = Router();

const controller = new TableController();
 /**
 * @openapi
 * /tables:
 *   post:
 *     tags:
 *       - Tables
 *     summary: Crear mesa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number:
 *                 type: number
 *                 example: 5
 *               capacity:
 *                 type: number
 *                 example: 4
 *               status:
 *                 type: string
 *                 example: disponible
 *     responses:
 *       201:
 *         description: Mesa creada
 */
router.post("/", controller.create);
/**
 * @openapi
 * /tables:
 *   post:
 *     tags:
 *       - Tables
 *     summary: Crear mesa
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               number:
 *                 type: number
 *                 example: 5
 *               capacity:
 *                 type: number
 *                 example: 4
 *               status:
 *                 type: string
 *                 example: disponible
 *     responses:
 *       201:
 *         description: Mesa creada correctamente
 */
router.get("/", controller.findAll);
/**
 * @openapi
 * /tables:
 *   get:
 *     tags:
 *       - Tables
 *     summary: Obtener mesas
 *     responses:
 *       200:
 *         description: Lista de mesas
 */
router.get("/:id", controller.findById);
/**
 * @openapi
 * /tables/{id}:
 *   get:
 *     tags:
 *       - Tables
 *     summary: Obtener mesa por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mesa encontrada
 */
router.put("/:id", controller.update);
/**
 * @openapi
 * /tables/{id}:
 *   put:
 *     tags:
 *       - Tables
 *     summary: Actualizar mesa
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
 *         description: Mesa actualizada
 */
router.delete("/:id", controller.delete);
/**
 * @openapi
 * /tables/{id}:
 *   delete:
 *     tags:
 *       - Tables
 *     summary: Eliminar mesa
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
 *         description: Mesa eliminada
 */
console.log("Tables routes cargadas");

export default router;