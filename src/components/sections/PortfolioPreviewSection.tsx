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
  Layers,
  Cpu,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { portfolioProjects, PortfolioProject } from "@/data/portfolioData";

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
          category: "Website Application",
          isConfidential: true,
          liveUrl: project.liveUrl || "https://curriculum.julhan.my.id",
        };
      case "panenkita":
        return {
          category: "Web & Mobile Application",
          isConfidential: false,
          liveUrl: project.liveUrl || "https://panenkita.web.id",
        };
      case "yuwanyie-picnic":
        return {
          category: "Website Application",
          isConfidential: false,
          liveUrl: project.liveUrl || "https://yuwanyiepicnic.com",
        };
      case "bhumi":
        return {
          category: "Website Application & Edu Game",
          isConfidential: false,
          liveUrl: project.liveUrl || "https://gamebhumi.com",
        };
      case "discussion-forum":
        return {
          category: "Website Application",
          isConfidential: false,
          liveUrl: project.liveUrl || "https://discussion-forum-julhan.vercel.app",
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
        <div className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-white/15 flex flex-col justify-center space-y-4 sm:space-y-5">
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
        </div>

        {/* ROW 2: Horizontal Project List (Menampilkan 3 Proyek Teratas secara Default) */}
        <div className="divide-y divide-dashed divide-white/15 border-b border-dashed border-white/15">
          {displayedProjects.map((project) => {
            const meta = getProjectMeta(project);

            return (
              <div
                key={project.id}
                className="p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-10 hover:bg-white/[0.015] transition-all duration-300 group relative"
              >
                {/* Left Column: Mockup Thumbnail Frame — TANPA OUTLINE & TANPA LABEL OVERLAY */}
                <div className="relative w-full md:w-[240px] lg:w-[280px] aspect-[16/10] rounded-xl overflow-hidden bg-[#020c24] shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000519]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Middle Column: Details & Tech Stack */}
                <div className="flex-1 space-y-3">
                  {/* Category Badge */}
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#007FA1]/30 border border-[#007FA1]/50 text-[#07DFFF] text-[11px] font-medium">
                      {meta.category}
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
              </div>
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

      {/* ── MODAL DETAIL ARSITEKTUR ── */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#000519] border border-white/20 rounded-2xl p-6 sm:p-8 md:p-10 space-y-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Tutup (X) */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#a1a1aa] hover:text-white flex items-center justify-center transition-colors"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#07DFFF]">
                  {activeModalProject.client}
                </span>
                <span className="text-xs text-[#71717a]">•</span>
                <span className="text-xs text-[#71717a]">
                  {activeModalProject.year}
                </span>
                {activeModalProject.isConfidential ? (
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    Confidential System
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Production System
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {activeModalProject.title}
              </h3>
              <p className="text-xs text-[#71717a]">
                Peran Pengembang: {activeModalProject.roleId}
              </p>
            </div>

            {/* Mockup Preview */}
            <div className="relative w-full h-48 sm:h-64 rounded-xl bg-[#020c24] overflow-hidden flex items-center justify-center p-4">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.title}
                width={600}
                height={300}
                unoptimized
                className="w-full h-full object-contain"
              />
            </div>

            {/* Confidential Notice */}
            {activeModalProject.isConfidential &&
              activeModalProject.confidentialNoticeId && (
                <div className="p-4 rounded-xl bg-amber-500/[0.08] border border-amber-500/30 text-xs text-[#d4d4d8] leading-relaxed">
                  <span className="font-semibold text-amber-300 block mb-1">
                    Kebijakan Privasi Data Akademik:
                  </span>
                  {activeModalProject.confidentialNoticeId}
                </div>
              )}

            {/* Project Description */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2 tracking-tight">
                <Layers className="w-4 h-4 text-[#07DFFF]" />
                <span>Tentang Proyek &amp; Latar Belakang</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-normal">
                {activeModalProject.descriptionId}
              </p>
            </div>

            {/* Dampak Transformasi Nyata (Problem vs Solution) */}
            {(activeModalProject.problemId || activeModalProject.impactId) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 sm:p-4.5 rounded-xl bg-[#020c24] border border-white/[0.08]">
                {activeModalProject.problemId && (
                  <div className="space-y-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/20 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      Tantangan Awal (Sebelum)
                    </span>
                    <p className="text-xs text-[#a1a1aa] leading-relaxed font-normal">
                      {activeModalProject.problemId}
                    </p>
                  </div>
                )}
                {activeModalProject.impactId && (
                  <div className="space-y-1.5 border-t sm:border-t-0 sm:border-l border-white/[0.08] pt-3 sm:pt-0 sm:pl-3.5">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Dampak Solusi (Sesudah)
                    </span>
                    <p className="text-xs text-[#e4e4e7] leading-relaxed font-normal">
                      {activeModalProject.impactId}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Metrics Grid */}
            {activeModalProject.metrics &&
              activeModalProject.metrics.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    Metrik &amp; Capaian Kinerja
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activeModalProject.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#020c24] border border-white/[0.08]"
                      >
                        <div className="text-base sm:text-lg font-semibold text-[#07DFFF] tracking-tight">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-[#71717a] mt-1 leading-tight">
                          {m.labelId}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Core Features */}
            {activeModalProject.featuresId &&
              activeModalProject.featuresId.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    Fitur-Fitur Kunci Sistem
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalProject.featuresId.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#020c24] border border-white/[0.06] text-xs text-[#d4d4d8]"
                      >
                        <Check className="w-3.5 h-3.5 text-[#07DFFF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Architecture Highlights */}
            {activeModalProject.architectureId &&
              activeModalProject.architectureId.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2 tracking-tight">
                    <Cpu className="w-4 h-4 text-[#07DFFF]" />
                    <span>Sorotan Arsitektur &amp; Rekayasa</span>
                  </h4>
                  <div className="space-y-2">
                    {activeModalProject.architectureId.map((arch, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#020c24] border border-white/[0.06] text-xs text-[#a1a1aa] leading-relaxed"
                      >
                        {arch}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Full Tech Stack Pills */}
            {activeModalProject.techStack && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white tracking-tight">
                  Tech Stack Lengkap
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs bg-[#020c24] border border-white/[0.08] text-[#a1a1aa]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-[#71717a]">
                Tertarik membangun sistem sekelas ini untuk bisnis Anda?
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                {activeModalProject.liveUrl &&
                  !activeModalProject.isConfidential && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-all flex items-center justify-center gap-1.5"
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
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#007FA1] hover:bg-[#00A2C9] text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Konsultasikan Sistem Serupa</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
