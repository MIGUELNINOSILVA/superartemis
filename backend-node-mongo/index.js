import express from "express";
import dotenv from "dotenv";
import connectarDB from './config/config.js';
import categoriaRouter from './routes/categorias.routes.js';

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;
connectarDB();

app.listen(PORT, () => {
  console.log(`Listenting on port ${PORT} `);
});

app.use('/categorias', categoriaRouter);
