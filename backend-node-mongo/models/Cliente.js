import mongoose from "mongoose";

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
    }
);

const Cliente = mongoose.model("Cliente", clientesSchema);

export default Cliente;