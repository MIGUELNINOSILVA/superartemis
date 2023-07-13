import express from 'express';
import { obtenerEmpleados, obtenerUnEmpleado, agregarEmpleados, borrarEmpleados, updateEmpleados } from '../controllers/empleado.controllers.js';

const router = express.Router();

router.get('/all', obtenerEmpleados);
router.get('/:id', obtenerUnEmpleado);
router.post('/add', agregarEmpleados);
router.delete('/remove/:id', borrarEmpleados);
router.patch('/upd/:id', updateEmpleados);

export default router;