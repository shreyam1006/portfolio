import { useTrail, animated, easings } from "@react-spring/web";
import { useRouter } from "next/navigation";
import { GRIDS, ROUTES } from "../../constants";
import HeaderSection from "./HeaderSection";
import ProfileImage from "./ProfileImage";
import SkillsTicker from "./SkillsTicker";
import FeatureCards from "./FeatureCards";

const AboutGrid = ({ setCurrentGrid, animatedStyles }) => {
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
    <div className="min-h-screen bg-stone-200 px-8 pt-4 pb-10 md:py-4 border border-black text-black">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
        <animated.div
          style={animatedStyles}
          onClick={() =>
            setCurrentGrid ? setCurrentGrid(GRIDS[0]) : router.push(ROUTES.HOME)
          }
          className="group relative w-full"
        >
          <animated.div style={trails[0]} className="h-full w-full">
            <HeaderSection />
          </animated.div>
        </animated.div>

        <animated.div
          style={animatedStyles}
          onClick={() =>
            setCurrentGrid ? setCurrentGrid(GRIDS[0]) : router.push(ROUTES.HOME)
          }
          className="group relative"
        >
          <animated.div style={trails[1]} className="h-full w-full">
            <ProfileImage />
          </animated.div>
        </animated.div>
      </div>

      <animated.div style={animatedStyles} className="mb-4">
        <animated.div style={trails[2]} className="h-full w-full">
          <SkillsTicker />
        </animated.div>
      </animated.div>

      <animated.div style={animatedStyles}>
        <FeatureCards trails={trails} />
      </animated.div>
    </div>
  );
};

export default AboutGrid;
