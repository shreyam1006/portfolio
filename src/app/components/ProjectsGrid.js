import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";
import LandingPage from "./LandingPage";
import Xg from "./ProjectsGrid/Xg";
import Dashgen from "./ProjectsGrid/Dashgen";
import Dam from "./ProjectsGrid/Dam";
import Fifo from "./ProjectsGrid/Fifo";
import Glue from "./ProjectsGrid/Glue";
import ReviewMate from "./ProjectsGrid/ReviewMate";
import Heading from "./ProjectsGrid/Heading";

export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
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
          <Xg />
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
          <Dashgen />
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-6 "
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
        onClick={() => setCurrentGrid(GRIDS[0])}
        className="row-start-1 lg:col-span-3 lg:row-span-3"
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
        className="lg:row-span-3 lg:col-span-3"
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
        className="lg:row-span-3 lg:col-span-4"
      >
        <animated.div
          style={trails[5]}
          className="group relative w-full h-full"
        >
          <Glue />
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
          <ReviewMate />
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
