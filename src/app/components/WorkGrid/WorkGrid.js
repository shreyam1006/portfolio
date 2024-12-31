import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../../constants";
import { Gluelabs, UST, GluelabsIntern } from "./index";

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
    <animated.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-6 w-full min-h-screen lg:h-screen p-3 sm:p-4 lg:p-5 gap-3 sm:gap-4 lg:gap-5 bg-white">
      {/* Left section */}
      <animated.div
        style={animatedStyles}
        className="md:col-span-1 lg:col-span-4 lg:row-span-6 h-[200px] md:h-auto"
      >
        <animated.div
          className="w-full h-full bg-skyblue rounded-2xl p-8 border border-black"
          style={trails[1]}
        >
          <Gluelabs />
        </animated.div>
      </animated.div>

      {/* Top right section split into two */}
      <div className="md:col-span-1 lg:col-span-8 lg:row-span-3 h-[200px] md:h-auto grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
        {/* Work Experience heading */}
        <animated.div
          style={animatedStyles}
          className="col-span-1 cursor-pointer"
          onClick={() => setCurrentGrid(GRIDS[0])}
        >
          <animated.div
            style={trails[2]}
            className="w-full h-full bg-lavender rounded-2xl p-10 gap-3 text-center flex flex-col items-center justify-center border border-black"
          >
            <div className="border border-neutral-900 bg-white w-fit px-2 py-3">
              <span className="text-6xl font-bold text-pink" id="home">
                {name.slice(0, nameIdx).join("")}
                <span className="inline-block mx-2 w-6 h-1 bg-lavender animate-pulse"></span>
              </span>
            </div>
            <div className="border text-center border-neutral-900 bg-white w-fit px-5 py-2">
              <span className="md:text-md font-bold text-pink">
                {subheading.slice(0, subheadingIdx).join("")}
                <span className="inline-block w-3 h-0.5 mx-1 bg-lavender animate-pulse"></span>
              </span>
            </div>
          </animated.div>
        </animated.div>

        {/* Second block */}
        <animated.div style={animatedStyles} className="col-span-1">
          <animated.div
            className="w-full h-full bg-peach rounded-2xl p-8 border border-black"
            style={trails[2]}
          >
            <UST />
          </animated.div>
        </animated.div>
      </div>

      {/* Bottom section */}
      <animated.div
        style={animatedStyles}
        className="md:col-span-1 lg:col-span-8 lg:row-span-3 h-[200px] md:h-auto"
      >
        <animated.div
          className="w-full h-full bg-yellow rounded-2xl p-8 border border-black"
          style={trails[3]}
        >
          <GluelabsIntern />
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
