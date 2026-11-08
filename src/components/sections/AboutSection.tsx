"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { socialLinks } from "@/data/navigation";
import { LinkedinIcon, GithubIcon } from "@/components/ui/Icons";

export function AboutSection() {
  return (
    <section
      id="about"
      className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] relative bg-white border-b border-dashed border-neutral-300"
    >
      {/* ── Main Unified Architectural Grid Table (Kotak Siku 90° + Garis Strip Putus-Putus / wpu.id 1:1) ── */}
      <div className="max-w-[84rem] mx-auto w-full border border-dashed border-neutral-300 bg-white rounded-none shadow-none">
        
        {/* ════════════════════════════════════════════════════════════════
            ROW 0: Top Spacer Row (Baris Margin Kosong di Awal Section 2)
            Memberikan ruang napas (breathing room) di awal section tanpa garis tengah
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="w-full border-b border-dashed border-neutral-300 h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

        {/* ════════════════════════════════════════════════════════════════
            ROW 1: Header Row (Tentang Saya: Judul + Deskripsi di Kiri, Foto & Nama di Kanan)
            Kolom Kiri: lg:col-span-8 (Lebar sebaris dengan 2 kolom di bawah)
            Kolom Kanan: lg:col-span-4 (Lebar presisi sejajar dengan garis kolom kanan bawah)
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-dashed border-neutral-300 lg:min-h-[410px] xl:min-h-[440px]">
          {/* Sisi Kiri (lg: 8 cols): Badge + Judul Besar di Atas, Deskripsi di Bawah */}
          <div className="lg:col-span-8 p-8 sm:p-10 lg:p-12 xl:p-14 lg:border-r border-dashed border-neutral-300 flex flex-col justify-center space-y-5 sm:space-y-6">
            <div className="space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/10 text-[#007FA1] border border-[#007FA1]/25 w-fit">
                <User className="w-3.5 h-3.5 text-[#007FA1]" />
                <span>About Me</span>
              </div>

              <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem] xl:text-[3.5rem] font-semibold text-[#000519] leading-[1.12] tracking-[-0.03em]">
                Membangun solusi digital{" "}
                <br className="hidden sm:inline" />
                <span className="text-[#007FA1]">
                  untuk bisnis nyata.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#52525b] leading-relaxed font-normal max-w-2xl">
              Julhan Abdul Malik adalah seorang Software Engineer berbasis di Sukabumi, Jawa Barat. Bersama tim software engineer, kami mendevelop sistem web scalable dan aplikasi mobile cross-platform (Next.js &amp; Flutter) dengan arsitektur clean code, optimasi database, serta infrastruktur cloud modern untuk menghadirkan solusi digital yang high-performance, aman, dan siap mendukung pertumbuhan bisnis maupun instansi nyata.
            </p>
          </div>

          {/* Sisi Kanan (lg: 4 cols): Foto dan Nama (Margin Dipertebal Sesuai Revisi) */}
          <div className="lg:col-span-4 p-7 sm:p-8 lg:p-10 xl:p-11 flex flex-col justify-between bg-[#fafafa]/50 border-t lg:border-t-0 border-dashed border-neutral-300">
            <div className="w-full h-full flex flex-col justify-between space-y-4">
              {/* Photo Box: Mengisi ruang kotak secara presisi dan proporsional dengan margin lebih tebal */}
              <div className="w-full flex-1 min-h-[250px] sm:min-h-[270px] lg:min-h-[290px] xl:min-h-[300px] rounded-xl overflow-hidden bg-neutral-100 relative shadow-sm border border-black/[0.08] group">
                <Image
                  src="/julhan-foto-profile.jpg"
                  alt="Julhan Abdul Malik"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                  className="object-cover object-top scale-105 origin-top transition-transform duration-500 ease-out"
                />
              </div>

              {/* Bottom Info: Nama & Role di Kiri, Social Icons di Kanan */}
              <div className="w-full flex items-center justify-between shrink-0 pt-1">
                <div>
                  <h3 className="text-sm sm:text-[15px] font-semibold text-[#000519] leading-tight">
                    Julhan Abdul Malik
                  </h3>
                  <p className="text-xs text-[#71717a] mt-0.5 font-normal">
                    Software Engineer
                  </p>
                </div>

                {/* Social Icons (Persis Screenshot wpu.id) */}
                <div className="flex items-center gap-1.5 text-[#71717a]">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Julhan Abdul Malik"
                    className="p-1.5 rounded-lg border border-black/10 hover:border-black/30 hover:bg-black/5 text-[#71717a] hover:text-[#000519] transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Julhan Abdul Malik"
                    className="p-1.5 rounded-lg border border-black/10 hover:border-black/30 hover:bg-black/5 text-[#71717a] hover:text-[#000519] transition-all"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 2 & 3: Story, Proof, Badges & CTA Box
            Sistem Grid Murni (True CSS Grid):
            - Col 1 (Kiri): Quote + Profile (row-span-2, tanda kutip besar di background font Plus Jakarta Sans)
            - Baris Atas: Cerita Journey (Col 2) & Kredensial (Col 3) - DIBUAT LEBIH TINGGI/BESAR
            - Baris Bawah: Tech Badges (Col 2) & Dark CTA Box (Col 3) - DIBUAT LEBIH PENDEK/RAMPING
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-dashed border-neutral-300">
          
          {/* Column 1: Quote Block (Full Height, spans 2 rows on lg) */}
          <div className="lg:col-span-4 lg:row-span-2 p-8 sm:p-10 lg:p-12 pt-10 sm:pt-12 lg:pt-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-dashed border-neutral-300 bg-[#fafafa]/50 relative overflow-hidden">
            {/* Tanda Kutip Besar di Belakang (Font Plus Jakarta Sans, Opacity Rendah, Berjarak Aman dari Batas Atas) */}
            <span
              aria-hidden="true"
              className="absolute top-6 sm:top-8 left-6 sm:left-8 text-8xl sm:text-9xl font-bold font-sans text-[#007FA1] opacity-10 select-none pointer-events-none leading-none"
            >
              “
            </span>

            {/* Konten Kutipan & Nama Penulis (Menyatu Rapi Tanpa Jarak Terlalu Jauh) */}
            <div className="relative z-10 space-y-4">
              <p className="text-sm sm:text-[15px] font-medium text-[#18181b] leading-relaxed italic">
                Saya percaya solusi digital terbaik bukan sekadar baris kode, melainkan sistem yang mempermudah operasional dan menghasilkan pertumbuhan nyata bagi bisnis Anda.
              </p>

              {/* Nama Penulis Bergaya Italic (Tanpa Foto & Tanpa Status) */}
              <p className="text-sm font-semibold text-[#18181b] italic pt-1">
                — Julhan Abdul Malik
              </p>
            </div>
          </div>

          {/* Row A - Col 2: Journey Story (Top Middle) - DIBUAT LEBIH TINGGI */}
          <div className="lg:col-span-4 p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex items-center border-b border-dashed border-neutral-300 lg:border-r">
            <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
              Bersama tim software engineer, kami telah menangani berbagai proyek mulai dari kebutuhan digitalisasi UMKM hingga sistem instansi yang mengelola puluhan ribu data aktif secara stabil.
            </p>
          </div>

          {/* Row A - Col 3: Credentials Story (Top Right) - DIBUAT LEBIH TINGGI */}
          <div className="lg:col-span-4 p-8 sm:p-10 lg:p-12 min-h-[190px] sm:min-h-[220px] flex items-center border-b border-dashed border-neutral-300">
            <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
              Berpengalaman sebagai Academy Code Reviewer di Dicoding Indonesia dan bersertifikasi BNSP, memastikan setiap deliverable memiliki standar keamanan, maintainability, serta performa tinggi.
            </p>
          </div>

          {/* Row B - Col 2: Tech Badges Strip (Bottom Middle) - DIBUAT PENDEK / RAMPING */}
          <div className="lg:col-span-4 py-3.5 px-3 sm:py-4 sm:px-4 lg:px-2 xl:px-4 min-h-[72px] sm:min-h-[78px] bg-[#fafafa]/40 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-dashed border-neutral-300">
            <div className="flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2 lg:gap-1.5 xl:gap-2">
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#000519]/5 text-[10px] sm:text-[11px] font-medium text-[#18181b] border border-black/[0.04] whitespace-nowrap">Next.js 15</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#000519]/5 text-[10px] sm:text-[11px] font-medium text-[#18181b] border border-black/[0.04] whitespace-nowrap">TypeScript</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#000519]/5 text-[10px] sm:text-[11px] font-medium text-[#18181b] border border-black/[0.04] whitespace-nowrap">Flutter</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#000519]/5 text-[10px] sm:text-[11px] font-medium text-[#18181b] border border-black/[0.04] whitespace-nowrap">PostgreSQL</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#000519]/5 text-[10px] sm:text-[11px] font-medium text-[#18181b] border border-black/[0.04] whitespace-nowrap">Prisma ORM</span>
            </div>
          </div>

          {/* Row B - Col 3: Solid Dark CTA Box (Bottom Right) - DIBUAT PENDEK / RAMPING */}
          <Link
            href="/#portfolio"
            className="lg:col-span-4 py-3.5 px-6 sm:py-4 sm:px-8 min-h-[72px] sm:min-h-[78px] bg-[#000519] hover:bg-[#020c24] text-white flex items-center justify-between gap-4 transition-all duration-200 group cursor-pointer"
          >
            <div className="space-y-0.5">
              <span className="text-[10px] text-[#a1a1aa] block uppercase tracking-wider">
                Explore Works
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-white group-hover:text-[#07DFFF] transition-colors line-clamp-1">
                Lihat Portfolio & Studi Kasus
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-white shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>

        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 4: 4-Column Big Stats Metric Strip (wpu.id signature)
            Dipisahkan rapi dengan garis vertikal strip putus-putus
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-neutral-300 border-b border-dashed border-neutral-300">
          {/* Metric 1 */}
          <div className="p-8 sm:p-10 text-left space-y-2">
            <span className="text-[11px] tracking-widest uppercase text-[#71717a] block font-semibold">
              YEARS OF EXPERIENCE
            </span>
            <div className="text-4xl sm:text-5xl font-bold text-[#007FA1] tracking-tight">
              3+
            </div>
            <p className="text-xs text-[#52525b] leading-relaxed font-normal">
              Membangun sistem web modern & aplikasi mobile siap pakai.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-8 sm:p-10 text-left space-y-2">
            <span className="text-[11px] tracking-widest uppercase text-[#71717a] block font-semibold">
              CODE REVIEWS COMPLETED
            </span>
            <div className="text-4xl sm:text-5xl font-bold text-[#007FA1] tracking-tight">
              258+
            </div>
            <p className="text-xs text-[#52525b] leading-relaxed font-normal">
              Submission code reviewer di Dicoding Indonesia.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-8 sm:p-10 text-left space-y-2">
            <span className="text-[11px] tracking-widest uppercase text-[#71717a] block font-semibold">
              CLIENT SATISFACTION
            </span>
            <div className="text-4xl sm:text-5xl font-bold text-[#007FA1] tracking-tight">
              100%
            </div>
            <p className="text-xs text-[#52525b] leading-relaxed font-normal">
              Kepuasan klien & sistem stabil berjalan di live production.
            </p>
          </div>

          {/* Metric 4 */}
          <div className="p-8 sm:p-10 text-left space-y-2">
            <span className="text-[11px] tracking-widest uppercase text-[#71717a] block font-semibold">
              CAMPUS RECORDS MANAGED
            </span>
            <div className="text-4xl sm:text-5xl font-bold text-[#007FA1] tracking-tight">
              25K+
            </div>
            <p className="text-xs text-[#52525b] leading-relaxed font-normal">
              Baris data aktif dikelola pada sistem portal kampus.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 5: Standar Profesional Header (Satu Blok Utuh: Judul di Atas, Deskripsi di Bawah)
        ════════════════════════════════════════════════════════════════ */}
        <div className="p-8 sm:p-10 lg:p-12 border-b border-dashed border-neutral-300 flex flex-col justify-center space-y-4 sm:space-y-5">
          {/* Bagian Atas: Badge + Judul */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/10 text-[#007FA1] border border-[#007FA1]/25 w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-[#007FA1]" />
              <span>Professional Standards</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#000519] tracking-tight">
              Prinsip kerja yang{" "}
              <span className="text-[#007FA1]">kami pegang.</span>
            </h3>
          </div>

          {/* Bagian Bawah: Deskripsi */}
          <p className="text-sm sm:text-base text-[#52525b] leading-relaxed font-normal">
            Komitmen kami bersama tim untuk memastikan setiap aplikasi yang dibangun bekerja dengan baik, aman, dan mudah dirawat dalam jangka panjang.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 6: 3 Principles Columns (01, 02, 03)
            3 Kolom Prinsip dengan Garis Strip Putus-Putus
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-neutral-300">
          {/* Principle 01 */}
          <div className="p-8 sm:p-10 space-y-3 bg-white hover:bg-[#fafafa]/60 transition-colors">
            <span className="text-2xl sm:text-3xl font-semibold text-[#d4d4d4] block">
              01
            </span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#007FA1]" />
              <h4 className="text-base sm:text-lg font-semibold text-[#000519]">
                Arsitektur Bersih & Teruji
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
              Struktur kode modular, type-safe dengan TypeScript, dan terstandarisasi. Memudahkan pengembangan fitur baru di masa depan tanpa merombak sistem dari nol.
            </p>
          </div>

          {/* Principle 02 */}
          <div className="p-8 sm:p-10 space-y-3 bg-white hover:bg-[#fafafa]/60 transition-colors">
            <span className="text-2xl sm:text-3xl font-semibold text-[#d4d4d4] block">
              02
            </span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#007FA1]" />
              <h4 className="text-base sm:text-lg font-semibold text-[#000519]">
                Transparan & Tepat Waktu
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
              Estimasi timeline realistis dengan update progres rutin. Seluruh hak cipta kode sumber dan akses cloud diserahkan 100% tanpa biaya tersembunyi.
            </p>
          </div>

          {/* Principle 03 */}
          <div className="p-8 sm:p-10 space-y-3 bg-white hover:bg-[#fafafa]/60 transition-colors">
            <span className="text-2xl sm:text-3xl font-semibold text-[#d4d4d4] block">
              03
            </span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#007FA1]" />
              <h4 className="text-base sm:text-lg font-semibold text-[#000519]">
                Berorientasi Nilai Bisnis
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
              Teknologi adalah alat, pertumbuhan bisnis Anda adalah tujuannya. Setiap antarmuka dirancang untuk konversi, dan backend dioptimalkan untuk efisiensi operasional.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 7: Bottom Spacer Row (Baris Margin Kosong di Akhir Section 2)
            Memberikan ruang napas (breathing room) di akhir section tanpa garis tengah
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="w-full border-t border-dashed border-neutral-300 h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

      </div>
    </section>
  );
}
