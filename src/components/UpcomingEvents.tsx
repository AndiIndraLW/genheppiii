"use client";

import React from "react";
import Image from "next/image";

interface UpcomingEventsProps {
  onOpenTickets: () => void;
}

interface EventData {
  id: string;
  artist: string;
  city: string;
  date: string;
  fullDate: string;
  venue: string;
  headline: string;
  tagline: string;
  lineup: string[];
  sponsor: string;
  price: string;
  bg: string;
  textColor: string;
  accentColor: string;
  borderColor: string;
  buttonBg: string;
  buttonText: string;
  image: string;
}

const EVENTS: EventData[] = [
  {
    id: "surabaya",
    artist: "GEN HEPPIII - SURABAYA",
    city: "SURABAYA",
    date: "12/07",
    fullDate: "07/12/2026 AT 18:30",
    venue: "WAREHOUSE TANJUNG PERAK, SURABAYA",
    headline: "WE ARE WAITING FOR YOU ON 07/12/2026 IN SURABAYA. THE FIRST EXPEDITION OF THE SEASON — PURE RAW INDUSTRIAL ENERGY.",
    tagline: "SURABAYA PIT | STREET CYPHER & POST-PUNK RIFFS",
    lineup: [
      "SLAUGHTER TO PREVAIL",
      "MORFEM",
      "AVHATH",
      "THE SIGIT",
      "SBY SKATE ALL-STARS",
    ],
    sponsor: "GENHEPPIII COLLECTIVE · 100% DIY INDEPENDENT SHOW",
    price: "IDR 150,000",
    bg: "bg-[#0072BC]",
    textColor: "text-[#FFFFFF]",
    accentColor: "text-[#FFD400]",
    borderColor: "border-[#111111]",
    buttonBg: "bg-[#FFD400]",
    buttonText: "text-[#111111]",
    image: "/assets/upcoming-feature.jpg",
  },
  {
    id: "malang",
    artist: "GEN HEPPIII - MALANG",
    city: "MALANG",
    date: "19/07",
    fullDate: "07/19/2026 AT 18:00",
    venue: "STADION GAJAYANA PLAZA, MALANG",
    headline: "COLD NIGHTS, HOT PITS. WE BRING THE SOUND SYSTEM TO MALANG'S FOOTHILLS UNDER STROBES AND SKATE OBSTACLES.",
    tagline: "MALANG JAM | HIGH-ALTITUDE HARDCORE & BREAKBEATS",
    lineup: [
      "ROSE FUNERAL",
      "WHITECHAPEL",
      "NOISE FLOOR",
      "MALANG KRUMP CYPHER",
      "GRRRL GANG",
    ],
    sponsor: "COMMUNITY FUNDED · ZERO CORPORATE SPONSORS",
    price: "IDR 150,000",
    bg: "bg-[#F26522]",
    textColor: "text-[#FFFFFF]",
    accentColor: "text-[#FFD400]",
    borderColor: "border-[#111111]",
    buttonBg: "bg-[#111111]",
    buttonText: "text-[#FFFFFF]",
    image: "/assets/scene-music.jpg",
  },
  {
    id: "jember",
    artist: "GEN HEPPIII - JEMBER",
    city: "JEMBER",
    date: "26/07",
    fullDate: "07/26/2026 AT 17:30",
    venue: "GOR KALIWATES CAR PARK, JEMBER",
    headline: "THE GRAND FINALE RUN ACROSS EAST JAVA. FULL DIY SKATE PLAZA, UNFILTERED DECIBELS AND FREE ENTRY FOR UNDER-14S.",
    tagline: "JEMBER FINALE | DIY LEDGE COMP & ALL AGES PIT",
    lineup: [
      "BRING ME THE HORIZON",
      "SUICIDE SILENCE",
      "KICKFLIP KOLEKTIF",
      "EAST END DANCE BATTLE",
      "DEATH SQUAD",
    ],
    sponsor: "HAND SCREENPRINTED POSTERS · ALL AGES ALWAYS",
    price: "IDR 150,000",
    bg: "bg-[#D8232A]",
    textColor: "text-[#FFFFFF]",
    accentColor: "text-[#FFD400]",
    borderColor: "border-[#111111]",
    buttonBg: "bg-[#FFFFFF]",
    buttonText: "text-[#111111]",
    image: "/assets/scene-skate.jpg",
  },
];

