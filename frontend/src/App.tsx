import { useState } from "react";
import useHistory from "./hooks/useHistory";
import History from "./components/History";
import Result from "./components/Result";
import DiceImage from "./components/DiceImage";
import List from "./components/ButtonList";
import type { AvailableDice, RolledDiceResponse } from "@shared/types";

export const availableDice: AvailableDice[] = [6, 10, 20];

export default function App() {
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
        <List selectedDice={selectedDice} onClick={handleChangeDice} />
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 p-3 items-center justify-between">
          <DiceImage selectedDice={selectedDice} />
          <Result result={result} onClick={handleRollDice} />
          <History history={history} onClick={deleteHistory} />
        </div>
      </div>
    </div>
  );
}
