"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Search,
  ArrowUpRight,
  Eye,
  Calendar,
  X,
  MessageCircle,
  FolderGit2,
} from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogData";

export default function ArticleListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter article posts based on search query and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const categoryMatch =
        selectedCategory === "All" || post.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return categoryMatch;

      const title = post.titleId.toLowerCase();
      const excerpt = post.excerptId.toLowerCase();
      const tagMatch = post.tags.some((tag) => tag.toLowerCase().includes(query));

      const searchMatch =
        title.includes(query) ||
        excerpt.includes(query) ||
        tagMatch;

      return categoryMatch && searchMatch;
    });
  }, [searchQuery, selectedCategory]);

  // Count per category
  const getCategoryCount = (catKey: string) => {
    if (catKey === "All") return blogPosts.length;
    return blogPosts.filter((p) => p.category === catKey).length;
  };

  return (
    <div className="w-full min-h-screen bg-white text-[#000519]">
      
      {/* ════════════════════════════════════════════════════════════════
          SECTION 1: DARK BLUEPRINT HERO HEADER (Siku 90° Dark wpu.id)
          Latar Gelap #000519, Garis Putus-Putus Putih, Aksen Cyan #07DFFF
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="pt-24 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-white relative bg-[#000519] border-b border-dashed border-white/15 overflow-hidden"
      >
        {/* Soft Atmospheric Glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none -z-0 opacity-15 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(0, 70, 95, 0.65) 0%, transparent 70%)",
          }}
        />

        {/* Unified Table Container */}
        <div className="max-w-[84rem] mx-auto w-full border border-dashed border-white/15 bg-[#000519] rounded-none shadow-none relative z-10">
          
          {/* Spacer Row Awal Header */}
          <div
            className="w-full border-b border-dashed border-white/15 h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

          {/* Header Content */}
          <div className="p-8 sm:p-10 lg:p-14 xl:p-16 border-b border-dashed border-white/15 space-y-6">
            <div className="space-y-4 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/20 text-[#07DFFF] border border-[#007FA1]/40 w-fit">
                <BookOpen className="w-3.5 h-3.5 text-[#07DFFF]" />
                <span>Basis Pengetahuan &amp; Artikel Rekayasa Software</span>
              </div>

              <h1 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem] font-semibold text-white leading-[1.08] tracking-[-0.03em] w-full">
                Catatan arsitektur,{" "}
                <br />
                <span className="text-[#07DFFF]">
                  tips coding &amp; studi kasus praktis.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal w-full max-w-none">
                Kumpulan artikel teknis mendalam tentang pemilihan tech stack modern, clean code, performa sistem web berskala besar, serta intisari dari pengalaman me-review 258+ submission pemrograman developer.
              </p>
            </div>

            {/* Metric / Key Commitments Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-dashed border-white/15">
              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Total Publikasi
                </span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  {blogPosts.length} Artikel Spesialisasi
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Fokus Materi
                </span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  Next.js, Flutter, Clean Code
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Rekam Jejak Review
                </span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  258+ Submission Kode
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Akses Baca
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#07DFFF]">
                  100% Terbuka &amp; Praktis
                </span>
              </div>
            </div>
          </div>

          {/* Spacer Row Akhir Header */}
          <div
            className="w-full h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 2: WHITE ARTICLE CATALOG (Siku 90° White Grid wpu.id)
          Latar Putih Bersih, Garis Putus-Putus Abu, Aksen Cyan #007FA1
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="articles"
        className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] relative bg-white border-b border-dashed border-neutral-300"
      >
        <div className="max-w-[84rem] mx-auto w-full border border-dashed border-neutral-300 bg-white rounded-none shadow-none">
          
          {/* Spacer Row Awal Katalog */}
          <div
            className="w-full border-b border-dashed border-neutral-300 h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

          {/* ── Toolbar: Search & Category Filter Bar (Siku 90° Presisi) ── */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-neutral-300 bg-[#fafafa]/60 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5">
            {/* Search Input Box */}
            <div className="relative w-full lg:w-[360px] shrink-0">
              <Search className="w-4 h-4 text-[#71717a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari artikel (mis: Next.js, Clean Code)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-lg bg-white border border-neutral-300 text-xs sm:text-sm text-[#000519] placeholder-[#71717a] focus:outline-none focus:border-[#007FA1] focus:ring-2 focus:ring-[#007FA1]/10 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-[#71717a] hover:text-[#000519] transition-colors cursor-pointer"
                  title="Hapus pencarian"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              {blogCategories.map((cat) => {
                const count = getCategoryCount(cat.key);
                const isSelected = selectedCategory === cat.key;
                return (
                  <button
                    type="button"
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? "bg-[#007FA1] text-white shadow-xs"
                        : "bg-white border border-neutral-200/90 text-[#52525b] hover:text-[#000519] hover:border-neutral-400 shadow-xs"
                    }`}
                  >
                    <span>{cat.labelId}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded text-[10px] ${
                        isSelected ? "bg-white/20 text-white font-semibold" : "bg-neutral-100 text-[#71717a]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Articles Grid Table (Tabel 3 Kolom Siku 90° wpu.id) ── */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-dashed border-neutral-300">
              {filteredPosts.map((post, idx) => {
                const isLastColLg = (idx + 1) % 3 === 0;
                const isLastColMd = (idx + 1) % 2 === 0;
                const isBottomRowLg = idx >= Math.floor((filteredPosts.length - 1) / 3) * 3;
                const isBottomRowMd = idx >= Math.floor((filteredPosts.length - 1) / 2) * 2;
                const isLastItem = idx === filteredPosts.length - 1;

                return (
                  <article
                    key={post.id}
                    className={`p-6 sm:p-7 lg:p-8 flex flex-col justify-between space-y-6 bg-white hover:bg-[#fafafa]/80 transition-colors group border-b border-dashed border-neutral-300 ${
                      isLastItem ? "border-b-0" : ""
                    } ${
                      isLastColLg ? "lg:border-r-0" : "lg:border-r border-dashed border-neutral-300"
                    } ${
                      isLastColMd ? "md:border-r-0" : "md:border-r border-dashed border-neutral-300"
                    } ${
                      isBottomRowLg ? "lg:border-b-0" : ""
                    } ${
                      isBottomRowMd ? "md:border-b-0" : ""
                    }`}
                  >
                    <div className="space-y-5">
                      {/* Cover Image Frame with Category Badge */}
                      <Link
                        href={`/artikel/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative aspect-[16/10] w-full bg-neutral-100 rounded-xl overflow-hidden border border-black/[0.06] shadow-sm block group/img"
                      >
                        <Image
                          src={post.coverImage}
                          alt={post.titleId}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Category badge overlay on top-left */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-semibold backdrop-blur-md border shadow-sm bg-white/95 border-[#007FA1]/30 text-[#007FA1]">
                            {post.category}
                          </span>
                        </div>
                      </Link>

                      {/* Details & Excerpt */}
                      <div className="space-y-3">
                        {/* Meta: Date & Views */}
                        <div className="flex items-center gap-3 text-xs text-[#71717a]">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#007FA1]" />
                            <span>{post.publishedAt}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <Eye className="w-3.5 h-3.5 text-[#71717a]" />
                            <span>{post.viewsCount.toLocaleString("id-ID")} pembaca</span>
                          </span>
                        </div>

                        {/* Title */}
                        <Link
                          href={`/artikel/${post.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <h2 className="text-lg sm:text-xl font-semibold text-[#000519] group-hover:text-[#007FA1] transition-colors leading-snug tracking-tight line-clamp-2">
                            {post.titleId}
                          </h2>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed line-clamp-3 font-normal">
                          {post.excerptId}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#000519]/5 text-[#52525b] border border-black/[0.04]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Card Area: Author Signature & Read Icon Button */}
                    <div className="pt-5 border-t border-dashed border-neutral-200 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-100 border border-black/[0.08] shrink-0">
                          <Image
                            src="/julhan-foto-profile.jpg"
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-[#000519]">
                            {post.author.name}
                          </span>
                          <span className="text-[10px] text-[#71717a]">
                            Software Engineer
                          </span>
                        </div>
                      </div>

                      <Link
                        href={`/artikel/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-lg bg-neutral-100 group-hover:bg-[#007FA1] text-[#000519] group-hover:text-white transition-all shadow-xs shrink-0 flex items-center justify-center cursor-pointer"
                        title="Baca Artikel Lengkap (Buka di Tab Baru)"
                      >
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </article>
                );
              })}

              {/* Blueprint Empty Grid Cells saat artikel masih 1 untuk menjaga simetri 3 kolom */}
              {filteredPosts.length === 1 && (
                <>
                  <div className="hidden md:flex flex-col items-center justify-center p-8 text-center bg-[#fafafa]/30 border-r border-dashed border-neutral-300 min-h-[380px] space-y-2.5">
                    <span className="text-[11px] font-semibold text-[#a1a1aa] uppercase tracking-wider">
                      Segera Hadir
                    </span>
                    <p className="text-xs text-[#a1a1aa] max-w-[220px] leading-relaxed">
                      Artikel teknis dan dokumentasi arsitektur sistem berikutnya sedang disusun.
                    </p>
                  </div>
                  <div className="hidden lg:flex flex-col items-center justify-center p-8 text-center bg-[#fafafa]/30 min-h-[380px] space-y-2.5">
                    <span className="text-[11px] font-semibold text-[#a1a1aa] uppercase tracking-wider">
                      Segera Hadir
                    </span>
                    <p className="text-xs text-[#a1a1aa] max-w-[220px] leading-relaxed">
                      Eksplorasi kode, best practices, dan studi kasus proyek produksi.
                    </p>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* Empty Search State */
            <div className="text-center py-20 px-6 space-y-4 max-w-md mx-auto border-b border-dashed border-neutral-300">
              <div className="w-14 h-14 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mx-auto text-[#71717a]">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#000519] tracking-tight">
                Artikel Tidak Ditemukan
              </h3>
              <p className="text-xs text-[#52525b] leading-relaxed">
                Tidak ada artikel yang cocok dengan kata kunci &quot;{searchQuery}&quot;. Coba gunakan kata kunci lain atau reset filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#007FA1] text-white hover:bg-[#006b88] transition-colors cursor-pointer shadow-sm"
              >
                Reset Semua Filter
              </button>
            </div>
          )}

          {/* ── Row 3: Bottom Consultation Callout Bar (wpu.id style) ── */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-neutral-300 bg-[#fafafa]/50 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#007FA1] block">
                DISKUSI &amp; KOLABORASI TEKNIS
              </span>
              <p className="text-xs sm:text-sm text-[#000519] font-medium">
                Punya pertanyaan teknis seputar arsitektur sistem, audit kode, atau rencana aplikasi digital Anda?
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                  "Halo Mas Julhan, saya baru membaca artikel di website Anda dan ingin berdiskusi teknis."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#007FA1] hover:bg-[#006b88] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm group"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Diskusi via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                href="/#portfolio"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-neutral-100 border border-neutral-300 text-xs sm:text-sm font-semibold text-[#000519] transition-all shadow-xs group"
              >
                <FolderGit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#71717a]" />
                <span>Lihat Portfolio</span>
              </Link>
            </div>
          </div>

          {/* Spacer Row Akhir Katalog */}
          <div
            className="w-full h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

        </div>
      </section>

    </div>
  );
}
