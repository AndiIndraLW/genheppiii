"use client";

import React, { useState } from "react";
import Image from "next/image";

interface AboutSectionProps {
  onOpenProgram: () => void;
}

export default function AboutSection({ onOpenProgram }: AboutSectionProps) {
  const [activeStat, setActiveStat] = useState<number | null>(null);

  const stats = [
    { value: "12", label: "YEARS RUNNING", color: "text-[#D8232A]" },
    { value: "84", label: "SHOWS PRODUCED", color: "text-[#F26522]" },
    { value: "3", label: "SCENES KEPT", color: "text-[#0072BC]" },
    { value: "120K", label: "TICKETS SCANNED", color: "text-[#111111]" },
  ];

  return (
    <section id="about" className="w-full bg-[#FFFFFF] text-[#111111] border-y-2 border-[#111111] py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-16 scroll-mt-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Photo & Badges */}
        <div className="w-full lg:w-[440px] shrink-0 flex justify-center">
          <div className="relative w-[300px] sm:w-[400px] h-[380px] sm:h-[480px]">
            {/* Tertiary Blue Shadow #0072BC */}
            <div className="absolute inset-0 bg-[#0072BC] translate-x-3 sm:translate-x-4 translate-y-3 sm:translate-y-4 border-2 border-[#111111]" />

            {/* Photo Container */}
            <div className="relative w-full h-full bg-[#111111] border-2 border-[#111111] overflow-hidden group shadow-[4px_4px_0px_0px_#111111]">
              <Image
                src="/images/about.jpg"
                alt="genheppiii collective crew"
                fill
                sizes="(max-width: 768px) 300px, 420px"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Est Sticker: Primary Red #D8232A */}
            <div className="absolute -bottom-4 -left-3 sm:-left-4 rotate-[7deg] hover:rotate-0 transition-transform duration-200 z-20">
              <div className="px-4 py-2.5 bg-[#D8232A] text-[#FFFFFF] font-mono text-[11px] tracking-[1.2px] uppercase font-bold shadow-[4px_4px_0px_0px_#111111] border-2 border-[#111111]">
                EST. 2013 · JAKARTA
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Interactive Stats */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <div className="text-[12px] text-[#D8232A] font-mono tracking-[1.6px] uppercase font-bold">
            03 — THE COMPANY
          </div>

          <h2
            className="text-[40px] sm:text-[50px] lg:text-[56px] leading-[0.96] text-[#111111] font-anton tracking-tight uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            A SMALL CREW OF LOUD PEOPLE.
          </h2>

          <p className="text-[16px] sm:text-[17px] leading-[27px] text-[#111111] font-sans font-medium">
            genheppiii is an independent show collective. We produce twelve to sixteen nights a
            year across three cities, from 60-cap basements to 4,000-cap warehouses — and we still
            print the flyers ourselves.
          </p>

          <p className="text-[14px] sm:text-[15px] leading-[24px] text-[#444444] font-sans">
            We started out handing out mixtapes at a skate spot in 2013. Today we book the acts,
            run the door, mix the sound and archive everything: flyers, setlists, tapes,
            photographs. No sponsors on the lineup, no VIP pit, all ages wherever the building
            lets us.
          </p>

          {/* Interactive Stats Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y-2 border-[#111111] my-2">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                onMouseEnter={() => setActiveStat(idx)}
                onMouseLeave={() => setActiveStat(null)}
                className={`p-3 border border-transparent transition-all duration-200 cursor-pointer ${
                  activeStat === idx
                    ? "bg-[#FFD400] border-[#111111] shadow-[3px_3px_0px_0px_#111111]"
                    : "hover:bg-[#111111]/5"
                }`}
              >
                <div
                  className={`text-[34px] sm:text-[40px] leading-none font-[family-name:var(--font-anton)] ${stat.color}`}
                >
                  {stat.value}
                </div>
                <div className="text-[9px] font-mono tracking-[1px] uppercase pt-1 font-bold text-[#111111]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Program CTA button */}
          <button
            onClick={onOpenProgram}
            className="group flex items-center gap-3 pt-2 text-[13px] font-mono tracking-[1.2px] uppercase font-bold text-[#111111] hover:text-[#D8232A] cursor-pointer transition-colors"
          >
            <span className="underline underline-offset-4 decoration-2 decoration-[#111111] group-hover:decoration-[#D8232A]">
              READ THE 2026 PROGRAM MANIFESTO
            </span>
            <span className="group-hover:translate-x-1.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
