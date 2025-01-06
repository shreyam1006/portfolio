"use client";
import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import GlueLabsLogo from "../../components/Images/GlueLabs.png";
import "../../styles/gluelabs.css";
import Design from "../Images/Laptop.gif";
import TeamIcon from "../Images/Team.png";
import UIIcon from "../Images/UI.png";
import UXIcon from "../Images/UX.png";
import OptimiseIcon from "../Images/Optimise.png";

export default function GluelabsIntern() {
  const [selectedCard, setSelectedCard] = useState(null);
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
      setCircleAngles((prev) => [
        (prev[0] + 0.5) % 360,
        (prev[1] + 0.4) % 360,
        (prev[2] + 0.6) % 360,
      ]);
    }, 30);

    return () => clearInterval(interval);
  }, [isMobile]);

  const baseEllipseA = isMobile ? 96 : 144;
  const baseEllipseB = isMobile ? 60 : 90;
  const centerX = "50%";
  const centerY = "38%"; // Moved up from 50% to 35%
  const rotationAngle = 15;

  const ellipses = [
    {
      a: baseEllipseA * 0.8,
      b: baseEllipseB * 0.8,
      color: "#F480A3", // pink
    },
    {
      a: baseEllipseA,
      b: baseEllipseB,
      color: "#C8D98E", // sage
    },
    {
      a: baseEllipseA * 1.2,
      b: baseEllipseB * 1.2,
      color: "#C6B1EA", // lavender
    },
  ];

  const icons = {
    optimization: (
      <Image
        src={OptimiseIcon}
        alt="Optimization"
        width={80}
        height={80}
        className="object-contain"
      />
    ),
    userExperience: (
      <Image
        src={UXIcon}
        alt="User Experience"
        width={80}
        height={80}
        className="object-contain"
      />
    ),
    interface: (
      <Image
        src={UIIcon}
        alt="Interface"
        width={80}
        height={80}
        className="object-contain"
      />
    ),
    collaboration: (
      <Image
        src={TeamIcon}
        alt="Team Collaboration"
        width={80}
        height={80}
        className="object-contain"
      />
    ),
  };

  const cards = [
    {
      id: 1,
      icon: icons.optimization,
      title: "Image Optimization",
      description:
        "Implemented efficient image handling and optimization techniques.",
      bgColor: "bg-peach",
    },
    {
      id: 2,
      icon: icons.userExperience,
      title: "User Experience",
      description:
        "Improved user experience through intuitive design solutions.",
      bgColor: "bg-pink",
    },
    {
      id: 3,
      icon: icons.interface,
      title: "UI Revamps",
      description:
        "Redesigned interfaces to enhance user interaction and feedback.",
      bgColor: "bg-sage",
    },
    {
      id: 4,
      icon: icons.collaboration,
      title: "Team Collaboration",
      description:
        "Fostered effective team collaboration and code quality practices.",
      bgColor: "bg-yellow",
    },
  ];

  return (
    <div className="h-full w-full flex justify-between">
      <div className="flex flex-col items-center w-[40%]">
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

        <div className="relative">
          <Image
            src={Design}
            alt="Work Logo"
            width={300}
            height={300}
            className="object-contain rounded-lg -mt-[38px] relative z-10"
          />
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
                      transform: `rotate(-${rotationAngle}deg)`,
                    }}
                  ></div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="h-full flex items-center w-[60%] ml-6">
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-[240px] h-[160px] ${card.bgColor} ${card.rotation}
              transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 
               relative border border-black rounded-lg
              overflow-hidden`}
              onClick={() =>
                setSelectedCard(card.id === selectedCard ? null : card.id)
              }
            >
              {/* Top part with icon and title */}
              <div
                className={`absolute inset-0 bg-inherit transition-all duration-500 ease-in-out transform
                  ${
                    selectedCard === card.id
                      ? "scale-75 -translate-y-full opacity-0"
                      : ""
                  }`}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  {card.icon}
                  <h3 className="text-xl font-semibold text-black mt-2">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Bottom part with description */}
              <div
                className={`absolute inset-0 bg-inherit transition-all duration-500 ease-in-out transform
                  ${selectedCard === card.id ? "" : "translate-y-full"}`}
              >
                <div
                  className={`flex items-center justify-center p-4 h-full
                    transition-opacity duration-300 ${
                      selectedCard === card.id ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <p className="text-black text-center">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
