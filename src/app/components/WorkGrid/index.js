import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { useRouter } from "next/navigation";
import { ROUTES, GRIDS } from "../../constants";
import UST from "./UST";
import Gluelabs from "./Gluelabs";
import GluelabsIntern from "./GluelabsIntern";

export default function WorkGrid({ setCurrentGrid, animatedStyles }) {
  const router = useRouter();
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
    <animated.div className="grid grid-cols-1 xl:grid-cols-12 xl:grid-rows-6 w-full min-h-screen xl:h-screen p-3 sm:p-4 xl:p-5 gap-3 sm:gap-4 xl:gap-5 bg-stone-200">
      <div className="xl:col-span-8 xl:row-span-3 min-h-[250px] xl:h-auto grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 xl:gap-5">
        <animated.div
          style={animatedStyles}
          className="xl:col-span-1 cursor-pointer"
          onClick={() =>
            setCurrentGrid ? setCurrentGrid(GRIDS[0]) : router.push(ROUTES.HOME)
          }
        >
          <animated.div
            style={trails[2]}
            className="w-full h-full bg-lavender rounded-2xl p-6 sm:p-8 xl:p-10 gap-3 text-center flex flex-col items-center justify-center border border-black"
          >
            <div className="border border-neutral-900 bg-white w-fit px-2 py-2 sm:py-3">
              <span
                className="text-4xl sm:text-5xl xl:text-6xl font-bold text-pink"
                id="home"
              >
                {name.slice(0, nameIdx).join("")}
                <span className="inline-block mx-2 w-4 sm:w-6 h-1 bg-lavender animate-pulse"></span>
              </span>
            </div>
            <div className="border text-center border-neutral-900 bg-white w-fit px-3 sm:px-5 py-1 sm:py-2">
              <span className="text-sm sm:text-base xl:text-lg font-bold text-pink">
                {subheading.slice(0, subheadingIdx).join("")}
                <span className="inline-block w-2 sm:w-3 h-0.5 mx-1 bg-lavender animate-pulse"></span>
              </span>
            </div>
          </animated.div>
        </animated.div>

        <animated.div
          style={animatedStyles}
          className="hidden xl:block xl:col-span-1"
        >
          <animated.div
            className="w-full h-full bg-sage rounded-2xl p-5 sm:p-6 xl:p-8 border border-black"
            style={trails[2]}
          >
            <UST />
          </animated.div>
        </animated.div>
      </div>

      <animated.div
        style={animatedStyles}
        className="xl:col-span-4 xl:row-span-6 min-h-[300px] xl:h-auto order-2"
      >
        <animated.div
          className="w-full h-full bg-yellow rounded-2xl p-5 sm:p-6 xl:p-8 border border-black"
          style={trails[1]}
        >
          <Gluelabs />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="xl:col-span-8 xl:row-span-3 min-h-[300px] xl:h-auto order-3"
      >
        <animated.div
          className="w-full h-full bg-skyblue rounded-2xl p-5 sm:p-6 xl:p-8 border border-black"
          style={trails[3]}
        >
          <GluelabsIntern />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="xl:hidden min-h-[300px] order-4"
      >
        <animated.div
          className="w-full h-full bg-sage rounded-2xl p-5 sm:p-6 xl:p-8 border border-black"
          style={trails[2]}
        >
          <UST />
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
