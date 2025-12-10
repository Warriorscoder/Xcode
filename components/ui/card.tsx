import { type ReactNode } from "react";
import { cn } from "../utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export function Card({ children, className = "", glow = false }: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur",
        glow && "shadow-xl shadow-cyan-500/10",
        className
      )}
    >
      {glow ? <div className="absolute inset-0 -z-10 bg-linear-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" /> : null}
      {children}
    </div>
  );
}

