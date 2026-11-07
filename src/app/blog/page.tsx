"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Search,
  Clock,
  ArrowUpRight,
  Eye,
  Calendar,
  X,
  MessageCircle,
} from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogData";

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blog posts based on search query and category
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
    <div className="w-full min-h-screen bg-[#000519] text-white pt-28 pb-20 sm:pt-36 sm:pb-28 px-6 sm:px-10 lg:px-16 xl:px-24 relative overflow-hidden">
      {/* ── Soft Atmospheric Ambient (wpu.id style) ── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none -z-0 opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 70, 95, 0.65) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[84rem] mx-auto w-full relative z-10 space-y-16 sm:space-y-20">
        
        {/* ── 1. Page Header (wpu.id style) ── */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="section-badge section-badge-dark inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#07DFFF]" />
            <span>Software Engineering &amp; Knowledge Base</span>
          </div>

          <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[3.8rem] font-semibold text-white leading-[1.08] tracking-[-0.03em]">
            Catatan arsitektur,{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#07DFFF]">
              tips coding &amp; pengalaman.
            </span>
          </h1>

          <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Artikel mendalam tentang pemilihan tech stack modern, clean code, studi kasus performa web, serta catatan praktis dari pengalaman me-review 258+ kode developer.
          </p>
        </div>

        {/* ── 2. Real-time Search Bar & Category Filter Bar ── */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#71717a] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari artikel (mis: Next.js, React, Clean Code)..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#020c24] border border-white/[0.08] text-white placeholder-[#71717a] text-xs sm:text-sm focus:outline-none focus:border-[#007FA1] transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-[#71717a] hover:text-white transition-colors cursor-pointer"
                title="Hapus pencarian"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {blogCategories.map((cat) => {
              const count = getCategoryCount(cat.key);
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  type="button"
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-[#007FA1] text-white shadow-sm"
                      : "bg-[#020c24] border border-white/[0.08] text-[#a1a1aa] hover:text-white hover:border-white/[0.2]"
                  }`}
                >
                  <span>{cat.labelId}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] ${
                      isSelected ? "bg-white/20 text-white font-semibold" : "bg-white/[0.06] text-[#71717a]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 3. Blog Posts Grid ── */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl bg-[#020c24] border border-white/[0.08] hover:border-[#007FA1] transition-all duration-300 flex flex-col overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.5)] group"
              >
                {/* Article Cover Image */}
                <Link href={`/blog/${post.slug}`} className="relative w-full h-52 sm:h-60 overflow-hidden block bg-[#000519] border-b border-white/[0.08]">
                  <Image
                    src={post.coverImage}
                    alt={post.titleId}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Category pill on top left */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md text-[10px] font-semibold bg-black/70 text-[#07DFFF] border border-[#007FA1]/50 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Reading time on top right */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] bg-black/70 text-[#a1a1aa] border border-white/[0.1] backdrop-blur-md">
                    <Clock className="w-3 h-3 text-[#07DFFF]" />
                    <span>
                      {post.readTimeMinutes} Menit Baca
                    </span>
                  </div>
                </Link>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    {/* Meta bar: Date & Views */}
                    <div className="flex items-center gap-3 text-xs text-[#71717a]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#07DFFF]" />
                        <span>{post.publishedAt}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#71717a]" />
                        <span>{post.viewsCount.toLocaleString()} views</span>
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#07DFFF] transition-colors tracking-tight leading-snug line-clamp-2">
                        {post.titleId}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                      {post.excerptId}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] bg-white/[0.04] text-[#71717a] border border-white/[0.06]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer: Author & Read CTA */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-[#1a1a1a] border border-white/[0.1]">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white">{post.author.name}</span>
                        <span className="text-[10px] text-[#71717a]">Reviewer Dicoding</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#07DFFF] group-hover:text-[#07DFFF] transition-colors"
                    >
                      <span>Baca Artikel</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 space-y-4 max-w-md mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-[#020c24] border border-white/[0.08] flex items-center justify-center mx-auto text-[#71717a]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Artikel Tidak Ditemukan
            </h3>
            <p className="text-xs text-[#a1a1aa] leading-relaxed">
              Tidak ada artikel yang cocok dengan kata kunci &quot;{searchQuery}&quot;. Coba gunakan kata kunci lain atau reset filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-5 py-2 rounded-lg text-xs font-semibold bg-[#007FA1] text-white hover:bg-[#00A2C9] transition-colors cursor-pointer"
            >
              Reset Semua Filter
            </button>
          </div>
        )}

        {/* ── 4. Bottom Consultation Banner (wpu.id style) ── */}
        <div className="rounded-2xl p-8 sm:p-12 border border-white/[0.1] bg-[#020c24] text-center space-y-6 relative overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.6)]">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Punya Pertanyaan Seputar Arsitektur atau Rencana Aplikasi Anda?
            </h3>
            <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed font-normal">
              Saya terbuka untuk berdiskusi santai mengenai tantangan teknis, audit kode, atau estimasi pengerjaan proyek software Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="https://wa.me/6283111030309?text=Halo%20Mas%20Julhan,%20saya%20membaca%20blog%20Anda%20dan%20ingin%20berdiskusi%20teknis."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-semibold bg-[#007FA1] hover:bg-[#00A2C9] text-white transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Tanya Langsung via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-white/[0.05] border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Lihat Hasil Karya Nyata</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
