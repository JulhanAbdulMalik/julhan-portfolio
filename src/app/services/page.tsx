"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Check,
  Clock,
  ArrowUpRight,
  MessageCircle,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { servicesList, workflowSteps, servicesFAQs } from "@/data/servicesData";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20 sm:pt-36 sm:pb-28 relative overflow-hidden select-none">
      {/* ── Soft Atmospheric Ambient (wpu.id style) ── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none -z-0 opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28">
        
        {/* ── 1. Page Header (wpu.id style) ── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="section-badge section-badge-dark inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#0ea5e9]" />
            <span>Daftar Layanan Lengkap</span>
          </div>

          <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] font-extrabold text-white leading-[1.08] tracking-[-0.03em]">
            Solusi pengembangan digital{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#0ea5e9]">
              berstandar industri.
            </span>
          </h1>

          <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Setiap layanan dikerjakan langsung secara profesional dengan arsitektur modern, kode bersih berstandar industri, dan konsultasi gratis dari awal hingga tuntas.
          </p>
        </div>

        {/* ── 2. Services Grid ── */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#71717a]">
                KATALOG LAYANAN
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Pilihan Layanan &amp; Cakupan Pekerjaan
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#71717a] font-mono">
              6 Pilihan Layanan Tersedia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {servicesList.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="rounded-2xl p-7 sm:p-9 bg-[#111111] border border-white/[0.08] hover:border-[#0ea5e9]/40 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.5)] group"
              >
                <div className="space-y-6">
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <span className="text-xs font-mono font-bold text-[#0ea5e9] px-3 py-1 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20">
                      0{index + 1} • {service.idealForId}
                    </span>
                    <span className="text-xs font-mono text-[#71717a] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0ea5e9]" />
                      <span>{service.timeline}</span>
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#38bdf8] transition-colors tracking-tight">
                      {service.titleId}
                    </h3>
                    <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed">
                      {service.fullDescId}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                    <span className="text-[11px] font-mono font-semibold text-[#71717a] uppercase tracking-wider block">
                      Yang Anda Dapatkan (Deliverables):
                    </span>
                    <ul className="space-y-2">
                      {service.deliverablesId.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#d4d4d8]">
                          <Check className="w-4 h-4 text-[#0ea5e9] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#a1a1aa]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-6 border-t border-white/[0.08] mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-[#71717a] block font-mono">
                      Estimasi Mulai Dari:
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {service.price}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                      `Halo Julhan, saya ingin konsultasi mengenai layanan: ${service.titleId}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-xs tracking-tight transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pesan Layanan</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. Metodologi Pengerjaan (5 Steps) ── */}
        <div className="space-y-10 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="section-badge section-badge-dark inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span>Metodologi Pengerjaan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              5 Langkah dari Ide Hingga Rilis
            </h2>
            <p className="text-[#a1a1aa] text-xs sm:text-sm">
              Alur kerja terstruktur yang memastikan proyek Anda selesai tepat waktu dengan kualitas terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl p-6 bg-[#111111] border border-white/[0.08] hover:border-white/[0.18] flex flex-col justify-between transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="text-2xl font-mono font-extrabold text-[#0ea5e9]">
                    {step.step}
                  </div>
                  <h4 className="text-white font-bold text-base tracking-tight">
                    {step.titleId}
                  </h4>
                  <p className="text-[#71717a] text-xs leading-relaxed font-normal">
                    {step.descId}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.08] mt-4 text-[11px] font-mono text-[#38bdf8]">
                  ⏱ {step.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. FAQ Accordion (wpu.id Style) ── */}
        <div className="space-y-8 max-w-3xl mx-auto pt-4">
          <div className="text-center space-y-3">
            <div className="section-badge section-badge-dark inline-flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span>Pertanyaan Umum</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Hal yang Sering Ditanyakan Seputar Jasa
            </h2>
          </div>

          <div className="space-y-3">
            {servicesFAQs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#111111] border border-white/[0.08] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {faq.qId}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0ea5e9] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed border-t border-white/[0.08] pt-4 font-normal">
                      {faq.aId}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 5. Bottom Navigation CTA (Clean Editorial) ── */}
        <div className="rounded-2xl p-8 sm:p-12 border border-white/[0.1] bg-[#141414] text-center space-y-6 relative overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.6)]">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Siap Mendiskusikan Proyek Anda?
            </h3>
            <p className="text-[#a1a1aa] text-xs sm:text-sm max-w-xl mx-auto font-normal">
              Konsultasikan ide atau kendala sistem bisnis Anda sekarang. Dapatkan estimasi waktu dan biaya yang transparan tanpa kewajiban apa pun.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/pricing"
              className="px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/20 text-white font-semibold text-xs hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <span>Lihat Tabel Perbandingan Harga</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://wa.me/6283111030309?text=Halo%20Julhan,%20saya%20ingin%20konsultasi%20pembuatan%20website/aplikasi."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold text-xs tracking-wide transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Konsultasi via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
