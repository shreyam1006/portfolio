const MLIcon = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" fill="none">
    {/* Brain container */}
    <path
      d="M24 6C34 6 42 14 42 24C42 34 34 42 24 42C14 42 6 34 6 24C6 14 14 6 24 6Z"
      fill="#FFDF70"
      stroke="#2D3748"
      strokeWidth="1"
    />
    {/* Neural network connections */}
    <path
      d="M16 20C16 20 20 28 24 28C28 28 32 20 32 20"
      stroke="#2D3748"
      strokeWidth="1"
      strokeLinecap="round"
    />
    {/* Data nodes */}
    <circle
      cx="16"
      cy="20"
      r="3"
      fill="#C6B1EA"
      stroke="#2D3748"
      strokeWidth="1"
    />
    <circle
      cx="24"
      cy="28"
      r="3"
      fill="#B6CDDC"
      stroke="#2D3748"
      strokeWidth="1"
    />
    <circle
      cx="32"
      cy="20"
      r="3"
      fill="#F480A3"
      stroke="#2D3748"
      strokeWidth="1"
    />
  </svg>
);

export default MLIcon;
