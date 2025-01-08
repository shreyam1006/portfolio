import React from "react";
import Image from "next/image";
import ME from "../Images/ME2.png";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../../constants";

const AboutGrid = ({ setCurrentGrid, animatedStyles }) => {
  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  const skillsLine1 = [
    "Web Development",
    "Frontend Development",
    "ReactJs",
    "NextJs",
    "Javascript",
    "Typescript",
    "TailwindCSS",
    "Material",
    "Headless UI",
    "Redux",
    "React Query",
    "Zustand",
    "NodeJs",
    "NestJs",
    "GraphQL",
    "REST",
    "PostgreSQL",
  ];

  return (
    <div className="min-h-screen bg-stone-200 px-8 py-4 border border-black text-black">
      <div className="flex justify-between items-center mb-6 gap-4">
        <animated.div
          style={animatedStyles}
          onClick={() => setCurrentGrid(GRIDS[0])}
          className="group relative w-full"
        >
          <animated.div style={trails[0]} className="h-full w-full">
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-3 translate-y-3 bg-black rounded-xl"></span>
            <span className="absolute inset-0 w-full h-full bg-skyblue border border-neutral-900 rounded-xl"></span>
            <div className="relative p-8">
              <div className="max-w-2xl">
                <h1 className="text-8xl font-bold my-4">
                  See whats in
                  <br />
                  it for you
                </h1>
                <p className="text-black mb-8">
                  Since 2005, we have been giving advice to people around
                </p>
                <div className="flex gap-4">
                  <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 border border-black hover:scale-105 transition-transform duration-300">
                    Discover Now
                    <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full border border-black"></span>
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border border-black rounded-full hover:scale-105 transition-transform duration-300 my-4">
                    <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                      ▶
                    </div>
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </animated.div>
        </animated.div>

        {/* Right Image Block */}
        <animated.div
          style={animatedStyles}
          onClick={() => setCurrentGrid(GRIDS[0])}
          className="group relative"
        >
          <animated.div style={trails[1]} className="h-full w-full">
            <div className="relative p-8">
              <div className="relative">
                <div className="w-[420px] h-[420px] flex items-center justify-center relative rounded-full border border-black bg-pink">
                  <Image
                    src={ME}
                    alt="Profile"
                    width={1200}
                    height={1200}
                    className="object-cover absolute rounded-2xl scale-125"
                    style={{ objectPosition: "center" }}
                  />
                </div>
              </div>
            </div>
          </animated.div>
        </animated.div>
      </div>

      {/* Services Ticker */}
      <animated.div style={animatedStyles} className="mb-4">
        <animated.div style={trails[2]} className="h-full w-full">
          <div className="group relative flex overflow-x-hidden">
            <div className="flex animate-marquee3 group-hover:pause whitespace-nowrap">
              {[...skillsLine1, ...skillsLine1].map((service, index) => (
                <span
                  key={`first-${index}`}
                  className={`inline-block px-6 py-3 rounded-lg text-sm font-medium border border-black mx-1 ${
                    index % 4 === 0
                      ? "bg-sage text-black"
                      : index % 4 === 1
                      ? "bg-pink text-black"
                      : index % 4 === 2
                      ? "bg-skyblue text-black"
                      : "bg-yellow text-black"
                  }`}
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="flex absolute top-0 animate-marquee4  group-hover:pause whitespace-nowrap">
              {[...skillsLine1, ...skillsLine1].map((service, index) => (
                <span
                  key={`second-${index}`}
                  className={`inline-block px-6 py-3 rounded-lg text-sm font-medium border border-black mx-1 ${
                    index % 4 === 0
                      ? "bg-sage text-black"
                      : index % 4 === 1
                      ? "bg-pink text-black"
                      : index % 4 === 2
                      ? "bg-skyblue text-black"
                      : "bg-yellow text-black"
                  }`}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </animated.div>
      </animated.div>

      {/* Feature Cards */}
      <animated.div
        style={animatedStyles}
        className="grid grid-cols-3 gap-8 text-black"
      >
        {[
          {
            title: "Creative Ideas",
            color: "bg-sage",
          },
          {
            title: "Market Research",
            color: "bg-pink",
          },
          {
            title: "Best Solutions",
            color: "bg-lavender",
          },
        ].map((card, index) => (
          <animated.div
            style={trails[index + 4]}
            key={index}
            className="group relative"
          >
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-2 translate-y-2 bg-black rounded-xl"></span>
            <span
              className={`absolute inset-0 w-full h-full ${card.color} border border-neutral-900 rounded-xl`}
            ></span>
            <div className="relative p-8">
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-black">
                Purchase or Refinance your mortgage today. Get the best rates &
                services.
              </p>
            </div>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default AboutGrid;
