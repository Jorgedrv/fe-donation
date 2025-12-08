export default function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        stroke="url(#df)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="df" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Heart shape */}
        <path d="
          M24 42
          C24 42, 10 33, 6 23
          C2 14, 8 6, 15 7
          C19 8, 22 12, 24 15
          C26 12, 29 8, 33 7
          C40 6, 46 14, 42 23
          C38 33, 24 42, 24 42Z
        " />

        {/* Flow line */}
        <path 
          d="M10 28 C16 32, 22 32, 28 28" 
          strokeOpacity="0.55"
        />
      </svg>

      <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
        DonationFlows
      </span>
    </div>
  );
}
