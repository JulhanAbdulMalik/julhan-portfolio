"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, MapPin, Clock, Copy, Check, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { socialLinks } from "@/data/navigation";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    serviceType: "Website Bisnis & Profil Usaha",
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
      className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] relative bg-white border-b border-dashed border-neutral-300"
    >
      {/* ── Main Unified Architectural Grid Table (Kotak Siku 90° + Garis Strip Putus-Putus / wpu.id 1:1) ── */}
      <div className="max-w-[84rem] mx-auto w-full border-x border-b border-dashed border-neutral-300 bg-white rounded-none shadow-none">
        
        {/* ════════════════════════════════════════════════════════════════
            ROW 0: Top Spacer Row (Baris Margin Kosong di Awal Section 6)
            Memberikan ruang napas (breathing room) di awal section tanpa garis tengah
        ════════════════════════════════════════════════════════════════ */}
        <div
          className="w-full border-b border-dashed border-neutral-300 h-[60px] lg:h-[80px]"
          aria-hidden="true"
        />

        {/* ════════════════════════════════════════════════════════════════
            ROW 1: Header Row (Kontak Langsung: Judul di Atas, Deskripsi di Bawah)
            Satu blok utuh presisi seperti Section 2
        ════════════════════════════════════════════════════════════════ */}
        <div className="p-8 sm:p-10 lg:p-12 xl:p-14 border-b border-dashed border-neutral-300 flex flex-col justify-center space-y-4 sm:space-y-5">
          {/* Bagian Atas: Badge + Judul */}
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/10 text-[#007FA1] border border-[#007FA1]/25 w-fit">
              <Mail className="w-3.5 h-3.5 text-[#007FA1]" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem] xl:text-[3.5rem] font-semibold text-[#000519] leading-[1.12] tracking-[-0.03em]">
              Ayo wujudkan ide{" "}
              <span className="text-[#007FA1]">
                digital Anda bersama saya.
              </span>
            </h2>
          </div>

          {/* Bagian Bawah: Deskripsi */}
          <p className="text-sm sm:text-base text-[#52525b] leading-relaxed font-normal max-w-none">
            Punya pertanyaan teknis, rencana proyek website atau aplikasi mobile, atau ingin mendiskusikan estimasi biaya? Saya siap membantu.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            ROW 2: 2-Column Split: Direct Channels (Kiri) & Interactive Form (Kanan)
            Dipisahkan garis putus-putus presisi tinggi
        ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-neutral-300">
          
          {/* Sisi Kiri (lg: 5 cols): Saluran Kontak Langsung (Setiap baris dipisahkan garis putus-putus menyambung penuh) */}
          <div className="lg:col-span-5 flex flex-col justify-between divide-y divide-dashed divide-neutral-300 bg-[#fafafa]/40">
            
            {/* Item 1: Email */}
            <div className="p-8 sm:p-10 lg:p-12 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#007FA1]/10 text-[#007FA1] border border-[#007FA1]/20 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717a] block">
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
                  Untuk proposal proyek resmi, dokumen RFP, &amp; kerja sama.
                </p>
              </div>
            </div>

            {/* Item 2: WhatsApp */}
            <div className="p-8 sm:p-10 lg:p-12 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717a] block">
                  WHATSAPP
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
            <div className="p-8 sm:p-10 lg:p-12 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717a] block">
                  LOKASI &amp; BASIS
                </span>
                <p className="text-base sm:text-lg font-semibold text-[#000519] tracking-tight">
                  Sukabumi, Jawa Barat
                </p>
                <p className="text-xs text-[#52525b] leading-relaxed">
                  julhan.my.id • Zona Waktu WIB (UTC+7)
                </p>
              </div>
            </div>

            {/* Item 4: Response time note */}
            <div className="p-6 sm:p-8 lg:p-10 flex items-center">
              <div className="flex items-center gap-2 text-xs text-[#52525b]">
                <Clock className="w-4 h-4 text-[#71717a]" />
                <span>
                  Waktu respon: Biasanya dalam 1 - 24 jam pada hari kerja.
                </span>
              </div>
            </div>

          </div>

          {/* Sisi Kanan (lg: 7 cols): Form Interaktif WhatsApp */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 bg-white">
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#000519] tracking-tight">
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
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#52525b] block">
                    NAMA LENGKAP <span className="text-[#007FA1]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Nama Anda atau Perusahaan"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#000519] placeholder:text-[#a1a1aa] bg-white focus:outline-none focus:border-[#007FA1] focus:ring-2 focus:ring-[#007FA1]/10 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#52525b] block">
                    ALAMAT EMAIL <span className="text-[#007FA1]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@perusahaan.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#000519] placeholder:text-[#a1a1aa] bg-white focus:outline-none focus:border-[#007FA1] focus:ring-2 focus:ring-[#007FA1]/10 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Service Type */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#52525b] block">
                  JENIS KEBUTUHAN / PROYEK
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#000519] bg-white focus:outline-none focus:border-[#007FA1] focus:ring-2 focus:ring-[#007FA1]/10 transition-all cursor-pointer"
                >
                  <option value="Website Bisnis & Profil Usaha">Website Bisnis &amp; Profil Usaha</option>
                  <option value="Website Coffee Shop & Restaurant">Website Coffee Shop &amp; Restaurant</option>
                  <option value="Toko Online & Pemesanan Otomatis">Toko Online &amp; Pemesanan Otomatis</option>
                  <option value="Sistem Kasir & Dashboard Operasional">Sistem Kasir &amp; Dashboard Operasional</option>
                  <option value="Aplikasi Mobile Android & iOS (Flutter)">Aplikasi Mobile Android &amp; iOS (Flutter)</option>
                  <option value="Bundle Ekosistem Web + Mobile App">Bundle Ekosistem Web + Mobile App</option>
                  <option value="Program Kemitraan Sekolah & Yayasan (Rp 0,-)">Program Kemitraan Sekolah &amp; Yayasan (Rp 0,-)</option>
                  <option value="Renovasi & Optimasi Website Lama">Renovasi &amp; Optimasi Website Lama</option>
                  <option value="Layanan Maintenance & Tim IT Bulanan">Layanan Maintenance &amp; Tim IT Bulanan</option>
                  <option value="Konsultasi Kustom & Arsitektur Sistem">Konsultasi Kustom &amp; Arsitektur Sistem</option>
                </select>
              </div>

              {/* Row 3: Message Details */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#52525b] block">
                  DETAIL KEBUTUHAN PROYEK <span className="text-[#007FA1]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ceritakan gambaran sistem, fitur utama yang diinginkan, target waktu peluncuran, atau estimasi anggaran..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm text-[#000519] placeholder:text-[#a1a1aa] bg-white focus:outline-none focus:border-[#007FA1] focus:ring-2 focus:ring-[#007FA1]/10 transition-all resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-[#007FA1] hover:bg-[#009ac2] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Pesan via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* De-risking & Trust Guarantees */}
              <div className="pt-2 text-center space-y-2">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-[#52525b]">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    100% Gratis Konsultasi Awal
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Tanpa Komitmen Pembelian
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    Respon Cepat &lt; 1 Jam (Jam Kerja)
                  </span>
                </div>

                <p className="text-[11px] text-[#71717a] font-normal">
                  Kerahasiaan data dan ide proyek bisnis Anda terjamin 100%. Tidak akan disebarluaskan.
                </p>
              </div>
            </form>
          </div>
        </div>
 
        {/* ════════════════════════════════════════════════════════════════
            ROW 3: Bottom Spacer Row (Baris Margin Kosong di Akhir Section 6)
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
