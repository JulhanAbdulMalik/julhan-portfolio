"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FolderKanban, ArrowUpRight, ExternalLink, ShieldAlert } from "lucide-react";

export function PortfolioPreviewSection() {
  const previewProjects = [
    {
      id: "cdu-portal",
      title: "CDU Portal – Monitoring Perkuliahan Universitas",
      category: "Sistem Institusi Kampus",
      desc: "Sistem manajemen akademik skala universitas mengelola 1.500+ kelas aktif dari 28 Prodi dengan 25.500+ baris data monitoring, integrasi LMS, ekspor Excel & PDF.",
      image: "/images/projects/cdu-portal.svg",
      tech: ["Next.js 15", "React 19", "TypeScript", "Prisma ORM", "PostgreSQL"],
      liveUrl: "https://curriculum.julhan.my.id",
      status: "🔒 Akses Internal Kampus (Data Rahasia)",
      isConfidential: true,
    },
    {
      id: "panenkita",
      title: "PanenKita – Platform Agritech & Mobile App Flutter",
      category: "Agritech & Mobile App",
      desc: "Aplikasi mobile Android di Google Play Store dan website marketplace berbasis konsep SCM untuk rencana tanam petani dan penjualan langsung ke pembeli.",
      image: "/images/projects/panenkita.svg",
      tech: ["Flutter", "Dart", "React.js", "Express.js", "PostgreSQL"],
      liveUrl: "https://panenkita.web.id",
      status: "✓ Google Play Store & Web",
      isConfidential: false,
    },
    {
      id: "yuwanyie-picnic",
      title: "Yuwanyie Picnic – Web App & Sistem F&B",
      category: "E-Commerce & Sistem F&B",
      desc: "Customer storefront pemesanan paket piknik dengan integrasi pembayaran QRIS/Bank otomatis dan admin dashboard analitik omset bisnis menggunakan Recharts.",
      image: "/images/projects/yuwanyie-picnic.svg",
      tech: ["Next.js 15", "React 19", "Supabase RLS", "next-intl", "Cloudinary"],
      liveUrl: "https://yuwanyie-picnic.com",
      status: "✓ Live Production System",
      isConfidential: false,
    },
  ];

  return (
    <section
      id="portfolio"
      className="section-light py-20 sm:py-28 text-[#0a0a0a] border-t border-b border-black/[0.08] relative select-none"
    >
      <div className="section-inner space-y-12 sm:space-y-16">
        
        {/* ── Top Header Row (wpu.id style) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/[0.08]">
          <div className="space-y-4 max-w-2xl">
            <div className="section-badge section-badge-light">
              <FolderKanban className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span>Portfolio Unggulan</span>
            </div>

            <h2 className="text-[1.85rem] sm:text-[3.2rem] lg:text-[3.8rem] font-extrabold text-[#0a0a0a] leading-[1.08] tracking-[-0.03em]">
              Karya nyata yang{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#0ea5e9]">
                teruji di industri.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <p className="max-w-md text-sm sm:text-base text-[#52525b] leading-relaxed font-normal sm:text-right">
              Sistem production-ready yang dibangun dengan standar kode industri dan aktif digunakan oleh pengguna nyata.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0a0a0a] hover:text-[#0ea5e9] transition-colors group mt-1"
            >
              <span>Lihat Semua 6 Proyek Lengkap</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ── 3 Featured Project Cards Grid (Light Mode Blueprint Cards) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {previewProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-white border border-black/[0.08] hover:border-[#0ea5e9]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Frame with Status Badge */}
              <div className="relative aspect-[16/10] w-full bg-[#f1f1f1] overflow-hidden border-b border-black/[0.06]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status Badge overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-mono font-semibold backdrop-blur-md border shadow-sm ${
                      project.isConfidential
                        ? "bg-white/90 border-amber-500/40 text-amber-700"
                        : "bg-white/90 border-emerald-500/40 text-emerald-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0ea5e9] block">
                    {project.category}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0a0a0a] group-hover:text-[#0ea5e9] transition-colors leading-snug tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed line-clamp-3 font-normal">
                    {project.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.06] space-y-4">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-black/[0.04] text-[10px] font-mono font-medium text-[#404040]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-1">
                    <Link
                      href="/portfolio"
                      className="text-xs font-semibold text-[#0a0a0a] hover:text-[#0ea5e9] flex items-center gap-1 transition-colors"
                    >
                      <span>Pelajari Arsitektur</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.isConfidential ? (
                      <span className="text-[11px] text-[#71717a] flex items-center gap-1 font-mono">
                        <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                        <span>Data Internal</span>
                      </span>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#71717a] hover:text-[#0a0a0a] flex items-center gap-1 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
