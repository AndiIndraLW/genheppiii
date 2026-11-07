"use client";

import React from "react";

export default function MarqueeBanner() {
  const marqueeItems = [
    "GENHEPPIII",
    "✳",
    "SKATE · DANCE · MUSIC",
    "✳",
    "GENHEPPIII",
    "✳",
    "NO SPONSORS ON THE LINEUP",
    "✳",
    "GENHEPPIII",
    "✳",
    "ALL AGES ALWAYS",
    "✳",
    "GENHEPPIII",
    "✳",
    "SKATE · DANCE · MUSIC",
    "✳",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#FFD400] border-y-2 border-[#111111] select-none z-20">
      {/* Moving text marquee */}
      <div className="h-[58px] flex items-center">
        <div className="animate-marquee flex items-center gap-7 px-4 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((text, idx) => (
            <span
              key={idx}
              className={`text-[20px] sm:text-[22px] font-[family-name:var(--font-anton)] text-[#111111] tracking-[1px] uppercase ${
                text === "✳" ? "text-[18px] sm:text-[20px] text-[#D8232A]" : ""
              }`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* SVG Zigzag divider */}
      <div className="w-full h-[16px] leading-none overflow-hidden block -mt-[1px]">
        <svg
          viewBox="0 0 1440 16"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block"
        >
          <path
            d="M0 0h1440l-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16-36-16-36 16z"
            fill="#FFD400"
          />
        </svg>
      </div>
    </div>
  );
}
