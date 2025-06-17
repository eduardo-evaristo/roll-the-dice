import { useState } from "react";
import useHistory from "./hooks/useHistory";

type AvailableDice = 6 | 10 | 20;

export type RolledDiceResponse = {
  lados: string;
  message: number;
};

export default function App() {
  const availableDice: AvailableDice[] = [6, 10, 20];
  const [selectedDice, setSelectedDice] = useState<AvailableDice>(6);
  const [result, setResult] = useState<number>();
  const [history, setEntry, deleteHistory] = useHistory();

  // Seta novo número no dado, é do tipo AvailableDice
  function handleChangeDice(diceValue: AvailableDice) {
    setSelectedDice(diceValue);
  }

  // Função para fazer a chamada para o backend e setar o resultado como resultado
  //TODO: Implementar histórico via localStorage
  async function handleRollDice() {
    const res = await fetch(`http://localhost:8000/rolagem/${selectedDice}`, {
      method: "POST",
    });
    const data: RolledDiceResponse = await res.json();
    //console.log(data);
    // Esse é resultado da rolagem
    const result = data.message;
    // Setamos o resultado
    setResult(result);
    // E colocamos a entrada no localStorage
    setEntry(data);
  }

  return (
    <div className="min-h-screen bg-blue-900 flex justify-center items-center">
      <div className="bg-blue-950 p-10 md:rounded-xl w-[100%] md:w-[60%]">
        <div className="mb-4 flex flex-col items-center gap-3">
          <h1 className="text-slate-50 font-extrabold text-3xl">
            Selecione um dado!
          </h1>
          <ul className="flex gap-3">
            {availableDice.map((val) => (
              <button
                className={`bg-slate-200 rounded py-1 px-2 ${
                  val === selectedDice ? "bg-slate-400" : ""
                }`}
                onClick={() => handleChangeDice(val)}
              >
                <li className="text-blue-950 font-bold">D{val}</li>
              </button>
            ))}
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 p-3 items-center justify-between">
          <div className="bg-slate-900 rounded-full p-2">
            <img
              src={`${selectedDice}.png`}
              alt={`Dado de ${selectedDice} lados`}
              className="w-44 lg:w-52"
            />
          </div>

          <div className="flex flex-col justify-around items-center gap-3 bg-slate-900 rounded p-3 lg:p-6">
            <h1 className="text-8xl lg:text-8xl font-bold text-blue-50">
              {result}
            </h1>
            <button
              className="bg-slate-200 py-4 px-12 lg:px-4 lg:py-4 rounded text-sm font-bold text-blue-950 hover:bg-slate-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-amber-200 transition-colors"
              onClick={handleRollDice}
            >
              Rolar dado!
            </button>
          </div>
          <div className="bg-slate-100 p-2 w-[90%] lg:w-40 rounded flex flex-col justify-between">
            <h1 className="text-lg font-bold text-center">Histórico</h1>
            <div className="bg-slate-50 min-h-36 max-h-36 overflow-scroll">
              <ul>
                {history.map((val) => (
                  <li className="text-lg">
                    <span className="  font-extrabold">{val.lados}</span> -{" "}
                    {val.message}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="bg-blue-950 text-slate-50 font-bold focus"
              onClick={deleteHistory}
            >
              Limpar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
