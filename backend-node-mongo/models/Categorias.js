import mongoose from 'mongoose';

const categoriaShcema = mongoose.Schema({
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

const Categoria = mongoose.model("Categoria", categoriaShcema);

export default Categoria;