"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Home, Briefcase, Layers, ArrowRight } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 relative overflow-hidden flex items-center justify-center select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-[#0ea5e9]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 relative z-10 space-y-8 text-center">
        {/* Terminal Window Box */}
        <div className="rounded-3xl bg-[#111111] border border-white/[0.08] shadow-2xl overflow-hidden text-left">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-white/[0.08] select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-[#71717a] ml-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#0ea5e9]" />
                <span>bash - 404 Route Not Found - 80x24</span>
              </span>
            </div>
            <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
              STATUS: 404
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-7 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3 select-text">
            <div className="text-[#71717a]">
              <span className="text-emerald-400">julhan@production-server</span>
              :<span className="text-[#38bdf8]">~</span>$ curl -i
              https://julhan.my.id/requested-url
            </div>

            <div className="text-rose-400">
              HTTP/2 404 Not Found
              <br />
              content-type: text/plain; charset=utf-8
              <br />
              x-error-code: ROUTE_NOT_FOUND_IN_MANIFEST
            </div>

            <div className="text-[#a1a1aa] pt-1">
              [Info]: Halaman yang Anda tuju tidak ditemukan atau URL mungkin salah ketik.
            </div>

            <div className="text-[#71717a] pt-2">
              <span className="text-emerald-400">julhan@production-server</span>
              :<span className="text-[#38bdf8]">~</span>$ git checkout main
            </div>

            <div className="text-cyan-300">
              Switched to branch &apos;main&apos;. Gunakan salah satu navigasi aman berikut untuk melanjutkan:
            </div>
          </div>
        </div>

        {/* Big 404 Heading & Subtitle */}
        <div className="space-y-3">
          <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-white font-mono">
            4<span className="text-[#0ea5e9]">0</span>4
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Jalur URL Tersesat di Luar Manifest
          </h2>
          <p className="text-[#a1a1aa] text-xs sm:text-sm max-w-lg mx-auto">
            Jangan khawatir, kode kami tidak rusak. Anda bisa kembali ke Beranda atau menjelajahi karya dan solusi yang tersedia.
          </p>
        </div>

        {/* Quick Navigation Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-2xl mx-auto">
          <Link
            href="/"
            className="p-3.5 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-[#0ea5e9]/40 text-[#a1a1aa] hover:text-white transition-all flex items-center justify-center gap-2 group"
          >
            <Home className="w-4 h-4 text-[#0ea5e9] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold">
              Ke Beranda
            </span>
          </Link>

          <Link
            href="/portfolio"
            className="p-3.5 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-[#0ea5e9]/40 text-[#a1a1aa] hover:text-white transition-all flex items-center justify-center gap-2 group"
          >
            <Briefcase className="w-4 h-4 text-[#0ea5e9] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold">
              Lihat Portfolio
            </span>
          </Link>

          <Link
            href="/services"
            className="p-3.5 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-[#0ea5e9]/40 text-[#a1a1aa] hover:text-white transition-all flex items-center justify-center gap-2 group"
          >
            <Layers className="w-4 h-4 text-[#0ea5e9] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold">
              Daftar Layanan
            </span>
          </Link>
        </div>

        {/* WhatsApp direct help */}
        <div className="pt-4">
          <a
            href="https://wa.me/6283111030309?text=Halo%20Mas%20Julhan,%20saya%20menemukan%20broken%20link%20di%20website%20Anda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#71717a] hover:text-[#0ea5e9] transition-colors"
          >
            <span>
              Perlu bantuan atau menemukan link rusak? Lapor via WhatsApp
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
