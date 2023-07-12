import mongoose from "mongoose";

const empleadosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true,
        trim: true
    },
    fecha_contratacion: {
        type: Date,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    ciudad: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: Number,
        required: true,
        trim: true
    }
});

const Empleado = mongoose.model("Empleado", empleadosSchema);

export default Empleado;