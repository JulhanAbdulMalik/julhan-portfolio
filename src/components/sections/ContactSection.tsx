"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, MapPin, Clock, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/navigation";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    serviceType: "Website Profil / Landing Page",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    const email = "julhanabdulmalik@gmail.com";
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Mas Julhan, perkenalkan saya ${formData.fullName || "(Nama Klien)"}.
• Email: ${formData.email || "-"}
• Kebutuhan: ${formData.serviceType}
• Pesan: ${formData.message || "Ingin konsultasi pembuatan website/aplikasi."}`;

    window.open(
      `https://wa.me/6283111030309?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contact"
      className="section-light py-20 sm:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] border-t border-b border-black/[0.08] relative"
    >
      <div className="section-inner space-y-12 sm:space-y-16">
        
        {/* ── Top Header Row (wpu.id style) ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/[0.08]">
          <div className="space-y-4 max-w-2xl">
            <div className="section-badge section-badge-light">
              <Mail className="w-3.5 h-3.5 text-[#007FA1]" />
              <span>Kontak Langsung</span>
            </div>

            <h2 className="text-[1.85rem] sm:text-[3.2rem] lg:text-[3.8rem] font-semibold text-[#000519] leading-[1.08] tracking-[-0.03em]">
              Ayo wujudkan ide{" "}
              <br className="hidden sm:inline" />
              <span className="text-[#007FA1]">
                digital Anda bersama saya.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#52525b] leading-relaxed lg:pb-2 font-normal">
            Punya pertanyaan teknis, rencana proyek website atau aplikasi mobile, atau ingin mendiskusikan estimasi biaya? Saya siap membantu.
          </p>
        </div>

        {/* ── 2-Column Split: Direct Channels (Left) & Contact Form (Right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Items Stack */}
            <div className="space-y-6">
              
              {/* Item 1: Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#007FA1]/10 text-[#007FA1] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#71717a] block">
                    EMAIL RESMI
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:julhanabdulmalik@gmail.com"
                      className="text-base sm:text-lg font-semibold text-[#000519] hover:text-[#007FA1] transition-colors tracking-tight"
                    >
                      julhanabdulmalik@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1 rounded text-[#71717a] hover:text-[#000519] transition-colors"
                      title="Salin Email"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-[#52525b] leading-relaxed">
                    Untuk proposal proyek resmi, dokumen RFP, & kerja sama.
                  </p>
                </div>
              </div>

              {/* Item 2: WhatsApp */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#71717a] block">
                    WHATSAPP FAST-TRACK
                  </span>
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-semibold text-[#000519] hover:text-emerald-600 transition-colors tracking-tight block"
                  >
                    +62 831-1103-0309
                  </a>
                  <p className="text-xs text-[#52525b] leading-relaxed">
                    Respon cepat via pesan WhatsApp dalam jam kerja operasional.
                  </p>
                </div>
              </div>

              {/* Item 3: Headquarters */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#71717a] block">
                    LOKASI & BASIS
                  </span>
                  <p className="text-base sm:text-lg font-semibold text-[#000519] tracking-tight">
                    Sukabumi, Jawa Barat
                  </p>
                  <p className="text-xs text-[#52525b] leading-relaxed">
                    julhan.my.id • Zona Waktu WIB (UTC+7)
                  </p>
                </div>
              </div>
            </div>

            {/* Response time note & Socials */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#52525b]">
                <Clock className="w-4 h-4 text-[#71717a]" />
                <span>
                  Waktu respon: Biasanya dalam 1 - 24 jam pada hari kerja.
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717a] font-semibold mr-1">
                  IKUTI SAYA:
                </span>
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-black/[0.1] bg-white flex items-center justify-center text-[#52525b] hover:text-[#000519] hover:border-black/30 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </Link>
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-black/[0.1] bg-white flex items-center justify-center text-[#52525b] hover:text-[#007FA1] hover:border-[#007FA1]/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: Clean White Interactive Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-8 sm:p-10 bg-white border border-black/[0.08] shadow-sm space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold text-[#000519] tracking-tight">
                  Kirimkan Pesan Langsung
                </h3>
                <p className="text-xs sm:text-sm text-[#71717a] font-normal leading-relaxed">
                  Isi formulir di bawah ini dan pesan akan langsung terhubung secara otomatis ke WhatsApp.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                
                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#52525b] block">
                      NAMA LENGKAP <span className="text-[#007FA1]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nama Anda atau Perusahaan"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/[0.14] text-sm text-[#000519] placeholder:text-[#a1a1aa] bg-white focus:outline-none focus:border-[#007FA1] focus:ring-2 focus:ring-[#007FA1]/10 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#52525b] block">
                      ALAMAT EMAIL <span className="text-[#007FA1]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@perusahaan.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-black/[0.14] text-sm text-[#000519] placeholder:text-[#a1a1aa] bg-white focus:outline-none focus:border-[#007FA1] focus:ring-2 focus:ring-[#007FA1]/10 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Service Type */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#52525b] block">
                    JENIS KEBUTUHAN / PROYEK
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/[0.14] text-sm text-[#000519] bg-white focus:outline-none focus:border-[#007FA1] focus:ring-2 focus:ring-[#007FA1]/10 transition-all cursor-pointer"
                  >
                    <option value="Website Profil / Landing Page">Website Profil Bisnis &amp; Landing Page</option>
                    <option value="Aplikasi Mobile Android (Flutter)">Aplikasi Mobile Android (Flutter)</option>
                    <option value="Toko Online & E-Commerce">Toko Online &amp; E-Commerce</option>
                    <option value="Sistem Manajemen & Admin Dashboard">Sistem Manajemen &amp; Admin Dashboard</option>
                    <option value="Bundle Web + Mobile App">Bundle Lengkap Web + Mobile App</option>
                    <option value="Konsultasi Teknis & Arsitektur">Konsultasi Teknis &amp; Diskusi Kustom</option>
                  </select>
                </div>

                {/* Row 3: Message Details */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#52525b] block">
                    DETAIL KEBUTUHAN PROYEK <span className="text-[#007FA1]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan gambaran sistem, fitur utama yang diinginkan, target waktu peluncuran, atau estimasi anggaran..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-black/[0.14] text-sm text-[#000519] placeholder:text-[#a1a1aa] bg-white focus:outline-none focus:border-[#007FA1] focus:ring-2 focus:ring-[#007FA1]/10 transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#007FA1] hover:bg-[#007FA1] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim Pesan via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                {/* Privacy note */}
                <p className="text-center text-[11px] text-[#71717a] font-normal pt-1">
                  Kerahasiaan data dan ide proyek Anda terjamin 100%. Tidak akan disebarluaskan.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
