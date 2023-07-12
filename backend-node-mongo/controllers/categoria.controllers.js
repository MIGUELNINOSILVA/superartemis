import Categoria from "../models/Categorias.js";


const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const obtenerUnaCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findOne({ _id: req.params.id });
        await categorias.save();
        res.send(categorias);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const agregarCategorias = async (req, res) => {
    const categoria = new Categoria(req.body);
    try {
        const nuevaCategoria = await categoria.save();
        res.json(nuevaCategoria);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const borrarCategorias = async (req, res) => {
    try {
        await Categoria.deleteOne({ _id: req.params.id });
        res.status(200).send({
            response: "Eliminado correctamente."
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const actualizarCategorias = async (req, res) => {
    try {
        const categoria = await Categoria.findOne({ _id: req.params.id });
        if (req.body.imagen) {
            categoria.imagen = req.body.imagen;
        }
        if (req.body.nombre) {
            categoria.nombre = req.body.nombre;
        }
        if (req.body.descripcion) {
            categoria.descripcion = req.body.descripcion;
        }
        await categoria.save();
        res.send(categoria);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export { obtenerCategorias, obtenerUnaCategorias, agregarCategorias, borrarCategorias, actualizarCategorias };