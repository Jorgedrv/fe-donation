interface CardProps {
  title?: string;
  description?: string;
  icon?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  icon,
  children,
  className = ""
}: CardProps) {
  return (
    <div
      tabIndex={-1}
      className={`
        bg-white rounded-3xl border border-gray-100 shadow-sm
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        flex flex-col justify-between
        p-10 text-center
        pointer-events-auto
        ${className}
      `}
    >
      <div>
        <div className="text-6xl mb-5">{icon}</div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

        {description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>
        )}
      </div>

      <div className="mt-auto">{children}</div>
    </div>
  );
}
