import type { AvailableDice } from "../types";

type Props = {
  selectedDice: AvailableDice;
};

export default function DiceImage({ selectedDice }: Props) {
  return (
    <div className="bg-slate-900 rounded-full p-2">
      <img
        src={`${selectedDice}.png`}
        alt={`Dado de ${selectedDice} lados`}
        className="w-44 lg:w-52"
      />
    </div>
  );
}
