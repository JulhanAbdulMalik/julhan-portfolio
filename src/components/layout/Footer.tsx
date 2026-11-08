"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 bg-[#000519] text-white relative">
      {/* ── Main Unified Architectural Grid Table (Kotak Siku 90° + Garis Strip Putus-Putus Dark Blueprint) ── */}
      <div className="max-w-[84rem] mx-auto w-full border border-dashed border-white/15 bg-[#000519] rounded-none shadow-none">
        
        {/* ════════════════════════════════════════════════════════════════
            ROW 0: Top Spacer Row (Baris Margin Kosong di Awal Footer)
            Memberikan ruang napas (breathing room) di awal footer tanpa garis tengah
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="w-full border-b border-dashed border-white/15 h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

        {/* ════════════════════════════════════════════════════════════════
            ROW 1: Main Footer Content Columns
            Dipisahkan rapi dengan garis vertikal strip putus-putus
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 divide-y md:divide-y-0 lg:divide-x divide-dashed divide-white/15 border-b border-dashed border-white/15">

          {/* Col 1 — Brand & Contact Primary (6 columns on lg) */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-white font-medium leading-relaxed max-w-none">
                Membangun website &amp; aplikasi mobile yang benar-benar bekerja untuk bisnis nyata.
              </p>
            </div>

            {/* Big Email & WhatsApp Fast Track */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#71717a] block font-semibold">
                SALURAN KOMUNIKASI RESMI
              </span>
              <Link
                href="mailto:julhanabdulmalik@gmail.com"
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white hover:text-[#07DFFF] transition-colors tracking-tight leading-none block"
              >
                julhanabdulmalik<span className="text-[#07DFFF]">@gmail.com</span>
              </Link>
              <Link
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#a1a1aa] hover:text-white transition-colors block pt-1"
              >
                +62 831-1103-0309
              </Link>
            </div>

            {/* Social Icons (Gaya Presisi Seragam dengan Section 2) */}
            <div className="flex items-center gap-2 pt-2">
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Julhan Abdul Malik"
                className="p-2 rounded-lg border border-white/15 hover:border-white/40 hover:bg-white/10 text-[#a1a1aa] hover:text-white transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Julhan Abdul Malik"
                className="p-2 rounded-lg border border-white/15 hover:border-white/40 hover:bg-white/10 text-[#a1a1aa] hover:text-[#07DFFF] transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Col 2 — Navigation Menu (3 columns on lg) */}
          <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717a] block">
              NAVIGASI UTAMA
            </span>
            <nav className="flex flex-col space-y-2.5">
              <Link href="/" className="text-sm text-[#a1a1aa] hover:text-[#07DFFF] transition-colors">
                Beranda
              </Link>
              <Link href="/#portfolio" className="text-sm text-[#a1a1aa] hover:text-[#07DFFF] transition-colors">
                Portfolio
              </Link>
              <Link href="/services" className="text-sm text-[#a1a1aa] hover:text-[#07DFFF] transition-colors">
                Layanan
              </Link>
              <Link href="/artikel" className="text-sm text-[#a1a1aa] hover:text-[#07DFFF] transition-colors">
                Artikel
              </Link>
              <Link href="/#contact" className="text-sm text-[#a1a1aa] hover:text-[#07DFFF] transition-colors">
                Kontak
              </Link>
            </nav>
          </div>

          {/* Col 3 — Layanan Saya (3 columns on lg, seimbang dengan Navigasi Utama) */}
          <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717a] block">
              LAYANAN SAYA
            </span>
            <nav className="flex flex-col space-y-2.5">
              <Link href="/services" className="text-sm text-[#a1a1aa] hover:text-[#07DFFF] transition-colors">
                Landing Page &amp; Web Profil
              </Link>
              <Link href="/services" className="text-sm text-[#a1a1aa] hover:text-[#07DFFF] transition-colors">
                Aplikasi Mobile (Flutter)
              </Link>
              <Link href="/services" className="text-sm text-[#a1a1aa] hover:text-[#07DFFF] transition-colors">
                Toko Online &amp; E-Commerce
              </Link>
              <Link href="/services" className="text-sm text-[#a1a1aa] hover:text-[#07DFFF] transition-colors">
                Sistem Admin Dashboard
              </Link>
              <Link href="/services" className="text-sm text-[#a1a1aa] hover:text-[#07DFFF] transition-colors">
                Bundle Web + Mobile App
              </Link>
              <Link href="/services" className="text-sm text-[#a1a1aa] hover:text-[#07DFFF] transition-colors">
                Portal Konten &amp; Artikel Publikasi
              </Link>
            </nav>
          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 2: Divider + Bottom Copyright Bar
            Menampilkan hak cipta & tombol CTA konsisten
        ════════════════════════════════════════════════════════════════ */}
        <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-[#020c24]/30">
          <p className="text-xs text-[#71717a]">
            © {year} Julhan Abdul Malik. Semua hak dilindungi.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-[#71717a] hover:text-[#a1a1aa] transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-transparent hover:bg-white/10 border border-dashed border-white/50 hover:border-white text-xs sm:text-sm font-semibold text-white transition-all duration-200 group shrink-0"
            >
              <span>Mulai Proyek</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 3: Signature Watermark
            Watermark tipografi arsitektur besar
        ════════════════════════════════════════════════════════════════ */}
        <div className="overflow-hidden py-4 sm:py-6 text-center select-none bg-[#000519]">
          <p className="footer-watermark text-[3rem] sm:text-[5rem] lg:text-[7rem] leading-none text-center tracking-[0.05em] text-white/10">
            JULHAN A MALIK
          </p>
        </div>

      </div>
    </footer>
  );
}
