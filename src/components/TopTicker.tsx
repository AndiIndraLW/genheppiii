"use client";

import React, { useState } from "react";

interface TopTickerProps {
  onOpenTickets?: () => void;
}

export default function TopTicker({ onOpenTickets }: TopTickerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="relative w-full h-[36px] shrink-0 flex items-center bg-[#FFD400] border-b-2 border-[#111111] overflow-hidden select-none z-30"
    >
      <div
        onClick={onOpenTickets}
        className="animate-marquee cursor-pointer flex items-center gap-8 text-[11px] text-[#111111] font-mono font-bold tracking-[0.8px] uppercase whitespace-nowrap"
      >
        <span>✳ SEASON 2027 EARLY BIRD PASSES ON SALE NOW — 30% OFF UNTIL 30 JUNE ✳ ALL AGES, ALWAYS</span>
        <span>✳ SEASON 2027 EARLY BIRD PASSES ON SALE NOW — 30% OFF UNTIL 30 JUNE ✳ ALL AGES, ALWAYS</span>
        <span>✳ SEASON 2027 EARLY BIRD PASSES ON SALE NOW — 30% OFF UNTIL 30 JUNE ✳ ALL AGES, ALWAYS</span>
        <span>✳ SEASON 2027 EARLY BIRD PASSES ON SALE NOW — 30% OFF UNTIL 30 JUNE ✳ ALL AGES, ALWAYS</span>
      </div>

      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-[#111111] hover:bg-[#D8232A] hover:text-[#FFFFFF] transition-colors bg-[#111111]/10 rounded-none text-xs font-mono font-bold"
      >
        ✕
      </button>
    </div>
  );
}
