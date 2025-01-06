"use client";
import React, { useState } from "react";
import USTLogo from "../Images/UST.png";
import Image from "next/image";
import DuckSticker1 from "../Images/1.gif";
import DuckSticker2 from "../Images/2.gif";
import DuckSticker3 from "../Images/3.gif";
import DuckSticker4 from "../Images/4.gif";
import DuckSticker5 from "../Images/5.gif";
import MLIcon from "../Icons/MLIcon";
import AnalyticsIcon from "../Icons/AnalyticsIcon";

const FlipContainer = ({ frontContent, backContent, bgColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-container">
      <div
        className={`relative h-40 preserve-3d cursor-pointer ${bgColor} rounded-lg transition-all duration-600 ${
          isFlipped ? "animate-flip-forward" : "animate-flip-backward"
        }`}
        onClick={handleFlip}
      >
        <div className="h-40 flex hover:scale-105 transition-all duration-300 flex-col items-center gap-2 bg-inherit border border-black rounded-md backface-hidden text-black">
          {frontContent}
        </div>
        <div className="h-40 absolute inset-0 flex flex-col items-center justify-center gap-2 bg-inherit border border-black text-black rounded-md backface-hidden [transform:rotateY(180deg)]">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default function UST() {
  const cards = [
    {
      id: 1,
      title: "Project Overview",
      description:
        "Developed ML models for MBTI personality prediction using text data with 85% accuracy target.",
      bgColor: "bg-yellow",
    },
    {
      id: 2,
      title: "Model Evaluation",
      description:
        "Analyzed and fine-tuned personality prediction models to achieve 96% accuracy.",
      bgColor: "bg-skyblue",
    },
  ];

  return (
    <div className="h-full flex flex-col items-center">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 w-full">
        <div className="flex items-center gap-2">
          <Image
            src={USTLogo}
            alt="UST Logo"
            width={40}
            height={40}
            className="object-contain rounded-lg"
          />
          <h3 className="text-xl font-semibold text-black">
            UST Software India
          </h3>
        </div>

        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-xl border border-dashed border-black">
          <span className="font-medium text-black">Jun 2021</span>
          <span className="text-black">-</span>
          <span className="font-medium text-black">Aug 2021</span>
        </div>
      </div>
      <div className="cursor-pointer hover:scale-105 transition-all bg-white w-full px-5 py-2 mb-4 border border-black text-center">
        <h2 className="font-neutral-900 text-3xl font-bold text-pink">
          Summer Project Intern
        </h2>
      </div>

      {/* Duck Stickers */}
      <div className="flex justify-center gap-8 w-full">
        <div className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer bg-white rounded-full flex items-center justify-center border border-black">
          <Image
            src={DuckSticker5}
            alt="Duck Sticker 1"
            width={36}
            height={36}
            className="object-contain rounded-full"
          />
        </div>
        <div className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer bg-white rounded-full flex items-center justify-center border border-black">
          <Image
            src={DuckSticker2}
            alt="Duck Sticker 2"
            width={36}
            height={36}
            className="object-contain rounded-full"
          />
        </div>
        <div className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer bg-white rounded-full flex items-center justify-center border border-black">
          <Image
            src={DuckSticker3}
            alt="Duck Sticker 3"
            width={36}
            height={36}
            className="object-contain rounded-full"
          />
        </div>
        <div className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer bg-white rounded-full flex items-center justify-center border border-black">
          <Image
            src={DuckSticker4}
            alt="Duck Sticker 4"
            width={36}
            height={36}
            className="object-contain rounded-full"
          />
        </div>
        <div className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer bg-white rounded-full flex items-center justify-center border border-black">
          <Image
            src={DuckSticker1}
            alt="Duck Sticker 5"
            width={36}
            height={36}
            className="object-contain rounded-full"
          />
        </div>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-2 gap-6 w-full mt-4 px-4">
        {cards.map((card) => (
          <FlipContainer
            key={card.id}
            bgColor={card.bgColor}
            frontContent={
              <div className="flex flex-col items-center justify-center h-full w-full p-63relative">
                <div className="relative w-full h-full">
                  <svg width="100%" height="100%" viewBox="0 0 160 160">
                    <defs>
                      <path
                        id={`curve-${card.id}`}
                        d="M80,80 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0"
                        fill="none"
                      />
                    </defs>
                    <g>
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 80 80"
                        to="360 80 80"
                        dur="15s"
                        repeatCount="indefinite"
                      />
                      <text className="font-semibold text-black text-[16.5px]">
                        <textPath href={`#curve-${card.id}`} startOffset="0%">
                          &nbsp;
                          {`• ${card.title} • ${card.title} • ${card.title} • ${card.title} • ${card.title} • ${card.title} • ${card.title} • ${card.title} • ${card.title} • ${card.title} • ${card.title} • ${card.title} •`}
                        </textPath>
                      </text>
                    </g>
                    <g transform="translate(35, 35)">
                      {card.id === 1 ? (
                        <MLIcon width={90} height={90} />
                      ) : (
                        <AnalyticsIcon width={90} height={90} />
                      )}
                    </g>
                  </svg>
                </div>
              </div>
            }
            backContent={
              <div className="flex items-center justify-center h-full w-full p-6">
                <p className="text-sm text-black text-center leading-relaxed">
                  {card.description}
                </p>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
