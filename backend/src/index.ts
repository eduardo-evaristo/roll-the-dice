import express, { Request, Response } from "express";

// Inicialiando o Express
const app = express();

const port = 8000;

// Colocando o servidor para ouvir
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
