"use client";

import React, { useState } from "react";

interface NavbarProps {
  onOpenTickets: () => void;
}

export default function Navbar({ onOpenTickets }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Upcoming", href: "#upcoming" },
    { label: "The Scenes", href: "#scenes" },
    { label: "The Company", href: "#about" },
    { label: "Manifesto", href: "#manifesto" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#7AC142] border-b-2 border-[#111111] transition-all">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-[10px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
        >
          <div className="relative w-[18px] h-[18px] shrink-0">
            <div className="w-[13px] h-[13px] -rotate-45 origin-top-left absolute left-0 top-[9px] bg-[#D8232A] group-hover:rotate-45 group-hover:bg-[#FFD400] transition-all duration-300 border border-[#111111]"></div>
          </div>
          <span className="text-[24px] text-[#111111] font-[family-name:var(--font-anton)] tracking-[1px] select-none">
            GENHEPPIII
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-[#111111] hover:text-[#D8232A] font-mono font-bold tracking-[0.6px] uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenTickets}
            className="group relative px-5 py-2.5 bg-[#D8232A] hover:bg-[#b81d23] text-[#FFFFFF] border-2 border-[#111111] active:translate-x-0.5 active:translate-y-0.5 transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_0px_#111111] hover:shadow-[1px_1px_0px_0px_#111111]"
          >
            <span className="text-[14px] font-[family-name:var(--font-anton)] tracking-[0.5px] uppercase">
              GET TICKETS
            </span>
            <span className="text-xs text-[#FFFFFF] font-bold group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-[#111111] hover:text-[#D8232A] transition-colors focus:outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transform transition-transform duration-200 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-opacity duration-200 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transform transition-transform duration-200 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#7AC142] border-b-2 border-[#111111] px-6 py-6 flex flex-col gap-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-[#111111] hover:text-[#D8232A] font-mono font-bold tracking-[0.8px] uppercase py-1 border-b border-[#111111]/30"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTickets();
            }}
            className="w-full py-3 bg-[#D8232A] text-[#FFFFFF] font-[family-name:var(--font-anton)] text-center tracking-[0.6px] uppercase border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            GET TICKETS & PASSES
          </button>
        </div>
      )}
    </header>
  );
}
