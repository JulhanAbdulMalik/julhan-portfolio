"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  ExternalLink,
  Layers,
  ShieldAlert,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  X,
  Smartphone,
  Eye,
  Info,
  Check,
} from "lucide-react";
import {
  portfolioProjects,
  portfolioCategories,
  PortfolioProject,
  ProjectCategory,
} from "@/data/portfolioData";
import { GithubIcon } from "@/components/ui/Icons";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] =
    useState<PortfolioProject | null>(null);

  // Filter projects based on category in memory
  const filteredProjects = portfolioProjects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.categories.includes(selectedCategory as ProjectCategory);
  });

  // Calculate count per category
  const getCategoryCount = (categoryKey: string) => {
    if (categoryKey === "All") return portfolioProjects.length;
    return portfolioProjects.filter((p) =>
      p.categories.includes(categoryKey as ProjectCategory),
    ).length;
  };

  return (
    <div className="w-full min-h-screen bg-[#000519] text-white pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 lg:px-16 xl:px-24 relative overflow-hidden">
      {/* ── Soft Atmospheric Ambient (wpu.id style) ── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none -z-0 opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 70, 95, 0.65) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[84rem] mx-auto w-full relative z-10 space-y-16 sm:space-y-20">
        
        {/* ── 1. Page Header (wpu.id style) ── */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="section-badge section-badge-dark inline-flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-[#07DFFF]" />
            <span>Studi Kasus &amp; Hasil Karya Nyata</span>
          </div>

          <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] font-semibold text-white leading-[1.08] tracking-[-0.03em]">
            Portfolio proyek &amp;{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#07DFFF]">
              solusi digital teruji.
            </span>
          </h1>

          <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed font-normal">
            Eksplorasi sistem perangkat lunak yang telah saya rancang dan kembangkan — dari platform enterprise kampus berkapasitas puluhan ribu data, aplikasi mobile agritech, hingga sistem reservasi bisnis berkinerja tinggi.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-2xl mx-auto">
            <div className="p-4 rounded-xl bg-[#020c24] border border-white/[0.08] text-center">
              <div className="text-2xl font-semibold text-[#07DFFF]">5+</div>
              <div className="text-[11px] text-[#71717a] mt-0.5">
                Proyek Teruji
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#020c24] border border-white/[0.08] text-center">
              <div className="text-2xl font-semibold text-white">25.5k+</div>
              <div className="text-[11px] text-[#71717a] mt-0.5">
                Record Data Dikelola
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#020c24] border border-white/[0.08] text-center">
              <div className="text-2xl font-semibold text-[#07DFFF]">100%</div>
              <div className="text-[11px] text-[#71717a] mt-0.5">
                Ketepatan Waktu
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#020c24] border border-white/[0.08] text-center">
              <div className="text-2xl font-semibold text-white">3.92</div>
              <div className="text-[11px] text-[#71717a] mt-0.5">
                IPK Akademik TI
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. Category Filter Bar ── */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {portfolioCategories.map((cat) => {
            const count = getCategoryCount(cat.key);
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                type="button"
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#007FA1] text-white shadow-sm"
                    : "bg-[#020c24] border border-white/[0.08] text-[#a1a1aa] hover:text-white hover:border-white/[0.2]"
                }`}
              >
                <span>{cat.labelId}</span>
                <span
                  className={`px-1.5 py-0.2 rounded text-[10px] ${
                    isSelected
                      ? "bg-white/20 text-white font-semibold"
                      : "bg-white/[0.06] text-[#71717a]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Confidential System Notice Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-amber-500/[0.06] border border-amber-500/25 flex items-start gap-3.5 max-w-4xl mx-auto">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-[#a1a1aa] leading-relaxed">
            <span className="font-semibold text-amber-300 mr-1.5">
              Pemberitahuan Transparansi &amp; Kepatuhan Data:
            </span>
            Untuk sistem enterprise berlabel &apos;Confidential&apos; (seperti CDU Portal), kredensial akun civitas kampus tidak dibuka untuk publik. Dokumentasi di bawah menyajikan arsitektur teknis, metrik volume data, dan teknologi tanpa membocorkan data rahasia institusi.
          </div>
        </div>

        {/* ── 3. Projects Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#020c24] border border-white/[0.08] hover:border-[#007FA1] transition-all duration-300 flex flex-col overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.5)] group"
            >
              {/* Card Thumbnail Mockup */}
              <div className="relative w-full h-56 sm:h-64 bg-[#000519] border-b border-white/[0.08] overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={360}
                  unoptimized
                  className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Status Badges Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.isConfidential ? (
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 backdrop-blur-md">
                      <ShieldAlert className="w-3 h-3 text-amber-400" />
                      <span>Confidential Showcase</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 backdrop-blur-md">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Production Live</span>
                    </span>
                  )}
                  <span className="px-2 py-1 rounded-md text-[10px] bg-black/60 text-[#a1a1aa] border border-white/[0.1] backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                {/* Category tags at top right */}
                <div className="absolute top-4 right-4 flex gap-1.5">
                  {project.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-2 py-0.5 rounded-md text-[10px] bg-[#007FA1]/15 text-[#07DFFF] border border-[#007FA1]/50 backdrop-blur-md"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs text-[#71717a] flex items-center gap-2">
                    <span className="font-semibold text-[#07DFFF]">
                      {project.client}
                    </span>
                    <span>•</span>
                    <span>{project.roleId}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#07DFFF] transition-colors tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed font-normal">
                    {project.taglineId}
                  </p>
                </div>

                {/* Metrics Highlight Pills */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#020c24] border border-white/[0.06] flex flex-col"
                    >
                      <span className="text-base font-semibold text-white tracking-tight">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-[#71717a] truncate mt-0.5">
                        {m.labelId}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <div className="text-[11px] text-[#71717a] flex items-center gap-1.5 uppercase tracking-wider">
                    <Cpu className="w-3.5 h-3.5 text-[#07DFFF]" />
                    <span>Teknologi Utama:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] bg-white/[0.04] border border-white/[0.08] text-[#a1a1aa]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  {/* Primary CTA: Open Architecture Modal */}
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] border border-white/20 text-white font-semibold text-xs tracking-tight transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#07DFFF]" />
                    <span>Detail Arsitektur</span>
                  </button>

                  {/* Secondary Links */}
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-lg border transition-colors ${
                          project.isConfidential
                            ? "bg-[#020c24] text-[#71717a] border-white/[0.08] hover:text-white hover:border-white/[0.2]"
                            : "bg-[#020c24] text-[#07DFFF] border-[#007FA1]/50 hover:bg-[#007FA1]/20"
                        }`}
                        title={
                          project.isConfidential
                            ? "Akses Internal Kampus (Portal CDU)"
                            : "Buka Live Site"
                        }
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#020c24] text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                        title="Google Play Store"
                      >
                        <Smartphone className="w-4 h-4" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#020c24] text-[#a1a1aa] border border-white/[0.08] hover:text-white hover:border-white/[0.2] transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 4. Deep-Dive Modal (Architecture & Specifications) ── */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#020c24] border border-white/[0.12] p-6 sm:p-8 space-y-6 shadow-2xl">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#1a1a1a] text-[#a1a1aa] hover:text-white border border-white/[0.1] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[#07DFFF]">
                    {activeModalProject.client}
                  </span>
                  <span className="text-xs text-[#71717a]">•</span>
                  <span className="text-xs text-[#71717a]">
                    {activeModalProject.year}
                  </span>
                  {activeModalProject.isConfidential && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      Confidential System
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
              <div className="relative w-full h-48 sm:h-64 rounded-xl bg-[#000519] border border-white/[0.08] overflow-hidden flex items-center justify-center p-4">
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
              {activeModalProject.isConfidential && (
                <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/25 text-xs text-[#a1a1aa] leading-relaxed">
                  <span className="font-semibold text-amber-300 block mb-1">
                    Kebijakan Privasi Data Akademik:
                  </span>
                  {activeModalProject.confidentialNoticeId || ""}
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

              {/* All Metrics Grid */}
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

              {/* Core Features List */}
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

              {/* Architecture & Engineering Highlights */}
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

              {/* Full Tech Stack Pills */}
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

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-[#71717a]">
                  Tertarik membangun sistem sekelas ini untuk bisnis Anda?
                </div>
                <a
                  href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                    `Halo Mas Julhan, saya melihat studi kasus ${activeModalProject.title} di portfolio Anda dan tertarik mendiskusikan sistem serupa.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#007FA1] hover:bg-[#00A2C9] text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Konsultasikan Sistem Serupa</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── 5. Bottom Consultation Banner (wpu.id style) ── */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#020c24] border border-white/[0.1] text-center space-y-6 relative overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.6)]">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Punya Ide Aplikasi atau Proyek Digital yang Ingin Diwujudkan?
            </h3>
            <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed font-normal">
              Saya siap membantu dari tahap analisis arsitektur, desain antarmuka, hingga coding dan deployment ke server produksi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                "Halo Mas Julhan, saya tertarik dengan portfolio Anda dan ingin konsultasi pembuatan website/aplikasi."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-semibold bg-[#007FA1] hover:bg-[#00A2C9] text-white transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Konsultasi Gratis via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/pricing"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-white/[0.05] border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Lihat Estimasi Biaya &amp; Paket</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
