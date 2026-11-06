"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowUpRight, DollarSign, Sparkles } from "lucide-react";

export function PricingPreviewSection() {
  const [billingType, setBillingType] = useState<"project" | "maintenance">("project");

  const plans = [
    {
      id: "starter",
      name: "Paket Starter",
      target: "Landing Page & Profil Bisnis UMKM",
      projectPrice: "Rp 500.000",
      maintenancePrice: "Rp 250.000 /bln",
      duration: "3 - 7 Hari Kerja",
      popular: false,
      features: [
        "1 - 3 Halaman Web Cepat (Next.js 15)",
        "Desain UI/UX Modern & Mobile Responsive",
        "Setup Domain Custom & Cloud Hosting",
        "Integrasi Tombol WhatsApp Direct Chat",
        "Optimasi SEO Teknis & Google Index",
        "Garansi Bug Fix 14 Hari Pasca Rilis",
      ],
      ctaText: "Pilih Paket Starter",
      waMessage: "Halo Julhan, saya tertarik dengan Paket Starter untuk pembuatan website.",
    },
    {
      id: "growth",
      name: "Paket Professional / Growth",
      target: "Toko Online & Dashboard Manajemen",
      projectPrice: "Rp 1.500.000",
      maintenancePrice: "Rp 500.000 /bln",
      duration: "10 - 20 Hari Kerja",
      popular: true,
      features: [
        "Semua fitur di Paket Starter",
        "Katalog Produk & Keranjang Belanja",
        "Integrasi Pembayaran QRIS & Bank Otomatis",
        "Admin Dashboard Analitik Penjualan",
        "Database Cloud PostgreSQL / Supabase",
        "Pelatihan Staf Pengoperasian & Garansi 30 Hari",
      ],
      ctaText: "Pilih Paket Professional",
      waMessage: "Halo Julhan, saya tertarik dengan Paket Professional (Toko Online/Dashboard).",
    },
    {
      id: "enterprise",
      name: "Bundle Web + Mobile App",
      target: "Ekosistem Web & Aplikasi Android Flutter",
      projectPrice: "Rp 3.500.000",
      maintenancePrice: "Rp 950.000 /bln",
      duration: "21 - 45 Hari Kerja",
      popular: false,
      features: [
        "Website Next.js + Aplikasi Android Flutter",
        "Satu Backend Terpadu (Express.js / PostgreSQL)",
        "Rilis Siap Unduh di Google Play Store",
        "Ekspor Laporan Otomatis Excel & PDF",
        "Keamanan Role-Based Access Control (RBAC)",
        "Dukungan Dedicated Support & Garansi Penuh",
      ],
      ctaText: "Diskusikan Proyek Bundle",
      waMessage: "Halo Julhan, saya ingin konsultasi Paket Bundle Web + Mobile App Flutter.",
    },
  ];

  return (
    <section
      id="pricing"
      className="section-dark py-20 sm:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 bg-[#000519] text-white border-t border-b border-white/[0.08] relative"
    >
      <div className="section-inner space-y-12 sm:space-y-16">
        
        {/* ── Top Header Row (wpu.id style) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-4 max-w-2xl">
            <div className="section-badge section-badge-dark">
              <DollarSign className="w-3.5 h-3.5 text-[#07DFFF]" />
              <span>Investasi Transparan</span>
            </div>

            <h2 className="text-[1.85rem] sm:text-[3.2rem] lg:text-[3.8rem] font-semibold text-white leading-[1.08] tracking-[-0.03em]">
              Investasi terjangkau dengan{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#07DFFF]">
                kualitas standar industri.
              </span>
            </h2>
          </div>

          {/* Toggle Switcher */}
          <div className="flex flex-col sm:items-end gap-3">
            <p className="text-xs sm:text-sm text-[#71717a] font-normal sm:text-right">
              Pilih model pengerjaan yang sesuai:
            </p>
            <div className="inline-flex p-1 rounded-lg bg-[#020c24] border border-white/[0.1]">
              <button
                onClick={() => setBillingType("project")}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                  billingType === "project"
                    ? "bg-[#007FA1] text-white"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                Proyek (One-Time)
              </button>
              <button
                onClick={() => setBillingType("maintenance")}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                  billingType === "maintenance"
                    ? "bg-[#007FA1] text-white"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                Maintenance Bulanan
              </button>
            </div>
          </div>
        </div>

        {/* ── 3 Pricing Cards Grid (Clean wpu.id card aesthetics) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            const price =
              billingType === "project" ? plan.projectPrice : plan.maintenancePrice;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? "bg-[#020c24] border-2 border-[#007FA1] shadow-[0_16px_36px_rgba(0,0,0,0.6)]"
                    : "bg-[#010920] border border-white/[0.08] hover:border-white/[0.20]"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-6 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#007FA1] text-white flex items-center gap-1 shadow-sm uppercase tracking-wider">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Paling Diminati</span>
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="space-y-1.5">
                    <h3 className="text-white font-semibold text-xl tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#71717a] font-normal leading-relaxed">
                      {plan.target}
                    </p>
                  </div>

                  {/* Price Row */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-1">
                    <span className="text-[11px] font-mono uppercase text-[#71717a] block">
                      Estimasi Biaya Mulai
                    </span>
                    <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                      {price}
                    </div>
                    <span className="text-xs font-mono text-[#07DFFF] block pt-1">
                      ⏱ {plan.duration}
                    </span>
                  </div>

                  {/* Deliverables */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717a] block font-semibold">
                      FITUR & LAYANAN TERMASUK:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#d4d4d4] leading-relaxed">
                          <Check className="w-4 h-4 text-[#07DFFF] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-8 border-t border-white/[0.08] mt-8">
                  <a
                    href={`https://wa.me/6283111030309?text=${encodeURIComponent(plan.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-md text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 group ${
                      isPopular
                        ? "bg-[#007FA1] hover:bg-[#00A2C9] text-white shadow-md"
                        : "bg-[#020c24] hover:bg-[#007FA1] border border-white/20 hover:border-white/40 text-white"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom Link ── */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-[#71717a]">
            Memerlukan spesifikasi khusus atau penyesuaian anggaran bertahap?
          </p>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#07DFFF] hover:text-[#07DFFF] transition-colors group"
          >
            <span>Lihat Tabel Perbandingan Detail Seluruh Paket</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
