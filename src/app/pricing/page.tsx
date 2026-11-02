"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DollarSign,
  Check,
  X,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { pricingMatrix, pricingTerms } from "@/data/pricingData";

export default function PricingPage() {
  const [billingType, setBillingType] = useState<"project" | "maintenance">("project");

  // Group matrix rows by category
  const categories = Array.from(new Set(pricingMatrix.map((r) => r.category)));

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
            <DollarSign className="w-3.5 h-3.5 text-[#0ea5e9]" />
            <span>Transparansi Biaya &amp; Garansi SLA</span>
          </div>

          <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] font-extrabold text-white leading-[1.08] tracking-[-0.03em]">
            Investasi terjangkau dengan{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#0ea5e9]">
              nilai hasil maksimal.
            </span>
          </h1>

          <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Seluruh estimasi harga bersifat transparan sejak awal. Tanpa biaya tersembunyi, dengan jaminan 100% hak milik kode sumber dan garansi pemeliharaan.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-lg bg-[#141414] border border-white/[0.1]">
              <button
                onClick={() => setBillingType("project")}
                className={`px-5 py-2 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  billingType === "project"
                    ? "bg-[#0ea5e9] text-white shadow-sm"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                Pengerjaan Proyek (One-Time)
              </button>
              <button
                onClick={() => setBillingType("maintenance")}
                className={`px-5 py-2 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  billingType === "maintenance"
                    ? "bg-[#0ea5e9] text-white shadow-sm"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                Maintenance &amp; Retainer Bulanan
              </button>
            </div>
          </div>
        </div>

        {/* ── 2. Top 3 Pricing Summary Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Starter */}
          <div className="rounded-2xl p-8 bg-[#111111] border border-white/[0.08] hover:border-white/[0.18] flex flex-col justify-between transition-all duration-300">
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white tracking-tight">Paket Starter</h3>
                <p className="text-[#71717a] text-xs font-normal">
                  Landing Page &amp; Profil Bisnis UMKM
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono uppercase text-[#71717a] block">
                  Mulai Dari
                </span>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  {billingType === "project" ? "Rp 500.000" : "Rp 250.000 /bln"}
                </div>
                <span className="text-xs font-mono text-[#0ea5e9] block pt-1">
                  ⏱ 3 - 7 Hari Kerja
                </span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717a] block font-semibold">
                  FITUR UTAMA:
                </span>
                <ul className="space-y-2">
                  {[
                    "1 - 3 Halaman Responsif (Next.js 15)",
                    "Desain UI/UX Eksklusif & Modern (Figma)",
                    "Setup Domain Custom & Cloud Hosting",
                    "Integrasi Tombol WhatsApp Direct Chat",
                    "Optimasi SEO Teknis & Google Indexing",
                    "Garansi Bug Fix 14 Hari Pasca Rilis",
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#d4d4d8]">
                      <Check className="w-4 h-4 text-[#0ea5e9] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6">
              <a
                href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                  "Halo Julhan, saya tertarik dengan Paket Starter untuk pembuatan website/landing page."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-md text-xs font-semibold bg-[#18181b] hover:bg-[#222222] border border-white/20 hover:border-white/40 text-white flex items-center justify-center gap-2 transition-all"
              >
                <span>Pilih Starter Plan</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Professional (Popular) */}
          <div className="rounded-2xl p-8 bg-[#141414] border-2 border-[#0ea5e9]/60 shadow-[0_16px_36px_rgba(0,0,0,0.6)] flex flex-col justify-between transition-all duration-300 relative">
            <div className="absolute -top-3 left-6 z-10">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#0ea5e9] text-white flex items-center gap-1 shadow-sm uppercase tracking-wider">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Paling Populer &amp; Diminati</span>
              </span>
            </div>

            <div className="space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white tracking-tight">Paket Professional / Growth</h3>
                <p className="text-[#71717a] text-xs font-normal">
                  Toko Online &amp; Dashboard Manajemen
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono uppercase text-[#71717a] block">
                  Mulai Dari
                </span>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  {billingType === "project" ? "Rp 1.500.000" : "Rp 500.000 /bln"}
                </div>
                <span className="text-xs font-mono text-[#0ea5e9] block pt-1">
                  ⏱ 10 - 20 Hari Kerja
                </span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717a] block font-semibold">
                  FITUR UTAMA:
                </span>
                <ul className="space-y-2">
                  {[
                    "Semua fitur di Paket Starter",
                    "Katalog Produk & Keranjang Belanja",
                    "Integrasi Pembayaran QRIS & Bank Otomatis",
                    "Admin Dashboard Analitik Penjualan",
                    "Database Cloud PostgreSQL / Supabase",
                    "Pelatihan Staf Pengoperasian & Garansi 30 Hari",
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#d4d4d8]">
                      <Check className="w-4 h-4 text-[#0ea5e9] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6">
              <a
                href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                  "Halo Julhan, saya tertarik dengan Paket Professional untuk toko online atau dashboard manajemen."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-md text-xs font-semibold bg-[#0ea5e9] hover:bg-[#0284c7] text-white flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Pilih Professional Plan</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Enterprise Bundle */}
          <div className="rounded-2xl p-8 bg-[#111111] border border-white/[0.08] hover:border-white/[0.18] flex flex-col justify-between transition-all duration-300">
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white tracking-tight">Bundle Web + Mobile App</h3>
                <p className="text-[#71717a] text-xs font-normal">
                  Ekosistem Web &amp; Aplikasi Android Flutter
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono uppercase text-[#71717a] block">
                  Mulai Dari
                </span>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  {billingType === "project" ? "Rp 3.500.000" : "Rp 950.000 /bln"}
                </div>
                <span className="text-xs font-mono text-[#0ea5e9] block pt-1">
                  ⏱ 21 - 45 Hari Kerja
                </span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717a] block font-semibold">
                  FITUR UTAMA:
                </span>
                <ul className="space-y-2">
                  {[
                    "Website Next.js + Aplikasi Android Flutter",
                    "Satu Backend Terpadu (Express.js / PostgreSQL)",
                    "Rilis Siap Unduh di Google Play Store",
                    "Ekspor Laporan Otomatis Excel & PDF",
                    "Keamanan Role-Based Access Control (RBAC)",
                    "Dukungan Dedicated Support & Garansi Penuh",
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#d4d4d8]">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6">
              <a
                href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                  "Halo Julhan, saya ingin konsultasi Paket Bundle Web + Mobile App Flutter."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-md text-xs font-semibold bg-[#18181b] hover:bg-[#222222] border border-white/20 hover:border-white/40 text-white flex items-center justify-center gap-2 transition-all"
              >
                <span>Diskusikan Bundle Ini</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* ── 3. Full Comparison Matrix Table (wpu.id style) ── */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tabel Komparasi Fitur Lengkap
            </h2>
            <p className="text-[#a1a1aa] text-xs sm:text-sm font-normal">
              Perbandingan rinci seluruh deliverable, spesifikasi teknis, dan dukungan purna jual antar paket.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#111111] shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#141414] text-[11px] font-mono uppercase tracking-wider text-[#71717a]">
                  <th className="py-4 px-6 font-semibold w-2/5">
                    Kategori &amp; Fitur
                  </th>
                  <th className="py-4 px-4 text-center font-semibold w-1/5">
                    Starter
                  </th>
                  <th className="py-4 px-4 text-center font-semibold w-1/5 text-[#0ea5e9]">
                    Professional
                  </th>
                  <th className="py-4 px-4 text-center font-semibold w-1/5 text-emerald-400">
                    Bundle Web+App
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-xs">
                {categories.map((category) => (
                  <React.Fragment key={category}>
                    <tr className="bg-white/[0.02] font-semibold text-[#0ea5e9]">
                      <td colSpan={4} className="py-3 px-6 text-[11px] font-mono uppercase tracking-wider">
                        {category}
                      </td>
                    </tr>
                    {pricingMatrix
                      .filter((r) => r.category === category)
                      .map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3.5 px-6 text-white font-medium">
                            {row.nameId}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {typeof row.starter === "boolean" ? (
                              row.starter ? (
                                <Check className="w-4 h-4 text-[#0ea5e9] mx-auto" />
                              ) : (
                                <X className="w-4 h-4 text-[#52525b] mx-auto" />
                              )
                            ) : (
                              <span className="font-mono text-[#a1a1aa]">{row.starter}</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center bg-[#0ea5e9]/[0.03]">
                            {typeof row.pro === "boolean" ? (
                              row.pro ? (
                                <Check className="w-4 h-4 text-[#0ea5e9] mx-auto" />
                              ) : (
                                <X className="w-4 h-4 text-[#52525b] mx-auto" />
                              )
                            ) : (
                              <span className="font-mono font-semibold text-white">{row.pro}</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {typeof row.bundle === "boolean" ? (
                              row.bundle ? (
                                <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                              ) : (
                                <X className="w-4 h-4 text-[#52525b] mx-auto" />
                              )
                            ) : (
                              <span className="font-mono font-bold text-white">{row.bundle}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 4. Service Terms & SLA Transparency ── */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="section-badge section-badge-dark inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span>Komitmen &amp; Jaminan Klien</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              3 Prinsip Transparansi Tanpa Risiko
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTerms.map((term, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-[#111111] border border-white/[0.08] hover:border-white/[0.18] space-y-3 transition-all"
              >
                <div className="text-xs font-mono font-bold text-[#0ea5e9]">
                  0{i + 1}
                </div>
                <h4 className="text-white font-bold text-base tracking-tight">{term.titleId}</h4>
                <p className="text-[#a1a1aa] text-xs leading-relaxed font-normal">
                  {term.descId}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. Bottom Final Consultation CTA (wpu.id style) ── */}
        <div className="rounded-2xl p-8 sm:p-12 border border-white/[0.1] bg-[#141414] text-center space-y-6 relative overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.6)]">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Butuh Estimasi Biaya Khusus?
            </h3>
            <p className="text-[#a1a1aa] text-xs sm:text-sm max-w-xl mx-auto font-normal">
              Punya spesifikasi atau alur kerja bisnis yang unik? Diskusikan dengan saya langsung. Saya akan menyusun proposal rancangan teknis dan penawaran terbaik.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/portfolio"
              className="px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/20 text-white font-semibold text-xs hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <span>Lihat Portfolio &amp; Hasil Jadi</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://wa.me/6283111030309?text=Halo%20Julhan,%20saya%20ingin%20konsultasi%20penawaran%20harga%20pembuatan%20website/aplikasi."
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
