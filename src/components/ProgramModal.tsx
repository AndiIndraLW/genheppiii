"use client";

import React from "react";

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTickets: () => void;
}

export default function ProgramModal({ isOpen, onClose, onOpenTickets }: ProgramModalProps) {
  if (!isOpen) return null;

  const points = [
    {
      title: "1. NO TOBACCO & ALCOHOL TITLES",
      desc: "Our lineups and posters will never feature cigarette brand logos or commercial alcohol sponsorships. Gigs remain 100% community-funded.",
    },
    {
      title: "2. ALL AGES, ALWAYS",
      desc: "If an 18-year-old skater or 16-year-old dancer can't walk in the front door, we cancel the venue and move somewhere else.",
    },
    {
      title: "3. ZERO VIP ENCLOSURES",
      desc: "No golden circle, no backstage hospitality suites. Artists, skaters, dancers, and crowd share the exact same floor and sound.",
    },
    {
      title: "4. RADICAL TRANSPARENCY",
      desc: "Ticket revenues directly pay the audio engineers, stage crew, lighting operators, and artists before anything else.",
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[680px] max-h-[90vh] overflow-y-auto bg-[#FFFFFF] border-3 border-[#111111] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#111111] text-[#111111]"
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#111111] hover:bg-[#D8232A] text-[#FFFFFF] font-mono text-sm font-bold transition-colors cursor-pointer"
        >
          ✕
        </button>

        <div className="text-[11px] text-[#D8232A] font-mono tracking-[1.6px] uppercase font-bold pb-1">
          ✳ SEASON 2027 COLLECTIVE CHARTER
        </div>

        <h2 className="text-[34px] sm:text-[42px] leading-tight font-[family-name:var(--font-anton)] tracking-[0.5px] uppercase">
          THE GENHEPPIII MANIFESTO
        </h2>

        <p className="text-[13px] text-[#555555] font-sans pb-6 pt-1 font-medium">
          Drafted by the crew in July 2013, reaffirmed for Season 2027. Four non-negotiable principles.
        </p>

        <div className="flex flex-col gap-4">
          {points.map((p) => (
            <div key={p.title} className="p-4 bg-[#7AC142]/10 border-2 border-[#111111] shadow-[3px_3px_0px_0px_#111111]">
              <h3 className="text-[15px] font-[family-name:var(--font-anton)] text-[#D8232A] tracking-[0.5px]">
                {p.title}
              </h3>
              <p className="text-[13px] text-[#222222] font-sans leading-relaxed pt-1 font-medium">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-6 mt-4 border-t-2 border-[#111111]">
          <button
            onClick={() => {
              onClose();
              onOpenTickets();
            }}
            className="px-6 py-3 bg-[#D8232A] hover:bg-[#b81d23] text-[#FFFFFF] font-[family-name:var(--font-anton)] tracking-[0.5px] uppercase text-sm cursor-pointer border-2 border-[#111111] shadow-[3px_3px_0px_0px_#111111]"
          >
            GET SEASON 2027 PASS →
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#FFD400] hover:bg-[#e6bf00] border-2 border-[#111111] text-[#111111] font-mono text-xs font-bold uppercase cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
