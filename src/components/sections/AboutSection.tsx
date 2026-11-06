"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-light py-20 sm:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] border-t border-b border-black/[0.08] relative"
    >
      <div className="section-inner space-y-16 sm:space-y-20">
        
        {/* ── PART 1: Top Header Row (wpu.id headline + right summary) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-black/[0.08]">
          <div className="space-y-4 max-w-2xl">
            {/* Section Badge */}
            <div className="section-badge section-badge-light">
              <User className="w-3.5 h-3.5 text-[#007FA1]" />
              <span>Tentang Saya</span>
            </div>

            {/* Big Editorial Heading */}
            <h2 className="text-[1.85rem] sm:text-[3.2rem] lg:text-[3.8rem] font-semibold text-[#000519] leading-[1.08] tracking-[-0.03em]">
              Membangun solusi digital{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#007FA1]">
                untuk bisnis nyata.
              </span>
            </h2>
          </div>

          {/* Right Summary Column */}
          <p className="max-w-md text-sm sm:text-base text-[#52525b] leading-relaxed lg:pb-2 font-normal">
            Julhan Abdul Malik adalah Web & Mobile App Developer profesional berbasis di Sukabumi, Jawa Barat. Berfokus menghadirkan sistem web scalable dan aplikasi mobile Flutter dengan arsitektur kode bersih dan performa tinggi.
          </p>
        </div>

        {/* ── PART 2: 3-Column Story & Proof Box with Grid Border Lines (wpu.id style) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-black/[0.08] rounded-2xl overflow-hidden bg-white shadow-sm">
          
          {/* Col 1: Quote + Founder Profile (4 cols on lg) */}
          <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black/[0.08] bg-[#fafafa]/60">
            <div>
              {/* Quote Mark */}
              <span className="text-4xl sm:text-5xl font-serif text-[#007FA1] leading-none block mb-3 select-none">
                &ldquo;
              </span>
              <p className="text-sm sm:text-[15px] font-medium text-[#18181b] leading-relaxed italic">
                Saya percaya solusi digital terbaik bukan sekadar baris kode, melainkan sistem yang mempermudah operasional dan menghasilkan pertumbuhan nyata bagi bisnis Anda.
              </p>
            </div>

            {/* Profile Avatar Card */}
            <div className="flex items-center gap-3.5 pt-8 mt-6 border-t border-black/[0.06]">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-[#007FA1]/10 border border-[#007FA1]/25 relative shrink-0">
                <Image
                  src="/images/profile/avatar-dummy.svg"
                  alt="Julhan Abdul Malik"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#000519] leading-tight">
                  Julhan Abdul Malik
                </h4>
                <p className="text-xs text-[#71717a]">
                  Freelance Web & Mobile Developer
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: Journey & Credentials (4 cols on lg) */}
          <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black/[0.08]">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                Dimulai dari ketertarikan mendalam pada software architecture dan clean code, saya telah menangani berbagai sistem dari level UMKM hingga portal institusi skala puluhan ribu data aktif.
              </p>
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                Berpengalaman sebagai Code Reviewer di Dicoding Indonesia dan bersertifikasi BNSP, memastikan setiap deliverable memiliki standar keamanan, maintainability, dan performa tinggi.
              </p>
            </div>

            {/* Tech Badges Row */}
            <div className="pt-6 mt-6 border-t border-black/[0.06]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717a] block mb-2 font-semibold">
                TECH STACK & CREDENTIALS
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#000519]/5 text-[11px] font-medium text-[#18181b]">Next.js 15</span>
                <span className="px-2.5 py-1 rounded-md bg-[#000519]/5 text-[11px] font-medium text-[#18181b]">React 19</span>
                <span className="px-2.5 py-1 rounded-md bg-[#000519]/5 text-[11px] font-medium text-[#18181b]">Flutter</span>
                <span className="px-2.5 py-1 rounded-md bg-[#000519]/5 text-[11px] font-medium text-[#18181b]">PostgreSQL</span>
                <span className="px-2.5 py-1 rounded-md bg-[#007FA1]/10 text-[#007FA1] font-semibold text-[11px]">BNSP Certified</span>
              </div>
            </div>
          </div>

          {/* Col 3: Standards & Direct Dark CTA Box (4 cols on lg) */}
          <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-[#fafafa]/60">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                Menerapkan prinsip Agile development: perencanaan kebutuhan yang matang, update progres transparan, testing berkala, hingga instalasi cloud server (VPS/Vercel) siap pakai.
              </p>
              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed">
                Dilengkapi garansi pemeliharaan resmi dan sesi panduan penggunaan sistem agar bisnis Anda dapat beroperasi tanpa hambatan teknis sejak hari pertama peluncuran.
              </p>
            </div>

            {/* Dark CTA Box (wpu.id signature card) */}
            <div className="pt-6 mt-6">
              <Link
                href="/portfolio"
                className="flex items-center justify-between p-4 rounded-xl bg-[#000519] hover:bg-[#020c24] text-white transition-all duration-200 group shadow-md"
              >
                <div className="space-y-0.5">
                  <span className="text-[11px] text-[#a1a1aa] block font-mono">
                    Eksplorasi Karya
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#07DFFF] transition-colors">
                    Lihat Portfolio & Studi Kasus
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── PART 3: 4-Column Big Stats Row (wpu.id signature metric strip) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-black/[0.08] rounded-2xl overflow-hidden bg-white shadow-sm divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08]">
          {/* Metric 1 */}
          <div className="p-8 text-left space-y-2">
            <span className="stat-label">YEARS OF EXPERIENCE</span>
            <div className="stat-number">3+</div>
            <p className="text-xs text-[#52525b] leading-relaxed font-normal">
              Membangun sistem web & aplikasi mobile siap pakai
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-8 text-left space-y-2">
            <span className="stat-label">CODE REVIEWS COMPLETED</span>
            <div className="stat-number">258+</div>
            <p className="text-xs text-[#52525b] leading-relaxed font-normal">
              Submission code reviewer di Dicoding Academy
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-8 text-left space-y-2">
            <span className="stat-label">CLIENT SATISFACTION</span>
            <div className="stat-number">100%</div>
            <p className="text-xs text-[#52525b] leading-relaxed font-normal">
              Kepuasan klien & sistem live production
            </p>
          </div>

          {/* Metric 4 */}
          <div className="p-8 text-left space-y-2">
            <span className="stat-label">CAMPUS RECORDS MANAGED</span>
            <div className="stat-number">25K+</div>
            <p className="text-xs text-[#52525b] leading-relaxed font-normal">
              Baris data aktif dikelola di CDU Portal kampus
            </p>
          </div>
        </div>

        {/* ── PART 4: Principles & Standards (wpu.id 3-column principles block) ── */}
        <div className="pt-6 sm:pt-10 space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <div className="section-badge section-badge-light">
              <ShieldCheck className="w-3.5 h-3.5 text-[#007FA1]" />
              <span>Standar Profesional</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#000519] tracking-tight">
              Prinsip kerja yang saya pegang.
            </h3>
            <p className="text-sm text-[#71717a] max-w-2xl font-normal">
              Komitmen profesional untuk memastikan setiap proyek yang dibangun kokoh, aman, dan dapat diskalakan jangka panjang.
            </p>
          </div>

          {/* 3 Principles Columns with Grid borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-black/[0.08] rounded-2xl overflow-hidden bg-white shadow-sm divide-y md:divide-y-0 md:divide-x divide-black/[0.08]">
            {/* Principle 01 */}
            <div className="p-8 sm:p-10 space-y-3">
              <span className="text-2xl sm:text-3xl font-semibold text-[#d4d4d4] font-mono block">01</span>
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
            <div className="p-8 sm:p-10 space-y-3">
              <span className="text-2xl sm:text-3xl font-semibold text-[#d4d4d4] font-mono block">02</span>
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
            <div className="p-8 sm:p-10 space-y-3">
              <span className="text-2xl sm:text-3xl font-semibold text-[#d4d4d4] font-mono block">03</span>
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
        </div>

      </div>
    </section>
  );
}
