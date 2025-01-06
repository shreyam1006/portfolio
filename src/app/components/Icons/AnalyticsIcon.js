const AnalyticsIcon = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" fill="none">
    {/* Background */}
    <path
      d="M24 6C34 6 42 14 42 24C42 34 34 42 24 42C14 42 6 34 6 24C6 14 14 6 24 6Z"
      fill="#F480A3"
      stroke="#2D3748"
      strokeWidth="1"
    />
    {/* Chart bars */}
    <rect
      x="12"
      y="28"
      width="6"
      height="8"
      fill="#C6B1EA"
      stroke="#2D3748"
      strokeWidth="1"
    />
    <rect
      x="21"
      y="20"
      width="6"
      height="16"
      fill="#FFDF70"
      stroke="#2D3748"
      strokeWidth="1"
    />
    <rect
      x="30"
      y="12"
      width="6"
      height="24"
      fill="#C8D98E"
      stroke="#2D3748"
      strokeWidth="1"
    />
  </svg>
);

export default AnalyticsIcon;
