"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { socialLinks } from "@/data/navigation";

export function HeroSection() {
  return (
    <section className="relative min-h-[min(92vh,920px)] flex flex-col justify-between pt-24 pb-8 px-6 lg:px-12 bg-[#0a0a0a] text-white overflow-hidden select-none">
      {/* ── Soft Atmospheric Ambient (wpu.id style: warm subtle center-right glow, no neon glare) ── */}
      <div
        className="absolute top-1/4 right-1/4 w-[550px] h-[350px] rounded-full pointer-events-none -z-0 opacity-20 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.22) 0%, rgba(2, 132, 199, 0.08) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 left-10 w-[400px] h-[300px] rounded-full pointer-events-none -z-0 opacity-15 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Top spacer for navbar clearance */}
      <div className="h-2 shrink-0" />

      {/* ── Main Editorial Content Area (wpu.id signature layout) ── */}
      <div className="max-w-[82rem] mx-auto w-full relative z-10 my-auto py-2">
        
        {/* Row 1: "Bangun website, sistem" + Mini Code Card inline */}
        <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2">
          <h1 className="text-[1.85rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.6rem] xl:text-[5rem] font-extrabold text-white leading-[1.04] tracking-[-0.035em]">
            Bangun <span className="text-[#0ea5e9]">website</span>,{" "}
            <span className="text-[#0ea5e9]">sistem</span>
          </h1>

          {/* Mini Code Window Widget (Directly inline on Row 1) */}
          <div className="hidden xl:inline-block ml-3 align-middle">
            <div className="w-[230px] rounded-lg bg-[#141414] border border-white/[0.14] shadow-[0_12px_28px_rgba(0,0,0,0.7)] p-2.5 text-left">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                  <span className="w-2 h-2 rounded-full bg-[#eab308]" />
                  <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                </div>
                <div className="flex items-center gap-1 text-[9px] font-mono text-[#a1a1aa]">
                  <span className="px-1 rounded bg-[#0ea5e9]/20 text-[#38bdf8] font-bold text-[8px]">TS</span>
                  <span>createApp.ts</span>
                </div>
              </div>
              <div className="font-mono text-[10px] leading-[1.55] space-y-0.5 text-[#d4d4d4]">
                <div>
                  <span className="text-[#52525b] mr-2">1</span>
                  <span className="text-[#f43f5e]">import</span> Julhan <span className="text-[#f43f5e]">from</span> <span className="text-[#34d399]">&quot;core&quot;</span>;
                </div>
                <div>
                  <span className="text-[#52525b] mr-2">2</span>
                  <span className="text-[#38bdf8]">const</span> app = Julhan.<span className="text-[#fbbf24]">build</span>();
                </div>
                <div>
                  <span className="text-[#52525b] mr-2">3</span>
                  <span className="text-[#f43f5e]">await</span> app.<span className="text-[#fbbf24]">deploy</span>();
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Mini Trust Pill + "dan aplikasi mobile" */}
        <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 mt-1 sm:mt-2">
          {/* Mini Trust Pill (Directly inline on Row 2) */}
          <div className="hidden lg:inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-white/[0.14] shadow-[0_8px_20px_rgba(0,0,0,0.5)] mr-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-white leading-none">100% Klien Puas</span>
                <span className="text-[8px] font-mono px-1 py-0.2 rounded bg-emerald-500/15 text-emerald-400 font-semibold uppercase">Active</span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-[#fbbf24]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 fill-current" />
                ))}
                <span className="text-[9px] font-bold text-white font-mono ml-0.5">5.0</span>
              </div>
            </div>
          </div>

          <div className="text-[1.85rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.6rem] xl:text-[5rem] font-extrabold text-white leading-[1.04] tracking-[-0.035em]">
            dan <span className="text-[#0ea5e9]">aplikasi mobile</span>
          </div>
        </div>

        {/* Row 3: "siap pakai" (Left) + Description Subtitle (Right) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-10 mt-1 sm:mt-2 pt-1">
          <div className="text-[1.85rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.6rem] xl:text-[5rem] font-extrabold text-white leading-[1.04] tracking-[-0.035em] shrink-0">
            siap pakai.
          </div>

          <p className="max-w-xl text-sm sm:text-base lg:text-[16px] text-[#a1a1aa] leading-relaxed font-normal lg:pb-2">
            Solusi end-to-end dari riset, desain UI/UX, arsitektur kode bersih, hingga cloud deployment berstandar industri dengan pengerjaan cepat dan biaya transparan.
          </p>
        </div>
      </div>

      {/* ── Bottom Bar: Identity & CTA (wpu.id signature layout) ── */}
      <div className="max-w-[82rem] mx-auto w-full pt-4 sm:pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        {/* Bottom Left: Brand Signature */}
        <div className="flex items-center gap-3">
          <span className="w-6 h-[1.5px] bg-white/40 inline-block shrink-0" />
          <p className="text-xs sm:text-sm font-semibold text-white tracking-tight">
            Julhan Inovasi Digital
          </p>
        </div>

        {/* Bottom Right: Call-to-Action */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-xs text-[#71717a]">
            Siap memulai proyek hebat Anda?
          </span>
          <Link
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#18181b] hover:bg-[#222222] border border-white/20 hover:border-white/40 text-xs sm:text-sm font-semibold text-white transition-all duration-200 group"
          >
            <span>Mulai Kolaborasi</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#a1a1aa] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
