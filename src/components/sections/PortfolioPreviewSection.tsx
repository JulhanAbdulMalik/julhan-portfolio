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
      className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] relative bg-white border-b border-dashed border-neutral-300"
    >
      {/* ── Main Unified Architectural Grid Table (Kotak Siku 90° + Garis Strip Putus-Putus / wpu.id 1:1) ── */}
      <div className="max-w-[84rem] mx-auto w-full border border-dashed border-neutral-300 bg-white rounded-none shadow-none">
        
        {/* ════════════════════════════════════════════════════════════════
            ROW 0: Top Spacer Row (Baris Margin Kosong di Awal Section 4)
            Memberikan ruang napas (breathing room) di awal section tanpa garis tengah
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="w-full border-b border-dashed border-neutral-300 h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

        {/* ════════════════════════════════════════════════════════════════
            ROW 1: Header Row (Portfolio Unggulan: Judul di Atas, Deskripsi di Bawah)
            Satu blok utuh presisi seperti Section 2
        ════════════════════════════════════════════════════════════════ */}
        <div className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-neutral-300 flex flex-col justify-center space-y-4 sm:space-y-5">
          {/* Bagian Atas: Badge + Judul */}
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#007FA1]/10 text-[#007FA1] border border-[#007FA1]/25 w-fit">
              <FolderKanban className="w-3.5 h-3.5 text-[#007FA1]" />
              <span>Portfolio Unggulan</span>
            </div>

            <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem] xl:text-[3.5rem] font-semibold text-[#000519] leading-[1.12] tracking-[-0.03em]">
              Karya nyata yang{" "}
              <span className="text-[#007FA1]">
                teruji di industri.
              </span>
            </h2>
          </div>

          {/* Bagian Bawah: Deskripsi */}
          <p className="text-sm sm:text-base text-[#52525b] leading-relaxed font-normal max-w-none">
            Sistem production-ready yang dibangun dengan standar kode industri dan aktif digunakan oleh pengguna nyata.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 2: 3 Featured Project Columns (Tabel 3 Kolom Siku 90° wpu.id)
            Setiap kolom dipisahkan garis putus-putus presisi tinggi
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-neutral-300 border-b border-dashed border-neutral-300">
          {previewProjects.map((project) => (
            <div
              key={project.id}
              className="p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-white hover:bg-[#fafafa]/60 transition-colors group"
            >
              <div className="space-y-5">
                {/* Image Frame with Status Badge */}
                <div className="relative aspect-[16/10] w-full bg-neutral-100 rounded-xl overflow-hidden border border-black/[0.06] shadow-sm">
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
                      className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold backdrop-blur-md border shadow-sm ${
                        project.isConfidential
                          ? "bg-white/95 border-amber-500/40 text-amber-800"
                          : "bg-white/95 border-emerald-500/40 text-emerald-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#007FA1] block">
                    {project.category}
                  </span>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#000519] group-hover:text-[#007FA1] transition-colors leading-snug tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed line-clamp-3 font-normal">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Card Area: Tech tags & Action links */}
              <div className="pt-5 border-t border-dashed border-neutral-200 space-y-4">
                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-[#000519]/5 text-[10px] font-mono font-medium text-[#404040] border border-black/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-1">
                  <Link
                    href="/portfolio"
                    className="text-xs font-semibold text-[#000519] hover:text-[#007FA1] flex items-center gap-1 transition-colors group/link"
                  >
                    <span>Pelajari Arsitektur</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
                      className="text-xs text-[#71717a] hover:text-[#000519] flex items-center gap-1 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 3: Bottom Callout Bar
            Menghubungkan ke halaman seluruh proyek dengan tombol konsisten
        ════════════════════════════════════════════════════════════════ */}
        <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-[#fafafa]/50">
          <p className="text-xs sm:text-sm text-[#52525b]">
            Ingin melihat seluruh studi kasus arsitektur, skema database, dan fitur lengkap proyek lainnya?
          </p>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-transparent hover:bg-black/5 border border-dashed border-neutral-400 hover:border-[#000519] text-xs sm:text-sm font-semibold text-[#000519] transition-all duration-200 group shrink-0"
          >
            <span>Lihat Semua 6 Proyek Lengkap</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#000519] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 4: Bottom Spacer Row (Baris Margin Kosong di Akhir Section 4)
            Memberikan ruang napas (breathing room) di akhir section tanpa garis tengah
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="w-full border-t border-dashed border-neutral-300 h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

      </div>
    </section>
  );
}
