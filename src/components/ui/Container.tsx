import type { ReactNode } from "react";
import clsx from "clsx";

export default function Container({
  children,
  className
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-6xl mx-auto px-6", className)}>
      {children}
    </div>
  );
}
