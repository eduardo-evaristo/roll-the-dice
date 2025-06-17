import express, { Request, Response } from "express";
import cors from "cors";

// Tipos de dados disponíveis (mantendo padrão entre frontend e backend)
export type AvailableDice = 6 | 10 | 20;
const availableDice: AvailableDice[] = [6, 10, 20];

// Definindo valor do port a ser usado
const port = 8000;

// Inicialiando o Express
const app = express();

app.use(cors({ origin: ["http://localhost:5173"], methods: ["POST"] }));

// Rota de rolagem
app.post(
  "/rolagem/:lados",
  (req: Request<{ lados: string }>, res: Response) => {
    // Convertemos lados com Number para checar abaixo se ele é um número de fato
    const lados = Number(req.params.lados);

    // Se lados não for um número válido ou se for menor ou igual a zero
    if (
      isNaN(lados) ||
      lados <= 0 ||
      !availableDice.includes(lados as AvailableDice)
    )
      return res.status(400).json({ message: "Número de lados inválido" });

    // Geração do número aleatório baseado nos lados do dado
    const valorDaRolagem: number = Math.trunc(Math.random() * lados) + 1;

    // Enviamos a resposta para o usuário
    res.status(200).json({ lados: `D${lados}`, message: valorDaRolagem });
  }
);

// Colocando o servidor para ouvir
app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
