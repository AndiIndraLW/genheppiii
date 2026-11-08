"use client";

import React, { useState } from "react";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TicketModal({ isOpen, onClose }: TicketModalProps) {
  const [selectedPass, setSelectedPass] = useState<"season" | "single" | "supporter">("season");
  const [qty, setQty] = useState(1);
  const [step, setStep] = useState<"select" | "success">("select");
  const [voucherCode, setVoucherCode] = useState("GH26-PIT-7842");

  if (!isOpen) return null;

  const passes = [
    {
      id: "season",
      title: "SEASON 2027 FULL PASS",
      price: 1200000,
      priceLabel: "IDR 1,200,000",
      desc: "Access to all 14 shows across Jakarta, Bandung, and Surabaya. 100% transferable.",
      tag: "BEST VALUE · 30% OFF",
    },
    {
      id: "single",
      title: "SINGLE SHOW ENTRY",
      price: 150000,
      priceLabel: "IDR 150,000",
      desc: "Valid for any upcoming Skate jam, Dance battle, or Music pit night. Includes free zine.",
      tag: "STANDARD DOOR",
    },
    {
      id: "supporter",
      title: "SCENE SUPPORTER BUNDLE",
      price: 400000,
      priceLabel: "IDR 400,000",
      desc: "3 show passes + limited run silk-screened heavyweight show poster + mixtape tape.",
      tag: "COLLECTOR EDITION",
    },
  ];

  const currentPass = passes.find((p) => p.id === selectedPass)!;
  const total = currentPass.price * qty;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setVoucherCode(`GH26-PIT-${Math.floor(1000 + Math.random() * 9000)}`);
    setStep("success");
  };

  const handleReset = () => {
    setStep("select");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[620px] bg-[#FFFFFF] border-3 border-[#111111] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#111111] text-[#111111]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-[#111111] hover:bg-[#D8232A] text-[#FFFFFF] font-mono text-sm font-bold transition-colors cursor-pointer"
        >
          ✕
        </button>

        {step === "select" ? (
          <div>
            <div className="flex items-center gap-2 text-[11px] text-[#D8232A] font-mono tracking-[1.6px] uppercase font-bold pb-1">
              <span>✳</span> OFFICIAL TICKET DESK
            </div>
            <h2 className="text-[32px] sm:text-[38px] leading-tight text-[#111111] font-[family-name:var(--font-anton)] tracking-[0.5px] uppercase">
              RESERVE YOUR WRISTBAND
            </h2>
            <p className="text-[13px] text-[#444444] font-sans pt-1 pb-6 font-medium">
              All ages, always. Flat prices with no hidden service or convenience fees.
            </p>

            {/* Pass Options */}
            <div className="flex flex-col gap-3 pb-6">
              {passes.map((pass) => (
                <div
                  key={pass.id}
                  onClick={() => setSelectedPass(pass.id as "season" | "single" | "supporter")}
                  className={`p-4 border-2 cursor-pointer transition-all ${
                    selectedPass === pass.id
                      ? "border-[#111111] bg-[#7AC142]/20 shadow-[4px_4px_0px_0px_#111111]"
                      : "border-[#111111]/40 hover:border-[#111111] bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[17px] font-[family-name:var(--font-anton)] tracking-[0.5px]">
                      {pass.title}
                    </span>
                    <span className="text-[15px] font-mono font-bold text-[#D8232A]">
                      {pass.priceLabel}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#444444] pt-1">{pass.desc}</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 text-[10px] font-mono text-[#111111] bg-[#FFD400] uppercase font-bold border border-[#111111]">
                    {pass.tag}
                  </span>
                </div>
              ))}
            </div>

            {/* Quantity Selector & Summary */}
            <div className="flex items-center justify-between py-4 border-t-2 border-[#111111]">
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-mono uppercase text-[#111111] font-bold">QTY:</span>
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-7 h-7 flex items-center justify-center bg-[#111111] hover:bg-[#D8232A] text-[#FFFFFF] font-mono font-bold cursor-pointer"
                >
                  -
                </button>
                <span className="w-6 text-center font-mono font-bold text-sm text-[#111111]">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  className="w-7 h-7 flex items-center justify-center bg-[#111111] hover:bg-[#D8232A] text-[#FFFFFF] font-mono font-bold cursor-pointer"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono text-[#444444] block uppercase font-bold">Total Due:</span>
                <span className="text-[20px] font-mono font-bold text-[#D8232A]">
                  IDR {total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Button: Primary Red #D8232A */}
            <button
              onClick={handleCheckout}
              className="w-full mt-4 py-4 bg-[#D8232A] hover:bg-[#b81d23] text-[#FFFFFF] font-[family-name:var(--font-anton)] text-[16px] tracking-[0.6px] uppercase border-2 border-[#111111] shadow-[4px_4px_0px_0px_#111111] cursor-pointer transition-all"
            >
              CONFIRM PASS RESERVATION →
            </button>
          </div>
        ) : (
          <div className="py-6 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-none bg-[#7AC142] text-[#111111] border-2 border-[#111111] flex items-center justify-center text-3xl font-bold shadow-[3px_3px_0px_0px_#111111]">
              ✓
            </div>
            <h3 className="text-[32px] text-[#111111] font-[family-name:var(--font-anton)] uppercase tracking-[0.5px]">
              WRISTBAND RESERVED!
            </h3>
            <p className="text-[14px] text-[#333333] max-w-[420px] font-sans">
              You secured <span className="text-[#D8232A] font-bold">{qty}x {currentPass.title}</span>. Your reservation voucher code is:
            </p>
            <div className="px-6 py-3 bg-[#FFD400] border-2 border-[#111111] font-mono text-[18px] tracking-[3px] text-[#111111] font-bold select-all shadow-[3px_3px_0px_0px_#111111]">
              {voucherCode}
            </div>
            <p className="text-[11px] text-[#444444] font-mono font-medium">
              Show this code at will-call door on show night. No need to print.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 bg-[#111111] hover:bg-[#D8232A] text-[#FFFFFF] font-[family-name:var(--font-anton)] text-sm tracking-[0.6px] uppercase cursor-pointer transition-colors shadow-[3px_3px_0px_0px_#7AC142]"
            >
              BACK TO HOME
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
