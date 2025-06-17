import Button from "./Button";

type Props = {
  result?: number;
  onClick: () => void;
};

export default function Result({ result, onClick }: Props) {
  return (
    <div className="flex flex-col justify-around items-center gap-3 bg-slate-900 rounded p-3 lg:p-6">
      <h1 className="text-8xl lg:text-8xl font-bold text-blue-50">
        {result ? result : "?"}
      </h1>
      <Button className="y-4 px-12 lg:px-4 lg:py-4 " onClick={onClick}>
        Rolar dado!
      </Button>
    </div>
  );
}
