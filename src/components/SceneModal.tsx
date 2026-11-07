"use client";

import React from "react";
import Image from "next/image";
import { SceneItem } from "./ScenesSection";

interface SceneModalProps {
  scene: SceneItem | null;
  onClose: () => void;
  onOpenTickets: () => void;
}

export default function SceneModal({ scene, onClose, onOpenTickets }: SceneModalProps) {
  if (!scene) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[720px] max-h-[90vh] overflow-y-auto bg-[#FFFFFF] border-3 border-[#111111] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#111111] text-[#111111]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#111111] hover:bg-[#D8232A] text-[#FFFFFF] font-mono text-sm font-bold transition-colors z-20 cursor-pointer"
        >
          ✕
        </button>

        {/* Header tag */}
        <div className="flex items-center gap-3 pb-2">
          <span className={`px-2.5 py-0.5 text-[11px] font-mono ${scene.bg} ${scene.textColor} font-bold border border-[#111111]`}>
            {scene.vol}
          </span>
          <span className="text-[12px] text-[#444444] font-mono tracking-[1px] uppercase font-bold">
            {scene.years}
          </span>
        </div>

        <h2 className="text-[44px] sm:text-[54px] leading-tight font-[family-name:var(--font-anton)] tracking-[0.5px] uppercase">
          {scene.title} ARCHIVE
        </h2>

        {/* Feature Image */}
        <div className="relative w-full h-[220px] sm:h-[260px] my-4 border-2 border-[#111111] overflow-hidden">
          <Image
            src={scene.image}
            alt={`${scene.title} scene full view`}
            fill
            sizes="720px"
            className="object-cover contrast-115 grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        {/* History Details */}
        <div className="flex flex-col gap-4 text-sm font-sans pt-2">
          <div>
            <h4 className="text-[12px] font-mono text-[#D8232A] uppercase tracking-[1px] font-bold pb-1">
              THE ORIGIN
            </h4>
            <p className="text-[#333333] leading-relaxed font-medium">{scene.history.origin}</p>
          </div>

          <div>
            <h4 className="text-[12px] font-mono text-[#0072BC] uppercase tracking-[1px] font-bold pb-1">
              COMMUNITY HIGHLIGHTS
            </h4>
            <ul className="list-disc list-inside space-y-1 text-[#333333] font-medium">
              {scene.history.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-mono text-[#F26522] uppercase tracking-[1px] font-bold pb-1">
              HISTORIC VENUES & SPOTS
            </h4>
            <p className="text-[#555555] font-mono text-xs font-semibold">{scene.history.venues}</p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-6 mt-4 border-t-2 border-[#111111]">
          <button
            onClick={() => {
              onClose();
              onOpenTickets();
            }}
            className="px-6 py-3 bg-[#D8232A] hover:bg-[#b81d23] text-[#FFFFFF] font-[family-name:var(--font-anton)] tracking-[0.5px] uppercase text-sm cursor-pointer border-2 border-[#111111] shadow-[3px_3px_0px_0px_#111111]"
          >
            GET PASS FOR THIS SCENE →
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
