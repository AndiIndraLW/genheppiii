"use client";

import React, { useState } from "react";
import TopTicker from "@/components/TopTicker";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import MarqueeBanner from "@/components/MarqueeBanner";
import ScenesSection, { SceneItem } from "@/components/ScenesSection";
import AboutSection from "@/components/AboutSection";
import ManifestoBand from "@/components/ManifestoBand";
import Footer from "@/components/Footer";
import TicketModal from "@/components/TicketModal";
import SceneModal from "@/components/SceneModal";
import ProgramModal from "@/components/ProgramModal";

export default function Home() {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [selectedScene, setSelectedScene] = useState<SceneItem | null>(null);
  const [programModalOpen, setProgramModalOpen] = useState(false);

  const handleOpenTickets = () => setTicketModalOpen(true);
  const handleCloseTickets = () => setTicketModalOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#7AC142] text-[#111111] selection:bg-[#D8232A] selection:text-[#FFFFFF] overflow-x-clip" style={{ overflowX: "clip" }}>
      {/* 1. Top Ticker marquee */}
      <TopTicker onOpenTickets={handleOpenTickets} />

      {/* 2. Responsive sticky navigation */}
      <Navbar onOpenTickets={handleOpenTickets} />

      {/* 3. Hero Section */}
      <Hero onOpenTickets={handleOpenTickets} />

      {/* 4. Upcoming Events Sticky Section */}
      <UpcomingEvents onOpenTickets={handleOpenTickets} />

      {/* 5. Marquee Banner & Zigzag Divider */}
      <MarqueeBanner />

      {/* 5. Scenes Section (01 SKATE, 02 DANCE, 03 MUSIC) */}
      <ScenesSection onSelectScene={(scene) => setSelectedScene(scene)} />

      {/* 6. About Section (A SMALL CREW OF LOUD PEOPLE) */}
      <AboutSection onOpenProgram={() => setProgramModalOpen(true)} />

      {/* 7. Manifesto Band */}
      <ManifestoBand />

      {/* 8. Full Footer with CTA, Newsletter & Links */}
      <Footer onOpenTickets={handleOpenTickets} />

      {/* Interactive Modals */}
      <TicketModal isOpen={ticketModalOpen} onClose={handleCloseTickets} />
      <SceneModal
        scene={selectedScene}
        onClose={() => setSelectedScene(null)}
        onOpenTickets={handleOpenTickets}
      />
      <ProgramModal
        isOpen={programModalOpen}
        onClose={() => setProgramModalOpen(false)}
        onOpenTickets={handleOpenTickets}
      />
    </main>
  );
}
