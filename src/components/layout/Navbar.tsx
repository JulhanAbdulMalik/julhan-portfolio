"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { navItems, socialLinks } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isInsideHero, setIsInsideHero] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Cek apakah posisi scroll berada di Section 1 (Hero) - hanya berlaku di halaman yang memiliki hero (homepage)
      const heroEl = document.getElementById("hero");
      const isHeroActive = Boolean(heroEl && currentScrollY < (heroEl.offsetHeight - 80));
      setIsInsideHero(isHeroActive);

      // Status scrolled jika lewat dari 20px
      setScrolled(currentScrollY > 20);

      // Logika Smart Auto-Hide: Scroll ke bawah sembunyi, scroll ke atas muncul
      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        // Sedang scroll ke BAWAH -> Sembunyikan navbar
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Sedang scroll ke ATAS -> Tampilkan navbar
        setVisible(true);
      }

      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    // Panggil saat awal untuk mendeteksi posisi scroll pertama kali
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pathname]);

  // Lock body scroll when overlay is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu automatically on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Tema Gelap jika berada di Section 1 (Hero) atau saat Menu Overlay terbuka
  const isDarkCanvas = isInsideHero || menuOpen;

  return (
    <>
      {/* ── Fixed Header Bar (Liquid Glass saat di luar Section 1, Transparan Penuh di Section 1 / saat Menu Buka) ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 lg:px-16 xl:px-24 transition-all duration-300 ease-in-out ${
          visible || menuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        } ${
          menuOpen || isInsideHero
            ? "bg-transparent border-b border-transparent shadow-none py-5 sm:py-6"
            : "bg-white/60 backdrop-blur-xl backdrop-saturate-150 border-b border-black/[0.06] shadow-[0_8px_32px_0_rgba(0,0,0,0.03)] py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-[84rem] mx-auto w-full flex items-center justify-between">
          {/* Logo — Editorial Minimalist Typography */}
          <Link
            href="/"
            className={`group flex items-center gap-2 transition-colors duration-200 ${
              isInsideHero ? "text-white hover:opacity-80" : "text-[#000519] hover:text-[#007FA1]"
            }`}
          >
            <span className="text-sm sm:text-[18px] font-semibold tracking-tight">
              Julhan A Malik
            </span>
          </Link>

          {/* Minimalist 2-Line Hamburger Menu Button (wpu.id inspired) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`group flex items-center gap-3 py-2 px-3.5 sm:px-4 rounded-full border transition-all duration-200 cursor-pointer ${
              menuOpen || !isInsideHero
                ? "bg-white/60 hover:bg-white/90 border-black/10 hover:border-black/20 shadow-sm"
                : "bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] hover:border-white/20"
            }`}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu navigasi"}
          >
            <span
              className={`text-[10px] font-semibold uppercase tracking-widest transition-colors ${
                menuOpen || !isInsideHero
                  ? "text-[#000519]/80 group-hover:text-[#000519]"
                  : "text-slate-300 group-hover:text-white"
              }`}
            >
              {menuOpen ? "Tutup" : "Menu"}
            </span>

            {/* Bespoke 2-line animated icon */}
            <div className="w-5 h-4 flex flex-col justify-center items-end gap-1.5 relative">
              <span
                className={`h-[1.5px] rounded-full transition-all duration-300 ${
                  menuOpen || !isInsideHero ? "bg-[#000519]" : "bg-white"
                } ${
                  menuOpen
                    ? "w-5 rotate-45 translate-y-[4.5px]"
                    : "w-5 group-hover:w-5"
                }`}
              />
              <span
                className={`h-[1.5px] rounded-full transition-all duration-300 ${
                  menuOpen || !isInsideHero ? "bg-[#000519]" : "bg-white"
                } ${
                  menuOpen
                    ? "w-5 -rotate-45 -translate-y-[4.5px]"
                    : "w-3 group-hover:w-5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ── Half-Page Liquid Glass Side Drawer (Setengah Halaman di Kanan) ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* 1. Backdrop Gelap Transparan di Sisi Kiri (Klik untuk menutup drawer) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[2px] cursor-pointer"
              aria-label="Tutup panel menu"
            />

            {/* 2. Drawer Menu Setengah Halaman (Liquid Glass Kanan) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-full sm:w-[480px] md:w-[540px] lg:w-[38vw] xl:w-[35vw] bg-white/80 backdrop-blur-2xl backdrop-saturate-150 border-l border-white/80 shadow-[-20px_0_60px_rgba(0,0,0,0.15)] flex flex-col justify-between pt-24 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-12 overflow-y-auto"
            >
              {/* Inner Content Stack */}
              <div className="w-full my-auto py-4 space-y-8 sm:space-y-10">
                {/* Navigation Links Column */}
                <div className="flex flex-col space-y-3 sm:space-y-4">
                  <span className="text-[11px] tracking-widest uppercase text-[#71717a] block pb-1 font-semibold">
                    Navigasi Utama
                  </span>
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-baseline gap-4 sm:gap-5 py-1 transition-all duration-200"
                      >
                        <span className="text-xs sm:text-sm text-[#007FA1] font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                          0{index + 1}
                        </span>
                        <span
                          className={`text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight transition-all duration-200 ${
                            isActive
                              ? "text-[#007FA1]"
                              : "text-[#000519] group-hover:text-[#007FA1] group-hover:translate-x-2"
                          }`}
                        >
                          {item.name}
                        </span>
                        {isActive && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#007FA1]/10 text-[#007FA1] border border-[#007FA1]/20 uppercase tracking-wider font-semibold ml-2">
                            Aktif
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Project CTA & Quick Info Card (Liquid Glass aesthetic) */}
                <div className="flex flex-col space-y-4 p-5 sm:p-6 rounded-2xl bg-white/60 border border-black/[0.08] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  {/* Availability status */}
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-semibold">
                      Tersedia Untuk Proyek Baru
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#000519] tracking-tight">
                      Punya ide proyek atau sistem digital?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed mt-1 font-normal">
                      Mari diskusikan kebutuhan Anda mulai dari riset, arsitektur kode bersih, hingga live deployment.
                    </p>
                  </div>

                  {/* WhatsApp Button */}
                  <Link
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/80 hover:bg-white border border-dashed border-[#007FA1]/40 hover:border-[#007FA1] text-xs sm:text-sm font-semibold text-[#007FA1] transition-all duration-200 group shadow-sm"
                  >
                    <span>Mulai Diskusi via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#007FA1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  {/* Direct Contacts */}
                  <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#52525b]">
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="flex items-center gap-1.5 text-[#52525b] hover:text-[#000519] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#007FA1]" />
                      <span className="truncate max-w-[170px] sm:max-w-[210px]">{socialLinks.email}</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md hover:bg-black/5 text-[#52525b] hover:text-[#000519] transition-colors"
                        aria-label="GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-md hover:bg-black/5 text-[#52525b] hover:text-[#000519] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Signature Bar */}
              <div className="w-full pt-3 border-t border-black/[0.06] flex items-center justify-between gap-2 text-xs text-[#71717a]">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-[1.5px] bg-[#007FA1] inline-block" />
                  <span className="text-[11px] font-medium">julhan.my.id</span>
                </div>
                <span className="text-[10px] text-[#71717a]">Tekan ESC untuk menutup</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
