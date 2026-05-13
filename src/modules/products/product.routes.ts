import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();

const controller = new ProductController();

 /**
 * @openapi
 * /products:
 *   post:
 *     tags:
 *       - Products
 *     summary: Crear producto
 *     description: Registrar un producto del menú del restaurante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Hamburguesa Doble Queso
 *               description:
 *                 type: string
 *                 example: Hamburguesa con doble carne, queso cheddar y papas
 *               price:
 *                 type: number
 *                 example: 18000
 *               category:
 *                 type: string
 *                 example: comida rapida
 *               available:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Producto creado correctamente
 */
router.post("/", controller.create);

router.get("/", controller.findAll);
/**
 * @openapi
 * /products:
 *   get:
 *     tags:
 *       - Products
 *     summary: Obtener productos
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get("/:id", controller.findById);
/**
 * @openapi
 * /products/{id}:
 *   get:
 *     tags:
 *       - Products
 *     summary: Obtener producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto encontrado
 */
router.put("/:id", controller.update);
/**
 * @openapi
 * /products/{id}:
 *   put:
 *     tags:
 *       - Products
 *     summary: Actualizar producto
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
 *         description: Producto actualizado
 */
router.delete("/:id", controller.delete);
/**
 * @openapi
 * /products/{id}:
 *   delete:
 *     tags:
 *       - Products
 *     summary: Eliminar producto
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
 *         description: Producto eliminado
 */
console.log("Products routes cargadas");

export default router;