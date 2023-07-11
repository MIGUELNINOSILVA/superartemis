import express from "express";
import { obtenerCategorias, agregarCategorias, borrarCategorias, actualizarCategorias } from '../controllers/categoria.controllers.js';

const router = express.Router();

router.get('/all', obtenerCategorias);
router.post('/add', agregarCategorias);
router.delete('/remove/:id', borrarCategorias);
router.patch('/upd/:id', actualizarCategorias);

export default router;