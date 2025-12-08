import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  title?: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  align?: "center" | "left";
  maxWidth?: string;
  padding?: string;
}

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  align = "center",
  maxWidth = "max-w-6xl",
  padding = "py-24 px-6",
}: SectionProps) {
  return (
    <section className={clsx("w-full", padding, className)}>
      <div
        className={clsx(
          "mx-auto",
          maxWidth,
          align === "center" ? "text-center" : "text-left"
        )}
      >
        {/* TITLE */}
        {title && (
          <h2 className="text-4xl font-bold text-gray-800">
            {title}
          </h2>
        )}

        {/* SUBTITLE */}
        {subtitle && (
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* CONTENT */}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
