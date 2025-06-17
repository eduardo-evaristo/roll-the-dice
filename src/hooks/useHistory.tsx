import { useState } from "react";
import type { RolledDiceResponse } from "../App";

export default function useHistory() {
  //Aqui obtemos ou um array vazio quando não tivermos nada ou o array com as entrdas
  const [history, setHistory] = useState<RolledDiceResponse[]>(() => {
    const history = localStorage.getItem("historico");
    return JSON.parse(history || "[]");
  });

  // Insere nova entrada no histórico
  function setEntry(entry: RolledDiceResponse) {
    // Adiciona entrada ao array de histórico
    const updatedHistory = [entry, ...history];
    // Provoca mudança do staet
    setHistory(updatedHistory);
    // Mudamos também no localStorage
    localStorage.setItem("historico", JSON.stringify(updatedHistory));
  }

  function deleteHistory() {
    // Deletamos do state para ter mudança visual
    setHistory([]);
    // REmovemos do localStorage também
    localStorage.removeItem("historico");
  }

  return [history, setEntry, deleteHistory] as const;
}
