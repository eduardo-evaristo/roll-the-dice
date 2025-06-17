import type { RolledDiceResponse } from "../types";
import Button from "./Button";

type Props = {
  history: RolledDiceResponse[];
  onClick: () => void;
};

export default function History({ history, onClick }: Props) {
  return (
    <div className="bg-slate-100 p-2 w-[90%] lg:w-40 rounded flex flex-col justify-between">
      <h1 className="text-lg font-bold text-center">Histórico</h1>
      <div className="bg-slate-50 min-h-36 max-h-36 overflow-scroll">
        <ul>
          {history.map((val, i) => (
            <li className="text-lg" key={i}>
              <span className="  font-extrabold">{val.lados}</span> -{" "}
              {val.message}
            </li>
          ))}
        </ul>
      </div>
      <Button className="bg-blue-950 text-slate-50" secondary onClick={onClick}>
        Limpar
      </Button>
    </div>
  );
}
