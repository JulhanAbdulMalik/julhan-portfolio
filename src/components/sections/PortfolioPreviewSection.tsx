"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FolderKanban,
  ArrowUpRight,
  ExternalLink,
  ShieldAlert,
  Info,
  X,
  CheckCircle2,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolioData";
import { MotionFadeIn } from "@/components/motion/MotionFadeIn";

export function PortfolioPreviewSection() {
  const [showAll, setShowAll] = useState(false);
  const [activeModalProject, setActiveModalProject] =
    useState<PortfolioProject | null>(null);

  const displayedProjects = showAll
    ? portfolioProjects
    : portfolioProjects.slice(0, 3);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalProject]);

  // Project categories & meta mapping
  const getProjectMeta = (project: PortfolioProject) => {
    switch (project.id) {
      case "cdu-portal":
        return {
          category: "Sistem Informasi & Monitoring",
          isConfidential: true,
          liveUrl: project.liveUrl || "https://curriculum.julhan.my.id",
        };
      case "panenkita":
        return {
          category: "Web & Mobile Agritech SCM",
          isConfidential: false,
          liveUrl: project.liveUrl || "https://panenkita.web.id/",
        };
      case "yuwanyie-picnic":
        return {
          category: "Full-Stack Web & Business System",
          isConfidential: false,
          liveUrl: project.liveUrl || "https://yuwanyie-picnic.com",
        };
      case "bhumi":
        return {
          category: "Landing Page & Game Edukasi",
          isConfidential: false,
          liveUrl: project.liveUrl || "https://bhumi.web.id",
        };
      case "discussion-forum":
        return {
          category: "Web App Forum Diskusi (React Expert)",
          isConfidential: false,
          liveUrl: project.liveUrl || "https://discussion-forum-app-expert-end.vercel.app",
        };
      default:
        return {
          category: project.categories[0] || "Web Development",
          isConfidential: Boolean(project.isConfidential),
          liveUrl: project.liveUrl,
        };
    }
  };

  return (
    <section
      id="portfolio"
      className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-white relative bg-[#000519] border-b border-dashed border-white/15"
    >
      {/* ── Main Unified Architectural Grid Table (Kotak Siku 90° + Garis Strip Putus-Putus Dark Blueprint) ── */}
      <div className="max-w-[84rem] mx-auto w-full border border-dashed border-white/15 bg-[#000519] rounded-none shadow-none">
        {/* ROW 0: Top Spacer Row */}
        <div
          className="w-full border-b border-dashed border-white/15 h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

        {/* ROW 1: Header Row (Judul dibuat satu baris rapi) */}
        <MotionFadeIn
          delay={0.05}
          className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-white/15 flex flex-col justify-center space-y-4 sm:space-y-5"
        >
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/20 text-[#07DFFF] border border-[#007FA1]/40 w-fit">
              <FolderKanban className="w-3.5 h-3.5 text-[#07DFFF]" />
              <span>Featured Portfolio</span>
            </div>

            {/* Judul dibuat satu baris */}
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem] xl:text-[3.2rem] font-semibold text-white leading-[1.15] tracking-[-0.03em]">
              Karya nyata yang{" "}
              <span className="text-[#07DFFF]">teruji di industri.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal max-w-none">
            Sistem production-ready yang dibangun dengan standar kode industri
            dan aktif digunakan oleh puluhan ribu pengguna nyata.
          </p>
        </MotionFadeIn>

        {/* ROW 2: Horizontal Project List (Menampilkan 3 Proyek Teratas secara Default) */}
        <div className="divide-y divide-dashed divide-white/15 border-b border-dashed border-white/15">
          {displayedProjects.map((project, idx) => {
            const meta = getProjectMeta(project);

            return (
              <MotionFadeIn
                key={project.id}
                delay={idx * 0.08}
                className="p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-10 hover:bg-white/[0.015] transition-all duration-300 group relative"
              >
                {/* Left Column: Mockup Thumbnail Frame — Bersih, Jelas, Tanpa Shadow Overlay */}
                <div className="relative w-full md:w-[240px] lg:w-[280px] aspect-[16/10] rounded-xl overflow-hidden bg-[#020c24] shrink-0 border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-100"
                  />
                </div>

                {/* Middle Column: Details & Tech Stack */}
                <div className="flex-1 space-y-3">
                  {/* Category & Timeline Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#007FA1]/30 border border-[#007FA1]/50 text-[#07DFFF] text-[11px] font-medium">
                      {meta.category}
                    </span>
                    <span className="text-[11px] font-medium text-[#71717a]">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#07DFFF] transition-colors tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-3xl font-normal">
                    {project.descriptionId}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-medium text-[#d4d4d8] border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-medium text-[#71717a] border border-white/10">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column: Simple Icon Buttons Ditumpuk Vertikal (Atas dan Bawah) */}
                <div className="flex flex-col items-center justify-center gap-2 shrink-0 self-start md:self-center">
                  {/* Tombol Atas: Info (Logo About) -> Buka Modal Detail Arsitektur */}
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    title="Pelajari Arsitektur & Detail Proyek"
                    aria-label={`Pelajari Arsitektur ${project.title}`}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#07DFFF]/15 border border-white/15 hover:border-[#07DFFF] text-[#a1a1aa] hover:text-[#07DFFF] flex items-center justify-center transition-all duration-200 group/btn shadow-sm"
                  >
                    <Info className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                  </button>

                  {/* Tombol Bawah: Live Demo (Logo Panah Kanan Atas) */}
                  {meta.liveUrl && !meta.isConfidential ? (
                    <a
                      href={meta.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Buka Live Demo"
                      aria-label={`Buka Live Demo ${project.title}`}
                      className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 hover:border-white/40 text-[#a1a1aa] hover:text-white flex items-center justify-center transition-all duration-200 group/btn shadow-sm"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  ) : (
                    <div
                      title="Akses Internal Kampus (Data Rahasia)"
                      className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 text-[#52525b] flex items-center justify-center cursor-not-allowed"
                    >
                      <ShieldAlert className="w-4 h-4 text-amber-500/70" />
                    </div>
                  )}
                </div>
              </MotionFadeIn>
            );
          })}
        </div>

        {/* Tombol Expand / Collapse Portfolio — Minimalist & Clean */}
        <div className="py-4 sm:py-5 flex items-center justify-center border-b border-dashed border-white/15">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-[#07DFFF] transition-colors cursor-pointer group select-none py-1.5 px-3 rounded-md hover:bg-white/[0.03]"
          >
            <span>
              {showAll
                ? "Tampilkan lebih sedikit"
                : `Lihat semua portfolio (${portfolioProjects.length})`}
            </span>
            {showAll ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#71717a] group-hover:text-[#07DFFF] transition-all group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[#71717a] group-hover:text-[#07DFFF] transition-all group-hover:translate-y-0.5" />
            )}
          </button>
        </div>

        {/* ROW 3: Bottom Callout Bar */}
        <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-[#020c24]/30">
          <p className="text-xs sm:text-sm text-[#a1a1aa]">
            Tertarik membangun arsitektur sistem serupa atau mendiskusikan
            kebutuhan teknis proyek Anda?
          </p>

          <a
            href="https://wa.me/6283111030309?text=Halo%20Mas%20Julhan,%20saya%20melihat%20portfolio%20Anda%20dan%20tertarik%20konsultasi%20pembuatan%20website/aplikasi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#007FA1] hover:bg-[#00A2C9] text-xs sm:text-sm font-semibold text-white transition-all duration-200 group shrink-0 shadow-sm"
          >
            <span>Konsultasi Gratis via WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* ROW 4: Bottom Spacer Row */}
        <div className="w-full h-[60px] lg:h-[80px]" aria-hidden="true" />
      </div>

      {/* ── MODAL DETAIL ARSITEKTUR & STUDI KASUS (Clean White Blueprint Style) ── */}
      {activeModalProject && (() => {
        const activeModalMeta = getProjectMeta(activeModalProject);

        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setActiveModalProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-portfolio-title"
          >
            <div
              className="relative w-full max-w-4xl lg:max-w-5xl max-h-[90vh] bg-white border border-neutral-200/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#000519] animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Bar */}
              <div className="p-6 sm:p-7 border-b border-dashed border-neutral-200 bg-white relative flex flex-col gap-3 shrink-0">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-[#71717a] hover:text-[#000519] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Tutup Detail Studi Kasus"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex flex-wrap items-center gap-2 pr-10">
                  <span className="text-xs font-semibold text-[#007FA1] px-2.5 py-0.5 rounded-md bg-[#007FA1]/10 border border-[#007FA1]/20">
                    {activeModalMeta.category}
                  </span>
                  <span className="text-xs font-medium text-[#52525b] px-2.5 py-0.5 rounded-md bg-neutral-100 border border-neutral-200">
                    {activeModalProject.client} • {activeModalProject.year}
                  </span>
                  {activeModalProject.isConfidential ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-semibold border bg-amber-50 text-amber-800 border-amber-500/30">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                      <span>Sistem Tertutup (Confidential)</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-semibold border bg-emerald-50 text-emerald-800 border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Sistem Berjalan (Production)</span>
                    </span>
                  )}
                </div>

              <div className="space-y-1">
                <h3
                  id="modal-portfolio-title"
                  className="text-xl sm:text-2xl font-bold text-[#000519] tracking-tight leading-snug pr-8"
                >
                  {activeModalProject.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#52525b]">
                  <strong className="text-[#000519] font-medium">Peran Pengembang:</strong>{" "}
                  {activeModalProject.roleId}
                </p>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div
              data-lenis-prevent
              className="p-6 sm:p-7 space-y-5 overflow-y-auto bg-white text-[#000519] divide-y divide-dashed border-neutral-200"
            >
              {/* Mockup Preview & Confidential Notice */}
              <div className="space-y-3">
                {/* Browser Mockup Frame with Full Width Edge-to-Edge & Scrollable Preview */}
                <div className="relative w-full rounded-xl bg-neutral-100 border border-neutral-200/90 overflow-hidden shadow-xs">
                  {/* Browser Mockup Top Bar */}
                  <div className="px-3.5 py-2 bg-neutral-100/90 border-b border-neutral-200 flex items-center justify-between text-xs text-[#71717a] select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-white border border-neutral-200/80 text-[11px] font-mono text-[#52525b] truncate max-w-[240px] sm:max-w-md">
                      {activeModalProject.liveUrl
                        ? activeModalProject.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                        : activeModalProject.title}
                    </div>
                    <span className="text-[11px] text-[#71717a] font-medium hidden sm:inline-flex items-center gap-1">
                      ↕ Scroll preview
                    </span>
                  </div>

                  {/* Scrollable Frame: Full Width Edge-to-Edge with Vertical Scroll (Balanced Sweet Spot Height) */}
                  <div
                    data-lenis-prevent
                    className="w-full h-[260px] sm:h-[310px] md:h-[340px] overflow-y-auto overscroll-contain bg-white"
                  >
                    <Image
                      src={activeModalProject.image}
                      alt={activeModalProject.title}
                      width={1920}
                      height={1080}
                      unoptimized
                      priority
                      className="w-full h-auto block"
                    />
                  </div>
                </div>

                {activeModalProject.isConfidential && activeModalProject.confidentialNoticeId && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-semibold text-amber-950 block">
                        Kebijakan Privasi Data &amp; Akses Sistem Tertutup:
                      </span>
                      <p className="text-amber-800/90 leading-relaxed font-normal">
                        {activeModalProject.confidentialNoticeId}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Tentang Proyek & Latar Belakang */}
              <div className="pt-5 space-y-1.5">
                <span className="text-xs font-semibold text-[#007FA1] block">
                  Tentang Proyek &amp; Latar Belakang
                </span>
                <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-normal">
                  {activeModalProject.descriptionId}
                </p>
              </div>

              {/* Tantangan Awal vs Dampak Solusi (Problem vs Impact) */}
              {(activeModalProject.problemId || activeModalProject.impactId) && (
                <div className="pt-5 space-y-2.5">
                  <span className="text-xs font-semibold text-[#007FA1] block">
                    Tantangan Awal vs Dampak Transformasi Solusi:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModalProject.problemId && (
                      <div className="p-3.5 sm:p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 space-y-1.5">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-100 text-rose-800 border border-rose-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          Tantangan Awal (Sebelum)
                        </span>
                        <p className="text-xs text-[#475569] leading-relaxed font-normal">
                          {activeModalProject.problemId}
                        </p>
                      </div>
                    )}
                    {activeModalProject.impactId && (
                      <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1.5">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Dampak Solusi (Sesudah)
                        </span>
                        <p className="text-xs text-[#1e293b] leading-relaxed font-medium">
                          {activeModalProject.impactId}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Metrik & Capaian Kinerja */}
              {activeModalProject.metrics && activeModalProject.metrics.length > 0 && (
                <div className="pt-5 space-y-2.5">
                  <span className="text-xs font-semibold text-[#007FA1] block">
                    Metrik &amp; Capaian Kinerja:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {activeModalProject.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:p-3.5 rounded-xl bg-[#fafafa]/80 hover:bg-white border border-neutral-200/80 transition-all text-center sm:text-left"
                      >
                        <div className="text-lg sm:text-xl font-bold text-[#007FA1] tracking-tight">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-[#52525b] mt-0.5 leading-tight">
                          {m.labelId}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fitur-Fitur Kunci Sistem */}
              {activeModalProject.featuresId && activeModalProject.featuresId.length > 0 && (
                <div className="pt-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#007FA1] block">
                      Fitur-Fitur Kunci Sistem:
                    </span>
                    <span className="text-[11px] font-medium text-[#71717a] px-2 py-0.5 rounded-md bg-neutral-100 border border-neutral-200">
                      {activeModalProject.featuresId.length} Fitur Terintegrasi
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {activeModalProject.featuresId.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:p-3.5 rounded-xl bg-[#fafafa]/80 hover:bg-[#fafafa] border border-neutral-200/80 hover:border-[#007FA1]/30 flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334155] leading-snug transition-all"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium text-[#1e293b]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sorotan Arsitektur & Rekayasa */}
              {activeModalProject.architectureId && activeModalProject.architectureId.length > 0 && (
                <div className="pt-5 space-y-2.5">
                  <span className="text-xs font-semibold text-[#007FA1] block">
                    Sorotan Arsitektur &amp; Rekayasa:
                  </span>
                  <div className="space-y-2 pt-1">
                    {activeModalProject.architectureId.map((arch, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:p-3.5 rounded-xl bg-[#f8fafc] border border-neutral-200/80 text-xs sm:text-[13px] text-[#334155] leading-relaxed flex items-start gap-3"
                      >
                        <span className="w-5 h-5 rounded-md bg-[#007FA1]/10 text-[#007FA1] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Standar Teknologi & Tech Stack Lengkap */}
              {activeModalProject.techStack && (
                <div className="pt-5 space-y-2">
                  <span className="text-xs font-semibold text-[#007FA1] block">
                    Standar Teknologi &amp; Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#000519]/5 text-[11px] font-medium text-[#404040] border border-black/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Sticky Action Bar */}
            <div className="p-5 sm:p-6 border-t border-dashed border-neutral-200 bg-[#fafafa] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0">
              <div className="space-y-0.5 max-w-sm">
                <span className="block text-xs font-semibold text-[#000519]">
                  Tertarik mendiskusikan sistem serupa?
                </span>
                <p className="text-[11px] text-[#71717a]">
                  Konsultasikan arsitektur, integrasi fitur, dan estimasi waktu pengembangan bisnis Anda.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2 w-full sm:w-auto sm:self-center ml-auto">
                {activeModalProject.playStoreUrl && (
                  <a
                    href={activeModalProject.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    title="Buka di Google Play Store"
                  >
                    <span>Google Play</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {activeModalProject.liveUrl && !activeModalProject.isConfidential && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-[#007FA1]/30 bg-[#007FA1]/10 hover:bg-[#007FA1]/20 text-[#007FA1] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                    `Halo Mas Julhan, saya melihat studi kasus ${activeModalProject.title} di portfolio Anda dan tertarik mendiskusikan sistem serupa.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 rounded-lg bg-[#007FA1] hover:bg-[#006b88] text-white text-xs font-semibold transition-all shadow-xs flex items-center justify-center gap-1.5 group text-center cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Konsultasikan Sistem Serupa</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    })()}
    </section>
  );
}
