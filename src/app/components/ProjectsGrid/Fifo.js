import { Fragment } from "react";

const Fifo = () => {
  const newsItems = [
    { text: "Latest Blog Post", bgColor: "bg-sage" },
    { text: "Featured Article", bgColor: "bg-pink" },
    { text: "Trending Topics", bgColor: "bg-lavender" },
    { text: "New Insights", bgColor: "bg-skyblue" },
    { text: "Community", bgColor: "bg-yellow" },
  ];

  const NewsItem = ({ text, bgColor }) => (
    <div
      className={`flex items-center h-16 justify-center min-w-[150px] px-6 py-4 text-black font-medium border border-neutral-900 rounded-lg mx-1 ${bgColor}`}
    >
      {text}
    </div>
  );

  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-peach border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex flex-col text-black">
        {/* Bulb SVG with animation */}
        <div className="absolute top-4 right-4 w-20 h-20">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            {/* Bulb base with color animation */}
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z"
              stroke="black"
              strokeWidth="0.5"
              className="color-changing-bulb"
            />
            {/* Top star */}
            <g transform="translate(12, 1) scale(0.2, 0.2)">
              <path
                d="M48.5,38.5c-8.72381,3.466667-11.533333,6.27619-15,15-3.466667-8.72381-6.27619-11.533333-15-15c8.72381-3.466667,11.533333-6.27619,15-15c3.466667,8.72381,6.27619,11.533333,15,15Z"
                transform="translate(-33.5,-38.5)"
                fill="#FFDF70"
                stroke="#000"
                className="star-shape"
              />
            </g>
            {/* Left star */}
            <g transform="translate(4, 8) scale(0.2, 0.2)">
              <path
                d="M48.5,38.5c-8.72381,3.466667-11.533333,6.27619-15,15-3.466667-8.72381-6.27619-11.533333-15-15c8.72381-3.466667,11.533333-6.27619,15-15c3.466667,8.72381,6.27619,11.533333,15,15Z"
                transform="translate(-33.5,-38.5)"
                fill="#FFDF70"
                stroke="#000"
                className="star-shape"
              />
            </g>
            {/* Right star */}
            <g transform="translate(-2, -3) scale(0.2, 0.2)">
              <path
                d="M48.5,38.5c-8.72381,3.466667-11.533333,6.27619-15,15-3.466667-8.72381-6.27619-11.533333-15-15c8.72381-3.466667,11.533333-6.27619,15-15c3.466667,8.72381,6.27619,11.533333,15,15Z"
                transform="translate(-33.5,-38.5)"
                fill="#FFDF70"
                stroke="#000"
                className="star-shape"
              />
            </g>
            <style jsx>{`
              @keyframes colorChange {
                0%,
                100% {
                  fill: #c6b1ea;
                } /* lavender */
                20% {
                  fill: #f480a3;
                } /* pink */
                40% {
                  fill: #c8d98e;
                } /* sage */
                60% {
                  fill: #ffdf70;
                } /* yellow */
                80% {
                  fill: #b6cddc;
                } /* skyblue */
              }
              .color-changing-bulb {
                animation: colorChange 10s infinite;
              }
              @keyframes starPulse {
                0%,
                100% {
                  opacity: 0.7;
                  transform: scale(1);
                }
                50% {
                  opacity: 1;
                  transform: scale(1.2);
                }
              }
              .star-shape {
                animation: starPulse 2s infinite;
              }
            `}</style>
          </svg>
        </div>
        <div className="flex flex-col px-8 py-6 gap-2 text-black">
          <h2 className="text-3xl font-semibold text-black">
            Blogging Platform
          </h2>
          <h1 className="text-3xl font-semibold text-black">
            for D2C Insights.
          </h1>
          <p className="text-md">
            A blogging platform that empowers direct-to-consumer (D2C)
            businesses with real-time insights and community engagement.
          </p>
        </div>
        <div>
          <div className="group relative flex overflow-x-hidden overflow-y-hidden">
            <div className="flex animate-marquee group-hover:pause">
              {newsItems.map((item, index) => (
                <NewsItem
                  key={`first-${index}`}
                  text={item.text}
                  bgColor={item.bgColor}
                />
              ))}
            </div>

            <div className="flex absolute top-0 animate-marquee2 group-hover:pause">
              {newsItems.map((item, index) => (
                <NewsItem
                  key={`second-${index}`}
                  text={item.text}
                  bgColor={item.bgColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Fifo;
