"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, socialLinks } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div
        className="max-w-[80rem] mx-auto px-6 lg:px-10 flex items-center justify-between"
        style={{ height: "64px" }}
      >
        {/* Logo — text only, minimal */}
        <Link
          href="/"
          className="font-bold text-white text-[15px] tracking-tight hover:opacity-70 transition-opacity"
        >
          Julhan A Malik
        </Link>

        {/* Center Nav — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right — CTA button desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white border border-white/20 rounded-md px-4 py-2 hover:border-white/40 hover:bg-white/[0.05] transition-all duration-200"
          >
            Konsultasi Gratis
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </Link>
        </div>

        {/* Mobile: hamburger button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            className="text-[#a1a1aa] hover:text-white transition-colors p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/[0.07] overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-white bg-white/[0.06]"
                        : "text-[#a1a1aa] hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/[0.08]">
                <Link
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-white bg-white/[0.08] rounded-md px-4 py-2.5 hover:bg-white/[0.14] transition-colors"
                >
                  Konsultasi Gratis
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
