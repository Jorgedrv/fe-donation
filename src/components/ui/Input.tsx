import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelClassName?: string;
  error?: string;
  className?: string;
};

export default function Input({
  label,
  labelClassName,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          className={clsx("block text-sm font-medium mb-1", labelClassName)}
        >
          {label}
        </label>
      )}

      <input
        {...props}
        className={clsx(
          "w-full px-3 py-3 border rounded-xl outline-none transition focus:ring-2 focus:ring-purple-400",
          error && "border-red-500",
          className
        )}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
