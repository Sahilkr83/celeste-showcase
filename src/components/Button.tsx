import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-foreground text-background hover:bg-foreground/90",
  ghost: "bg-transparent text-foreground border border-border hover:bg-muted",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  arrow,
  ...rest
}: ComponentProps<"button"> & { variant?: Variant; arrow?: boolean; children: ReactNode }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {arrow && <ArrowUpRight className="h-4 w-4" />}
    </button>
  );
}

export function LinkButton({
  to,
  variant = "primary",
  children,
  className = "",
  arrow,
}: {
  to: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow && <ArrowUpRight className="h-4 w-4" />}
    </Link>
  );
}
