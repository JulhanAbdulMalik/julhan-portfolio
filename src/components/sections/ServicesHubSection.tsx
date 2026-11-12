"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { servicesList } from "@/data/servicesData";
import { MotionFadeIn } from "@/components/motion/MotionFadeIn";

export function ServicesHubSection() {
  const showcaseMeta: Record<
    string,
    { category: string; image: string; highlightFeatures: string[] }
  > = {
    "landing-page": {
      category: "Web Development",
      image: "/images/projects/web-bisnis.webp",
      highlightFeatures: [
        "Next.js 16",
        "Mobile Friendly",
        "SEO Google",
        "Cloud VPS",
        "Garansi 30 Hari",
      ],
    },
    "coffee-shop": {
      category: "F&B & Restaurant System",
      image: "/images/projects/web-coffeshop.webp",
      highlightFeatures: [
        "E-Menu & QR Meja",
        "Kasir & Print Thermal",
        "QRIS Otomatis",
        "Admin Omzet",
        "Garansi 60 Hari",
      ],
    },
    ecommerce: {
      category: "E-Commerce & Ordering",
      image: "/images/projects/web-ecommerce.webp",
      highlightFeatures: [
        "Katalog & Filter",
        "QRIS & Bank Gateway",
        "PostgreSQL",
        "Admin Dashboard",
        "Garansi 60 Hari",
      ],
    },
  };

  const featuredServices = ["landing-page", "coffee-shop", "ecommerce"]
    .map((id) => {
      const data = servicesList.find((s) => s.id === id);
      if (!data) return null;
      const meta = showcaseMeta[id];
      return {
        id: data.id,
        category: meta.category,
        title: data.titleId,
        desc: data.shortDescId,
        image: meta.image,
        time: data.timeline,
        features: meta.highlightFeatures,
      };
    })
    .filter(Boolean) as {
    id: string;
    category: string;
    title: string;
    desc: string;
    image: string;
    time: string;
    features: string[];
  }[];

  return (
    <section
      id="services"
      className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] relative bg-white border-b border-dashed border-neutral-300"
    >
      {/* ── Main Unified Architectural Grid Table (Kotak Siku 90° + Garis Strip Putus-Putus / wpu.id 1:1) ── */}
      <div className="max-w-[84rem] mx-auto w-full border-x border-t border-dashed border-neutral-300 bg-white rounded-none shadow-none">
        
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
        <MotionFadeIn
          delay={0.05}
          className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-neutral-300 flex flex-col justify-center space-y-4 sm:space-y-5"
        >
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
        </MotionFadeIn>

        {/* ════════════════════════════════════════════════════════════════
            ROW 2: 3 Layanan Unggulan Grid (Tabel Siku 90° wpu.id - 3 Kolom Simetris)
            Hanya 3 layanan unggulan utama di Halaman Beranda
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-dashed border-neutral-300">
          {featuredServices.map((service, idx) => {
            const isLastColLg = (idx + 1) % 3 === 0;
            const isLastColMd = (idx + 1) % 2 === 0;
            const isThirdItem = idx === 2;

            return (
              <MotionFadeIn
                key={service.id}
                delay={idx * 0.1}
                className={`p-7 sm:p-8 lg:p-9 flex flex-col justify-between space-y-6 bg-white hover:bg-[#fafafa]/80 transition-colors group border-b border-dashed border-neutral-300 lg:border-b-0 ${
                  isThirdItem ? "md:col-span-2 lg:col-span-1 md:border-b-0" : ""
                } ${
                  isLastColLg ? "lg:border-r-0" : "lg:border-r border-dashed border-neutral-300"
                } ${
                  isLastColMd ? "md:border-r-0" : "md:border-r border-dashed border-neutral-300"
                }`}
              >
                <div className="space-y-5">
                  {/* Cover Image Frame with Delivery Time Badge */}
                  <Link
                    href={`/services#${service.id}`}
                    className="relative aspect-[16/10] w-full bg-neutral-100 rounded-xl overflow-hidden border border-black/[0.06] shadow-sm block group/img"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Delivery Time Badge overlay */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold backdrop-blur-md border shadow-sm bg-white/95 border-emerald-500/40 text-emerald-800">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        <span>{service.time}</span>
                      </span>
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="space-y-2.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#007FA1] block">
                      {service.category}
                    </span>

                    <Link
                      href={`/services#${service.id}`}
                      className="block"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-[#000519] group-hover:text-[#007FA1] transition-colors leading-snug tracking-tight">
                        {service.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed line-clamp-3 font-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Area: Features & Action */}
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

                  {/* Investment Scope & Action Button */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-[#71717a] block uppercase tracking-wider font-semibold">
                        Biaya Investasi
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#007FA1]">
                        Kustom Sesuai Kebutuhan
                      </span>
                    </div>

                    <Link
                      href={`/services#${service.id}`}
                      aria-label={`Konsultasi gratis untuk layanan ${service.title}`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#007FA1] hover:bg-[#006b88] text-white text-xs font-semibold transition-all shadow-xs group/btn cursor-pointer"
                      title="Konsultasi Gratis"
                    >
                      <span>Konsultasi Gratis</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </MotionFadeIn>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 3: Special Educational Institution Callout Banner
            Program Kemitraan Digital Sekolah & Yayasan (Investasi Awal Rp 0,-)
        ════════════════════════════════════════════════════════════════ */}
        <MotionFadeIn
          delay={0.12}
          className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-neutral-300 bg-[#f8fafc] relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600/10 text-emerald-700 border border-emerald-600/30 w-fit">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                <span>Program Khusus Sekolah &amp; Yayasan Pendidikan</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000519] tracking-tight leading-snug">
                Biaya Pembuatan Awal{" "}
                <span className="text-emerald-700 underline decoration-emerald-500/40 underline-offset-4">
                  Rp 0,- (Gratis)
                </span>
                . Sistem Informasi Sekolah Modern &amp; Siap Pakai.
              </h3>

              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-normal">
                Khusus untuk Sekolah, Madrasah, dan Pesantren: Kami bangunkan sistem informasi dan portal data sekolah kustom tanpa biaya pembuatan di awal. Seluruh modul dan alur kerja dirancang fleksibel menyesuaikan kebutuhan serta sistem yang sedang berjalan di sekolah Anda saat ini.
              </p>

              {/* Highlights 4 items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  "Investasi Awal Rp 0,- (Tanpa Biaya Pembuatan Software)",
                  "Gratis Cloud Hosting, Setup Domain Sekolah, & SSL",
                  "Fitur Sistem Kustom Menyesuaikan Kebutuhan Sekolah",
                  "Pelatihan Guru & Operator TU sampai Mahir",
                ].map((item, i) => (
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
                  "Halo Julhan & Tim, saya dari pihak Sekolah/Yayasan Pendidikan ingin konsultasi mengenai Program Sistem Data Sekolah dengan Biaya Pembuatan Awal Rp 0,-."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition-all group"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Konsultasi Program Sekolah</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </MotionFadeIn>

        {/* ════════════════════════════════════════════════════════════════
            ROW 4: Tombol Navigasi ke Halaman Layanan (Simple & Clean)
        ════════════════════════════════════════════════════════════════ */}
        <MotionFadeIn
          delay={0.1}
          className="p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-[#fafafa]/50"
        >
          <p className="text-xs sm:text-sm text-[#52525b]">
            Ingin melihat seluruh pilihan paket dan spesifikasi layanan lainnya?
          </p>

          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#007FA1] hover:bg-[#006b88] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm group shrink-0"
          >
            <span>Lihat Semua Layanan</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </MotionFadeIn>

      </div>
    </section>
  );
}
