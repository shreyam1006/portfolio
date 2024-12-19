export default function EmailWindowIcon() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 341 250"
      preserveAspectRatio="xMidYMid meet"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <g transform="translate(20 20)">
        {/* Window Frame */}
        <rect
          x="0"
          y="0"
          width="300"
          height="200"
          fill="#fff"
          stroke="#272537"
          strokeWidth="1"
          rx="4"
        />

        {/* Window Title Bar */}
        <rect
          x="0"
          y="0"
          width="300"
          height="30"
          fill="#B6CDDC"
          stroke="#000"
          rx="4"
        />

        {/* Window Controls */}
        <circle
          cx="20"
          cy="15"
          r="5"
          fill="#FF6B6B"
          stroke="#000"
          strokeWidth="1"
        />
        <circle
          cx="40"
          cy="15"
          r="5"
          fill="#FFD93D"
          stroke="#000"
          strokeWidth="1"
        />
        <circle
          cx="60"
          cy="15"
          r="5"
          fill="#6BCB77"
          stroke="#000"
          strokeWidth="1"
        />

        {/* Email Content Area */}
        <g transform="translate(20 45)">
          {/* To Field */}
          <text x="0" y="8" fontSize="12" fill="#000" fontFamily="Arial">
            To:
          </text>
          <g clipPath="url(#clip1)">
            <g>
              <path
                id="line1"
                d="M0,0h160v8.191406h-160v-8.191406Z"
                transform="translate(30 0)"
                opacity="0"
                fill="#C8D98E"
                stroke="#000"
              >
                <animate
                  attributeName="opacity"
                  from="0"
                  to="1"
                  dur="0.5s"
                  begin="0s"
                  fill="freeze"
                />
              </path>
            </g>
            <clipPath id="clip1">
              <path d="M30,0h160v8.191406h-160v-8.191406Z" />
            </clipPath>
          </g>

          {/* Subject Field */}
          <text x="0" y="28" fontSize="12" fill="#000" fontFamily="Arial">
            Subject:
          </text>
          <g clipPath="url(#clip2)">
            <g>
              <path
                id="line2"
                d="M0,0h160v8.191406h-160v-8.191406Z"
                transform="translate(50 20)"
                opacity="0"
                fill="#C8D98E"
                stroke="#000"
              >
                <animate
                  attributeName="opacity"
                  from="0"
                  to="1"
                  dur="0.5s"
                  begin="0.5s"
                  fill="freeze"
                />
              </path>
            </g>
            <clipPath id="clip2">
              <path d="M50,20h160v8.191406h-160v-8.191406Z" />
            </clipPath>
          </g>

          {/* Email Body - Animated Rectangle */}
          <rect
            id="emailBody"
            width="260"
            rx="0"
            ry="0"
            transform="translate(0 50)"
            fill="#C6B1EA"
            stroke="#000"
          >
            <animate
              attributeName="height"
              from="0"
              to="60"
              dur="3s"
              begin="0s"
              repeatCount="indefinite"
              restart="always"
              direction="alternate"
            />
          </rect>

          {/* Send Button */}
          <g transform="translate(180 115)">
            <rect
              x="0"
              y="0"
              width="80"
              height="30"
              rx="15"
              fill="#F7A474"
              stroke="#000"
            />
            <g transform="translate(40 15)">
              <text
                x="0"
                y="1"
                fontSize="14"
                fill="#000"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Arial"
              >
                Send
              </text>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
