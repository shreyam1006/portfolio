"use client";
import React, { useState } from "react";

export default function Gluelabs() {
  const [selectedCard, setSelectedCard] = useState(null);

  const icons = {
    leadership: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    engagement: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
    product: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    features: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    development: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  };

  const cards = [
    {
      id: 1,
      icon: icons.leadership,
      title: "Team Leadership",
      description: "Led UI development team & product roadmaps.",
      bgColor: "bg-lavender",
      rotation: "-rotate-6",
      translateX: "-translate-x-24",
      translateY: "translate-y-0",
    },
    {
      id: 2,
      icon: icons.engagement,
      title: "Customer Engagement",
      description: "Built AI-driven engagement platform with gamified rewards.",
      bgColor: "bg-peach",
      rotation: "-rotate-3",
      translateX: "-translate-x-12",
      translateY: "translate-y-0",
    },
    {
      id: 3,
      icon: icons.product,
      title: "xG Project Impact",
      description: "AI-powered email marketing for Shopify.",
      bgColor: "bg-sage",
      rotation: "rotate-0",
      translateX: "translate-x-0",
      translateY: "translate-y-0",
    },
    {
      id: 4,
      icon: icons.features,
      title: "Product Development",
      description: "Led product strategy & UX research initiatives.",
      bgColor: "bg-yellow",
      rotation: "rotate-3",
      translateX: "translate-x-12",
      translateY: "translate-y-0",
    },
    {
      id: 5,
      icon: icons.features,
      title: "Product Development",
      description: "Led product strategy & UX research initiatives.",
      bgColor: "bg-skyblue",
      rotation: "rotate-6",
      translateX: "translate-x-24",
      translateY: "translate-y-0",
    },
  ];

  const getCardClasses = (card) => {
    const baseClasses = `absolute w-48 h-60 p-4 rounded-lg border border-black cursor-pointer transition-all duration-500 ease-in-out ${card.bgColor}`;
    const transformClasses =
      selectedCard === null
        ? `${card.rotation} ${card.translateX} ${card.translateY}`
        : "";
    const scaleClasses =
      selectedCard === card.id ? "z-50 scale-125" : "hover:scale-105";
    const visibilityClasses =
      selectedCard !== null && selectedCard !== card.id
        ? "opacity-0 pointer-events-none"
        : "";

    return `${baseClasses} ${transformClasses} ${scaleClasses} ${visibilityClasses}`;
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-4xl font-semibold text-black tracking-tight">
          Software
        </h2>
        <h2 className="text-4xl font-semibold text-black tracking-tight mb-8">
          Development Engineer
        </h2>
        <div className="flex items-center justify-between gap-8">
          {/* Company */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-pink rounded-full flex items-center justify-center border border-black">
              <span className="text-lg font-bold text-white">GL</span>
            </div>
            <h3 className="text-xl font-medium text-black">Glue Labs</h3>
          </div>

          {/* Date */}
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-xl bg-yellow border border-dashed border-black">
            <span className="font-medium text-black">September 2022</span>
            <span className="text-black">-</span>
            <span className="font-medium text-black">Present</span>
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div className="relative h-[400px] flex items-center justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() =>
              setSelectedCard(selectedCard === card.id ? null : card.id)
            }
            className={getCardClasses(card)}
            style={{ transformOrigin: "center center" }}
          >
            <div className="flex flex-col items-center h-full">
              <div className="text-black mb-3">{card.icon}</div>
              <h4 className="font-bold text-black text-center mb-3">
                {card.title}
              </h4>
              <p className="text-sm text-black text-center">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
