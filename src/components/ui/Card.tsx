interface CardProps {
  title: string;
  description: string;
  icon?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        bg-white p-10 rounded-3xl shadow-md border border-gray-100
        hover:shadow-xl hover:-translate-y-1 transition-all
        text-center max-w-sm mx-auto
        ${className}
      `}
    >
      <div className="text-5xl mb-5">{icon}</div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {children}
    </div>
  );
}
