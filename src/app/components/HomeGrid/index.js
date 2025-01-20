import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";

import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Education from "./Education";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";
import Misc from "../Icons/Misc";
import { GRIDS } from "../../constants";

export default function HomeGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Shreya Maheshwari".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading = "Software Development Engineer".split("");

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
    <animated.div className="grid grid-cols-1 md:grid-cols-9 md:grid-rows-9 w-screen md:h-screen p-5 gap-5 bg-stone-200">
      <animated.div
        style={animatedStyles}
        className="row-start-5 md:row-span-6 md:col-span-3"
      >
        <animated.div
          style={trails[1]}
          className="relative bg-sage border border-black h-full w-full rounded-2xl"
          onClick={() => setCurrentGrid(GRIDS[2])}
        >
          <WorkExperience />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="md:row-span-3 md:col-span-3"
      >
        <animated.div
          onClick={() => setCurrentGrid(GRIDS[1])}
          style={trails[3]}
          className="relative h-full w-full bg-skyblue border border-black rounded-2xl"
        >
          <Projects />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="md:col-span-3 md:row-span-3"
      >
        <animated.div
          style={trails[2]}
          className="relative h-full w-full border border-neutral-900 bg-peach rounded-2xl overflow-clip"
        >
          <Education />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="row-start-1 md:col-span-4 md:row-span-3"
      >
        <animated.div
          style={trails[0]}
          className="h-full w-full p-10 bg-lavender border border-black flex flex-col items-center justify-center gap-3 rounded-2xl"
        >
          <div className="border text-center border-neutral-900 bg-white w-fit px-2 py-3">
            <span
              className="text-4xl sm:text-5xl font-bold text-pink"
              id="home"
            >
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
      <animated.div
        style={animatedStyles}
        className="md:row-span-4 md:col-span-2"
      >
        <animated.div
          style={trails[4]}
          className="h-full w-full relative border rounded-2xl border-neutral-900 bg-skyblue max-h-[400px] sm:max-h-[500px]"
          onClick={() => setCurrentGrid(GRIDS[3])}
        >
          <About />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="md:row-span-3 md:col-span-2"
      >
        <animated.div
          style={trails[5]}
          className="h-full w-full relative border rounded-2xl border-neutral-900 bg-skyblue cursor-pointer"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1XwPhV11xGdK2P4IQVP0wwvdXj-rfFs4i/view?usp=drive_link",
              "_blank"
            )
          }
        >
          <Resume />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="md:row-span-3 md:col-span-5"
      >
        <animated.div
          style={trails[4]}
          className="h-full w-full md:flex justify-between items-center p-10 gap-5 bg-pink border border-black rounded-2xl"
        >
          <Contact />
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="md:row-span-2 md:col-span-2"
      >
        <animated.div
          style={trails[6]}
          className="h-full w-full relative border border-neutral-900 bg-sage rounded-2xl"
        >
          <Misc />
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
