"use client";
import React, { useState } from "react";
import Image from "next/image";
import GlueLabsLogo from "../../components/Images/GlueLabs.png";
import "../../styles/gluelabs.css";
import Design from "../Images/Laptop.gif";

export default function GluelabsIntern() {
  const [selectedCard, setSelectedCard] = useState(null);

  const icons = {
    optimization: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
        <g id="optimization_group" transform="translate(50,50) scale(1,1)">
          {/* Loading Bar */}
          <rect
            x="-30"
            y="-5"
            width="60"
            height="10"
            fill="#E0E0E0"
            stroke="#000"
          />
          <rect
            x="-30"
            y="-5"
            width="40"
            height="10"
            fill="#3498DB"
            stroke="#000"
          />

          {/* Speed Indicators */}
          <path d="M-20,-15 L-10,-15 L-15,-25 Z" fill="#2ECC71" />
          <path d="M0,-15 L10,-15 L5,-25 Z" fill="#F1C40F" />
          <path d="M20,-15 L30,-15 L25,-25 Z" fill="#E74C3C" />

          {/* Download Symbol */}
          <path
            d="M0,15 L0,35 M-10,25 L0,35 L10,25"
            stroke="#000"
            strokeWidth="2"
          />
        </g>
      </svg>
    ),
    userExperience: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
        <g id="ux_group" transform="translate(50,50) scale(1,1)">
          {/* User Icon */}
          <circle cx="0" cy="-15" r="10" fill="#3498DB" stroke="#000" />
          <path
            d="M-15,15 Q-15,35 0,35 Q15,35 15,15"
            fill="#3498DB"
            stroke="#000"
          />

          {/* Satisfaction Indicators */}
          <path
            d="M-25,0 L-35,0 M-35,-5 L-35,5"
            stroke="#2ECC71"
            strokeWidth="2"
          />
          <path d="M25,0 L35,0 M35,-5 L35,5" stroke="#2ECC71" strokeWidth="2" />

          {/* Interaction Arrows */}
          <path
            d="M-20,-20 C-30,-10 -30,10 -20,20"
            stroke="#F1C40F"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M20,-20 C30,-10 30,10 20,20"
            stroke="#F1C40F"
            strokeWidth="2"
            fill="none"
          />
        </g>
      </svg>
    ),
    interface: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
        <g id="interface_group" transform="translate(50,50) scale(1,1)">
          {/* Window Frame */}
          <rect
            x="-30"
            y="-30"
            width="60"
            height="60"
            rx="5"
            fill="#ECF0F1"
            stroke="#000"
          />

          {/* UI Elements */}
          <rect x="-25" y="-20" width="40" height="5" rx="2" fill="#3498DB" />
          <rect x="-25" y="-10" width="50" height="5" rx="2" fill="#E74C3C" />
          <rect x="-25" y="0" width="30" height="5" rx="2" fill="#2ECC71" />

          {/* Interactive Elements */}
          <circle cx="20" cy="20" r="5" fill="#F1C40F" stroke="#000" />
          <rect
            x="-25"
            y="15"
            width="35"
            height="10"
            rx="3"
            fill="#9B59B6"
            stroke="#000"
          />
        </g>
      </svg>
    ),
    collaboration: (
      <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
        <g id="collaboration_group" transform="translate(50,50) scale(1,1)">
          {/* Team Members */}
          <circle cx="-20" cy="-20" r="8" fill="#3498DB" stroke="#000" />
          <circle cx="20" cy="-20" r="8" fill="#E74C3C" stroke="#000" />
          <circle cx="-20" cy="20" r="8" fill="#2ECC71" stroke="#000" />
          <circle cx="20" cy="20" r="8" fill="#F1C40F" stroke="#000" />

          {/* Connection Lines */}
          <path
            d="M-20,-20 L20,-20 L20,20 L-20,20 L-20,-20"
            stroke="#000"
            strokeWidth="1"
            strokeDasharray="4,4"
            fill="none"
          />
          <path
            d="M-20,-20 L20,20 M20,-20 L-20,20"
            stroke="#000"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
        </g>
      </svg>
    ),
  };

  const cards = [
    {
      id: 1,
      icon: icons.optimization,
      title: "Image Optimization",
      description:
        "Implemented efficient image handling and optimization techniques.",
      bgColor: "bg-lavender",
      rotation: "-rotate-2",
    },
    {
      id: 2,
      icon: icons.userExperience,
      title: "User Experience",
      description:
        "Improved user experience through intuitive design solutions.",
      bgColor: "bg-yellow",
      rotation: "rotate-1",
    },
    {
      id: 3,
      icon: icons.interface,
      title: "UI Revamps",
      description:
        "Redesigned interfaces to enhance user interaction and feedback.",
      bgColor: "bg-sage",
      rotation: "-rotate-1",
    },
    {
      id: 4,
      icon: icons.collaboration,
      title: "Team Collaboration",
      description:
        "Fostered effective team collaboration and code quality practices.",
      bgColor: "bg-peach",
      rotation: "rotate-2",
    },
  ];

  return (
    <div className="h-full w-full flex justify-between">
      <div className="flex flex-col items-center w-1/3">
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
            <span className="font-medium text-black">Sep 2021</span>
            <span className="text-black">-</span>
            <span className="font-medium text-black">Sep 2022</span>
          </div>
        </div>
        <div className="cursor-pointer hover:scale-105 transition-all bg-white w-full px-5 py-2 mb-4 border border-black text-center">
          <h2 className="font-neutral-900 text-3xl font-bold text-pink">
            Software Development
          </h2>
          <h2 className="font-neutral-900 text-3xl font-bold text-pink">
            Engineer Intern
          </h2>
        </div>

        <Image
          src={Design}
          alt="Work Logo"
          width={250}
          height={250}
          className="object-contain rounded-lg -mt-[38px]"
        />
      </div>
      <div className="h-full flex items-center w-2/3 ml-6">
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-[250px] h-[160px] ${card.bgColor} ${card.rotation}
              transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 
              shadow-lg relative before:content-[''] before:w-4 before:h-4 
              before:bg-white before:border before:border-black before:absolute before:top-2 before:left-1/2 
              before:-translate-x-1/2 before:rounded-full before:shadow-sm  border border-black
              px-4 py-2`}
              onClick={() =>
                setSelectedCard(card.id === selectedCard ? null : card.id)
              }
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mt-4">
                  {card.icon}
                  <h3 className="text-lg font-semibold text-black">
                    {card.title}
                  </h3>
                </div>
                <p className="text-black mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
