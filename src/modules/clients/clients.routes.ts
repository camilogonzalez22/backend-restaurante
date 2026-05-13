import { Router } from "express";
import { ClientsController } from "./clients.controller";

const router = Router();

const controller = new ClientsController();

 /**
 * @openapi
 * /clients:
 *   post:
 *     tags:
 *       - Clients
 *     summary: Registrar cliente
 *     description: Crear un nuevo cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Juan Pérez
 *               email:
 *                 type: string
 *                 example: juan@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               phone:
 *                 type: string
 *                 example: "3001234567"
 *     responses:
 *       201:
 *         description: Cliente creado correctamente
 */
router.post("/", controller.create);

router.get("/", controller.findAll);

/**
 * @openapi
 * /clients:
 *   get:
 *     tags:
 *       - Clients
 *     summary: Obtener clientes
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get("/:id", controller.findById);
/**
 * @openapi
 * /clients/{id}:
 *   get:
 *     tags:
 *       - Clients
 *     summary: Obtener cliente por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente encontrado
 */
router.put("/:id", controller.update);
/**
 * @openapi
 * /clients/{id}:
 *   put:
 *     tags:
 *       - Clients
 *     summary: Actualizar cliente
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
 *         description: Cliente actualizado
 */
router.delete("/:id", controller.delete);
/**
 * @openapi
 * /clients/{id}:
 *   delete:
 *     tags:
 *       - Clients
 *     summary: Eliminar cliente
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
 *         description: Cliente eliminado
 */
console.log("Clients routes cargadas");

export default router;