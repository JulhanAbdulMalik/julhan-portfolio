"use client";

import React, { useState } from "react";
import { Share2, Link2, Check, MessageSquare } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/navigation";

interface SocialShareWidgetProps {
  title: string;
  slug: string;
  theme?: "light" | "dark";
}

export function SocialShareWidget({ title, slug, theme = "light" }: SocialShareWidgetProps) {
  const [copied, setCopied] = useState(false);
  const isDark = theme === "dark";

  // Selalu gunakan Canonical URL produksi yang konsisten antara Server dan Client (mencegah React Hydration Error)
  const canonicalUrl = `https://julhan.my.id/artikel/${slug}`;

  const handleCopyLink = async () => {
    try {
      // Salin URL browser saat ini jika di client, atau fallback ke canonical URL
      const urlToCopy =
        typeof window !== "undefined" && window.location.href
          ? window.location.href
          : canonicalUrl;
      await navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} - Baca artikel selengkapnya: ${canonicalUrl}`)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`;
  const instagramUrl = socialLinks.instagram;

  return (
    <div
      className={`p-5 rounded-xl border space-y-3 ${
        isDark
          ? "bg-[#020c24] border-white/[0.08]"
          : "bg-white border-neutral-200/90 shadow-xs"
      }`}
    >
      <div
        className={`flex items-center gap-2 font-semibold text-xs tracking-wider uppercase pb-2 border-b ${
          isDark
            ? "border-white/[0.08] text-white"
            : "border-neutral-200 text-[#000519]"
        }`}
      >
        <Share2 className={`w-3.5 h-3.5 ${isDark ? "text-[#07DFFF]" : "text-[#007FA1]"}`} />
        <span>Bagikan Artikel</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 text-xs font-semibold transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 text-xs font-semibold transition-colors"
        >
          <LinkedinIcon className="w-3.5 h-3.5" />
          <span>LinkedIn</span>
        </a>

        {/* Instagram */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-1.5 p-2 rounded-lg border text-xs font-semibold transition-colors ${
            isDark
              ? "bg-pink-500/10 border-pink-500/30 text-pink-400 hover:bg-pink-500/20"
              : "bg-pink-50 border-pink-200 text-pink-700 hover:bg-pink-100"
          }`}
        >
          <InstagramIcon className="w-3.5 h-3.5" />
          <span>Instagram</span>
        </a>

        {/* Copy Link */}
        <button
          type="button"
          onClick={handleCopyLink}
          className={`flex items-center justify-center gap-1.5 p-2 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
            copied
              ? isDark
                ? "bg-[#007FA1]/30 border-[#007FA1] text-[#07DFFF]"
                : "bg-emerald-50 border-emerald-300 text-emerald-700"
              : isDark
              ? "bg-[#020c24] border-white/[0.08] text-[#a1a1aa] hover:text-white"
              : "bg-neutral-50 border-neutral-200 text-[#52525b] hover:text-[#000519] hover:bg-neutral-100"
          }`}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-600" />
          ) : (
            <Link2 className="w-3.5 h-3.5" />
          )}
          <span>
            {copied ? "Tersalin!" : "Salin Link"}
          </span>
        </button>
      </div>
    </div>
  );
}
