import Empleado from '../models/Empleado.js';

const obtenerEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const obtenerUnEmpleado = async (req, res) => {
    try {
        const empleados = await Empleado.findOne({ _id: req.params.id });
        await empleados.save();
        res.send(empleados);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const agregarEmpleados = async (req, res) => {
    const empleados = await Empleado(req.body);
    try {
        const nuevoEmpleado = await empleados.save();
        res.json(nuevoEmpleado);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const borrarEmpleados = async (req, res) => {
    try {
        await Empleado.deleteOne({ _id: req.params.id });
        res.status(200).send({
            response: "Eliminado correctamente."
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findOne({ _id: req.params.id });
        if (req.body.nombre) {
            empleados.nombre = req.body.nombre;
        }
        if (req.body.nombre_compannia) {
            empleados.nombre_compannia = req.body.nombre_compannia;
        }
        if (req.body.direccion) {
            empleados.direccion = req.body.direccion;
        }
        if (req.body.telefono) {
            empleados.telefono = req.body.telefono;
        }
        await empleados.save();
        res.send(empleados);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export { obtenerEmpleados, obtenerUnEmpleado, agregarEmpleados, borrarEmpleados, updateEmpleados };