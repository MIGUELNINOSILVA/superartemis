import mongoose from 'mongoose';

const categoriaSchema = mongoose.Schema({
    imagen: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    }
},
    {
        timestamp: true
    }

);

const clientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    nombre_compannia: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: Number,
        required: true,
        trim: true
    }
},
    {
        timestamp: true
    });

const Categoria = mongoose.model("Categoria", categoriaSchema);
const Cliente = mongoose.model("Cliente", clientesSchema);

export default {Categoria, Cliente};