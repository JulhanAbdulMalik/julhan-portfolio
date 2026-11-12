import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ShieldCheck,
  Mail,
  Lock,
  FileCode,
  CheckCircle2,
  MessageCircle,
  ArrowUpRight,
  GitBranch,
  Database,
  Scale,
  Server,
  FileText,
} from "lucide-react";
import { socialLinks } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Kebijakan Privasi & Legalitas Sistem | Julhan Abdul Malik",
  description:
    "Komitmen perlindungan privasi data klien, kerahasiaan NDA resmi, kepemilikan mutlak source code, dan etika keamanan sistem pengembangan web serta aplikasi mobile.",
  keywords: [
    "Kebijakan Privasi Julhan Abdul Malik",
    "NDA Software Engineer",
    "Kepemilikan Source Code Klien",
    "Keamanan Data Web & Mobile",
    "Legalitas Proyek Digital",
  ],
};

export default function PrivacyPage() {
  const lastUpdated = "2 November 2026";

  const privacyPillars = [
    {
      number: "01",
      icon: Mail,
      category: "DATA PRIVACY",
      title: "Pengumpulan & Penggunaan Data Klien",
      description:
        "Data yang Anda sampaikan (seperti Nama, Email, Nomor WhatsApp, dan Rencana Spesifikasi Proyek) hanya digunakan secara eksklusif untuk kepentingan komunikasi teknis, penyusunan proposal penawaran, serta pengerjaan sistem Anda.",
      bullets: [
        "Tidak ada penjualan, penyewaan, atau pembagian data ke pihak ketiga manapun.",
        "Bebas dari spam pemasaran, promosi otomatis, maupun pesan massal yang tidak diinginkan.",
        "Data proyek disimpan dalam arsip terenkripsi dan dapat dihapus permanen atas permintaan Anda.",
      ],
    },
    {
      number: "02",
      icon: Lock,
      category: "CONFIDENTIALITY",
      title: "Kerahasiaan Proyek & Kesepakatan NDA Resmi",
      description:
        "Untuk proyek korporat, institusi pendidikan, maupun startup, saya siap menandatangani Non-Disclosure Agreement (NDA) resmi sebelum dokumen arsitektur dan data sensitif diserahkan.",
      bullets: [
        "Skema database, logika bisnis internal, dan API keys dijaga kerahasiaannya di bawah payung hukum.",
        "Isolasi menyeluruh antara akun staging, testing, dan repositori server produksi.",
        "Kesiapan mengadopsi klausul NDA standar dari tim legal atau institusi perusahaan Anda.",
      ],
    },
    {
      number: "03",
      icon: GitBranch,
      category: "INTELLECTUAL PROPERTY",
      title: "Hak Cipta & Kepemilikan Mutlak Source Code",
      description:
        "Seluruh kode sumber (source code), aset grafis, desain antarmuka Figma, dan akun infrastruktur yang dibangun selama masa kontrak kerja sama adalah 100% hak milik Anda setelah proyek tuntas.",
      bullets: [
        "Serah terima penuh repositori GitHub / GitLab langsung ke organisasi atau akun pribadi Anda.",
        "Bebas dari vendor lock-in: arsitektur Clean Code yang mudah dipelihara atau dialihkan ke tim in-house Anda.",
        "Tanpa biaya royalti berkelanjutan, biaya lisensi kepemilikan tersembunyi, atau klausul keterikatan sepihak.",
      ],
    },
    {
      number: "04",
      icon: Database,
      category: "SERVER SECURITY",
      title: "Isolasi Lingkungan Server & Enkripsi Kredensial",
      description:
        "Penerapan standar keamanan industri modern dalam setiap baris kode: enkripsi environment variable, pengelolaan secret keys melalui cloud terpercaya (Vercel, Supabase, Cloudflare), dan audit keamanan berkala.",
      bullets: [
        "Kredensial database, JWT Secret, dan API pihak ketiga dienkripsi aman serta tidak pernah di-commit ke Git publik.",
        "Konfigurasi Row Level Security (RLS) pada PostgreSQL untuk mencegah kebocoran data lintas pengguna.",
        "Pemindaian berkala dependensi paket npm untuk menutup potensi celah kerentanan (vulnerabilities).",
      ],
    },
    {
      number: "05",
      icon: FileCode,
      category: "CLEAN CODEBASE",
      title: "Bebas Skrip Pelacak Iklan Invasif (Privacy-First)",
      description:
        "Website portofolio ini dibangun dengan filosofi minimal data footprint. Tidak ada skrip pelacak pihak ketiga seperti Facebook Pixel, Google Ads remarketing, atau analitik invasif yang melacak aktivitas Anda di internet.",
      bullets: [
        "Navigasi ultra-cepat berkat ketiadaan skrip pihak ketiga (third-party bloatware).",
        "Kuki (cookies) hanya digunakan untuk preferensi navigasi esensial dan keamanan sesi server.",
        "Aman diakses dari jaringan privat korporasi, perbankan, dan lingkungan institusi formal.",
      ],
    },
    {
      number: "06",
      icon: Scale,
      category: "LEGAL INQUIRIES",
      title: "Saluran Resmi & Kepatuhan Legalitas",
      description:
        "Saluran komunikasi langsung jika Anda atau tim hukum perusahaan membutuhkan penyesuaian klausul kontrak, verifikasi identitas profesional, atau penerbitan dokumen invoice dan bukti penyerahan kerja resmi.",
      bullets: [
        "Saluran email resmi: julhanabdulmalik@gmail.com (respon dalam kurun waktu 1x24 jam kerja).",
        "Jalur komunikasi cepat via WhatsApp: +62 831-1103-0309.",
        "Dukungan dokumentasi serah terima sistem, Berita Acara Serah Terima (BAST), dan garansi bug resmi.",
      ],
    },
  ];

  return (
    <main className="w-full">
      {/* ════════════════════════════════════════════════════════════════
          BAGIAN 1: Dark Blueprint Hero Header (bg-[#000519])
          Konsisten 1:1 dengan Halaman Utama, /services & /artikel
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="pt-24 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-white relative bg-[#000519] border-b border-dashed border-white/15 overflow-hidden"
      >
        {/* Soft Ambient Glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none -z-0 opacity-15 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 70, 95, 0.65) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-[84rem] mx-auto w-full border border-dashed border-white/15 bg-[#000519] rounded-none shadow-none relative z-10">
          
          {/* ── Breadcrumb & Navigation Bar (Siku 90° Presisi, Langsung di Baris Awal Tanpa Spasi Kosong) ── */}
          <div className="p-4 sm:p-6 lg:p-7 border-b border-dashed border-white/15 flex items-center justify-between text-xs text-[#a1a1aa] bg-[#000519]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-medium hover:text-[#07DFFF] transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#07DFFF] group-hover:-translate-x-0.5 transition-transform" />
              <span>Kembali ke Beranda</span>
            </Link>

            <div className="flex items-center gap-2 text-xs">
              <Link href="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
              <span className="text-[#71717a]">/</span>
              <span className="text-[#07DFFF] font-medium">
                Kebijakan Privasi &amp; Legalitas
              </span>
            </div>
          </div>

          {/* ── Main Hero Title & Lead Description ── */}
          <div className="p-8 sm:p-10 lg:p-14 xl:p-16 border-b border-dashed border-white/15 space-y-6">
            <div className="space-y-4 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/20 text-[#07DFFF] border border-[#007FA1]/40 w-fit">
                <ShieldCheck className="w-3.5 h-3.5 text-[#07DFFF]" />
                <span>Kebijakan Privasi &amp; Legalitas Sistem</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-semibold text-white leading-[1.2] tracking-tight">
                Komitmen Privasi, Keamanan &amp;{" "}
                <span className="text-[#07DFFF]">
                  Kerahasiaan Data Klien.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal w-full max-w-none">
                Transparansi penuh mengenai etika perlindungan data bisnis, kerahasiaan skema sistem, kepemilikan mutlak source code tanpa vendor lock-in, dan komitmen penandatanganan Non-Disclosure Agreement (NDA) resmi.
              </p>
            </div>

            {/* Key Metadata Bar (4 Kolom Siku 90° Blueprint) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-dashed border-white/15">
              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Standar Regulasi
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white block mt-1">
                  Etika &amp; Kepatuhan Data
                </span>
              </div>

              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Fasilitas NDA
                </span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-400 block mt-1">
                  Tersedia untuk Korporat / Startup
                </span>
              </div>

              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Source Code
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white block mt-1">
                  100% Hak Milik Klien
                </span>
              </div>

              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Status Dokumen
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#07DFFF] block mt-1">
                  Versi 2.4 • {lastUpdated}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BAGIAN 2: Main Policy Table Grid (bg-white text-[#000519])
          Tabel Siku 90° bergaris putus-putus identik dengan Halaman Layanan
      ════════════════════════════════════════════════════════════════ */}
      <section className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] relative bg-white border-b border-dashed border-neutral-300">
        <div className="max-w-[84rem] mx-auto w-full border-x border-dashed border-neutral-300 bg-white rounded-none shadow-none">
          
          {/* Spacer Row Awal Konten */}
          <div
            className="w-full border-b border-dashed border-neutral-300 h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

          {/* Section Divider Bar */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-neutral-300 bg-[#fafafa]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#007FA1] block">
                KLAUSUL &amp; KEBIJAKAN UTAMA
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#000519] tracking-tight">
                6 Pilar Keamanan, Kerahasiaan &amp; Etika Kerja Sama Digital
              </h2>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-neutral-300 text-[#52525b] w-fit shadow-xs">
              {privacyPillars.length} Klausul Perlindungan
            </span>
          </div>

          {/* ── Policy Grid (1 Kolom Baris ke Bawah dengan Garis Putus-Putus Rapi Presisi) ── */}
          <div className="divide-y divide-dashed divide-neutral-300 border-b border-dashed border-neutral-300">
            {privacyPillars.map((item, index) => {
              const IconComponent = item.icon;
              const isEvenRow = index % 2 === 1;

              return (
                <div
                  key={item.number}
                  className={`p-7 sm:p-9 lg:p-12 ${
                    isEvenRow ? "bg-[#fafafa]/40" : "bg-white"
                  } hover:bg-[#fafafa]/80 transition-colors`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    {/* Header Kolom Kiri: Badge, Kategori, Icon & Judul */}
                    <div className="lg:col-span-4 space-y-3 lg:border-r lg:border-dashed lg:border-neutral-200 lg:pr-8">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[#007FA1] px-2.5 py-1 rounded-md bg-[#007FA1]/10 border border-[#007FA1]/20">
                            {item.number}
                          </span>
                          <span className="text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-[#007FA1]/10 border border-[#007FA1]/20 flex items-center justify-center text-[#007FA1] shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold text-[#000519] leading-snug tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Konten Kolom Kanan: Ulasan Klausul & Checklist Komitmen Teknis */}
                    <div className="lg:col-span-8 space-y-4">
                      <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed font-normal">
                        {item.description}
                      </p>

                      <div className="pt-3 border-t border-dashed border-neutral-200 space-y-2">
                        <span className="text-[10px] font-semibold text-[#71717a] uppercase tracking-wider block">
                          Jaminan &amp; Komitmen Teknis:
                        </span>
                        <ul className="space-y-2">
                          {item.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334155] leading-relaxed"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Call to Action Bar (Siku 90° Presisi Sesuai Halaman Utama) ── */}
          <div className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-neutral-300 bg-[#f8fafc] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-[#007FA1]/10 text-[#007FA1] border border-[#007FA1]/20 w-fit">
                <FileText className="w-3.5 h-3.5 text-[#007FA1]" />
                <span>Kesepakatan Kerja Sama Resmi</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#000519] tracking-tight leading-snug">
                Siap memulai proyek dengan rasa aman, legalitas jelas &amp; transparansi penuh?
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-[#007FA1] hover:bg-[#006b88] text-white text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors shadow-xs group/btn cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
              <Link
                href="/#contact"
                className="px-5 py-3 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-100 text-[#000519] text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors shadow-xs cursor-pointer"
              >
                <span>Formulir Kontak Proyek</span>
              </Link>
            </div>
          </div>

          {/* Spacer Row Akhir (Breathing Room) */}
          <div
            className="w-full h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

        </div>
      </section>
    </main>
  );
}