export default function UpcomingEvents({ onOpenTickets }: UpcomingEventsProps) {
  return (
    <section
      id="upcoming"
      className="relative w-full bg-[#7AC142] pt-14 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-8 lg:px-16 scroll-mt-20 border-b-2 border-[#111111]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b-2 border-[#111111] mb-10">
          <div>
            <div className="text-[12px] text-[#D8232A] font-mono tracking-[1.6px] uppercase font-bold pb-1">
              01 — WHAT&apos;S NEXT
            </div>
            <h2
              className="text-[38px] sm:text-[48px] lg:text-[56px] leading-[0.95] text-[#111111] font-anton uppercase tracking-[0.5px]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              UPCOMING EVENTS
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-[#111111] text-[#FFD400] text-[11px] font-mono font-bold uppercase border border-[#111111]">
              3 CONFIRMED STOPS
            </div>
          </div>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative flex flex-col gap-16 sm:gap-24 pb-36 sm:pb-48">
          {EVENTS.map((event, index) => {
            // Calculate sticky top offset so cards layer gracefully when sticking
            // Sticky header height is ~76px (with border 78px), so top offset starts around 84px
            const stickyTop = 84 + index * 36;

            return (
              <div
                key={event.id}
                style={{ top: `${stickyTop}px`, zIndex: 10 + index, borderRadius: '0px' }}
                className={`sticky w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[640px] flex flex-col justify-between ${event.bg} ${event.textColor} border-2 border-[#111111] rounded-none shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#111111] overflow-hidden transition-all duration-200`}
              >
                {/* Card Top Title Bar (Stacked Header) */}
                <div className="w-full px-6 sm:px-12 py-6 sm:py-7 flex items-center justify-between border-b-2 border-white/20 select-none bg-black/20">
                  <div className="flex items-center gap-3 sm:gap-5">
                    <span className="w-3.5 h-3.5 bg-[#FFD400] inline-block shrink-0 border-2 border-[#111111]" />
                    <h3
                      className="text-[28px] sm:text-[46px] lg:text-[60px] leading-none font-anton uppercase tracking-tight text-white drop-shadow-[2px_2px_0px_#111111]"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {event.artist}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                    <span
                      className="text-[28px] sm:text-[46px] lg:text-[60px] leading-none font-anton uppercase tracking-tight text-white drop-shadow-[2px_2px_0px_#111111]"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {event.date}
                    </span>
                    <span className="hidden sm:inline-block px-3.5 py-1 text-[11px] font-mono font-bold uppercase bg-[#111111] text-[#FFD400] border border-white/30">
                      CONFIRMED
                    </span>
                  </div>
                </div>

                {/* Card Full Body (All cards open & fully detailed) */}
                <div className="px-6 sm:px-12 py-8 sm:py-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Details & Lineup */}
                  <div className="lg:col-span-7 flex flex-col justify-between gap-8 h-full">
                    {/* About Event */}
                    <div className="flex flex-col gap-3">
                      <span className="text-[12px] font-mono tracking-[1.6px] text-white/80 uppercase font-bold">
                        ABOUT EVENT
                      </span>
                      <p
                        className="text-[20px] sm:text-[26px] lg:text-[30px] leading-[1.2] font-anton uppercase tracking-wide text-white drop-shadow-[1px_1px_0px_#111111]"
                        style={{ fontFamily: "'Anton', sans-serif" }}
                      >
                        {event.headline}
                      </p>
                    </div>

                    {/* Festival Tag & Lineup */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4 border-y-2 border-white/20 font-mono text-xs">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-white/70 uppercase text-[10px] font-bold tracking-wider">FORMAT / THEME:</span>
                        <span className="text-[#FFD400] font-bold uppercase text-[12px] leading-relaxed">
                          {event.tagline}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <span className="text-white/70 uppercase text-[10px] font-bold tracking-wider">LINEUP INCLUDES:</span>
                        <span className="text-white font-medium uppercase leading-relaxed text-[12px]">
                          {event.lineup.join(" / ")}
                        </span>
                      </div>
                    </div>

                    {/* Footer Info: Sponsor, Price, Buy Ticket Button */}
                    <div className="flex flex-wrap items-end justify-between gap-6 pt-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-mono text-white/70 uppercase tracking-wider font-bold">
                          SPONSOR:
                        </span>
                        <span
                          className="text-[15px] font-anton tracking-wide uppercase text-white"
                          style={{ fontFamily: "'Anton', sans-serif" }}
                        >
                          {event.sponsor}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-mono text-white/70 uppercase tracking-wider font-bold">
                          PRICE:
                        </span>
                        <span
                          className="text-[26px] sm:text-[32px] font-anton text-[#FFD400] drop-shadow-[1px_1px_0px_#111111]"
                          style={{ fontFamily: "'Anton', sans-serif" }}
                        >
                          {event.price}
                        </span>
                      </div>

                      <button
                        onClick={onOpenTickets}
                        style={{ fontFamily: "'Anton', sans-serif", borderRadius: '0px' }}
                        className={`px-9 py-4 ${event.buttonBg} ${event.buttonText} rounded-none font-anton text-[17px] tracking-[0.5px] uppercase font-bold border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all cursor-pointer`}
                      >
                        BUY TICKET
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Stylized Live Photo Cutout */}
                  <div
                    style={{ borderRadius: '0px' }}
                    className="lg:col-span-5 relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-none overflow-hidden border-2 border-[#111111] shadow-[6px_6px_0px_0px_#111111] bg-black/40"
                  >
                    <Image
                      src={event.image}
                      alt={`${event.artist} live event`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover contrast-125 saturate-120 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[12px] font-mono uppercase bg-black/80 backdrop-blur-xs px-4 py-2 border border-white/20">
                      <span className="text-white font-bold">{event.venue}</span>
                      <span className="text-[#FFD400] font-bold">ALL AGES</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
