import express from "express";
import { obtenerCategorias, obtenerUnaCategorias, agregarCategorias, borrarCategorias, actualizarCategorias } from '../controllers/categoria.controllers.js';

const router = express.Router();

router.get('/all', obtenerCategorias);
router.get('/:id', obtenerUnaCategorias);
router.post('/add', agregarCategorias);
router.delete('/remove/:id', borrarCategorias);
router.patch('/upd/:id', actualizarCategorias);

export default router;