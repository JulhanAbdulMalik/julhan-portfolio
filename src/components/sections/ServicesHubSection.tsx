"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Layers, ArrowUpRight, Globe, Smartphone, LayoutDashboard, ShoppingCart } from "lucide-react";

export function ServicesHubSection() {
  const services = [
    {
      id: "landing-page",
      tag: "Web Development",
      title: "Website Profil & Landing Page UMKM",
      desc: "Website perkenalan bisnis modern, ultra cepat, mobile friendly, dan fokus konversi penjualan. Menggunakan Next.js dan Tailwind CSS dengan skor SEO 100%.",
      price: "Mulai Rp 500.000",
      time: "3 - 7 Hari",
      image: "/images/projects/discussion-forum.svg",
      icon: Globe,
    },
    {
      id: "mobile-app",
      tag: "Mobile App",
      title: "Aplikasi Mobile Android (Flutter)",
      desc: "Aplikasi mobile multiplatform dengan performa native, UI responsif, state management Provider/Bloc, dan siap publish ke Google Play Store.",
      price: "Mulai Rp 2.500.000",
      time: "14 - 30 Hari",
      image: "/images/projects/panenkita.svg",
      icon: Smartphone,
    },
    {
      id: "ecommerce",
      tag: "E-Commerce",
      title: "Toko Online & Sistem Pemesanan",
      desc: "Katalog produk digital & fisik, keranjang belanja interaktif, integrasi pembayaran otomatis (QRIS / Transfer Bank), dan notifikasi WhatsApp instan.",
      price: "Mulai Rp 1.500.000",
      time: "10 - 20 Hari",
      image: "/images/projects/yuwanyie-picnic.svg",
      icon: ShoppingCart,
    },
    {
      id: "dashboard",
      tag: "Enterprise System",
      title: "Sistem Manajemen & Admin Dashboard",
      desc: "Web app kustom untuk operasional kantor, manajemen database berskala puluhan ribu data, analitik visual grafik interaktif, dan ekspor laporan Excel/PDF.",
      price: "Mulai Rp 2.000.000",
      time: "14 - 30 Hari",
      image: "/images/projects/cdu-portal.svg",
      icon: LayoutDashboard,
    },
  ];

  return (
    <section
      id="services"
      className="section-dark py-20 sm:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 bg-[#000519] text-white border-t border-b border-dashed border-white/15 relative"
    >
      <div className="section-inner space-y-12 sm:space-y-16">
        
        {/* ── Top Header Row (wpu.id style) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="space-y-4 max-w-2xl">
            <div className="section-badge section-badge-dark">
              <Layers className="w-3.5 h-3.5 text-[#07DFFF]" />
              <span>Layanan Unggulan</span>
            </div>

            <h2 className="text-[1.85rem] sm:text-[3.2rem] lg:text-[3.8rem] font-semibold text-white leading-[1.08] tracking-[-0.03em]">
              Dirancang untuk memenuhi{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#07DFFF]">
                kebutuhan digital Anda.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#a1a1aa] leading-relaxed lg:pb-2 font-normal">
            Solusi pengembangan menyeluruh dari riset, arsitektur database, desain antarmuka, hingga cloud deployment bergaransi resmi.
          </p>
        </div>

        {/* ── Horizontal Services List (wpu.id exact row pattern) ── */}
        <div className="divide-y divide-white/[0.08] border-b border-white/[0.08]">
          {services.map((item) => (
            <Link
              key={item.id}
              href="/services"
              className="py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-10 group hover:bg-white/[0.015] px-2 sm:px-4 rounded-xl transition-all duration-200"
            >
              {/* Left Column: Mockup Thumbnail Frame */}
              <div className="relative w-full md:w-[220px] lg:w-[250px] aspect-[16/10] rounded-xl overflow-hidden bg-[#020c24] border border-white/[0.1] shrink-0 shadow-md">
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
                  <span className="px-2.5 py-0.5 rounded-full bg-[#007FA1]/30 border border-[#007FA1]/50 text-[#07DFFF] text-[11px] font-mono font-medium">
                    {item.tag}
                  </span>
                  <span className="text-xs text-[#71717a] font-mono">
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
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-white/30 group-hover:bg-white/[0.05] shrink-0 transition-all">
                <ArrowUpRight className="w-5 h-5 text-[#a1a1aa] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* ── Bottom Callout Bar ── */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-[#71717a]">
            Memiliki kebutuhan sistem kustom atau spesifikasi khusus di luar daftar di atas?
          </p>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#07DFFF] hover:text-[#07DFFF] transition-colors group"
          >
            <span>Lihat Rincian Seluruh Layanan & Alur Kerja</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
