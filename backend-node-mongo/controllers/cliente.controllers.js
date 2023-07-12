import Cliente from "../models/Cliente.js";

const obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const obtenerUnCliente = async (req, res) => {
    try {
        const clientes = await Cliente.findOne({ _id: req.params.id });
        await clientes.save();
        res.send(clientes);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const agregarClientes = async (req, res) => {
    const clientes = await Cliente(req.body);
    try {
        const nuevoCliente = await clientes.save();
        res.json(nuevoCliente);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const borrarClientes = async (req, res) => {
    try {
        await Cliente.deleteOne({ _id: req.params.id });
        res.status(200).send({
            response: "Eliminado correctamente."
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findOne({ _id: req.params.id });
        if (req.body.nombre) {
            clientes.nombre = req.body.nombre;
        }
        if (req.body.nombre_compannia) {
            clientes.nombre_compannia = req.body.nombre_compannia;
        }
        if (req.body.direccion) {
            clientes.direccion = req.body.direccion;
        }
        if (req.body.telefono) {
            clientes.telefono = req.body.telefono;
        }
        await clientes.save();
        res.send(clientes);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export { obtenerClientes, obtenerUnCliente, agregarClientes, borrarClientes, updateClientes }