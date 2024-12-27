"use client";
import React, { useState } from "react";
import Image from "next/image";
import GlueLabsLogo from "../../components/Images/GlueLabs.png";
import "../../styles/gluelabs.css";
import Puzzle from "../Icons/Puzzle";

export default function Gluelabs() {
  const [selectedCard, setSelectedCard] = useState(null);

  const icons = {
    leadership: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
        <g id="leadership_group" transform="translate(50,50) scale(0,0)">
          {/* Central Leader */}
          <circle cx="0" cy="0" r="12" fill="#3498DB" stroke="#000" />
          <path d="M-4,-4 L4,4 M-4,4 L4,-4" stroke="#FFF" strokeWidth="2" />

          {/* Team Members */}
          <circle cx="-20" cy="15" r="8" fill="#E74C3C" stroke="#000" />
          <circle cx="20" cy="15" r="8" fill="#2ECC71" stroke="#000" />
          <circle cx="-20" cy="-15" r="8" fill="#F1C40F" stroke="#000" />
          <circle cx="20" cy="-15" r="8" fill="#9B59B6" stroke="#000" />

          {/* Connection Lines */}
          <path
            d="M0,0 L-20,15 M0,0 L20,15 M0,0 L-20,-15 M0,0 L20,-15"
            stroke="#000"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
        </g>
      </svg>
    ),
    design: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
        <g id="design_group" transform="translate(50,50) scale(0,0)">
          {/* Color Palette */}
          <circle cx="-15" cy="-15" r="8" fill="#FF6B6B" stroke="#000" />
          <circle cx="0" cy="-15" r="8" fill="#4ECDC4" stroke="#000" />
          <circle cx="15" cy="-15" r="8" fill="#FFD93D" stroke="#000" />

          {/* Design Tools */}
          <rect
            x="-20"
            y="5"
            width="40"
            height="25"
            rx="2"
            fill="#95A5A6"
            stroke="#000"
          />
          <circle cx="0" cy="17.5" r="8" fill="#E74C3C" stroke="#000" />

          {/* Ruler */}
          <rect
            x="-25"
            y="-5"
            width="50"
            height="5"
            fill="#BDC3C7"
            stroke="#000"
          />
          {[-20, -10, 0, 10, 20].map((x) => (
            <line
              key={x}
              x1={x}
              y1="-5"
              x2={x}
              y2="0"
              stroke="#000"
              strokeWidth="1"
            />
          ))}
        </g>
      </svg>
    ),
    innovation: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
        <g id="innovation_group" transform="translate(50,50) scale(0,0)">
          {/* Lightbulb */}
          <path
            d="M-15,15 Q-15,-15 0,-15 Q15,-15 15,15"
            fill="#F1C40F"
            stroke="#000"
          />
          <rect
            x="-10"
            y="15"
            width="20"
            height="10"
            fill="#BDC3C7"
            stroke="#000"
          />

          {/* Sparks */}
          <path d="M-25,-5 L-15,0 L-25,5" stroke="#E74C3C" strokeWidth="2" />
          <path d="M25,-5 L15,0 L25,5" stroke="#E74C3C" strokeWidth="2" />
          <path d="M0,-30 L0,-20" stroke="#E74C3C" strokeWidth="2" />

          {/* Innovation Circles */}
          <circle cx="-20" cy="-20" r="5" fill="#3498DB" stroke="#000" />
          <circle cx="20" cy="-20" r="5" fill="#2ECC71" stroke="#000" />
        </g>
      </svg>
    ),
    performance: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
        <g id="performance_group" transform="translate(50,50) scale(0,0)">
          {/* Speedometer Base */}
          <path
            d="M-30,10 A30,30 0 0,1 30,10"
            fill="none"
            stroke="#E74C3C"
            strokeWidth="4"
          />

          {/* Speed Markers */}
          <circle cx="-25" cy="8" r="3" fill="#3498DB" />
          <circle cx="-15" cy="0" r="3" fill="#F1C40F" />
          <circle cx="0" cy="-5" r="3" fill="#2ECC71" />
          <circle cx="15" cy="0" r="3" fill="#F1C40F" />
          <circle cx="25" cy="8" r="3" fill="#3498DB" />

          {/* Needle */}
          <path
            d="M0,10 L15,-15 L0,-5 L-15,-15 Z"
            fill="#E74C3C"
            stroke="#000"
          />

          {/* Center Point */}
          <circle cx="0" cy="10" r="5" fill="#2C3E50" stroke="#000" />

          {/* Speed Lines */}
          <path d="M35,-10 L45,-15" stroke="#3498DB" strokeWidth="2" />
          <path d="M-35,-10 L-45,-15" stroke="#3498DB" strokeWidth="2" />
        </g>
      </svg>
    ),
    fullstack: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
        <g id="fullstack_group" transform="translate(50,50) scale(0,0)">
          {/* Frontend Layer */}
          <rect
            x="-25"
            y="-25"
            width="50"
            height="20"
            rx="2"
            fill="#3498DB"
            stroke="#000"
          />
          <text x="-15" y="-12" fill="#FFF" fontSize="12" fontWeight="bold">
            {"</>"}
          </text>

          {/* Backend Layer */}
          <rect
            x="-25"
            y="5"
            width="50"
            height="20"
            rx="2"
            fill="#2ECC71"
            stroke="#000"
          />
          <text x="-15" y="18" fill="#FFF" fontSize="12" fontWeight="bold">
            {"{}"}
          </text>

          {/* Connection Lines */}
          <path
            d="M-20,-5 L-20,5"
            stroke="#E74C3C"
            strokeWidth="2"
            strokeDasharray="2,2"
          />
          <path
            d="M0,-5 L0,5"
            stroke="#F1C40F"
            strokeWidth="2"
            strokeDasharray="2,2"
          />
          <path
            d="M20,-5 L20,5"
            stroke="#9B59B6"
            strokeWidth="2"
            strokeDasharray="2,2"
          />

          {/* Stack Dots */}
          <circle cx="-20" cy="0" r="2" fill="#E74C3C" />
          <circle cx="0" cy="0" r="2" fill="#F1C40F" />
          <circle cx="20" cy="0" r="2" fill="#9B59B6" />
        </g>
      </svg>
    ),
  };

  const cards = [
    {
      id: 1,
      icon: icons.leadership,
      title: "Team Leadership",
      description: "Managed development teams and technical initiatives.",
      bgColor: "bg-lavender",
      rotation: "-rotate-6",
      translateX: "-translate-x-24",
      translateY: "translate-y-0",
    },
    {
      id: 2,
      icon: icons.design,
      title: "UI/UX Design",
      description: "Crafted intuitive user interfaces and experiences.",
      bgColor: "bg-peach",
      rotation: "-rotate-3",
      translateX: "-translate-x-12",
      translateY: "translate-y-0",
    },
    {
      id: 3,
      icon: icons.innovation,
      title: "Innovation Projects",
      description: "Implemented cutting-edge technology solutions.",
      bgColor: "bg-sage",
      rotation: "rotate-0",
      translateX: "translate-x-0",
      translateY: "translate-y-0",
    },
    {
      id: 4,
      icon: icons.performance,
      title: "Performance Optimization",
      description: "Enhanced system efficiency and user experience.",
      bgColor: "bg-yellow",
      rotation: "rotate-3",
      translateX: "translate-x-12",
      translateY: "translate-y-0",
    },
    {
      id: 5,
      icon: icons.fullstack,
      title: "Full Stack Development",
      description: "Built robust features across entire tech stack.",
      bgColor: "bg-pink",
      rotation: "rotate-6",
      translateX: "translate-x-24",
      translateY: "translate-y-0",
    },
  ];

  return (
    <div className="h-full flex flex-col items-center">
      {/* Header */}

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
      <div className="cursor-pointer hover:scale-105 transition-all bg-white w-full px-5 py-2 mb-4 border border-black text-center">
        <h2 className="font-neutral-900 text-3xl font-bold text-pink">
          Software
        </h2>
        <h2 className="font-neutral-900 text-3xl font-bold text-pink">
          Development Engineer
        </h2>
      </div>

      <div className="relative">
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
                fill="#FFDF70"
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
      <div className="relative h-[380px] flex items-center justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() =>
              setSelectedCard(selectedCard === card.id ? null : card.id)
            }
            className={`absolute w-48 h-60 cursor-pointer transition-all duration-700 ease-in-out ${
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
                <div className="bg-white/50 rounded-lg p-4 w-40 h-48">
                  <div className="text-black mb-1 flex justify-center">
                    {card.icon}
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
  );
}
