"use client";

import React, { useState } from "react";

interface FooterProps {
  onOpenTickets: () => void;
}

export default function Footer({ onOpenTickets }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  const columns = [
    {
      title: "SHOWS",
      links: [
        { label: "All dates (Season 2027)", href: "#tickets" },
        { label: "Season pass", href: "#tickets" },
        { label: "Ticketing FAQ", href: "#" },
        { label: "Access & safety", href: "#" },
      ],
    },
    {
      title: "THE SCENES",
      links: [
        { label: "Skate archive", href: "#scenes" },
        { label: "Dance archive", href: "#scenes" },
        { label: "Music archive", href: "#scenes" },
        { label: "Zine library", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About the crew", href: "#about" },
        { label: "Partners (DIY Only)", href: "#" },
        { label: "Press kit", href: "#" },
        { label: "Jobs / Volunteers", href: "#" },
      ],
    },
    {
      title: "FOLLOW",
      links: [
        { label: "Instagram (@genheppiii)", href: "https://instagram.com" },
        { label: "TikTok", href: "https://tiktok.com" },
        { label: "Spotify Playlist", href: "https://spotify.com" },
        { label: "Newsletter Dispatch", href: "#newsletter" },
      ],
    },
  ];

  return (
    <footer id="tickets" className="w-full bg-[#111111] py-16 sm:py-20 px-6 sm:px-12 lg:px-16 scroll-mt-12 text-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-14">
        {/* Footer Top CTA Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b-2 border-[#2B2A25]">
          <div>
            <div className="text-[12px] text-[#FFD400] font-mono tracking-[1.6px] uppercase font-bold pb-2">
              SEASON 2027 · 14 SHOWS
            </div>
            <h2 className="text-[44px] sm:text-[58px] lg:text-[68px] leading-[0.95] text-[#7AC142] font-[family-name:var(--font-anton)] tracking-[0.5px] uppercase">
              SEE YOU IN THE PIT.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2.5">
            <button
              onClick={onOpenTickets}
              className="group px-8 py-4 bg-[#D8232A] hover:bg-[#b81d23] text-[#FFFFFF] font-[family-name:var(--font-anton)] text-[17px] tracking-[0.6px] uppercase flex items-center gap-3 border-2 border-[#FFFFFF] shadow-[4px_4px_0px_0px_#FFD400] hover:shadow-[2px_2px_0px_0px_#FFD400] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              <span>GET SEASON PASS</span>
              <span className="font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div
          id="newsletter"
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 py-8 border-b-2 border-[#2B2A25]"
        >
          <div className="max-w-[600px]">
            <h3 className="text-[22px] sm:text-[24px] text-[#FFFFFF] font-[family-name:var(--font-anton)] tracking-[0.5px] uppercase">
              GET ON THE PIRATE LIST
            </h3>
            <p className="text-[13px] text-[#B0B0B0] font-sans pt-1">
              No promos, no algorithm spam. One email per show with venue coordinates 48h before doors.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2">
            <div className="flex border-2 border-[#FFFFFF] focus-within:border-[#FFD400] bg-[#1A1A18]">
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-[260px] px-4 py-3 bg-transparent text-sm text-[#FFFFFF] placeholder-[#888888] font-mono focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#FFD400] hover:bg-[#D8232A] text-[#111111] hover:text-[#FFFFFF] font-[family-name:var(--font-anton)] text-[13px] tracking-[0.6px] uppercase transition-colors shrink-0 cursor-pointer font-bold"
              >
                JOIN
              </button>
            </div>
            {error && <span className="text-xs text-[#D8232A] font-mono self-center">{error}</span>}
            {subscribed && (
              <span className="text-xs text-[#7AC142] font-mono self-center font-bold">
                ✓ You&apos;re locked onto the pirate list!
              </span>
            )}
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="text-[11px] text-[#7AC142] font-mono tracking-[1.4px] uppercase font-bold">
                {col.title}
              </span>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#D0D0D0] hover:text-[#FFD400] transition-colors font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t-2 border-[#2B2A25] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[22px] text-[#7AC142] font-[family-name:var(--font-anton)] tracking-[1.4px] select-none">
            GENHEPPIII
          </div>

          <div className="text-[10px] text-[#888888] font-mono tracking-[1px] uppercase text-center sm:text-left">
            © 2026 GENHEPPIII · JAKARTA, ID · ALL AGES, ALWAYS
          </div>

          <div className="px-3 py-1 bg-[#D8232A] text-[#FFFFFF] border border-[#111111] font-mono text-[10px] tracking-[1.2px] uppercase font-bold shadow-[2px_2px_0px_0px_#FFD400]">
            NO VIP PIT
          </div>
        </div>
      </div>
    </footer>
  );
}
