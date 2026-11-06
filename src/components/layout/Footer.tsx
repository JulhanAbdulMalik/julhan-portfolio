"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark px-6 sm:px-10 lg:px-16 xl:px-24" style={{ backgroundColor: "#000414" }}>
      {/* ── Main Grid ────────────────────────────────────────── */}
      <div className="section-inner pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Col 1 — Brand (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Tagline */}
            <p className="text-[15px] text-[#d4d4d4] leading-relaxed max-w-sm">
              Membangun website & aplikasi mobile yang benar-benar bekerja untuk bisnis nyata.
            </p>

            {/* Identity */}
            <div>
              <p className="text-xs text-[#71717a] font-medium">Julhan Abdul Malik</p>
              <p className="text-xs text-[#07DFFF] mt-0.5">
                Berbasis di Sukabumi, Jawa Barat
              </p>
            </div>

            {/* Big Email */}
            <div>
              <Link
                href="mailto:julhanabdulmalik@gmail.com"
                className="text-[1.6rem] sm:text-[2rem] font-semibold text-white hover:text-[#07DFFF] transition-colors tracking-tight leading-none block"
              >
                julhanabdulmalik
                <span className="text-[#07DFFF]">@gmail.com</span>
              </Link>
              <Link
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#a1a1aa] hover:text-white transition-colors mt-2 block"
              >
                +62 831-1103-0309
              </Link>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#71717a] hover:text-white transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </Link>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#71717a] hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Col 2 — Navigation (3 columns) */}
          <div className="lg:col-span-3">
            <nav className="flex flex-col gap-3">
              <Link href="/"          className="text-[15px] text-[#a1a1aa] hover:text-white transition-colors">Beranda</Link>
              <Link href="/services"  className="text-[15px] text-[#a1a1aa] hover:text-white transition-colors">Layanan</Link>
              <Link href="/portfolio" className="text-[15px] text-[#a1a1aa] hover:text-white transition-colors">Portfolio</Link>
              <Link href="/pricing"   className="text-[15px] text-[#a1a1aa] hover:text-white transition-colors">Harga</Link>
              <Link href="/blog"      className="text-[15px] text-[#a1a1aa] hover:text-white transition-colors">Blog</Link>
              <Link href="/contact"   className="text-[15px] text-[#a1a1aa] hover:text-white transition-colors">Kontak</Link>
            </nav>
          </div>

          {/* Col 3 — Follow + Services (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Follow */}
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#71717a] mb-1">
                Ikuti Saya
              </p>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-[#07DFFF] hover:opacity-75 transition-opacity"
              >
                LinkedIn
              </Link>
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-[#07DFFF] hover:opacity-75 transition-opacity"
              >
                GitHub
              </Link>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#71717a] mb-1">
                Layanan Saya
              </p>
              <Link href="/services" className="text-[15px] text-[#a1a1aa] hover:text-white transition-colors">
                Website Profesional
              </Link>
              <Link href="/services" className="text-[15px] text-[#a1a1aa] hover:text-white transition-colors">
                Aplikasi Mobile (Flutter)
              </Link>
              <Link href="/services" className="text-[15px] text-[#a1a1aa] hover:text-white transition-colors">
                UI/UX Design
              </Link>
            </div>
          </div>
        </div>

        {/* ── Divider + Bottom Bar ─────────────────────────── */}
        <div className="mt-12 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
              className="inline-flex items-center gap-1 text-xs text-[#07DFFF] hover:opacity-75 transition-opacity font-medium"
            >
              Mulai Proyek
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Signature Watermark ──────────────────────────────── */}
      <div className="overflow-hidden">
        <p className="footer-watermark px-6 lg:px-10 pb-2">
          JULHAN A MALIK
        </p>
      </div>
    </footer>
  );
}
