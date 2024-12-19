import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";
import LandingPage from "./LandingPage";

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

  // News ticker items with their corresponding background colors
  const newsItems = [
    { text: "Latest Blog Post", bgColor: "bg-sage" },
    { text: "Featured Article", bgColor: "bg-pink" },
    { text: "Trending Topics", bgColor: "bg-lavender" },
    { text: "New Insights", bgColor: "bg-skyblue" },
    { text: "Community Updates", bgColor: "bg-yellow" },
    { text: "Top Stories", bgColor: "bg-peach" },
  ];

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
          <div className="absolute inset-0 flex text-black font-medium">
            <div>Circles</div>
            <div className="flex flex-col px-8 gap-2 my-auto text-black">
              <h1 className="text-2xl font-semibold">
                Revolutionizing Multi-Platform AI Integration
              </h1>
              <p>
                Effortlessly Connect Top AI Models Using Your API Keys to
                Optimize Performance at a Low Cost, Ensuring Secure and
                Efficient Integrations with Minimal Setup and Management
                Efforts.
              </p>
            </div>
          </div>
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
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
          <span className="absolute inset-0 w-full h-full bg-peach border border-neutral-900 rounded-xl"></span>
          <div className="flex flex-col absolute inset-0 gap-6 overflow-hidden">
            <div className="flex flex-col">
              <span className="flex bg-pink border-black border mt-4 rounded-tr-xl rounded-br-xl text-4xl px-4 py-4 font-bold w-2/3 items-center justify-end -translate-x-4">
                Digital
              </span>
              <span className="flex bg-sage border-black border rounded-tr-xl rounded-br-xl text-4xl px-4 py-4 font-bold w-5/6 items-center justify-end -translate-x-4 -translate-y-2">
                Asset
              </span>
              <span className="flex bg-skyblue border-black border rounded-tr-xl rounded-br-xl text-4xl px-4 py-4 font-bold w-3/4 items-center justify-end -translate-x-4 -translate-y-4">
                Manager
              </span>
            </div>
            <div className="flex flex-col px-8 gap-2 text-black">
              <h1 className="text-5xl font-semibold">Organize</h1>
              <h1 className="text-5xl font-semibold">Your Assets.</h1>

              <p className="text-xl">
                A software solution that centralizes, organizes, and facilitates
                the storage, retrieval, and sharing of digital assets such as
                images, videos, and documents.
              </p>
            </div>
          </div>
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
          <span className="absolute inset-0 w-full h-full bg-lavender border border-neutral-900 rounded-xl">
            <div className="w-full h-full p-10 flex flex-col items-center justify-center gap-3">
              <div className="border border-neutral-900 bg-white w-fit px-5 py-3">
                <span className="text-5xl font-bold text-pink" id="home">
                  {name.slice(0, nameIdx).join("")}
                  <span className="inline-block mx-2 w-6 h-1 bg-lavender animate-pulse"></span>
                </span>
              </div>
              <div className="border text-center border-neutral-900 bg-white w-fit px-5 py-2">
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
          <div className="absolute inset-0 flex flex-col text-black">
            <div className="flex flex-col px-8 py-6 gap-2 text-black">
              <h1 className="text-3xl font-semibold">Blogging Platform</h1>
              <h1 className="text-3xl font-semibold">for D2C Insights.</h1>
              <p className="text-md">
                A blogging platform that empowers direct-to-consumer (D2C)
                businesses with real-time insights and community engagement.
              </p>
            </div>
            <div className="px-8 h-16 overflow-hidden">
              <div className="news-ticker-wrapper relative whitespace-nowrap">
                <div className="news-ticker flex animate-scroll">
                  {newsItems.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center min-w-[150px] px-6 py-4 text-black font-medium border border-neutral-900 rounded-lg mx-1 ${item.bgColor}`}
                    >
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
              <style jsx global>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll 20s linear infinite;
                }
                .news-ticker-wrapper:hover .animate-scroll {
                  animation-play-state: paused;
                }
              `}</style>
            </div>
          </div>
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
          <span className="absolute inset-0 w-full h-full bg-skyblue border border-neutral-900 rounded-xl"></span>
          <div className="absolute inset-0 flex flex-col text-black">
            <div className="bg-pink w-4/5 py-12 border border-black rounded-tl-xl rounded-br-full">
              GLUE
            </div>
            <div className="flex flex-col px-8 py-4 gap-2 text-black">
              <h1 className="text-3xl font-semibold">
                Connecting Brands and Fans with Engaging AI.
              </h1>
              <p className="text-lg">
                Allows brands to create fan pages featuring AI-generated videos,
                enhancing engagement and fostering loyalty through a gamified
                rewards system.
              </p>
            </div>
          </div>
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
          <div className="absolute inset-0 flex flex-col text-black overflow-hidden">
            <div className="flex flex-col px-8 py-6 gap-2">
              <h1 className="text-xl font-semibold">
                Simplifying Customer Feedback for E-commerce.
              </h1>
              <p className="text-sm">
                A Shopify app that streamlines product review collection through
                manual email requests and automated post-purchase prompts.
              </p>
            </div>

            {/* Animated Card */}
            <div className="relative h-full card mb-5">
              <div className="absolute inset-x-20 bottom-0 rounded-xl bg-pink h-full border border-black transform left text-center">
                ⭐️
              </div>
              <div className="absolute inset-x-20 bottom-0 rounded-xl bg-lavender h-full border border-black text-center">
                ⭐️
              </div>
              <div className="absolute inset-x-20 bottom-0 rounded-xl bg-yellow h-full border border-black transform right text-center">
                ⭐️
              </div>
            </div>
          </div>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}
