import { type ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]";
  const variants = {
    default: "bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/40",
    outline:
      "border border-white/15 bg-white/5 text-slate-100 backdrop-blur hover:border-cyan-300/50",
  };

  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
}

