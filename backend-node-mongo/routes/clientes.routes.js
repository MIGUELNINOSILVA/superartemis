import express from 'express';
import { obtenerClientes, obtenerUnCliente, agregarClientes, borrarClientes, updateClientes } from '../controllers/cliente.controllers.js';

const router = express.Router();

router.get('/all', obtenerClientes);
router.get('/:id', obtenerUnCliente);
router.post('/add', agregarClientes);
router.delete('/remove/:id', borrarClientes);
router.patch('/upd/:id', updateClientes);

export default router;