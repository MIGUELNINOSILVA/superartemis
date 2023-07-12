import express from 'express';
import { obtenerEmpleados } from '../controllers/empleado.controllers.js';

const router = express.Router();

router.get('/all', obtenerEmpleados);


export default router;