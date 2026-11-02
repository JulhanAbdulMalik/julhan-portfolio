"use client";

import React, { useState } from "react";
import { Share2, Link2, Check, MessageSquare } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/Icons";

interface SocialShareWidgetProps {
  title: string;
  slug: string;
}

export function SocialShareWidget({ title, slug }: SocialShareWidgetProps) {
  const [copied, setCopied] = useState(false);

  // In production, this matches domain
  const shareUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://julhan.my.id/blog/${slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} - Baca artikel selengkapnya: ${shareUrl}`)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}&via=julhanmalik`;

  return (
    <div className="p-5 rounded-2xl bg-[#111111] border border-white/[0.08] space-y-3">
      <div className="flex items-center gap-2 text-white font-semibold text-xs tracking-wider uppercase font-mono pb-2 border-b border-white/[0.08]">
        <Share2 className="w-3.5 h-3.5 text-[#0ea5e9]" />
        <span>Bagikan Artikel</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-medium transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 text-xs font-medium transition-colors"
        >
          <LinkedinIcon className="w-3.5 h-3.5" />
          <span>LinkedIn</span>
        </a>

        {/* X / Twitter */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#141414] border border-white/[0.08] text-[#a1a1aa] hover:text-white hover:border-white/[0.2] text-xs font-medium transition-colors"
        >
          <span className="font-bold text-xs">𝕏</span>
          <span>Twitter / X</span>
        </a>

        {/* Copy Link */}
        <button
          type="button"
          onClick={handleCopyLink}
          className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${
            copied
              ? "bg-[#0ea5e9]/20 border-[#0ea5e9] text-[#38bdf8]"
              : "bg-[#141414] border-white/[0.08] text-[#a1a1aa] hover:text-white hover:border-white/[0.2]"
          }`}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5" />
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
