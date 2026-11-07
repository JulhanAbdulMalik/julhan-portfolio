"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Layers, ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";

export function ServicesHubSection() {
  const services = [
    {
      id: "landing-page",
      category: "Web Development",
      title: "Website Profil & Landing Page UMKM",
      desc: "Website modern, ultra cepat, mobile friendly, dan fokus konversi penjualan. Menggunakan Next.js dan Tailwind CSS dengan skor SEO 100%.",
      image: "/images/projects/discussion-forum.svg",
      price: "Mulai Rp 500.000",
      time: "3 - 7 Hari",
      features: ["Next.js 15", "Tailwind CSS", "SEO 100%", "Mobile Responsive", "Free Domain & Hosting Setup"],
    },
    {
      id: "mobile-app",
      category: "Mobile App",
      title: "Aplikasi Mobile Android (Flutter)",
      desc: "Aplikasi mobile multiplatform performa native, UI responsif, state management Provider/Bloc, integrasi REST API, dan siap publish ke Google Play Store.",
      image: "/images/projects/panenkita.svg",
      price: "Mulai Rp 2.500.000",
      time: "14 - 30 Hari",
      features: ["Flutter", "Dart", "Play Store Ready", "REST API Backend", "Garansi Maintenance 30 Hari"],
    },
    {
      id: "ecommerce-dashboard",
      category: "Enterprise & E-Commerce",
      title: "Toko Online & Admin Dashboard",
      desc: "Katalog produk, pembayaran otomatis QRIS/Bank, manajemen database berskala besar, analitik penjualan real-time, dan ekspor laporan Excel/PDF.",
      image: "/images/projects/yuwanyie-picnic.svg",
      price: "Mulai Rp 1.500.000",
      time: "10 - 20 Hari",
      features: ["Next.js 15", "PostgreSQL", "QRIS & Bank", "Dashboard Analitik", "Ekspor Excel/PDF"],
    },
  ];

  return (
    <section
      id="services"
      className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] relative bg-white border-b border-dashed border-neutral-300"
    >
      {/* ── Main Unified Architectural Grid Table (Kotak Siku 90° + Garis Strip Putus-Putus / wpu.id 1:1) ── */}
      <div className="max-w-[84rem] mx-auto w-full border border-dashed border-neutral-300 bg-white rounded-none shadow-none">
        
        {/* ════════════════════════════════════════════════════════════════
            ROW 0: Top Spacer Row (Baris Margin Kosong di Awal Section 4)
            Memberikan ruang napas (breathing room) di awal section tanpa garis tengah
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="w-full border-b border-dashed border-neutral-300 h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

        {/* ════════════════════════════════════════════════════════════════
            ROW 1: Header Row (Layanan Unggulan: Judul di Atas, Deskripsi di Bawah)
            Satu blok utuh presisi seperti Section 2
        ════════════════════════════════════════════════════════════════ */}
        <div className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-neutral-300 flex flex-col justify-center space-y-4 sm:space-y-5">
          {/* Bagian Atas: Badge + Judul */}
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/10 text-[#007FA1] border border-[#007FA1]/25 w-fit">
              <Layers className="w-3.5 h-3.5 text-[#007FA1]" />
              <span>Featured Services</span>
            </div>

            <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem] xl:text-[3.5rem] font-semibold text-[#000519] leading-[1.12] tracking-[-0.03em]">
              Dirancang untuk memenuhi{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#007FA1]">
                kebutuhan digital Anda.
              </span>
            </h2>
          </div>

          {/* Bagian Bawah: Deskripsi */}
          <p className="text-sm sm:text-base text-[#52525b] leading-relaxed font-normal max-w-none">
            Solusi pengembangan menyeluruh dari riset, arsitektur database, desain antarmuka, hingga cloud deployment bergaransi resmi.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 2: 3 Featured Services Columns (Tabel 3 Kolom Siku 90° wpu.id - UI Section 4 Asli)
            Setiap kolom dipisahkan garis putus-putus presisi tinggi
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-neutral-300 border-b border-dashed border-neutral-300">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-white hover:bg-[#fafafa]/60 transition-colors group"
            >
              <div className="space-y-5">
                {/* Image Frame with Status Badge */}
                <div className="relative aspect-[16/10] w-full bg-neutral-100 rounded-xl overflow-hidden border border-black/[0.06] shadow-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Delivery Time Badge overlay */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold backdrop-blur-md border shadow-sm bg-white/95 border-emerald-500/40 text-emerald-800">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      <span>{service.time}</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#007FA1] block">
                    {service.category}
                  </span>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#000519] group-hover:text-[#007FA1] transition-colors leading-snug tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed line-clamp-3 font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Card Area: Features & Action links */}
              <div className="pt-5 border-t border-dashed border-neutral-200 space-y-4">
                {/* Features pills */}
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-2 py-0.5 rounded-md bg-[#000519]/5 text-[10px] font-medium text-[#404040] border border-black/[0.04]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Price & Action Link */}
                <div className="flex items-center justify-between pt-1">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[#71717a] block uppercase tracking-wider">Estimasi Biaya</span>
                    <span className="text-xs font-semibold text-[#000519]">{service.price}</span>
                  </div>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-black/[0.04] hover:bg-[#000519] text-xs font-semibold text-[#000519] hover:text-white transition-all group/link"
                  >
                    <span>Konsultasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 3: Bottom Callout Bar (Konten Asli Layanan)
            Menghubungkan ke halaman rincian seluruh layanan
        ════════════════════════════════════════════════════════════════ */}
        <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-[#fafafa]/50">
          <p className="text-xs sm:text-sm text-[#52525b]">
            Memiliki kebutuhan sistem kustom atau spesifikasi khusus di luar daftar di atas?
          </p>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-transparent hover:bg-black/5 border border-dashed border-neutral-400 hover:border-[#000519] text-xs sm:text-sm font-semibold text-[#000519] transition-all duration-200 group shrink-0"
          >
            <span>Lihat Rincian Seluruh Layanan & Alur Kerja</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#000519] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 4: Bottom Spacer Row (Baris Margin Kosong di Akhir Section 4)
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
