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
  variant?: "default" | "outline" | "soft" | "ghost" | "link" | "glass";
  className?: string;
}

// ⭐ Generic component
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

  // DaisyUI color classes
  const colorClass = color !== "default" ? `btn-${color}` : "";

  // Variants
  const variantClass =
    variant === "outline"
      ? "btn-outline"
      : variant === "soft"
      ? "btn-soft"
      : variant === "ghost"
      ? "btn-ghost"
      : variant === "link"
      ? "btn-link"
      : variant === "glass"
      ? "glass"
      : "";

  // Sizes
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
      className={clsx(
        "btn",
        colorClass,
        variantClass,
        sizeClass,
        className
      )}
    >
      {children}
    </Component>
  );
}
