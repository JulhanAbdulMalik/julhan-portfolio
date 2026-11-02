"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { socialLinks } from "@/data/navigation";

export function FloatingWhatsApp() {
  return (
    <Link
      href={socialLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#25d366] hover:bg-[#20c05e] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
    </Link>
  );
}
