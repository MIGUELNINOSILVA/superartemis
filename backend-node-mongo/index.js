import express from "express";
import dotenv from "dotenv";
import connectarDB from './config/config.js';
import categoriaRouter from './routes/categorias.routes.js';
import clienteRouter from './routes/clientes.routes.js';
import empleadoRouter from './routes/empleados.routes.js';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
connectarDB();

app.listen(PORT, () => {
  console.log(`Listenting on port ${PORT} `);
});

app.use('/categorias', categoriaRouter);
app.use('/clientes', clienteRouter);
app.use('/empleados', empleadoRouter);