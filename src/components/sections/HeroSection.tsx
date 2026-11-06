"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { socialLinks } from "@/data/navigation";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen flex flex-col justify-between pt-0 pb-6 sm:pb-8 px-6 sm:px-10 lg:px-16 xl:px-24 bg-[#000519] text-white overflow-hidden"
    >
      {/* ── Abstract Gradient 1: Kiri Atas (Top-Left: Brand 800) ── */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 sm:-top-48 sm:-left-44 w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] rounded-[45%_55%_65%_35%/40%_60%_40%_60%] blur-[120px] sm:blur-[150px] opacity-80 -z-0"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(8, 101, 130, 0.85) 0%, rgba(8, 101, 130, 0.45) 50%, rgba(8, 101, 130, 0.15) 75%, transparent 90%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-4 left-12 sm:left-20 w-[340px] h-[280px] sm:w-[480px] sm:h-[380px] rounded-full blur-[100px] opacity-60 -z-0 rotate-12"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(8, 101, 130, 0.75) 0%, rgba(8, 101, 130, 0.25) 60%, transparent 80%)",
        }}
      />

      {/* ── Abstract Gradient 2: Kanan Bawah (Bottom-Right: Brand 800) ── */}
      <div
        className="pointer-events-none absolute -bottom-36 -right-36 sm:-bottom-52 sm:-right-48 w-[520px] h-[520px] sm:w-[760px] sm:h-[760px] rounded-[55%_45%_40%_60%/50%_40%_60%_50%] blur-[130px] sm:blur-[160px] opacity-80 -z-0"
        style={{
          background:
            "radial-gradient(circle at 65% 65%, rgba(8, 101, 130, 0.85) 0%, rgba(8, 101, 130, 0.45) 50%, rgba(8, 101, 130, 0.15) 75%, transparent 90%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-12 right-16 sm:right-28 w-[360px] h-[300px] sm:w-[500px] sm:h-[400px] rounded-full blur-[110px] opacity-60 -z-0 -rotate-12"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(8, 101, 130, 0.75) 0%, rgba(8, 101, 130, 0.25) 60%, transparent 80%)",
        }}
      />

      {/* Top spacer to balance the bottom bar with the transparent floating Navbar */}
      <div className="h-10 sm:h-12 lg:h-14 shrink-0" aria-hidden="true" />

      {/* ── Floating Tech 1: Next.js (Top-Left, Miring -> Lurus Saat Hover) ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block absolute top-48 xl:top-56 left-16 xl:left-28 2xl:left-36 z-20"
      >
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          title="Kunjungi Website Resmi Next.js"
          className="flex items-center justify-center w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-[#020c24]/90 border border-[#007FA1]/50 hover:border-[#07DFFF]/80 shadow-[0_16px_36px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_45px_rgba(7,223,255,0.35)] backdrop-blur-md transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer select-none group"
        >
          <Image
            src="/images/tech/nextjs.svg"
            alt="Next.js Official Logo"
            width={36}
            height={36}
            className="w-8 h-8 xl:w-9 xl:h-9 object-contain group-hover:scale-105 transition-transform"
          />
        </a>
      </motion.div>

      {/* ── Floating Tech 2: React (Top-Left, Miring -> Lurus Saat Hover) ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="hidden lg:block absolute top-28 xl:top-36 left-36 xl:left-52 2xl:left-64 z-20"
      >
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="Kunjungi Website Resmi React"
          className="flex items-center justify-center w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-[#020c24]/90 border border-[#007FA1]/50 hover:border-[#07DFFF]/80 shadow-[0_16px_36px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_45px_rgba(7,223,255,0.35)] backdrop-blur-md transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer select-none group"
        >
          <Image
            src="/images/tech/react.svg"
            alt="React Official Logo"
            width={36}
            height={36}
            className="w-8 h-8 xl:w-9 xl:h-9 object-contain group-hover:scale-105 transition-transform"
          />
        </a>
      </motion.div>

      {/* ── Abstract Card 1: createApp.ts (Top-Right / Kanan Atas, Miring -> Lurus & Membesar saat Hover) ── */}
      <div className="hidden lg:block absolute top-32 xl:top-36 right-10 xl:right-20 2xl:right-28 z-20 transform rotate-[5deg] hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer select-none">
        <div className="w-[300px] xl:w-[330px] rounded-xl bg-[#020c24]/95 border border-[#007FA1]/40 hover:border-[#07DFFF]/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_60px_rgba(7,223,255,0.3)] p-3.5 text-left backdrop-blur-md transition-all duration-300">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#a1a1aa]">
              <span className="px-1.5 py-0.5 rounded bg-[#007FA1]/30 text-[#07DFFF] font-semibold text-[9px] border border-[#007FA1]/50">TS</span>
              <span>createApp.ts</span>
            </div>
          </div>
          <div className="font-mono text-xs leading-[1.65] space-y-1 text-[#d4d4d4] py-0.5">
            <div>
              <span className="text-[#52525b] select-none mr-2.5">1</span>
              <span className="text-[#f43f5e]">import</span> Julhan <span className="text-[#f43f5e]">from</span> <span className="text-[#34d399]">&quot;core&quot;</span>;
            </div>
            <div>
              <span className="text-[#52525b] select-none mr-2.5">2</span>
              <span className="text-[#07DFFF]">const</span> system = Julhan.<span className="text-[#fbbf24]">init</span>();
            </div>
            <div>
              <span className="text-[#52525b] select-none mr-2.5">3</span>
              <span className="text-[#f43f5e]">await</span> system.<span className="text-[#fbbf24]">deploy</span>();
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/[0.06] text-[10px] font-mono text-[#71717a]">
            <span>TypeScript 5.3</span>
            <span>Ln 3, Col 24</span>
          </div>
        </div>
      </div>

      {/* ── Abstract Card 2: Solusi Digital / 100% Klien Puas (Bottom-Left / Kiri Bawah, Miring -> Lurus & Membesar saat Hover) ── */}
      <div className="hidden lg:block absolute bottom-40 xl:bottom-48 left-18 xl:left-32 2xl:left-52 z-20 transform -rotate-[5deg] hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer select-none">
        <div className="w-[250px] xl:w-[270px] rounded-xl bg-[#020c24]/95 border border-[#007FA1]/40 hover:border-[#07DFFF]/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_60px_rgba(7,223,255,0.3)] p-3 text-left backdrop-blur-md transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-medium text-[#a1a1aa]">Solusi Digital</span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold uppercase border border-emerald-500/25">
              Active
            </span>
          </div>

          <div className="mt-1.5">
            <span className="text-sm sm:text-base font-semibold text-white tracking-tight leading-none block">
              100% Klien Puas
            </span>
            <p className="text-[10px] text-[#71717a] font-normal leading-tight mt-0.5">
              Standar clean code & skalabilitas
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/[0.06]">
            <div className="flex -space-x-1.5">
              <span className="w-5 h-5 rounded-full bg-[#1b2644] border border-[#020c24] text-[9px] flex items-center justify-center font-mono text-white/80">
                JM
              </span>
              <span className="w-5 h-5 rounded-full bg-[#273456] border border-[#020c24] text-[9px] flex items-center justify-center font-mono text-white/80">
                PT
              </span>
              <span className="w-5 h-5 rounded-full bg-[#34446d] border border-[#020c24] text-[9px] flex items-center justify-center font-mono text-white/80">
                ID
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#fbbf24]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-current" />
              ))}
              <span className="text-[10px] font-semibold text-white font-mono ml-0.5">5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating Tech 3: Flutter (Bottom-Right, Miring -> Lurus Saat Hover) ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="hidden lg:block absolute bottom-52 xl:bottom-60 right-8 xl:right-16 2xl:right-24 z-20"
      >
        <a
          href="https://flutter.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="Kunjungi Website Resmi Flutter"
          className="flex items-center justify-center w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-[#020c24]/90 border border-[#007FA1]/50 hover:border-[#07DFFF]/80 shadow-[0_16px_36px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_45px_rgba(7,223,255,0.35)] backdrop-blur-md transform rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer select-none group"
        >
          <Image
            src="/images/tech/flutter.svg"
            alt="Flutter Official Logo"
            width={36}
            height={36}
            className="w-7 h-7 xl:w-8 xl:h-8 object-contain group-hover:scale-105 transition-transform"
          />
        </a>
      </motion.div>

      {/* ── Floating Tech 4: PostgreSQL (Bottom-Right, Miring -> Lurus Saat Hover) ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
        className="hidden lg:block absolute bottom-28 xl:bottom-32 right-16 xl:right-32 2xl:right-44 z-20"
      >
        <a
          href="https://www.postgresql.org"
          target="_blank"
          rel="noopener noreferrer"
          title="Kunjungi Website Resmi PostgreSQL"
          className="flex items-center justify-center w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-[#020c24]/90 border border-[#007FA1]/50 hover:border-[#07DFFF]/80 shadow-[0_16px_36px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_45px_rgba(7,223,255,0.35)] backdrop-blur-md transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-300 ease-out cursor-pointer select-none group"
        >
          <Image
            src="/images/tech/postgresql.svg"
            alt="PostgreSQL Official Logo"
            width={36}
            height={36}
            className="w-8 h-8 xl:w-9 xl:h-9 object-contain group-hover:scale-105 transition-transform"
          />
        </a>
      </motion.div>

      {/* ── Main Centered Editorial Content Area ── */}
      <div className="max-w-[84rem] mx-auto w-full relative z-10 my-auto py-2 flex flex-col items-center justify-center text-center">
        <h1 className="text-[2rem] sm:text-[2.9rem] md:text-[3.6rem] lg:text-[4.2rem] xl:text-[4.8rem] font-semibold text-white leading-[1.14] sm:leading-[1.15] tracking-[-0.03em] max-w-6xl">
          Wujudkan ide bisnis
          <br />
          <span className="text-[#07DFFF]">Website & Mobile Application</span>
          <br />
          yang siap scale-up.
        </h1>

        <p className="max-w-2xl lg:max-w-[680px] xl:max-w-[720px] text-sm sm:text-base lg:text-[15px] xl:text-[16px] text-[#a1a1aa] leading-relaxed font-normal mt-8 sm:mt-10 lg:mt-12">
          Membantu bisnis dan startup membangun website modern serta aplikasi mobile berkinerja tinggi, cepat, aman, dan dirancang untuk mempermudah operasional bisnis Anda.
        </p>
      </div>

      {/* ── Bottom Bar: Identity & CTA (wpu.id signature layout) ── */}
      <div className="max-w-[84rem] mx-auto w-full pt-4 sm:pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 relative z-10">
        {/* Bottom Left: Brand Signature */}
        <div className="flex items-center gap-3">
          <span className="w-6 h-[1.5px] bg-[#007FA1] inline-block shrink-0" />
          <p className="text-xs sm:text-sm font-semibold text-white tracking-tight">
            julhan.my.id
          </p>
        </div>

        {/* Bottom Right: Call-to-Action */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-xs sm:text-sm text-slate-300 font-normal">
            Siap memulai proyek hebat Anda?
          </span>
          <Link
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-transparent hover:bg-white/10 border border-dashed border-white/50 hover:border-white text-xs sm:text-sm font-semibold text-white transition-all duration-200 group"
          >
            <span>Mulai Kolaborasi</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
