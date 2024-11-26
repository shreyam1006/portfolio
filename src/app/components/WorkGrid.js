import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";

import { GRIDS } from "../constants";

export default function WorkGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Work Experience".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading = "Here are the places I've worked at over the years".split(
    ""
  );

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1);
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1);
      }
    }, 100);

    return () => {
      clearInterval(id);
    };
  });

  const trails = useTrail(4, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  return (
    <animated.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 w-full min-h-screen lg:h-screen p-3 sm:p-4 lg:p-5 gap-3 sm:gap-4 lg:gap-5 bg-stone-200">
      {/* Main heading section - larger and on the left */}
      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className="md:col-span-2 lg:col-span-4 lg:row-span-6 h-[300px] md:h-auto"
      >
        <animated.div
          style={trails[0]}
          className="w-full h-full p-4 sm:p-6 lg:p-10 bg-work-dark border border-black flex flex-col items-center text-center gap-4 sm:gap-6 rounded-2xl"
        >
          <div className="border border-neutral-900 bg-work-light w-fit px-2 sm:px-3 py-2 sm:py-3">
            <span
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-work-accent"
              id="home"
            >
              {name.slice(0, nameIdx).join("")}
              <span className="inline-block mx-2 w-4 sm:w-6 h-1 bg-work-green animate-pulse"></span>
            </span>
          </div>
          <div className="border text-center border-neutral-900 bg-work-light w-fit px-2 py-2">
            <span className="text-sm sm:text-base lg:text-lg text-work-accent">
              {subheading.slice(0, subheadingIdx).join("")}
              <span className="inline-block w-2 sm:w-3 h-0.5 mx-1 bg-work-green animate-pulse"></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

      {/* Middle column */}
      <animated.div
        style={animatedStyles}
        className="md:col-span-2 lg:col-span-5 lg:row-span-6 h-[200px] md:h-auto"
      >
        <animated.div
          style={trails[1]}
          className="w-full h-full bg-work-green border border-black rounded-2xl"
        ></animated.div>
      </animated.div>

      {/* Right column - top section */}
      <animated.div
        style={animatedStyles}
        className="md:col-span-1 lg:col-span-3 lg:row-span-4 h-[200px] md:h-auto"
      >
        <animated.div
          style={trails[2]}
          className="w-full h-full bg-work-accent border border-black rounded-2xl"
        ></animated.div>
      </animated.div>

      {/* Right column - bottom section */}
      <animated.div
        style={animatedStyles}
        className="md:col-span-1 lg:col-span-3 lg:row-span-2 h-[200px] md:h-auto"
      >
        <animated.div
          style={trails[3]}
          className="w-full h-full bg-work-yellow border border-black rounded-2xl"
        ></animated.div>
      </animated.div>
    </animated.div>
  );
}
