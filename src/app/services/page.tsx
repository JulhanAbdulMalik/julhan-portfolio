"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Layers,
  Clock,
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  Info,
  X,
  ShieldCheck,
  Headphones,
  Check,
  CreditCard,
  Code2,
} from "lucide-react";
import {
  servicesList,
  schoolPartnershipProgram,
  servicesFAQs,
  type ServiceDetail,
} from "@/data/servicesData";
import { maintenancePlans } from "@/data/pricingData";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedService(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedService]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#000519]">
      
      {/* ════════════════════════════════════════════════════════════════
          SECTION 1: DARK HEADER (Siku 90° Dark Blueprint wpu.id)
          Latar Gelap #000519, Garis Putus-Putus Putih, Aksen Cyan #07DFFF
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="pt-24 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-white relative bg-[#000519] border-b border-dashed border-white/15 overflow-hidden"
      >
        {/* Soft Atmospheric Glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none -z-0 opacity-15 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(0, 70, 95, 0.65) 0%, transparent 70%)",
          }}
        />

        {/* Unified Table Container */}
        <div className="max-w-[84rem] mx-auto w-full border border-dashed border-white/15 bg-[#000519] rounded-none shadow-none relative z-10">
          
          {/* Spacer Row Awal Header */}
          <div
            className="w-full border-b border-dashed border-white/15 h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

          {/* Header Content */}
          <div className="p-8 sm:p-10 lg:p-14 xl:p-16 border-b border-dashed border-white/15 space-y-6">
            <div className="space-y-4 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/20 text-[#07DFFF] border border-[#007FA1]/40 w-fit">
                <Layers className="w-3.5 h-3.5 text-[#07DFFF]" />
                <span>Katalog Layanan &amp; Rekayasa Perangkat Lunak</span>
              </div>

              <h1 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem] font-semibold text-white leading-[1.08] tracking-[-0.03em]">
                Solusi pengembangan digital{" "}
                <br />
                <span className="text-[#07DFFF]">
                  berstandar industri.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal w-full max-w-none">
                Dari website profil usaha, sistem pemesanan kuliner, toko online mandiri, dashboard operasional, hingga aplikasi mobile Flutter. Setiap sistem dibangun dengan standar kode bersih, performa tinggi, dan garansi resmi perbaikan bug pasca-peluncuran.
              </p>
            </div>

            {/* Metric / Key Commitments Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-dashed border-white/15">
              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Total Layanan
                </span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  {servicesList.length} Paket Spesialisasi
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Hak Cipta Kode Sumber
                </span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  100% Milik Klien Penuh
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Masa Garansi Bug
                </span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  30 - 90 Hari Kalender
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Konsultasi Awal
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#07DFFF]">
                  100% Gratis Tanpa Komitmen
                </span>
              </div>
            </div>
          </div>

          {/* Spacer Row Akhir Header */}
          <div
            className="w-full h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2: WHITE SERVICES CATALOG (Siku 90° White wpu.id)
          Latar Putih Bersih, Garis Putus-Putus Abu, Aksen Cyan #007FA1
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="catalog"
        className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] relative bg-white border-b border-dashed border-neutral-300"
      >
        <div className="max-w-[84rem] mx-auto w-full border border-dashed border-neutral-300 bg-white rounded-none shadow-none">
          
          {/* Spacer Row Awal Katalog */}
          <div
            className="w-full border-b border-dashed border-neutral-300 h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

          {/* Section Divider Bar */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-neutral-300 bg-[#fafafa]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#007FA1] block">
                DAFTAR SPESIFIKASI LENGKAP
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#000519] tracking-tight">
                Pilihan Layanan, Cakupan Kerja &amp; Estimasi Investasi
              </h2>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-neutral-300 text-[#52525b] w-fit shadow-xs">
              {servicesList.length} Solusi Tersedia
            </span>
          </div>

          {/* Services Grid (Tabel 3 Kolom Siku 90° wpu.id - Simple, Compact & Proporsional) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-dashed border-neutral-300">
            {servicesList.map((service, index) => {
              const isLastColLg = (index + 1) % 3 === 0;
              const isLastColMd = (index + 1) % 2 === 0;
              const isBottomRowLg = index >= 6;
              const isBottomRowMd = index >= 6;
              const isLastItem = index === servicesList.length - 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`p-6 sm:p-7 flex flex-col justify-between space-y-5 bg-white hover:bg-[#fafafa]/80 transition-colors group border-b border-dashed border-neutral-300 ${
                    isLastItem ? "border-b-0" : ""
                  } ${
                    isLastColLg ? "lg:border-r-0" : "lg:border-r border-dashed border-neutral-300"
                  } ${
                    isLastColMd ? "md:border-r-0" : "md:border-r border-dashed border-neutral-300"
                  } ${
                    isBottomRowLg ? "lg:border-b-0" : ""
                  } ${
                    isBottomRowMd ? "md:border-b-0" : ""
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Badge & Delivery Time */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-dashed border-neutral-200">
                      <span className="text-xs font-semibold text-[#007FA1] px-2.5 py-1 rounded-md bg-[#007FA1]/10 border border-[#007FA1]/20">
                        0{index + 1}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[10px] font-semibold border bg-neutral-50 text-emerald-800 border-emerald-500/30 shrink-0">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        <span>{service.timeline}</span>
                      </span>
                    </div>

                    {/* Title & Short Description (Compact) */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold text-[#000519] group-hover:text-[#007FA1] transition-colors leading-snug tracking-tight">
                        {service.titleId}
                      </h3>
                      <p className="text-xs text-[#52525b] leading-relaxed font-normal line-clamp-2">
                        {service.shortDescId}
                      </p>
                    </div>

                    {/* Key Deliverables Preview (3 Items) + Modal Detail Link */}
                    <div className="pt-3 border-t border-dashed border-neutral-200 space-y-2">
                      <span className="text-[10px] font-semibold text-[#71717a] uppercase tracking-wider block">
                        Fitur &amp; Cakupan Utama:
                      </span>
                      <ul className="space-y-1.5">
                        {service.deliverablesId.slice(0, 3).map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-[#334155] leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {service.deliverablesId.length > 3 && (
                        <button
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className="text-[11px] font-medium text-[#007FA1] hover:text-[#005a73] hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer transition-colors"
                        >
                          <span>+{service.deliverablesId.length - 3} fitur &amp; spesifikasi lainnya</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {/* Tech Stack Pills (Compact) */}
                    <div className="pt-1 flex flex-wrap gap-1">
                      {service.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-[#000519]/5 text-[10px] font-medium text-[#404040] border border-black/[0.04]"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.techStack.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-neutral-100 text-[10px] text-[#71717a]">
                          +{service.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Area: Price & Dual Action Buttons (Detail & WhatsApp) */}
                  <div className="pt-4 border-t border-dashed border-neutral-200 space-y-3 mt-auto">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 text-[10px] text-[#71717a]">
                        <span>Estimasi:</span>
                        <span className="line-through text-[#a1a1aa]">{service.originalPrice}</span>
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-[#000519] tracking-tight block">
                        {service.price}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="px-3 py-2 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 text-[#000519] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5 text-[#007FA1]" />
                        <span>Detail</span>
                      </button>
                      <a
                        href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                          `Halo Julhan & Tim, saya ingin konsultasi mengenai layanan: ${service.titleId}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-[#007FA1] hover:bg-[#006b88] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors group/btn"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Konsultasi</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Program Kemitraan Digital Sekolah & Yayasan */}
          <div className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-neutral-300 bg-[#f8fafc] relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/10 text-emerald-700 border border-emerald-600/30 w-fit">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{schoolPartnershipProgram.badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000519] tracking-tight leading-snug">
                  {schoolPartnershipProgram.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-normal">
                  {schoolPartnershipProgram.description}
                </p>

                {/* Highlights 4 items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {schoolPartnershipProgram.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Card */}
              <div className="p-6 rounded-xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between gap-4 shrink-0 lg:w-[320px]">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-semibold block">
                    Skema Kemitraan Fleksibel
                  </span>
                  <p className="text-xs text-[#52525b] leading-relaxed">
                    Skema sewa dan pemeliharaan disesuaikan dengan kapasitas dan jumlah siswa sekolah Anda.
                  </p>
                </div>

                <a
                  href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                    schoolPartnershipProgram.waMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition-all group"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{schoolPartnershipProgram.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Spacer Row Akhir Katalog Layanan */}
          <div
            className="w-full h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3: DEDICATED CARE & VIRTUAL IT PARTNER (Siku 90° Dark Blueprint)
          Layanan Pemeliharaan Bulanan, Cloud Server, & SLA Garansi
          Latar Gelap #000519, Garis Putus-Putus Putih, Aksen Cyan #07DFFF
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="pricing"
        className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-white relative bg-[#000519] border-b border-dashed border-white/15 overflow-hidden scroll-mt-20"
      >
        <span id="maintenance" className="block relative -top-24 pointer-events-none" />
        {/* Soft Atmospheric Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none -z-0 opacity-15 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(0, 127, 161, 0.6) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[84rem] mx-auto w-full border border-dashed border-white/15 bg-[#000519] rounded-none shadow-none relative z-10">
          
          {/* Spacer Row Awal Section 3 */}
          <div
            className="w-full border-b border-dashed border-white/15 h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

          {/* Header Row (Layanan Pemeliharaan & Virtual IT Partner) */}
          <div className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-white/15 flex flex-col justify-center space-y-4 sm:space-y-5">
            <div className="space-y-3.5 w-full max-w-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/20 text-[#07DFFF] border border-[#007FA1]/40 w-fit">
                <Headphones className="w-3.5 h-3.5 text-[#07DFFF]" />
                <span>Dedicated Care &amp; Virtual IT Partner</span>
              </div>

              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem] xl:text-[3.5rem] font-semibold text-white leading-[1.12] tracking-[-0.03em] max-w-none">
                Sistem Anda tetap aman, cepat, dan terawat{" "}
                <span className="text-[#07DFFF]">
                  tanpa pusing urusan teknis.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal pt-1 max-w-none">
                Banyak bisnis kesulitan mengelola server cloud, pembaruan domain, SSL kadaluarsa, atau keamanan database setelah aplikasi selesai dibuat. Kami hadir sebagai divisi IT profesional pribadi Anda dengan biaya berlangganan yang sangat efisien dibanding merekrut staf kantor tetap.
              </p>
            </div>
          </div>

          {/* 3 Maintenance Plans Columns (Tabel 3 Kolom Siku 90° wpu.id) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-white/15 border-b border-dashed border-white/15 items-stretch">
            {maintenancePlans.map((plan) => {
              const isPopular = plan.popular;

              return (
                <div
                  key={plan.id}
                  className={`p-8 sm:p-10 flex flex-col justify-between transition-colors relative ${
                    isPopular ? "bg-[#020c24]/90" : "bg-[#000519] hover:bg-white/[0.015]"
                  }`}
                >
                  {/* Popular Badge (Floating di pojok kanan atas) */}
                  {isPopular && (
                    <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-10 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#007FA1]/30 border border-[#007FA1]/60 text-[#07DFFF] flex items-center gap-1.5 uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 text-[#07DFFF]" />
                        <span>{plan.badge || "Paling Diminati"}</span>
                      </span>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Plan Header */}
                    <div className={`space-y-1.5 min-h-[52px] sm:min-h-[56px] ${isPopular ? "pr-28 sm:pr-32" : ""}`}>
                      <h3 className="text-white font-semibold text-xl tracking-tight">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-[#a1a1aa] font-normal leading-relaxed">
                        {plan.target}
                      </p>
                    </div>

                    {/* Price Row with Strikethrough Anchor */}
                    <div className="pt-4 border-t border-dashed border-white/15 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider text-[#71717a] block">
                          Biaya Berlangganan
                        </span>
                        <span className="text-xs text-[#71717a] line-through">
                          {plan.originalPrice}
                        </span>
                      </div>

                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-xs text-[#a1a1aa] font-normal">
                            {plan.period}
                          </span>
                        )}
                      </div>

                      {/* Timeline & Guarantee badges */}
                      <div className="pt-2 flex flex-col gap-1">
                        <span className="text-xs text-[#07DFFF] flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#07DFFF]" />
                          <span>{plan.duration}</span>
                        </span>
                        <span className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{plan.guarantee}</span>
                        </span>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="pt-5 border-t border-dashed border-white/15 space-y-3">
                      <span className="text-[10px] uppercase tracking-widest text-[#71717a] block font-semibold">
                        CAKUPAN LAYANAN TERMASUK:
                      </span>
                      <ul className="space-y-2.5">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#d4d4d4] leading-relaxed">
                            <Check className="w-4 h-4 text-[#07DFFF] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {plan.note && (
                        <p className="text-[11px] text-[#a1a1aa] italic pt-1 border-t border-white/10">
                          * {plan.note}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="pt-8">
                    <a
                      href={`https://wa.me/6283111030309?text=${encodeURIComponent(plan.waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2.5 sm:py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 group ${
                        isPopular
                          ? "bg-[#007FA1] hover:bg-[#009ac2] text-white shadow-sm"
                          : "bg-transparent hover:bg-white/10 border border-dashed border-white/30 hover:border-white text-white"
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust & SLA Guarantee Strip (Termin DP, Garansi Hari, Hak Cipta) */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-white/15 border-b border-dashed border-white/15 bg-[#020c24]/50">
            <div className="p-6 sm:p-7 flex items-start gap-3.5">
              <CreditCard className="w-5 h-5 text-[#07DFFF] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-white tracking-tight">
                  Skema Pembayaran Fleksibel
                </h4>
                <p className="text-[11px] text-[#a1a1aa] leading-relaxed">
                  Pilihan DP 50% - 50% atau skema 3 termin bertahap (30% - 40% - 30%) sesuai kesepakatan milestone.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-white tracking-tight">
                  Garansi Resmi 30, 60, &amp; 90 Hari
                </h4>
                <p className="text-[11px] text-[#a1a1aa] leading-relaxed">
                  Perbaikan bug dan pemantauan sistem gratis pasca rilis selama masa garansi hari kalender penuh.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex items-start gap-3.5">
              <Code2 className="w-5 h-5 text-[#07DFFF] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-white tracking-tight">
                  100% Hak Milik Source Code
                </h4>
                <p className="text-[11px] text-[#a1a1aa] leading-relaxed">
                  Akses penuh ke GitHub repository, database cloud, dan aset desain diserahkan tanpa biaya royalti terikat.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Callout Bar (Konsultasi Paket Khusus) */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-[#020c24]/30">
            <p className="text-xs sm:text-sm text-[#a1a1aa]">
              Memerlukan spesifikasi maintenance khusus atau SLA prioritas untuk instansi Anda?
            </p>

            <a
              href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                "Halo Julhan & Tim, saya ingin konsultasi mengenai paket Maintenance / Dedicated Care khusus untuk sistem kami."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-transparent hover:bg-white/10 border border-dashed border-white/50 hover:border-white text-xs sm:text-sm font-semibold text-white transition-all duration-200 group shrink-0"
            >
              <span>Konsultasi Paket Khusus via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Spacer Row Akhir Section 3 */}
          <div
            className="w-full h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4: WHITE FAQ & BOTTOM CALLOUT (Siku 90° White wpu.id)
          Latar Putih Bersih, Garis Putus-Putus Abu, Aksen Cyan #007FA1
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="faq"
        className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] relative bg-white border-b border-dashed border-neutral-300"
      >
        <div className="max-w-[84rem] mx-auto w-full border border-dashed border-neutral-300 bg-white rounded-none shadow-none">
          
          {/* Spacer Row Awal FAQ */}
          <div
            className="w-full border-b border-dashed border-neutral-300 h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

          {/* FAQ Header Row */}
          <div className="p-8 sm:p-10 lg:p-12 border-b border-dashed border-neutral-300 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/10 text-[#007FA1] border border-[#007FA1]/25 w-fit">
              <HelpCircle className="w-3.5 h-3.5 text-[#007FA1]" />
              <span>FAQ &amp; Transparansi</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#000519] tracking-tight">
              Hal yang Sering Ditanyakan Sebelum Memulai Proyek
            </h2>

            <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed max-w-2xl font-normal">
              Pertanyaan umum seputar sistem pembayaran bertahap, garansi perbaikan bug, kepemilikan kode sumber, dan bantuan konfigurasi domain server.
            </p>
          </div>

          {/* FAQ Accordion Items */}
          <div className="divide-y divide-dashed divide-neutral-300 border-b border-dashed border-neutral-300 bg-white">
            {servicesFAQs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="transition-colors hover:bg-[#fafafa]/50">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#000519] tracking-tight">
                      {faq.qId}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#007FA1] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-xs sm:text-sm text-[#52525b] leading-relaxed pt-0 font-normal border-t border-dashed border-neutral-100">
                      {faq.aId}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Callout Bar (CTA Diskusi Proyek) */}
          <div className="p-8 sm:p-10 lg:p-12 border-b border-dashed border-neutral-300 bg-[#fafafa]/50 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1 max-w-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-[#000519] tracking-tight">
                Siap Mendiskusikan Kebutuhan Sistem Bisnis Anda?
              </h3>
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-normal">
                Konsultasikan ide Anda sekarang secara 100% gratis tanpa komitmen. Dapatkan saran arsitektur teknis dan estimasi biaya transparan.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-white hover:bg-neutral-100 border border-neutral-300 text-xs sm:text-sm font-semibold text-[#000519] transition-all shadow-xs group"
              >
                <span>Lihat Paket Maintenance Bulanan</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://wa.me/6283111030309?text=Halo%20Julhan%20%26%20Tim,%20saya%20ingin%20konsultasi%20pembuatan%20website/aplikasi."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#007FA1] hover:bg-[#006b88] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Spacer Row Akhir Halaman */}
          <div
            className="w-full h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          MODAL DETAIL SPESIFIKASI LAYANAN (High-End Blueprint Dialog)
      ════════════════════════════════════════════════════════════════ */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#000519] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="p-6 sm:p-8 border-b border-dashed border-white/15 bg-[#020b24] relative flex flex-col gap-3">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#a1a1aa] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup Detail Layanan"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2.5 pr-12">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/25 text-[#07DFFF] border border-[#007FA1]/40">
                  Spesifikasi Layanan
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Estimasi: {selectedService.timeline}</span>
                </span>
              </div>

              <h3
                id="modal-service-title"
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-snug pr-8"
              >
                {selectedService.titleId}
              </h3>

              <p className="text-xs sm:text-sm text-[#94a3b8]">
                <strong className="text-white font-medium">Ideal untuk:</strong>{" "}
                {selectedService.idealForId}
              </p>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-white divide-y divide-dashed divide-white/10">
              {/* Deskripsi Menyeluruh */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#07DFFF] uppercase tracking-wider block">
                  Cakupan &amp; Ringkasan Solusi
                </span>
                <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed font-normal">
                  {selectedService.fullDescId}
                </p>
              </div>

              {/* Seluruh Deliverables (Semua Item Lengkap Tanpa Potong) */}
              <div className="pt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#07DFFF] uppercase tracking-wider block">
                    Yang Diterima Klien (Deliverables Resmi):
                  </span>
                  <span className="text-xs text-[#94a3b8]">
                    {selectedService.deliverablesId.length} Butir Termasuk
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverablesId.map((item, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-[#e2e8f0] leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-6 space-y-3">
                <span className="text-xs font-semibold text-[#07DFFF] uppercase tracking-wider block">
                  Standar Teknologi &amp; Infrastruktur:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/15 text-xs font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Garansi & Keamanan */}
              <div className="pt-6">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-emerald-300 block">
                      Garansi Resmi Bug &amp; 100% Hak Cipta Kode Milik Klien
                    </span>
                    <p className="text-xs text-emerald-100/80 leading-relaxed font-normal">
                      Setiap paket sudah mencakup garansi perbaikan bug pasca-peluncuran, bantuan setup server, dan seluruh source code diserahkan penuh tanpa biaya lisensi tersembunyi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Sticky/Bottom Action Bar */}
            <div className="p-5 sm:p-6 border-t border-dashed border-white/15 bg-[#02091d] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs text-[#94a3b8]">
                  <span>Estimasi Normal:</span>
                  <span className="line-through text-[#64748b]">
                    {selectedService.originalPrice}
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {selectedService.price}
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:self-center">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-white text-xs font-semibold transition-colors cursor-pointer text-center"
                >
                  Tutup
                </button>
                <a
                  href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                    `Halo Julhan & Tim, saya ingin konsultasi & booking layanan: ${selectedService.titleId} (${selectedService.price})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg bg-[#007FA1] hover:bg-[#006b88] text-white text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-2 group text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konsultasi via WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
