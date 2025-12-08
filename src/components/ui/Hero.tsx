import type { ReactNode } from "react";
import Section from "./Section";
import clsx from "clsx";

interface HeroProps {
  title: ReactNode;
  subtitle?: string;
  cta?: ReactNode;
  className?: string;
  align?: "center" | "left";
  maxWidth?: string;
}

export default function Hero({
  title,
  subtitle,
  cta,
  className = "",
  align = "center",
  maxWidth = "max-w-4xl",
}: HeroProps) {
  return (
    <Section
      className={clsx("pt-40 pb-32", className)}
      align={align}
      maxWidth={maxWidth}
    >
      {/* TITLE */}
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-800">
        {title}
      </h1>

      {/* SUBTITLE */}
      {subtitle && (
        <p className="mt-6 text-lg text-gray-600">
          {subtitle}
        </p>
      )}

      {/* CTA */}
      {cta && (
        <div
          className={clsx(
            "mt-10",
            align === "center" ? "flex justify-center" : "flex"
          )}
        >
          {cta}
        </div>
      )}
    </Section>
  );
}
