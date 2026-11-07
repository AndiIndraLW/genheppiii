"use client";

import React, { useState } from "react";

export default function ManifestoBand() {
  const [copied, setCopied] = useState(false);
  const quote = "IF THE ROOM ISN'T SWEATING, WE HAVEN'T STARTED.";

  const handleCopyQuote = () => {
    navigator.clipboard?.writeText(quote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="manifesto"
      className="w-full bg-[#111111] py-14 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-16 scroll-mt-12 overflow-hidden border-b-2 border-[#111111]"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        {/* Yellow Star */}
        <div className="text-[48px] leading-none text-[#FFD400] font-[family-name:var(--font-anton)] select-none shrink-0 animate-spin-slow">
          ✳
        </div>

        {/* Quote & Attribution */}
        <div className="flex-1 flex flex-col gap-3">
          <blockquote
            onClick={handleCopyQuote}
            title="Click to copy quote"
            className="text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.05] text-[#FFFFFF] font-[family-name:var(--font-anton)] tracking-[0.5px] uppercase cursor-pointer hover:text-[#7AC142] transition-colors duration-200 select-none"
          >
            &ldquo;{quote}&rdquo;
          </blockquote>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <span className="text-[11px] sm:text-[12px] text-[#7AC142] font-mono tracking-[1.4px] uppercase font-bold">
              — GENHEPPIII CREW, SHOW #84, GUDANG SARINAH
            </span>

            {copied && (
              <span className="text-[10px] text-[#111111] font-mono tracking-[1px] uppercase bg-[#FFD400] px-2.5 py-0.5 border border-[#111111] font-bold animate-in fade-in">
                ✓ COPIED TO CLIPBOARD
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
