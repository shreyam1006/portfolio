const GiftIcon = () => {
  return (
    <svg
      className="animate-float"
      width="100"
      height="100"
      viewBox="0 0 64 64"
      fill="none"
    >
      {/* Box Base */}
      <rect
        x="8"
        y="24"
        width="48"
        height="36"
        fill="#FFDF70"
        stroke="#2B3440"
        strokeWidth="1"
      />
      {/* Box Lid */}
      <rect
        x="4"
        y="16"
        width="56"
        height="12"
        fill="#C6B1EA"
        stroke="#2B3440"
        strokeWidth="1"
      />
      {/* Ribbon Vertical */}
      <rect
        x="28"
        y="16"
        width="8"
        height="44"
        fill="#F7A474"
        stroke="#2B3440"
        strokeWidth="0.5"
      />

      {/* Bow Left */}
      <path
        d="M28 16C28 16 24 12 24 8C24 4 28 4 28 8C28 12 28 16 28 16Z"
        fill="#F7A474"
        stroke="#2B3440"
        strokeWidth="0.5"
      />
      {/* Bow Right */}
      <path
        d="M36 16C36 16 40 12 40 8C40 4 36 4 36 8C36 12 36 16 36 16Z"
        fill="#F7A474"
        stroke="#2B3440"
        strokeWidth="0.5"
      />
      {/* Bow Center */}
      <circle cx="32" cy="16" r="4" fill="#F7A474" strokeWidth="0.5" />
    </svg>
  );
};

export default GiftIcon;
