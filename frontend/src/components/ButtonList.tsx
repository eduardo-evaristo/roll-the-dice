import { availableDice } from "../App";
import type { AvailableDice } from "../types";
import Button from "./Button";

type Props = {
  selectedDice: AvailableDice;
  onClick: (val: AvailableDice) => void;
};

export default function List({ selectedDice, onClick }: Props) {
  return (
    <div className="mb-4 flex flex-col items-center gap-3">
      <h1 className="text-slate-50 font-extrabold text-3xl">
        Selecione um dado!
      </h1>
      <ul className="flex gap-3">
        {availableDice.map((val, i) => (
          <li key={i}>
            <Button
              className="py-1 px-2 text-blue-950 font-bold"
              selected={val === selectedDice}
              onClick={() => onClick(val)}
            >
              D{val}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
