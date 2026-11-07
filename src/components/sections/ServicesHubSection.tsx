"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Layers, ArrowUpRight } from "lucide-react";

export function ServicesHubSection() {
  const services = [
    {
      id: "landing-page",
      number: "01",
      tag: "Web Development",
      title: "Website Profil & Landing Page UMKM",
      desc: "Website perkenalan bisnis modern, ultra cepat, mobile friendly, dan fokus konversi penjualan. Menggunakan Next.js dan Tailwind CSS dengan skor SEO 100%.",
      price: "Mulai Rp 500.000",
      time: "3 - 7 Hari",
      image: "/images/projects/discussion-forum.svg",
    },
    {
      id: "mobile-app",
      number: "02",
      tag: "Mobile App",
      title: "Aplikasi Mobile Android (Flutter)",
      desc: "Aplikasi mobile multiplatform dengan performa native, UI responsif, state management Provider/Bloc, dan siap publish ke Google Play Store.",
      price: "Mulai Rp 2.500.000",
      time: "14 - 30 Hari",
      image: "/images/projects/panenkita.svg",
    },
    {
      id: "ecommerce",
      number: "03",
      tag: "E-Commerce",
      title: "Toko Online & Sistem Pemesanan",
      desc: "Katalog produk digital & fisik, keranjang belanja interaktif, integrasi pembayaran otomatis (QRIS / Transfer Bank), dan notifikasi WhatsApp instan.",
      price: "Mulai Rp 1.500.000",
      time: "10 - 20 Hari",
      image: "/images/projects/yuwanyie-picnic.svg",
    },
    {
      id: "dashboard",
      number: "04",
      tag: "Enterprise System",
      title: "Sistem Manajemen & Admin Dashboard",
      desc: "Web app kustom untuk operasional kantor, manajemen database berskala puluhan ribu data, analitik visual grafik interaktif, dan ekspor laporan Excel/PDF.",
      price: "Mulai Rp 2.000.000",
      time: "14 - 30 Hari",
      image: "/images/projects/cdu-portal.svg",
    },
  ];

  return (
    <section
      id="services"
      className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-white relative bg-[#000519] border-b border-dashed border-white/15"
    >
      {/* ── Main Unified Architectural Grid Table (Kotak Siku 90° + Garis Strip Putus-Putus Dark Blueprint) ── */}
      <div className="max-w-[84rem] mx-auto w-full border border-dashed border-white/15 bg-[#000519] rounded-none shadow-none">
        
        {/* ════════════════════════════════════════════════════════════════
            ROW 0: Top Spacer Row (Baris Margin Kosong di Awal Section 3)
            Memberikan ruang napas (breathing room) di awal section tanpa garis tengah
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="w-full border-b border-dashed border-white/15 h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

        {/* ════════════════════════════════════════════════════════════════
            ROW 1: Header Row (Layanan Unggulan: Judul di Atas, Deskripsi di Bawah)
            Satu blok utuh presisi tanpa kartu SLA tambahan
        ════════════════════════════════════════════════════════════════ */}
        <div className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-white/15 flex flex-col justify-center space-y-4 sm:space-y-5">
          {/* Bagian Atas: Badge + Judul */}
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/20 text-[#07DFFF] border border-[#007FA1]/40 w-fit">
              <Layers className="w-3.5 h-3.5 text-[#07DFFF]" />
              <span>Layanan Unggulan</span>
            </div>

            <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem] xl:text-[3.5rem] font-semibold text-white leading-[1.12] tracking-[-0.03em]">
              Dirancang untuk memenuhi{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#07DFFF]">
                kebutuhan digital Anda.
              </span>
            </h2>
          </div>

          {/* Bagian Bawah: Deskripsi Asli */}
          <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal max-w-3xl">
            Solusi pengembangan menyeluruh dari riset, arsitektur database, desain antarmuka, hingga cloud deployment bergaransi resmi.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 2: Horizontal Services List (1 Baris 1 Data Melebar ke Pinggir)
            Setiap baris layanan dipisahkan garis putus-putus presisi tinggi
        ════════════════════════════════════════════════════════════════ */}
        <div className="divide-y divide-dashed divide-white/15 border-b border-dashed border-white/15">
          {services.map((item) => (
            <Link
              key={item.id}
              href="/services"
              className="p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-10 hover:bg-white/[0.015] transition-all duration-300 group relative"
            >
              {/* Left Column: Mockup Thumbnail Frame */}
              <div className="relative w-full md:w-[220px] lg:w-[260px] aspect-[16/10] rounded-xl overflow-hidden bg-[#020c24] border border-white/10 shrink-0 shadow-md group-hover:border-white/20 transition-colors">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000519]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Middle Column: Details & Value */}
              <div className="flex-1 space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#007FA1]/30 border border-[#007FA1]/50 text-[#07DFFF] text-[11px] font-medium">
                    {item.tag}
                  </span>
                  <span className="text-xs text-[#71717a]">
                    {item.time}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#07DFFF] transition-colors tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed max-w-3xl font-normal">
                  {item.desc}
                </p>

                <div className="pt-1 flex items-center gap-4 text-xs">
                  <span className="font-semibold text-white">
                    {item.price}
                  </span>
                  <span className="text-[#52525b]">•</span>
                  <span className="text-[#71717a]">
                    Garansi Maintenance 30 Hari
                  </span>
                </div>
              </div>

              {/* Right Column: Arrow Link */}
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-[#07DFFF] group-hover:bg-[#07DFFF]/10 shrink-0 transition-all">
                <ArrowUpRight className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#07DFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 4: Bottom Callout Bar (Konten Asli Sebelumnya)
            Menghubungkan ke halaman rincian seluruh layanan
        ════════════════════════════════════════════════════════════════ */}
        <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-[#020c24]/30">
          <p className="text-xs sm:text-sm text-[#a1a1aa]">
            Memiliki kebutuhan sistem kustom atau spesifikasi khusus di luar daftar di atas?
          </p>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-transparent hover:bg-white/10 border border-dashed border-white/50 hover:border-white text-xs sm:text-sm font-semibold text-white transition-all duration-200 group shrink-0"
          >
            <span>Lihat Rincian Seluruh Layanan & Alur Kerja</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 5: Bottom Spacer Row (Baris Margin Kosong di Akhir Section 3)
            Memberikan ruang napas (breathing room) di akhir section tanpa garis dobel
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="w-full h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

      </div>
    </section>
  );
}
