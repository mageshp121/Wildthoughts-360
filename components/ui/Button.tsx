"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const base =
    "inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-bg hover:bg-primaryLight shadow-lg shadow-primary/10 hover:shadow-primary/20",
    ghost:
      "border border-primary text-primary hover:bg-primary hover:text-bg",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-sm",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={shouldReduceMotion ? {} : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
