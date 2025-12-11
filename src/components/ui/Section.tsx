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
  auth?: boolean; // 🔥 NEW: modo para páginas de autenticación
}

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  align = "center",
  maxWidth = "max-w-6xl",
  padding = "py-24 px-6",
  auth = false // 🔥 default normal
}: SectionProps) {
  return (
    <section className={clsx("w-full", padding, className)}>
      {auth ? (
        // 🔥 AUTH MODE → NO max-width container, NO margin top
        <div className="w-full flex flex-col items-center">{children}</div>
      ) : (
        // 🔥 NORMAL SECTION → landing pages, marketing, dashboard
        <div
          className={clsx(
            "mx-auto",
            maxWidth,
            align === "center" ? "text-center" : "text-left"
          )}
        >
          {title && (
            <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
          )}

          {subtitle && (
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          <div className="mt-12">{children}</div>
        </div>
      )}
    </section>
  );
}
