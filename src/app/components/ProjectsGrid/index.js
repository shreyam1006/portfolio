import { useTrail, animated, easings } from "@react-spring/web";
import { useRouter } from "next/navigation";
import { GRIDS, ROUTES } from "../../constants";
import Xg from "./Xg";
import Dashgen from "./Dashgen";
import Dam from "./Dam";
import Fifo from "./Fifo";
import Glue from "./Glue";
import ReviewMate from "./ReviewMate";
import Heading from "./Heading";

export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
  const router = useRouter();
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
    <animated.div className="grid grid-cols-1 min-h-screen lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-stone-200">
      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-5 min-h-[500px] sm:min-h-[300px] lg:min-h-[250px]"
      >
        <animated.div
          style={trails[1]}
          className="group relative w-full h-full"
        >
          <Xg />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-4 min-h-[300px] sm:min-h-[250px]"
      >
        <animated.div
          style={trails[3]}
          className="group relative w-full h-full"
          onClick={() => window.open("https://dashgen.in", "_blank")}
        >
          <Dashgen />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-6 min-h-[500px] lg:min-h-[250px]"
      >
        <animated.div
          style={trails[2]}
          className="group relative w-full h-full"
        >
          <Dam />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        onClick={() =>
          setCurrentGrid ? setCurrentGrid(GRIDS[0]) : router.push(ROUTES.HOME)
        }
        className="order-first lg:order-none lg:col-span-3 lg:row-span-3  min-h-[250px]"
      >
        <animated.div
          style={trails[0]}
          className="group relative w-full h-full"
        >
          <Heading />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-3  min-h-[250px]"
      >
        <animated.div
          style={trails[4]}
          className="group relative w-full h-full"
        >
          <Fifo />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-4  min-h-[250px]"
      >
        <animated.div
          style={trails[5]}
          className="group relative w-full h-full"
          onClick={() => window.open("https://glue.is", "_blank")}
        >
          <Glue />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-2 min-h-[250px] sm:min-h-[200px] lg:min-h-[250px]"
      >
        <animated.div
          style={trails[4]}
          className="group relative w-full h-full"
        >
          <ReviewMate />
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
