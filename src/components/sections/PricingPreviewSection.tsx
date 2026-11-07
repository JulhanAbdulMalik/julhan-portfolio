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
      className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-white relative bg-[#000519] border-b border-dashed border-white/15"
    >
      {/* ── Main Unified Architectural Grid Table (Kotak Siku 90° + Garis Strip Putus-Putus Dark Blueprint) ── */}
      <div className="max-w-[84rem] mx-auto w-full border border-dashed border-white/15 bg-[#000519] rounded-none shadow-none">
        
        {/* ════════════════════════════════════════════════════════════════
            ROW 0: Top Spacer Row (Baris Margin Kosong di Awal Section 5)
            Memberikan ruang napas (breathing room) di awal section tanpa garis tengah
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="w-full border-b border-dashed border-white/15 h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

        {/* ════════════════════════════════════════════════════════════════
            ROW 1: Header Row (Investasi Transparan: Judul & Toggle Switcher)
            Satu blok utuh presisi dengan garis strip putus-putus
        ════════════════════════════════════════════════════════════════ */}
        <div className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-white/15 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#007FA1]/20 text-[#07DFFF] border border-[#007FA1]/40 w-fit">
              <DollarSign className="w-3.5 h-3.5 text-[#07DFFF]" />
              <span>Investasi Transparan</span>
            </div>

            <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem] xl:text-[3.5rem] font-semibold text-white leading-[1.12] tracking-[-0.03em]">
              Investasi terjangkau dengan{" "}
              <span className="text-[#07DFFF]">
                kualitas standar industri.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal pt-1">
              Pilihan skema pembayaran transparan tanpa biaya tersembunyi, disesuaikan dengan skala dan tahapan bisnis Anda.
            </p>
          </div>

          {/* Toggle Switcher */}
          <div className="flex flex-col sm:items-end gap-2.5 shrink-0">
            <span className="text-xs text-[#71717a] font-normal sm:text-right font-mono">
              PILIH MODEL PENGERJAAN:
            </span>
            <div className="inline-flex p-1 rounded-lg bg-[#020c24] border border-white/15">
              <button
                onClick={() => setBillingType("project")}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                  billingType === "project"
                    ? "bg-[#007FA1] text-white shadow-sm"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                Proyek (One-Time)
              </button>
              <button
                onClick={() => setBillingType("maintenance")}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                  billingType === "maintenance"
                    ? "bg-[#007FA1] text-white shadow-sm"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                Maintenance Bulanan
              </button>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 2: 3 Pricing Plans Columns (Tabel 3 Kolom Siku 90° wpu.id)
            Setiap kolom paket dipisahkan garis putus-putus presisi tinggi
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-white/15 border-b border-dashed border-white/15 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.popular;
            const price =
              billingType === "project" ? plan.projectPrice : plan.maintenancePrice;

            return (
              <div
                key={plan.id}
                className={`p-8 sm:p-10 flex flex-col justify-between space-y-8 transition-colors relative ${
                  isPopular ? "bg-[#020c24]/80" : "bg-[#000519] hover:bg-white/[0.015]"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-4 right-6 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#007FA1]/30 border border-[#007FA1]/60 text-[#07DFFF] flex items-center gap-1.5 uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-[#07DFFF]" />
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
                  <div className="pt-4 border-t border-dashed border-white/15 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717a] block">
                      Estimasi Biaya Mulai
                    </span>
                    <div className="text-3xl sm:text-4xl font-semibold text-white tracking-tight font-mono">
                      {price}
                    </div>
                    <span className="text-xs font-mono text-[#07DFFF] block pt-1">
                      ⏱ {plan.duration}
                    </span>
                  </div>

                  {/* Deliverables */}
                  <div className="pt-5 border-t border-dashed border-white/15 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] block font-semibold">
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
                <div className="pt-6 border-t border-dashed border-white/15">
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

        {/* ════════════════════════════════════════════════════════════════
            ROW 3: Bottom Callout Bar
            Menghubungkan ke tabel perbandingan detail seluruh paket
        ════════════════════════════════════════════════════════════════ */}
        <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-[#020c24]/30">
          <p className="text-xs sm:text-sm text-[#a1a1aa]">
            Memerlukan spesifikasi khusus atau penyesuaian anggaran bertahap?
          </p>

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-transparent hover:bg-white/10 border border-dashed border-white/50 hover:border-white text-xs sm:text-sm font-semibold text-white transition-all duration-200 group shrink-0"
          >
            <span>Lihat Tabel Perbandingan Detail Seluruh Paket</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 4: Bottom Spacer Row (Baris Margin Kosong di Akhir Section 5)
            Memberikan ruang napas (breathing room) di akhir section tanpa garis tengah
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="w-full border-t border-dashed border-white/15 h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

      </div>
    </section>
  );
}
