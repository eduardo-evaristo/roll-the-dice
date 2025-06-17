import { useState } from "react";

type AvailableDice = 6 | 10 | 20;

export default function App() {
  const availableDice: AvailableDice[] = [6, 10, 20];
  const [selectedDice, setSelectedDice] = useState<AvailableDice>(6);
  const [result, setResult] = useState<number>();

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
    const data = await res.json();
    //console.log(data);
    const result = data.message;
    setResult(result);
  }

  return (
    <div className="min-h-screen bg-amber-300 flex justify-center items-center">
      <div className="bg-blue-950 p-10 rounded w-[90%] lg:w-[50%]">
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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 p-3 items-center">
          <div className="bg-slate-900 rounded-full p-2">
            <img
              src={`${selectedDice}.png`}
              alt={`Dado de ${selectedDice} lados`}
              className="w-44 lg:w-52"
            />
          </div>

          <div className="flex flex-col justify-around items-center gap-3">
            <h1 className="text-8xl lg:text-8xl font-bold text-blue-50">
              {result}
            </h1>
            <button
              className="bg-slate-200 p-4 rounded text-sm font-bold text-blue-950 hover:bg-slate-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-200 focus:ring-blue-950 transition-colors"
              onClick={handleRollDice}
            >
              Rolar dado!
            </button>
          </div>
          <div className="bg-slate-100 p-2 w-[90%] lg:w-40 rounded flex flex-col justify-between">
            <h1 className="text-lg font-bold text-center">Histórico</h1>
            <div className="bg-slate-50 min-h-36 max-h-36 overflow-scroll">
              <ul>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
              </ul>
            </div>
            <button className="bg-blue-950 text-slate-50 font-bold">
              Limpar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
