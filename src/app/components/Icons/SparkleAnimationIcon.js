const SparkleAnimationIcon = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      viewBox="0 0 400 400"
    >
      <g>
        {/* 8-pointed diamonds */}
        <g
          className="animate-scale"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <path
            d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
            fill="#FFDF70"
            stroke="#000"
            transform="translate(-200, 50)"
          />
        </g>

        <g
          className="animate-scale [animation-delay:400ms]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <path
            d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
            fill="#C6B1EA"
            stroke="#000"
            transform="translate(550, 70)"
          />
        </g>

        <g
          className="animate-scale [animation-delay:800ms]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <path
            d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
            fill="#C8D98E"
            stroke="#000"
            transform="translate(150, 30)"
          />
        </g>

        <g
          className="animate-scale [animation-delay:1200ms]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <path
            d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
            fill="#B6CDDC"
            stroke="#000"
            transform="translate(-140, 320)"
          />
        </g>

        <g
          className="animate-scale [animation-delay:1600ms]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <path
            d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
            fill="#F7A474"
            stroke="#000"
            transform="translate(540, 300)"
          />
        </g>

        <g
          className="animate-scale [animation-delay:2000ms]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <path
            d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
            fill="#FFDF70"
            stroke="#000"
            transform="translate(200, 300)"
          />
        </g>

        <g
          className="animate-scale [animation-delay:2400ms]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <path
            d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
            fill="#C6B1EA"
            stroke="#000"
            transform="translate(-150, 150)"
          />
        </g>

        <g
          className="animate-scale [animation-delay:2800ms]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <path
            d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
            fill="#C8D98E"
            stroke="#000"
            transform="translate(490, 180)"
          />
        </g>

        <g
          className="animate-scale [animation-delay:3200ms]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <path
            d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
            fill="#F480A3"
            stroke="#000"
            transform="translate(50, 250)"
          />
        </g>

        <g
          className="animate-scale [animation-delay:3600ms]"
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        >
          <path
            d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
            fill="#F7A474"
            stroke="#000"
            transform="translate(250, 100)"
          />
        </g>
      </g>
    </svg>
  );
};

export default SparkleAnimationIcon;
