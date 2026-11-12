"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/navigation";
import { servicesList } from "@/data/servicesData";
import { MotionFadeIn } from "@/components/motion/MotionFadeIn";

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

          {/* Col 1 — Brand & Contact Primary (6 columns on lg - Lebih luas & leluasa dibanding 2 kolom navigasi) */}
          <MotionFadeIn
            direction="up"
            delay={0.08}
            className="md:col-span-2 lg:col-span-6 p-8 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between border-b md:border-b lg:border-b-0 border-dashed border-white/15"
          >
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
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white hover:text-[#07DFFF] transition-colors tracking-tight leading-none block break-all sm:break-normal"
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
              <Link
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Julhan Abdul Malik"
                className="p-2 rounded-lg border border-white/15 hover:border-white/40 hover:bg-white/10 text-[#a1a1aa] hover:text-[#E1306C] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </Link>
            </div>
          </MotionFadeIn>

          {/* Col 2 — Main Navigation Menu (3 columns on lg, ukuran kotak persis sama dengan Our Services) */}
          <MotionFadeIn
            direction="up"
            delay={0.16}
            className="md:col-span-1 lg:col-span-3 p-8 sm:p-10 lg:p-7 xl:p-9 space-y-8 flex flex-col justify-between border-b md:border-b-0 border-dashed border-white/15 md:border-r lg:border-r-0"
          >
            {/* Primary Navigation - Ukuran font proporsional, elegan & responsif */}
            <nav className="flex flex-col space-y-2.5 sm:space-y-3">
              {[
                { name: "Beranda", href: "/" },
                { name: "Portfolio", href: "/#portfolio" },
                { name: "Layanan", href: "/services" },
                { name: "Artikel", href: "/artikel" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between w-full text-xl sm:text-2xl lg:text-[1.35rem] font-semibold tracking-tight text-[#8a8a93] hover:text-white transition-all duration-200 group/nav py-0.5"
                >
                  <span className="transition-colors duration-200 group-hover/nav:text-white">
                    {item.name}
                  </span>
                  <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white opacity-0 -translate-x-1.5 translate-y-1.5 group-hover/nav:opacity-100 group-hover/nav:translate-x-0 group-hover/nav:translate-y-0 transition-all duration-200 shrink-0" />
                </Link>
              ))}
            </nav>
            {/* Support / Legalitas */}
            <div className="space-y-3 pt-6 border-t border-dashed border-white/15">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#71717a] block">
                SUPPORT
              </span>
              <div className="flex flex-col space-y-1.5">
                <Link
                  href="/privacy"
                  className="flex items-center justify-between w-full text-xs sm:text-sm text-[#8a8a93] hover:text-white transition-all duration-200 group/sup py-0.5"
                >
                  <span className="transition-colors duration-200 group-hover/sup:text-white">
                    Terms of Service
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white opacity-0 -translate-x-1.5 translate-y-1.5 group-hover/sup:opacity-100 group-hover/sup:translate-x-0 group-hover/sup:translate-y-0 transition-all duration-200 shrink-0" />
                </Link>
                <Link
                  href="/privacy"
                  className="flex items-center justify-between w-full text-xs sm:text-sm text-[#8a8a93] hover:text-white transition-all duration-200 group/sup py-0.5"
                >
                  <span className="transition-colors duration-200 group-hover/sup:text-white">
                    Privacy Policy
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white opacity-0 -translate-x-1.5 translate-y-1.5 group-hover/sup:opacity-100 group-hover/sup:translate-x-0 group-hover/sup:translate-y-0 transition-all duration-200 shrink-0" />
                </Link>
              </div>
            </div>
          </MotionFadeIn>

          {/* Col 3 — Layanan Saya & Support (3 columns on lg, ukuran kotak persis sama dengan Navigasi Utama) */}
          <MotionFadeIn
            direction="up"
            delay={0.24}
            className="md:col-span-1 lg:col-span-3 p-8 sm:p-10 lg:p-7 xl:p-9 space-y-8 flex flex-col justify-start"
          >
            {/* Our Services */}
            <div className="space-y-3">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#71717a] block">
                OUR SERVICES
              </span>
              <nav className="flex flex-col space-y-1.5">
                {servicesList.slice(0, 5).map((service) => (
                  <Link
                    key={service.id}
                    href={`/services#${service.id}`}
                    className="flex items-center justify-between w-full text-xs sm:text-sm text-[#8a8a93] hover:text-white transition-all duration-200 group/srv py-1"
                  >
                    <span className="transition-colors duration-200 group-hover/srv:text-white pr-2 leading-snug">
                      {service.titleId}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white opacity-0 -translate-x-1.5 translate-y-1.5 group-hover/srv:opacity-100 group-hover/srv:translate-x-0 group-hover/srv:translate-y-0 transition-all duration-200 shrink-0" />
                  </Link>
                ))}

                {/* Tombol Lihat Seluruh Layanan */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#07DFFF] hover:text-white transition-colors pt-2 group/more w-fit"
                >
                  <span>Lihat Seluruh Layanan ({servicesList.length})</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/more:translate-x-0.5 group-hover/more:-translate-y-0.5 transition-transform" />
                </Link>
              </nav>
            </div>
          </MotionFadeIn>

        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 2: Divider + Bottom Copyright Bar
            Menampilkan hak cipta & tombol CTA konsisten
        ════════════════════════════════════════════════════════════════ */}
        <MotionFadeIn
          direction="up"
          delay={0.1}
          className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-[#020c24]/30"
        >
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
        </MotionFadeIn>

        {/* ════════════════════════════════════════════════════════════════
            ROW 3: Signature Watermark
            Watermark tipografi arsitektur besar
        ════════════════════════════════════════════════════════════════ */}
        <MotionFadeIn
          direction="up"
          delay={0.15}
          className="overflow-hidden py-4 sm:py-6 text-center select-none bg-[#000519]"
        >
          <p className="footer-watermark text-[3rem] sm:text-[5rem] lg:text-[7rem] leading-none text-center tracking-[0.05em] text-white/10">
            JULHAN A MALIK
          </p>
        </MotionFadeIn>

      </div>
    </footer>
  );
}
