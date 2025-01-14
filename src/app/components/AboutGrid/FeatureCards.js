import Misc from "../Icons/Misc";
import { animated } from "@react-spring/web";

const FeatureCards = ({ trails }) => {
  const cards = [
    {
      title: "Technical Leadership ✨",
      description:
        "Orchestrating digital symphonies with my awesome dev teams! Turning wild ideas into reality while keeping the good vibes flowing and creating experiences that make users smile.",
      color: "bg-sage",
    },
    {
      title: "Product Innovation 🚀",
      description:
        "Bringing next-gen ideas to life through clever code! Building AI-powered applications that make the digital world more exciting and user-friendly, one feature at a time.",
      color: "bg-pink",
    },
    {
      title: "Full-Stack Mastery 🎯",
      description:
        "Crafting digital experiences from front to back with passion and precision! Creating solutions that are both beautiful to look at and brilliant to use.",
      color: "bg-lavender",
    },
  ];

  return (
    <div className="grid h-full grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-5 text-black">
      {cards.map((card, index) => (
        <animated.div
          style={trails[index + 4]}
          key={index}
          className="group relative h-full"
        >
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-2 translate-y-2 bg-black rounded-xl"></span>
          <span
            className={`absolute inset-0 w-full h-full ${card.color} border border-neutral-900 rounded-xl`}
          />
          <div className="relative p-8 2xl:p-16">
            <h3 className="text-2xl 2xl:text-4xl font-bold mb-4">
              {card.title}
            </h3>
            <div className="flex items-start gap-4 flex-col lg:flex-row">
              <p className="text-black text-lg 2xl:text-xl flex-1">
                {card.description}
              </p>
              <div className="w-28 h-28 flex-shrink-0 hidden md:block">
                <Misc
                  petalColor={
                    card.color === "bg-sage"
                      ? "pink"
                      : card.color === "bg-pink"
                      ? "skyblue"
                      : "peach"
                  }
                  outerCircleColor={
                    card.color === "bg-sage"
                      ? "skyblue"
                      : card.color === "bg-pink"
                      ? "peach"
                      : "sage"
                  }
                />
              </div>
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default FeatureCards;
