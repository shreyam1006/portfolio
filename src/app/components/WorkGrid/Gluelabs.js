"use client";
import React, { useState } from "react";
import Image from "next/image";
import GlueLabsLogo from "../../components/Images/GlueLabs.png";
import Puzzle from "../Icons/Puzzle";
import TeamIcon from "../Images/Team Icon.png";
import DesignIllustration from "../Images/Design Illustration.png";
import ProjectManagementIcon from "../Images/Project Management Icon.png";
import SEOOptimizationIcon from "../Images/SEO Optimization Icon.png";
import FullStackProgrammer from "../Images/Full Stack Programmer.png";

export default function Gluelabs() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      icon: TeamIcon,
      iconAlt: "Team Leadership",
      title: "Team Leadership",
      description: "Managed development teams and technical initiatives.",
      bgColor: "bg-lavender",
      rotation: "-rotate-6",
      translateX: "-translate-x-24",
      translateY: "translate-y-0",
    },
    {
      id: 2,
      icon: DesignIllustration,
      iconAlt: "UI/UX Design",
      title: "UI/UX Design",
      description: "Crafted intuitive user interfaces and experiences.",
      bgColor: "bg-peach",
      rotation: "-rotate-3",
      translateX: "-translate-x-12",
      translateY: "translate-y-0",
    },
    {
      id: 3,
      icon: ProjectManagementIcon,
      iconAlt: "Innovation Projects",
      title: "Innovation Projects",
      description: "Implemented cutting-edge technology solutions.",
      bgColor: "bg-sage",
      rotation: "rotate-0",
      translateX: "translate-x-0",
      translateY: "translate-y-0",
    },
    {
      id: 4,
      icon: SEOOptimizationIcon,
      iconAlt: "Performance Optimization",
      title: "Performance Optimization",
      description: "Enhanced system efficiency and user experience.",
      bgColor: "bg-skyblue",
      rotation: "rotate-3",
      translateX: "translate-x-12",
      translateY: "translate-y-0",
    },
    {
      id: 5,
      icon: FullStackProgrammer,
      iconAlt: "Full Stack Development",
      title: "Full Stack Development",
      description: "Built robust features across entire tech stack.",
      bgColor: "bg-pink",
      rotation: "rotate-6",
      translateX: "translate-x-24",
      translateY: "translate-y-0",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex justify-between items-center mb-4 w-full">
          <div className="flex items-center gap-2">
            <Image
              src={GlueLabsLogo}
              alt="Glue Labs Logo"
              width={24}
              height={24}
            />
            <h3 className="text-xl font-semibold text-black">Glue Labs</h3>
          </div>

          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-xl border border-dashed border-black">
            <span className="font-medium text-black">September 2022</span>
            <span className="text-black">-</span>
            <span className="font-medium text-black">Present</span>
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 transition-all bg-white w-full px-5 py-2 border border-black text-center max-w-2xl">
          <h2 className="font-neutral-900 text-3xl font-bold text-pink">
            Software
          </h2>
          <h2 className="font-neutral-900 text-3xl font-bold text-pink">
            Development Engineer
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row xl:flex-col flex-1 items-center">
        <div className="relative md:w-1/2 xl:w-full flex items-center justify-center scale-90 sm:scale-100">
          {/* Sparkle Animation SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 400 400"
          >
            <g>
              {/* 8-pointed diamonds */}
              <g
                className="animate-scale"
                style={{ transformOrigin: "center", transformBox: "fill-box" }}
              >
                <path
                  d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
                  fill="#B6CDDC"
                  stroke="#000"
                  transform="translate(20, 50) scale(1)"
                />
              </g>

              <g
                className="animate-scale [animation-delay:400ms]"
                style={{ transformOrigin: "center", transformBox: "fill-box" }}
              >
                <path
                  d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
                  fill="#C8D98E"
                  stroke="#000"
                  transform="translate(320, 150) scale(1)"
                />
              </g>

              <g
                className="animate-scale [animation-delay:800ms]"
                style={{ transformOrigin: "center", transformBox: "fill-box" }}
              >
                <path
                  d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
                  fill="#C6B1EA"
                  stroke="#000"
                  transform="translate(200, 20) scale(1)"
                />
              </g>

              <g
                className="animate-scale [animation-delay:1200ms]"
                style={{ transformOrigin: "center", transformBox: "fill-box" }}
              >
                <path
                  d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
                  fill="#F480A3"
                  stroke="#000"
                  transform="translate(50, 320) scale(1)"
                />
              </g>

              <g
                className="animate-scale [animation-delay:1600ms]"
                style={{ transformOrigin: "center", transformBox: "fill-box" }}
              >
                <path
                  d="M25,0 L30,16.67 41.67,11.67 35,25 50,30 35,35 41.67,48.33 30,43.33 25,60 20,43.33 8.33,48.33 15,35 0,30 15,25 8.33,11.67 20,16.67 25,0Z"
                  fill="#F7A474"
                  stroke="#000"
                  transform="translate(320, 280) scale(1)"
                />
              </g>
            </g>
          </svg>
          <Puzzle width={350} height={350} />
        </div>

        {/* Cards Container */}
        <div className="relative h-[280px] md:h-[240px] flex items-center scale-75 sm:scale-100 justify-center md:w-1/2 xl:w-full">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() =>
                setSelectedCard(selectedCard === card.id ? null : card.id)
              }
              className={`absolute w-44 h-52 cursor-pointer transition-all duration-700 ease-in-out ${
                selectedCard === null
                  ? `${card.rotation} ${card.translateX} ${card.translateY}`
                  : ""
              } ${
                selectedCard === card.id
                  ? "z-50 scale-110 card-selected transition-transform duration-500 ease-out"
                  : ""
              } ${
                selectedCard !== null && selectedCard !== card.id
                  ? "opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out"
                  : ""
              }`}
              style={{ transformOrigin: "center center" }}
            >
              {/* Folder Tab */}
              <div
                className={`h-8 w-32 ${card.bgColor} border border-black rounded-t-lg mx-auto -mb-1 z-10`}
              />

              {/* Main Folder */}
              <div
                className={`h-full ${card.bgColor} border border-black rounded-lg p-4 relative`}
              >
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="bg-white/50 rounded-lg p-2 w-36 h-44">
                    <div className="text-black mb-1 flex justify-center">
                      <Image
                        src={card.icon}
                        alt={card.iconAlt}
                        width={40}
                        height={40}
                      />
                    </div>
                    <h4 className="font-bold text-black text-center mb-2">
                      {card.title}
                    </h4>
                    <p className="text-sm text-black text-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
