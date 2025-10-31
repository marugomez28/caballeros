import express from "express";
import { obtenerCaballero,nuevocaballero } from "../controller/caballeros.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/caballeros/{nombre}:
 *   get:
 *     summary: Obtiene la información de un caballero por nombre
 *     tags: [Caballeros]
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del caballero a consultar
 *     responses:
 *       200:
 *         description: Información del caballero encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                 rango:
 *                   type: string
 *                 armadura:
 *                   type: string
 *                 descripcion:
 *                   type: string
 *       404:
 *         description: Caballero no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get("/:nombre",obtenerCaballero);
/**
 * @swagger
 * /api/caballeros:
 *   post:
 *     summary: Crear un nuevo caballero
 *     tags: [Caballeros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - constelacion
 *               - imagen
 *             properties:
 *               nombre:
 *                 type: string
 *               constelacion:
 *                 type: string
 *               imagen:
 *                 type: string
 *               altura:
 *                 type: number
 *               peso:
 *                 type: number
 *               edad:
 *                 type: number
 *               descripcion:
 *                 type: string
 *     responses:
 *       201:
 *         description: Caballero creado exitosamente
 *       400:
 *         description: Error en los datos enviados
 *       500:
 *         description: Error del servidor
 */
router.post("/", nuevocaballero);
export default router;
