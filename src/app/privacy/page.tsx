"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Lock, FileCode, CheckCircle2 } from "lucide-react";
import { socialLinks } from "@/data/navigation";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#000519] pt-24 sm:pt-28 pb-20 px-6 sm:px-10 lg:px-16 xl:px-24">
      <div className="max-w-[84rem] mx-auto w-full">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#52525b] hover:text-[#000519] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Header Section */}
        <div className="pb-10 border-b border-black/[0.08]">
          <div className="section-badge section-badge-light mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-black/[0.08] shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#007FA1]" />
            <span>Kebijakan Privasi &amp; Etika Data</span>
          </div>

          <h1 className="text-[1.85rem] sm:text-[3rem] lg:text-[3.6rem] font-semibold text-[#000519] leading-[1.08] tracking-[-0.03em] max-w-3xl">
            Komitmen Privasi &amp;{" "}
            <span className="text-[#007FA1]">
              Kerahasiaan Data Klien.
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#52525b] max-w-2xl leading-relaxed">
            Saya menghormati privasi Anda. Halaman ini menjelaskan bagaimana data Anda dikelola dengan transparansi penuh, aman, dan tanpa pelacak iklan pihak ketiga.
          </p>
          <p className="mt-2 text-xs text-[#71717a]">
            Terakhir diperbarui: 2 November 2026
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Data Collection */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#007FA1]/10 border border-[#007FA1]/20 flex items-center justify-center text-[#007FA1]">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#000519] tracking-tight">
              1. Pengumpulan &amp; Penggunaan Data
            </h2>
            <p className="text-sm text-[#52525b] leading-relaxed">
              Data yang dikumpulkan di situs ini (seperti Nama, Email, dan Pesan Proyek yang Anda masukkan melalui formulir kontak atau WhatsApp) hanya digunakan secara eksklusif untuk mendiskusikan kebutuhan teknis, proposal penawaran, dan pengerjaan proyek Anda.
            </p>
            <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#3f3f46]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tidak ada penjualan data ke pihak ketiga.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tidak ada spam marketing otomatis.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Confidentiality & NDA */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#007FA1]/10 border border-[#007FA1]/20 flex items-center justify-center text-[#007FA1]">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#000519] tracking-tight">
              2. Kerahasiaan Proyek &amp; NDA
            </h2>
            <p className="text-sm text-[#52525b] leading-relaxed">
              Untuk proyek institusi, startup, maupun korporat (seperti CDU Portal), saya bersedia menandatangani Non-Disclosure Agreement (NDA) resmi untuk menjamin seluruh data bisnis, kredensial database, dan skema sistem tetap rahasia.
            </p>
            <ul className="space-y-2 pt-2 text-xs sm:text-sm text-[#3f3f46]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hak cipta dan source code milik klien penuh.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kredensial server dienkripsi dan diisolasi.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Analytics & Cookies */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#007FA1]/10 border border-[#007FA1]/20 flex items-center justify-center text-[#007FA1]">
              <FileCode className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#000519] tracking-tight">
              3. Cookies &amp; Tanpa Pelacak Iklan
            </h2>
            <p className="text-sm text-[#52525b] leading-relaxed">
              Website ini tidak memasang script pelacak pihak ketiga seperti Facebook Pixel atau jaringan periklanan invasif lainnya. Seluruh navigasi berjalan cepat, privat, dan aman.
            </p>
          </div>

          {/* Card 4: Contact & Inquiries */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#007FA1]/10 border border-[#007FA1]/20 flex items-center justify-center text-[#007FA1]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#000519] tracking-tight">
              4. Pertanyaan Mengenai Privasi
            </h2>
            <p className="text-sm text-[#52525b] leading-relaxed">
              Jika Anda memiliki pertanyaan spesifik terkait kepatuhan data, integrasi API, atau klausul perjanjian NDA proyek, jangan ragu untuk menghubungi saya langsung:
            </p>
            <div className="pt-2">
              <Link
                href="mailto:julhanabdulmalik@gmail.com"
                className="text-sm font-semibold text-[#007FA1] hover:underline block"
              >
                julhanabdulmalik@gmail.com
              </Link>
              <Link
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#52525b] hover:text-[#000519] block mt-1"
              >
                +62 831-1103-0309 (WhatsApp Business)
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Footer Box */}
        <div className="mt-12 p-8 rounded-2xl bg-[#000519] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Siap memulai proyek dengan aman &amp; transparan?
            </h3>
            <p className="text-xs sm:text-sm text-[#a1a1aa] mt-1">
              Diskusikan kebutuhan sistem Anda langsung dengan Julhan Abdul Malik.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg bg-[#007FA1] hover:bg-[#00384c] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shadow-sm"
          >
            Hubungi Saya Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
