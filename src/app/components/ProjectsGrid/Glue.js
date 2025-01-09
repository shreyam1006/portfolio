import { Fragment } from "react";
import GiftIcon from "../Icons/GiftIcon";

const Glue = () => {
  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-pink border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex items-center justify-center text-black p-8">
        {/* Sparkle Animation SVG - Full coverage */}
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

        {/* Coupon Section */}
        <div className="relative xl:max-w-[85%]">
          <div className="bg-white/90 h-full relative flex rounded-2xl border border-black shadow-sm">
            {/* Top cutout */}
            <div className="absolute top-0 left-16 -translate-y-1/2 w-6 h-6 bg-pink rounded-full border-b border-black"></div>

            {/* Bottom cutout */}
            <div className="absolute bottom-0 left-16 translate-y-1/2 w-6 h-6 bg-pink rounded-full border-t border-black"></div>

            {/* Left section with COUPON text */}
            <div className="w-[72px] flex items-center justify-center rounded-xl font-medium">
              <div className="text-black tracking-wider text-sm -rotate-90">
                COUPON
              </div>
            </div>

            {/* Right section with main content */}
            <div className="flex-1 p-3 border-l border-dashed border-black">
              {/* Header */}
              <div className="text-black mb-1 text-xs font-medium">
                CONNECTING BRANDS & FANS
              </div>

              {/* Main offer */}
              <div className="text-2xl font-bold mb-2">30% OFF</div>

              {/* Unlock button */}
              <div className="bg-blue-50 text-blue-600 border border-dashed  border-blue-600 px-2 py-0.5 rounded-lg inline-block mb-2 text-sm">
                Unlock with 100 💎
              </div>

              {/* Gift Icon */}
              <div className="absolute right-4 xl:right-10 top-1/2 -translate-y-1/2 hidden sm:block">
                <GiftIcon />
              </div>

              {/* Original content integrated */}
              <div className="text-xs text-black mt-1 max-w-[70%]">
                Allows brands to create fan pages, enhancing engagement through
                a gamified rewards systems.
              </div>

              {/* Terms and conditions */}
              <div className="text-[8px] text-black mt-1">T and C</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Glue;
