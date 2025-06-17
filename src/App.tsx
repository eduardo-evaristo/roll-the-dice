import { useState } from "react";

type AvailableDice = 6 | 10 | 20;

export default function App() {
  const availableDice: AvailableDice[] = [6, 10, 20];
  const [selectedDice, setSelectedDice] = useState<AvailableDice>(6);

  // Seta novo número no dado, é do tipo AvailableDice
  function handleChangeDice(diceValue: AvailableDice) {
    setSelectedDice(diceValue);
  }

  return (
    <div className="min-h-screen bg-amber-300 flex justify-center items-center">
      <div className="bg-blue-950 p-10 rounded">
        <div className="mb-4">
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
        <div className="flex gap-3 p-3">
          <div className="bg-slate-900 rounded-full p-2">
            <img
              src={`${selectedDice}.png`}
              alt={`Dado de ${selectedDice} lados`}
              width="200px"
            />
          </div>

          <div className="flex flex-col justify-around items-center gap-3">
            <h1 className="text-8xl font-bold text-blue-50">7</h1>
            <button className="bg-slate-200 p-4 rounded text-sm font-bold text-blue-950 hover:bg-slate-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-200 focus:ring-blue-950 transition-colors">
              Rolar dado!
            </button>
          </div>
          {/* <div className="">Histórico</div> */}
        </div>
      </div>
    </div>
  );
}
