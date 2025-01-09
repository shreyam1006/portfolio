import React from "react";
import Misc from "../Misc";
import Image from "next/image";
import ME from "../Images/ME2.png";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";

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
    <div className="min-h-screen bg-stone-200 px-8 pt-4 pb-10 md:py-4 border border-black text-black">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
        <animated.div
          style={animatedStyles}
          onClick={() => setCurrentGrid(GRIDS[0])}
          className="group relative w-full"
        >
          <animated.div style={trails[0]} className="h-full w-full">
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-3 translate-y-3 bg-black rounded-xl"></span>
            <span className="absolute inset-0 w-full h-full bg-skyblue border border-neutral-900 rounded-xl"></span>
            <div className="relative px-8 md:px-12 py-10">
              <div className="border-2 border-black border-dotted rounded-lg bg-pink w-fit px-4 py-1 font-semibold text-2xl text-black">
                About
              </div>
              <div className="">
                <p className="text-black text-4xl mt-3">Hi 👋🏻, I am</p>
                <h2 className="text-5xl md:text-7xl font-bold my-4 max-w-2xl">
                  Shreya Maheshwari
                </h2>
                <p className="text-black text-3xl md:text-4xl mb-4 font-medium">
                  Software Development Engineer
                </p>
                <p className="text-black text-xl mb-8">
                  A software developer who loves turning ideas to exciting web
                  applications.
                  <br />
                  With 3+ years of experience, I specialize in creating digital
                  experiences that feels like touching grass.
                </p>
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/shreyam1006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-yellow flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="text-black"
                    />
                  </a>
                  <a
                    href="https://github.com/shreyam1006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-sage flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-black" />
                  </a>
                  <a
                    href="https://www.instagram.com/shreyaamaheshwary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-black"
                    />
                  </a>
                  <a
                    href="mailto:shreya.maheshwari.2000@gmail.com"
                    className="w-12 h-12 bg-peach flex items-center justify-center text-xl transition-all hover:scale-110 cursor-pointer border border-black rounded-lg"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="text-black" />
                  </a>
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
                <div className="w-28 md:w-32 h-16 z-20 -right-6 -md:right-12 rounded-full border-2 border-black top-16 bg-yellow absolute">
                  <div
                    className="bg-lavender w-20 h-3 rounded-full mt-4 ml-5 border border-black animate-slide-line"
                    style={{ animationDuration: "2s" }}
                  ></div>
                  <div
                    className="bg-skyblue w-10 h-3 rounded-full mt-2 ml-5 border border-black animate-slide-line"
                    style={{ animationDelay: "2s", animationDuration: "2s" }}
                  ></div>
                </div>
                <FontAwesomeIcon
                  icon={faStar}
                  className="absolute -top-1 left-12 text-yellow text-2xl animate-star-scale z-10"
                  style={{
                    filter:
                      "drop-shadow(1px 0 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black)",
                  }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="absolute top-6 left-5 text-peach text-2xl animate-star-scale z-10"
                  style={{
                    animationDelay: "0.5s",
                    filter:
                      "drop-shadow(1px 0 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black)",
                  }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="absolute top-8 left-16 text-lavender text-2xl animate-star-scale z-10"
                  style={{
                    animationDelay: "1s",
                    filter:
                      "drop-shadow(1px 0 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black)",
                  }}
                />
                <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center relative rounded-full border-2 border-black bg-pink">
                  <Image
                    src={ME}
                    alt="Profile"
                    width={1200}
                    height={1200}
                    className="object-cover absolute rounded-2xl md:scale-125"
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
        className="grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-5 text-black"
      >
        {[
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
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <div className="flex items-start gap-4 flex-col lg:flex-row">
                <p className="text-black text-lg flex-1">{card.description}</p>
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
      </animated.div>
    </div>
  );
};

export default AboutGrid;
