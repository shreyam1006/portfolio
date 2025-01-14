"use client";

import { Fragment, useEffect, useState } from "react";
import OpenAiIcon from "../Icons/OpenAiIcon";
import GoogleAiIcon from "../Icons/GoogleAiIcon";
import AnthropicIcon from "../Icons/AnthropicIcon";
import MistralAiIcon from "../Icons/MistralAiIcon";
import GroqIcon from "../Icons/GroqIcon";

const aiServices = [
  {
    name: "OpenAI",
    color: "#C6B1EA", // lavender
    icon: <OpenAiIcon />,
  },
  {
    name: "Google AI",
    color: "#F480A3", // pink
    icon: <GoogleAiIcon />,
  },
  {
    name: "Anthropic",
    color: "#F7A474", // peach
    icon: <AnthropicIcon />,
  },
  {
    name: "Mistral AI",
    color: "#C8D98E", // sage
    icon: <MistralAiIcon />,
  },
  {
    name: "Groq",
    color: "#FFDF70", // yellow
    icon: <GroqIcon />,
  },
];

const Dashgen = () => {
  const [icons, setIcons] = useState(
    aiServices.map((service, index) => ({
      ...service,
      angle: index * (360 / aiServices.length),
      scale: 1,
    }))
  );

  const [circleAngles, setCircleAngles] = useState([0, 120, 240]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => ({
          ...icon,
          angle: (icon.angle + 0.3) % 360,
        }))
      );

      setCircleAngles((prev) => [
        (prev[0] + 0.5) % 360,
        (prev[1] + 0.4) % 360,
        (prev[2] + 0.6) % 360,
      ]);
    }, 30);

    return () => clearInterval(interval);
  }, [isMobile]);

  const baseEllipseA = isMobile ? 80 : 120;
  const baseEllipseB = isMobile ? 50 : 75;
  const centerX = "50%";
  const centerY = "50%";
  const rotationAngle = 45 + 100; // Diagonal rotation

  const ellipses = [
    {
      a: baseEllipseA * 0.8,
      b: baseEllipseB * 0.8,
      color: "#F480A3", // pastel pink
    },
    {
      a: baseEllipseA,
      b: baseEllipseB,
      color: "#C8D98E", // pastel green
    },
    {
      a: baseEllipseA * 1.2,
      b: baseEllipseB * 1.2,
      color: "#C6B1EA", // pastel blue
    },
  ];

  return (
    <Fragment>
      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform group-hover:translate-x-2 group-hover:translate-y-2 bg-black -translate-x-0 -translate-y-0 rounded-xl"></span>
      <span className="absolute inset-0 w-full h-full bg-skyblue border border-neutral-900 rounded-xl"></span>
      <div className="absolute inset-0 flex text-black">
        <div className="relative w-1/3 h-full scale-90 xl:scale-100">
          {/* AI Service Icons */}
          {icons.map((icon, index) => {
            const orbitRadius = isMobile ? 45 : 70;
            const x =
              Math.cos((icon.angle * Math.PI) / 180) * orbitRadius * icon.scale;
            const y =
              Math.sin((icon.angle * Math.PI) / 180) * orbitRadius * icon.scale;

            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: "40%",
                  top: "40%",
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full border border-black flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                  style={{
                    backgroundColor: icon.color,
                  }}
                >
                  {icon.icon}
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative flex flex-col px-8 gap-2 my-auto text-black w-2/3">
          {/* Elliptical animations in the right section */}
          {ellipses.map((ellipse, index) => {
            const x =
              Math.cos((circleAngles[index] * Math.PI) / 180) * ellipse.a;
            const y =
              Math.sin((circleAngles[index] * Math.PI) / 180) * ellipse.b;

            return (
              <Fragment key={index}>
                {/* Elliptical path */}
                <svg
                  className="absolute"
                  style={{
                    left: centerX,
                    top: centerY,
                    transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`,
                    width: `${ellipse.a * 2}px`,
                    height: `${ellipse.b * 2}px`,
                  }}
                >
                  <ellipse
                    cx={ellipse.a}
                    cy={ellipse.b}
                    rx={ellipse.a}
                    ry={ellipse.b}
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                    opacity="0.15"
                  />
                </svg>

                {/* Moving circle */}
                <div
                  className="absolute"
                  style={{
                    left: centerX,
                    top: centerY,
                    transform: `translate(-50%, -50%) rotate(${rotationAngle}deg) translate(${x}px, ${y}px)`,
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full border border-black"
                    style={{
                      backgroundColor: ellipse.color,
                      opacity: 0.8,
                      transform: `rotate(-${rotationAngle}deg)`, // Counter-rotate the circle to keep it upright
                    }}
                  ></div>
                </div>
              </Fragment>
            );
          })}

          {/* Text content */}
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-4xl lg:text-2xl xl:text-3xl text-black font-semibold pb-2">
              Revolutionizing Multi-Platform AI Integration.
            </h2>
            <p className="text-xs sm:text-sm xl:text-base">
              Effortlessly Connect Top AI Models Using Your API Keys to Optimize
              Performance at a Low Cost, Ensuring Secure and Efficient
              Integrations with Minimal Setup and Management Efforts.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashgen;
