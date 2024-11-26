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
    <animated.div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 w-screen lg:h-screen p-5 gap-5 bg-stone-200">
      {/* Main heading section - larger and on the left */}
      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className="lg:col-span-4 lg:row-span-6"
      >
        <animated.div
          style={trails[0]}
          className="w-full h-full p-10 bg-work-dark border border-black flex flex-col items-center text-center gap-6 rounded-2xl"
        >
          <div className="border border-neutral-900 bg-work-light w-fit px-3 py-3">
            <span className="text-5xl font-bold text-work-accent" id="home">
              {name.slice(0, nameIdx).join("")}
              <span className="inline-block mx-2 w-6 h-1 bg-work-green animate-pulse"></span>
            </span>
          </div>
          <div className="border text-center border-neutral-900 bg-work-light w-fit px-2 py-2">
            <span className="lg:text-lg text-work-accent">
              {subheading.slice(0, subheadingIdx).join("")}
              <span className="inline-block w-3 h-0.5 mx-1 bg-work-green animate-pulse"></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

      {/* Middle column */}
      <animated.div
        style={animatedStyles}
        className="lg:col-span-5 lg:row-span-6"
      >
        <animated.div
          style={trails[1]}
          className="w-full h-full bg-work-green border border-black rounded-2xl"
        ></animated.div>
      </animated.div>

      {/* Right column - top section */}
      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-4"
      >
        <animated.div
          style={trails[2]}
          className="w-full h-full bg-work-accent border border-black rounded-2xl"
        ></animated.div>
      </animated.div>

      {/* Right column - bottom section */}
      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-2"
      >
        <animated.div
          style={trails[3]}
          className="w-full h-full bg-work-yellow border border-black rounded-2xl"
        ></animated.div>
      </animated.div>
    </animated.div>
  );
}
