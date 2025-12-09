import type { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

interface ButtonProps<T extends ElementType> {
  as?: T;
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "neutral"
    | "ghost"
    | "link"
    | "default";
  size?: "sm" | "md" | "lg" | "wide" | "block" | "circle" | "square";
  variant?: "default" | "outline" | "ghost" | "link" | "glass" | "soft";
  className?: string;
}

export default function Button<T extends ElementType = "button">({
  as,
  children,
  color = "default",
  size = "md",
  variant = "default",
  className,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Component = as || "button";

  const colorClass = color !== "default" ? `btn-${color}` : "";

  const variantClass =
    variant === "outline"
      ? "btn-outline"
      : variant === "ghost"
      ? "btn-ghost"
      : variant === "soft"
      ? "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition"
      : variant === "link"
      ? "btn-link"
      : variant === "glass"
      ? "glass"
      : "";

  const sizeClass =
    size === "sm"
      ? "btn-sm"
      : size === "lg"
      ? "btn-lg"
      : size === "wide"
      ? "btn-wide"
      : size === "block"
      ? "btn-block"
      : size === "circle"
      ? "btn-circle"
      : size === "square"
      ? "btn-square"
      : "";

  return (
    <Component
      {...props}
      className={clsx("btn", colorClass, variantClass, sizeClass, className)}
    >
      {children}
    </Component>
  );
}
