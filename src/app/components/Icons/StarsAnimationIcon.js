const StarsAnimationIcon = () => {
  return (
    <svg className="absolute w-full h-full" viewBox="0 0 400 300">
      {/* First star - largest */}
      <g
        className="animate-star-scale"
        style={{ transformOrigin: "350px 20px" }}
      >
        <g
          className="animate-star-spin"
          style={{ transformOrigin: "350px 20px" }}
        >
          <polygon
            points="350,-20 360,10 390,10 365,25 375,55 350,35 325,55 335,25 310,10 340,10"
            fill="#FFDF70"
            stroke="#000"
          />
        </g>
      </g>
      {/* Second star - medium */}
      <g
        className="animate-star-scale"
        style={{ transformOrigin: "310px 45px", animationDelay: "0.5s" }}
      >
        <g
          className="animate-star-spin"
          style={{ transformOrigin: "310px 45px" }}
        >
          <polygon
            points="310,15 318,35 340,35 323,48 330,70 310,55 290,70 297,48 280,35 302,35"
            fill="#F480A3"
            stroke="#000"
          />
        </g>
      </g>
      {/* Third star - smallest */}
      <g
        className="animate-star-scale"
        style={{ transformOrigin: "365px 60px", animationDelay: "1s" }}
      >
        <g
          className="animate-star-spin"
          style={{ transformOrigin: "365px 60px" }}
        >
          <polygon
            points="365,35 372,50 388,50 375,60 380,75 365,65 350,75 355,60 342,50 358,50"
            fill="#B6CDDC"
            stroke="#000"
          />
        </g>
      </g>
    </svg>
  );
};

export default StarsAnimationIcon;
