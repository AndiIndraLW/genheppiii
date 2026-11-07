"use client";

import React from "react";
import Image from "next/image";

export interface SceneItem {
  vol: string;
  title: string;
  years: string;
  desc: string;
  bg: string;
  textColor: string;
  subTextColor: string;
  borderColor: string;
  arrowBg: string;
  arrowText: string;
  image: string;
  rotation: string;
  history: {
    origin: string;
    highlights: string[];
    venues: string;
  };
}

export const SCENES_DATA: SceneItem[] = [
  {
    vol: "VOL. 01",
    title: "SKATE",
    years: "2016 — NOW · 31 JAMS",
    desc: "Car parks, ledges and half-built plazas. The scene that taught us how to run a show with no budget and no permission.",
    bg: "bg-[#F26522]",
    textColor: "text-[#111111]",
    subTextColor: "text-[#111111]",
    borderColor: "border-[#111111]",
    arrowBg: "bg-[#111111]",
    arrowText: "text-[#FFFFFF]",
    image: "/images/scene-skate.jpg",
    rotation: "lg:rotate-[1.2deg]",
    history: {
      origin: "Started at an abandoned department store car park in Senayan with generator-powered halogen floodlights and two portable kickers.",
      highlights: [
        "First jam drew 40 skaters; show #12 drew 800+ attendees",
        "DIY rail fabrication funded entirely by mixtape sales",
        "Zero corporate brand banners, always community-judged",
      ],
      venues: "Kalijodo Plaza · Sarinah Basement · Cikapundung Riverbanks",
    },
  },
  {
    vol: "VOL. 02",
    title: "DANCE",
    years: "2019 — NOW · 24 BATTLES",
    desc: "Waacking, krump and all-style cyphers in tight rooms with too much fog. Judge-free circles and raw battles.",
    bg: "bg-[#FFD400]",
    textColor: "text-[#111111]",
    subTextColor: "text-[#111111]",
    borderColor: "border-[#111111]",
    arrowBg: "bg-[#111111]",
    arrowText: "text-[#FFFFFF]",
    image: "/images/scene-dance.jpg",
    rotation: "lg:-rotate-[0.7deg]",
    history: {
      origin: "Born out of cramped underground rehearsal studios in Bandung where dancers ran cyphers until 4 AM.",
      highlights: [
        "Crowd-judged 7-to-smoke elimination rounds",
        "Live DJ sets shifting seamlessly from breakbeat to funk to industrial bass",
        "Safe space protocol strictly maintained by the collective crew",
      ],
      venues: "Gudang Sarinah Hall B · Spasial Bandung · Substore Jkt",
    },
  },
  {
    vol: "VOL. 03",
    title: "MUSIC",
    years: "2009 — NOW · 29 NIGHTS",
    desc: "Noise, post-punk, dangdut and whatever else fits the room. Loud, all ages, and never sponsored by a cigarette brand.",
    bg: "bg-[#0072BC]",
    textColor: "text-[#FFFFFF]",
    subTextColor: "text-[#FFD400]",
    borderColor: "border-[#111111]",
    arrowBg: "bg-[#FFD400]",
    arrowText: "text-[#111111]",
    image: "/images/scene-music.jpg",
    rotation: "lg:rotate-[0.6deg]",
    history: {
      origin: "The foundation of genheppiii. A response to commercial festival price gouging and sponsor-dominated lineups.",
      highlights: [
        "Hand-screenprinted posters for every single gig",
        "Flat ticketing pricing with no tiered VIP enclosures",
        "Over 90+ local indie bands booked before mainstream radar",
      ],
      venues: "Warehouse 14 Tanjung Priok · Rossi Musik Fatmawati · IFI Bandung",
    },
  },
];

interface ScenesSectionProps {
  onSelectScene: (scene: SceneItem) => void;
}

export default function ScenesSection({ onSelectScene }: ScenesSectionProps) {
  return (
    <section id="scenes" className="w-full bg-[#7AC142] py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-16 scroll-mt-12 relative">
      <div id="archive" className="absolute -top-16" />
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-2 border-[#111111]">
          <div>
            <div className="text-[12px] text-[#D8232A] font-mono tracking-[1.6px] uppercase font-bold pb-2">
              02 — THE ARCHIVE
            </div>
            <h2
              className="text-[38px] sm:text-[46px] lg:text-[54px] leading-tight text-[#111111] font-anton tracking-[0.5px]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              THE SCENES WE CAME UP IN
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] leading-[23px] text-[#111111] max-w-[380px] font-sans font-medium">
            We didn&apos;t invent these scenes. We kept showing up, printing the flyers, and eventually
            had to write it all down. Pick a lane and read the history.
          </p>
        </div>

        {/* Scene Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 pt-12">
          {SCENES_DATA.map((scene) => (
            <div
              key={scene.title}
              onClick={() => onSelectScene(scene)}
              className={`group relative flex flex-col justify-between ${scene.bg} h-[470px] sm:h-[480px] p-6 cursor-pointer overflow-hidden border-2 border-[#111111] shadow-[6px_6px_0px_0px_#111111] hover:shadow-[10px_10px_0px_0px_#111111] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:rotate-0 transition-all duration-300 transform ${scene.rotation}`}
            >
              {/* Card Top */}
              <div className="flex flex-col gap-2 z-10">
                <div className="flex items-center justify-between">
                  <span className={`text-[12px] font-mono tracking-[1.2px] ${scene.textColor} font-bold`}>
                    {scene.vol}
                  </span>
                  <div className={`w-8 h-8 rounded-none ${scene.arrowBg} ${scene.arrowText} border-2 border-[#111111] flex items-center justify-center text-sm font-bold group-hover:rotate-45 transition-transform duration-200`}>
                    ↗
                  </div>
                </div>

                <h3
                  className={`text-[52px] sm:text-[56px] leading-[0.95] ${scene.textColor} font-anton tracking-[0.5px] uppercase pt-1`}
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {scene.title}
                </h3>

                <div className={`text-[10px] ${scene.subTextColor} font-mono tracking-[1px] uppercase font-bold`}>
                  {scene.years}
                </div>

                <p className={`text-[13px] leading-[20px] ${scene.textColor} font-sans pt-1 font-medium`}>
                  {scene.desc}
                </p>
              </div>

              {/* Card Bottom / Image & CTA */}
              <div className="flex flex-col gap-3 z-10 pt-4">
                <div className="relative w-full h-[150px] overflow-hidden border-2 border-[#111111]">
                  <Image
                    src={scene.image}
                    alt={`${scene.title} scene`}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover contrast-110 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="w-full pt-3 border-t-2 border-[#111111]/30 flex items-center justify-between">
                  <span className={`text-[14px] ${scene.textColor} font-[family-name:var(--font-anton)] tracking-[0.6px] uppercase`}>
                    READ THE HISTORY
                  </span>
                  <span className={`text-[12px] font-mono font-bold ${scene.textColor} group-hover:translate-x-1 transition-transform`}>
                    EXPLORE →
                  </span>
                </div>
              </div>

              {/* Accent corner tag */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-black/10 rotate-45 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
