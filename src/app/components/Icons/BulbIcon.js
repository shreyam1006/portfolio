const BulbIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    {/* Bulb base with color animation */}
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z"
      stroke="black"
      strokeWidth="0.5"
      className="animate-bulb-colors"
    />
    {/* Top star */}
    <g transform="translate(12, 1) scale(0.2, 0.2)">
      <path
        d="M48.5,38.5c-8.72381,3.466667-11.533333,6.27619-15,15-3.466667-8.72381-6.27619-11.533333-15-15c8.72381-3.466667,11.533333-6.27619,15-15c3.466667,8.72381,6.27619,11.533333,15,15Z"
        transform="translate(-33.5,-38.5)"
        className="fill-yellow stroke-black animate-star-scale"
      />
    </g>
    {/* Left star */}
    <g transform="translate(4, 8) scale(0.2, 0.2)">
      <path
        d="M48.5,38.5c-8.72381,3.466667-11.533333,6.27619-15,15-3.466667-8.72381-6.27619-11.533333-15-15c8.72381-3.466667,11.533333-6.27619,15-15c3.466667,8.72381,6.27619,11.533333,15,15Z"
        transform="translate(-33.5,-38.5)"
        className="fill-yellow stroke-black animate-star-scale"
      />
    </g>
    {/* Right star */}
    <g transform="translate(-2, -3) scale(0.2, 0.2)">
      <path
        d="M48.5,38.5c-8.72381,3.466667-11.533333,6.27619-15,15-3.466667-8.72381-6.27619-11.533333-15-15c8.72381-3.466667,11.533333-6.27619,15-15c3.466667,8.72381,6.27619,11.533333,15,15Z"
        transform="translate(-33.5,-38.5)"
        className="fill-yellow stroke-black animate-star-scale"
      />
    </g>
  </svg>
);

export default BulbIcon;
