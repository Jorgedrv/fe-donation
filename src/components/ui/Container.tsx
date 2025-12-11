import type { ReactNode } from "react";
import clsx from "clsx";

export default function Container({
  children,
  className,
  auth = false
}: {
  children?: ReactNode;
  className?: string;
  auth?: boolean;
}) {
  return auth ? (
    <div className={clsx("w-full flex flex-col items-center", className)}>
      {children}
    </div>
  ) : (
    <div className={clsx("max-w-6xl mx-auto px-6", className)}>{children}</div>
  );
}
