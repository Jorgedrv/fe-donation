export default function LoadingIcon({ size = 48, centered = true }) {
  const wrapperProps = centered
    ? { className: "w-full flex items-center justify-center py-20" }
    : {};

  return (
    <div {...wrapperProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        stroke="url(#grad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-heartbeat"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        <path d="
          M24 42
          C24 42, 10 33, 6 23
          C2 14, 8 6, 15 7
          C19 8, 22 12, 24 15
          C26 12, 29 8, 33 7
          C40 6, 46 14, 42 23
          C38 33, 24 42, 24 42Z
        ">
          <animate
            attributeName="stroke-opacity"
            values="0.4;1;0.4"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Tailwind animation */}
      <style>
        {`
        @keyframes heartbeat {
          0%   { transform: scale(1); opacity: 0.9; }
          30%  { transform: scale(1.10); opacity: 1; }
          60%  { transform: scale(1); opacity: 0.9; }
          80%  { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 0.9; }
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
      `}
      </style>
    </div>
  );
}
