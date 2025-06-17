import type { PropsWithChildren } from "react";

type Props = {
  className: string;
  onClick?: () => void;
  selected?: boolean;
  secondary?: boolean;
};

export default function Button({
  className,
  onClick,
  children,
  selected,
  secondary,
}: PropsWithChildren<Props>) {
  if (secondary)
    return (
      <button
        className={`bg-blue-800 rounded text-sm font-bold text-blue-50 hover:bg-blue-950 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-blue-950 transition-all ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`bg-slate-200 rounded text-sm font-bold text-blue-950 hover:bg-slate-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-amber-200 transition-all ${
        selected ? "bg-slate-400" : "bg-slate-200"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
