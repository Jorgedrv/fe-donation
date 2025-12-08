import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  title: string;
  icon?: ReactNode;
  description?: string;
  children?: ReactNode;
  className?: string;

  variant?: "default" | "outline" | "elevated" | "soft" | "hoverable";
  clickable?: boolean;
}

export default function Card({
  title,
  icon,
  description,
  children,
  className = "",
  variant = "default",
  clickable = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-8 transition bg-white",

        // Default variant
        variant === "default" && "shadow-sm",

        // Elevated variant
        variant === "elevated" && "shadow-[0_6px_20px_rgba(0,0,0,0.08)]",

        // Outline variant
        variant === "outline" && "border shadow-none",

        // Soft variant
        variant === "soft" && "bg-gray-50 shadow-sm",

        // Hoverable (premium hover)
        variant === "hoverable" &&
          "shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1",

        clickable && "cursor-pointer",

        className
      )}
    >
      {/* ICON */}
      {icon && (
        <div className="text-3xl mb-3">
          {icon}
        </div>
      )}

      {/* TITLE */}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

      {/* DESCRIPTION */}
      {description && (
        <p className="text-gray-600 mt-2">{description}</p>
      )}

      {/* CHILDREN */}
      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </div>
  );
}
