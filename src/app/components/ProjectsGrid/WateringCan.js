const WateringCan = ({ isPouring }) => {
  return (
    <div className="relative w-16 h-16 transform hover:scale-105 transition-transform">
      <svg
        width={160}
        height={160}
        viewBox="0 0 100 100"
        className={`transform ${
          isPouring ? "rotate-[-60deg]" : "rotate-0"
        } transition-transform duration-500`}
      >
        {/* Main body of watering can */}
        <path
          d="M70 40 L30 40 L25 60 L75 60 Z"
          fill="#C6B1EA"
          stroke="#2D3748"
          strokeWidth="1"
        />
        {/* Spout */}
        <path
          d="M30 45 L15 35 L13 37 L28 50"
          fill="#C6B1EA"
          stroke="#2D3748"
          strokeWidth="1"
        />
        {/* Handle */}
        <path
          d="M60 30 Q50 20 40 30"
          fill="none"
          stroke="#2D3748"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Water drops */}
        {isPouring && (
          <g>
            <circle
              cx="15"
              cy="37"
              r="2"
              fill="#60A5FA"
              className="animate-water-drop-1 [animation-delay:500ms]"
            />
            <circle
              cx="13"
              cy="42"
              r="2"
              fill="#60A5FA"
              className="animate-water-drop-2 [animation-delay:1000ms]"
            />
            <circle
              cx="17"
              cy="45"
              r="2"
              fill="#60A5FA"
              className="animate-water-drop-3 [animation-delay:2000ms]"
            />
          </g>
        )}
        {/* Glitter particles */}
        <g>
          <circle
            cx="82"
            cy="25"
            r="2.5"
            className="animate-glitter-1 [animation-delay:0ms]"
            fill="#F480A3"
            stroke="#2D3748"
            strokeWidth="0.5"
          />
          <circle
            cx="60"
            cy="20"
            r="2.5"
            className="animate-glitter-2 [animation-delay:300ms]"
            fill="#B6CDDC"
            stroke="#2D3748"
            strokeWidth="0.5"
          />
          <circle
            cx="75"
            cy="50"
            r="2.5"
            className="animate-glitter-3 [animation-delay:600ms]"
            fill="#FFDF70"
            stroke="#2D3748"
            strokeWidth="0.5"
          />
          <circle
            cx="85"
            cy="40"
            r="2.5"
            className="animate-glitter-4 [animation-delay:900ms]"
            fill="#C8D98E"
            stroke="#2D3748"
            strokeWidth="0.5"
          />
          <circle
            cx="68"
            cy="35"
            r="2.5"
            className="animate-glitter-5 [animation-delay:1200ms]"
            fill="#F7A474"
            stroke="#2D3748"
            strokeWidth="0.5"
          />
        </g>
      </svg>
    </div>
  );
};

export default WateringCan;
