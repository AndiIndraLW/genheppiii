"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import LiquidOverlay from "./LiquidOverlay";

interface HeroProps {
  onOpenTickets: () => void;
}

export default function Hero({ onOpenTickets }: HeroProps) {
  const [activePhoto, setActivePhoto] = useState<"a" | "b">("b");
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-[#7AC142] overflow-hidden pt-10 pb-0 sm:pt-14 sm:pb-0 lg:pt-10 lg:pb-0"
    >
      {/* Background ambient texture / subtle grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#111111_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none z-0" />

      {/* Interactive Liquid Background Overlay with dynamic fluid distortion */}
      <LiquidOverlay containerRef={heroRef} />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Hero Copy */}
        <div className="flex-1 w-full flex flex-col items-start gap-6 z-10">
          {/* Headline */}
          <div className="flex flex-col select-none">
            <h1 className="text-[52px] sm:text-[72px] lg:text-[86px] leading-[0.92] text-[#111111] font-anton tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
              THREE SCENES.
            </h1>
            <h1 className="text-[52px] sm:text-[72px] lg:text-[86px] leading-[0.92] text-[#D8232A] font-anton tracking-tight drop-shadow-[2px_2px_0px_#111111]" style={{ fontFamily: "'Anton', sans-serif" }}>
              ONE HELL
            </h1>
            <h1 className="text-[52px] sm:text-[72px] lg:text-[86px] leading-[0.92] text-[#111111] font-anton tracking-tight" style={{ fontFamily: "'Anton', sans-serif" }}>
              OF A YEAR.
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-[15px] sm:text-[16px] leading-[25px] max-w-[540px] text-[#111111] font-sans font-medium">
            We book the nights nobody else will: skate jams in car parks, dance battles under
            strobes, and stacks of loud, messy music. Twelve years, eighty-four shows, one city that
            keeps shouting back.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenTickets}
              className="px-7 py-4 bg-[#D8232A] hover:bg-[#b81d23] active:scale-95 text-[#FFFFFF] font-[family-name:var(--font-anton)] text-[15px] tracking-[0.6px] uppercase transition-all duration-150 border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] hover:shadow-[2px_2px_0px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer"
            >
              GET TICKETS & PASSES
            </button>
            <a
              href="#scenes"
              className="px-7 py-4 bg-[#FFD400] hover:bg-[#e6bf00] active:scale-95 text-[#111111] font-[family-name:var(--font-anton)] text-[15px] tracking-[0.6px] uppercase border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] hover:shadow-[2px_2px_0px_0px_#111111] transition-all duration-150 cursor-pointer"
            >
              EXPLORE THE SCENES ↓
            </a>
          </div>
        </div>

        {/* Hero Collage */}
        <div className="w-full lg:w-[560px] h-[480px] sm:h-[520px] relative flex items-center justify-center select-none -translate-y-4 sm:-translate-y-6 lg:-translate-y-8">
          {/* Back Photo (Photo A) with Blue #0072BC shadow */}
          <div
            onClick={() => setActivePhoto("a")}
            className={`absolute w-[260px] sm:w-[300px] h-[330px] sm:h-[380px] cursor-pointer transition-all duration-500 transform ${
              activePhoto === "a"
                ? "z-20 scale-105 rotate-2"
                : "z-10 rotate-6 translate-x-8 translate-y-4 hover:rotate-3 opacity-90"
            }`}
          >
            {/* Tertiary Blue Shadow backing */}
            <div className="absolute inset-0 bg-[#0072BC] translate-x-3 translate-y-3 border-2 border-[#111111] z-0" />
            <div className="relative w-full h-full bg-[#111111] border-2 border-[#111111] overflow-hidden z-10 shadow-[4px_4px_0px_0px_#111111]">
              <Image
                src="/assets/hero-a.jpg"
                alt="Show energy crowds"
                fill
                priority
                sizes="(max-width: 768px) 300px, 340px"
                className="object-cover contrast-125 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[10px] font-mono font-bold text-[#FFFFFF] uppercase bg-[#111111]/80 border border-[#111111] px-2 py-1">
                PHOTO #01 · PIT CAMERA
              </div>
            </div>
          </div>

          {/* Front Photo (Photo B) with Orange #F26522 shadow */}
          <div
            onClick={() => setActivePhoto("b")}
            className={`absolute w-[240px] sm:w-[280px] h-[300px] sm:h-[340px] cursor-pointer transition-all duration-500 transform ${
              activePhoto === "b"
                ? "z-20 -rotate-3 -translate-x-6 -translate-y-2 hover:rotate-0 scale-100 sm:scale-105"
                : "z-10 -rotate-8 -translate-x-12 opacity-85 hover:opacity-100"
            }`}
          >
            {/* Secondary Orange Shadow backing */}
            <div className="absolute inset-0 bg-[#F26522] -translate-x-3 translate-y-3 border-2 border-[#111111] z-0" />
            <div className="relative w-full h-full bg-[#111111] border-2 border-[#111111] overflow-hidden z-10 shadow-[4px_4px_0px_0px_#111111]">
              <Image
                src="/assets/hero-b.jpg"
                alt="Live crowd mosh"
                fill
                priority
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover contrast-125 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[10px] font-mono font-bold text-[#FFD400] uppercase bg-[#111111]/80 border border-[#111111] px-2 py-1">
                PHOTO #02 · RAW MUD & SOUND
              </div>
            </div>
          </div>

          {/* Floating Sticker: Yellow #FFD400 */}
          <div className="absolute z-30 bottom-12 left-4 sm:left-12 rotate-[9deg] hover:rotate-0 transition-transform duration-200">
            <div className="px-3.5 py-1.5 bg-[#FFD400] border-2 border-[#111111] text-[#111111] font-mono text-[10px] tracking-[1.4px] uppercase font-bold shadow-[3px_3px_0px_0px_#111111]">
              ✳ 84 NIGHTS & COUNTING
            </div>
          </div>

          {/* Photo Caption Label */}
          <div className="absolute bottom-2 right-4 sm:right-8 z-30 text-right">
            <span className="text-[10px] text-[#111111] font-mono font-bold tracking-[0.8px] uppercase bg-[#FFFFFF] border border-[#111111] px-2 py-0.5 shadow-[2px_2px_0px_0px_#111111]">
              SHOW #84 · GUDANG SARINAH · SURABAYA / JKT
            </span>
          </div>
        </div>
      </div>

      {/* Hero Bottom Divider */}
      <div className="w-full relative mt-6 sm:mt-8 lg:mt-3 overflow-hidden select-none pointer-events-none leading-none">
        <div className="relative w-full h-[150px] sm:h-[120px] md:h-[155px] lg:h-[190px] xl:h-[280px]">
          <Image
            src="/assets/divider-hero.png"
            alt="Hero section divider"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
