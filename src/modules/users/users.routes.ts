import { Router } from "express";
import { UsersController } from "./users.controller";
import { createUserSchema } from "./users.schema";
import { validate } from "../../middlewares/validate.middleware";
import { authMiddleware } from "../../middlewares/auth.middleware";


const router = Router();
const _UsersController = new UsersController();

router.post('/register', validate(createUserSchema), _UsersController.register);
 /**
 * @openapi
 * /users/register:
 *   post:
 *     tags:
 *       - Users
 *     summary: Registrar usuario
 *     description: Crear un usuario nuevo en el sistema
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
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 */
router.get('/', authMiddleware, _UsersController.findAllUsers);
 /**
 * @openapi
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Obtener usuarios
 *     description: Lista todos los usuarios registrados
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: 66a1f3b2c9a8d123456789ab
 *                   name:
 *                     type: string
 *                     example: Juan Pérez
 *                   email:
 *                     type: string
 *                     example: juan@gmail.com
 *                   role:
 *                     type: string
 *                     example: user
 *                   isActive:
 *                     type: boolean
 *                     example: true
 *                   createdAt:
 *                     type: string
 *                     example: 2026-05-13T12:00:00.000Z
 *                   updatedAt:
 *                     type: string
 *                     example: 2026-05-13T12:00:00.000Z
 */
export default router;