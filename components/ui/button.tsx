import { type ButtonHTMLAttributes, forwardRef, isValidElement, cloneElement, type ReactElement } from "react";
import { cn } from "../utils";

type ButtonVariant = "primary" | "ghost" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  asChild?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 hover:-translate-y-0.5",
  ghost: "text-cyan-100 hover:text-white hover:-translate-y-0.5",
  outline:
    "border border-white/15 bg-white/5 text-slate-50 hover:border-cyan-400 hover:-translate-y-0.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = "", variant = "primary", asChild = false, children, ...props },
  ref
) {
  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;
    return cloneElement(child, {
      ...child.props,
      className: cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-150",
        variantClasses[variant],
        child.props?.className,
        className
      ),
    });
  }

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-150",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

