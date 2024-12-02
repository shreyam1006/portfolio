import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";

export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Projects".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading =
    "Here are a few personal projects I've worked on over the years".split("");

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

  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  return (
    <animated.div className="grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-stone-200">
      <animated.div
        style={animatedStyles}
        className="row-start-4 lg:row-span-3 lg:col-span-5"
      >
        <animated.div
          style={trails[1]}
          className="group relative w-full h-full"
        >
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
          <span className="absolute inset-0 w-full h-full bg-sage border border-neutral-900 rounded-xl"></span>
          <span className="absolute inset-0 flex items-center justify-center text-black font-medium">
            xG
          </span>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-4"
      >
        <animated.div
          style={trails[3]}
          className="group relative w-full h-full"
        >
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
          <span className="absolute inset-0 w-full h-full bg-pink border border-neutral-900 rounded-xl"></span>
          <span className="absolute inset-0 flex items-center justify-center text-black font-medium">
            Review Mate
          </span>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-6"
      >
        <animated.div
          style={trails[2]}
          className="group relative w-full h-full"
        >
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
          <span className="absolute inset-0 w-full h-full bg-peach border border-neutral-900 rounded-xl"></span>
          <span className="absolute inset-0 flex items-center justify-center text-black font-medium">
            DAM
          </span>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className="row-start-1 lg:col-span-3 lg:row-span-3"
      >
        <animated.div
          style={trails[0]}
          className="group relative w-full h-full"
        >
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
          <span className="absolute inset-0 w-full h-full bg-skyblue border border-neutral-900 rounded-xl">
            <div className="w-full h-full p-10 flex flex-col items-center justify-center gap-3">
              <div className="border border-neutral-900 bg-yellow w-fit px-5 py-3">
                <span className="text-5xl font-bold text-pink" id="home">
                  {name.slice(0, nameIdx).join("")}
                  <span className="inline-block mx-2 w-6 h-1 bg-lavender animate-pulse"></span>
                </span>
              </div>
              <div className="border text-center border-neutral-900 bg-yellow w-fit px-5 py-2">
                <span className="lg:text-md text-pink font-semibold">
                  {subheading.slice(0, subheadingIdx).join("")}
                  <span className="inline-block w-3 h-0.5 mx-1 bg-lavender animate-pulse"></span>
                </span>
              </div>
            </div>
          </span>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-3"
      >
        <animated.div
          style={trails[4]}
          className="group relative w-full h-full"
        >
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
          <span className="absolute inset-0 w-full h-full bg-peach border border-neutral-900 rounded-xl"></span>
          <span className="absolute inset-0 flex items-center justify-center text-black font-medium">
            FIFO
          </span>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-4"
      >
        <animated.div
          style={trails[5]}
          className="group relative w-full h-full"
        >
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
          <span className="absolute inset-0 w-full h-full bg-pink border border-neutral-900 rounded-xl"></span>
          <span className="absolute inset-0 flex items-center justify-center text-black font-medium">
            Glue
          </span>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-2"
      >
        <animated.div
          style={trails[4]}
          className="group relative w-full h-full"
        >
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
          <span className="absolute inset-0 w-full h-full bg-sage border border-neutral-900 rounded-xl"></span>
          <span className="absolute inset-0 flex items-center justify-center text-black font-medium">
            Crusadify
          </span>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
