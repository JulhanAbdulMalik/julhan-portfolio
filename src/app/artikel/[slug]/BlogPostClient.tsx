"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  FolderGit2,
} from "lucide-react";
import { BlogPost } from "@/data/blogData";
import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { SocialShareWidget } from "@/components/blog/SocialShareWidget";
import { CodeBlock } from "@/components/blog/CodeBlock";

interface BlogPostClientProps {
  post: BlogPost;
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

export function BlogPostClient({
  post,
  prevPost,
  nextPost,
}: BlogPostClientProps) {
  return (
    <div className="w-full min-h-screen bg-white text-[#000519]">
      {/* Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* ════════════════════════════════════════════════════════════════
          SECTION 1: DARK BLUEPRINT HERO HEADER (Siku 90° Dark wpu.id)
          Latar Gelap #000519, Garis Putus-Putus Putih, Aksen Cyan #07DFFF
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="pt-24 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-white relative bg-[#000519] border-b border-dashed border-white/15 overflow-hidden"
      >
        {/* Ambient background glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none -z-0 opacity-15 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 70, 95, 0.65) 0%, transparent 70%)",
          }}
        />

        {/* Unified Table Container */}
        <div className="max-w-[84rem] mx-auto w-full border border-dashed border-white/15 bg-[#000519] rounded-none shadow-none relative z-10">
          {/* ── Bar Navigasi & Breadcrumb ── */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#000519]">
            <Link
              href="/artikel"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#a1a1aa] hover:text-[#07DFFF] transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Kembali ke Daftar Artikel</span>
            </Link>

            <div className="flex items-center gap-2 text-xs text-[#71717a] flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <Link href="/artikel" className="hover:text-white transition-colors">
                Artikel
              </Link>
              <span>/</span>
              <span className="text-[#07DFFF] font-medium truncate max-w-[260px]">
                {post.category}
              </span>
            </div>
          </div>

          {/* ── Main Article Header Information ── */}
          <div className="p-8 sm:p-10 lg:p-14 xl:p-16 border-b border-dashed border-white/15 space-y-6">
            <div className="space-y-4 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#007FA1]/20 text-[#07DFFF] border border-[#007FA1]/40 w-fit">
                <BookOpen className="w-3.5 h-3.5 text-[#07DFFF]" />
                <span>{post.category}</span>
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-[2.15rem] font-semibold text-white leading-[1.25] tracking-tight w-full max-w-none">
                {post.titleId}
              </h1>

              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-normal w-full max-w-none">
                {post.excerptId}
              </p>
            </div>

            {/* Key Metadata Bar (4 Kolom Siku 90°) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-dashed border-white/15">
              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Penulis Artikel
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-white/20 shrink-0">
                    <Image
                      src="/julhan-foto-profile.jpg"
                      alt={post.author.name}
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate">
                    {post.author.name}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Peran &amp; Spesialisasi
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white block mt-1">
                  {post.author.roleId}
                </span>
              </div>

              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Tanggal Publikasi
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <Calendar className="w-3.5 h-3.5 text-[#07DFFF]" />
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {post.publishedAt}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-[#71717a] uppercase tracking-wider block font-semibold">
                  Akses &amp; Pembaca
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <Eye className="w-3.5 h-3.5 text-[#07DFFF]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#07DFFF]">
                    {post.viewsCount.toLocaleString("id-ID")} Pembaca
                  </span>
                </div>
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
          SECTION 2: WHITE ARCHITECTURAL READING CANVAS (Siku 90° wpu.id)
          Latar Putih Bersih, Garis Putus-Putus Abu, Teks Gelap Nyaman
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="reading-canvas"
        className="pt-0 pb-0 px-6 sm:px-10 lg:px-16 xl:px-24 text-[#000519] relative bg-white border-b border-dashed border-neutral-300"
      >
        <div className="max-w-[84rem] mx-auto w-full border border-dashed border-neutral-300 bg-white rounded-none shadow-none">
          {/* Spacer Row Awal Canvas */}
          <div
            className="w-full border-b border-dashed border-neutral-300 h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />

          {/* ── Row 1: Featured Cover Image Banner ── */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-dashed border-neutral-300 bg-[#fafafa]/50">
            <div className="relative w-full h-64 sm:h-96 md:h-[460px] rounded-xl overflow-hidden border border-neutral-200/90 shadow-xs bg-[#020c24]">
              <Image
                src={post.coverImage}
                alt={post.titleId}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* ── Row 2: 2-Column Grid (Main Body & Sticky Sidebar) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-neutral-300 border-b border-dashed border-neutral-300">
            {/* ── Left Column: Main Article Body (8 Cols) ── */}
            <article className="lg:col-span-8 p-6 sm:p-10 lg:p-14 space-y-12 text-[#334155] leading-relaxed text-sm sm:text-base">
              {/* ─────────────────────────────────────────────────────────────
                  ARTICLE 1: Panduan Memilih Tech Stack Website Bisnis & UMKM
              ───────────────────────────────────────────────────────────── */}
              {post.id === "tech-stack-guide" && (
                <>
                  {/* Section 1 */}
                  <section id="latar-belakang-bisnis" className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#000519] tracking-tight border-b border-dashed border-neutral-200 pb-3">
                      1. Mengapa Pilihan Tech Stack Berdampak Langsung ke Omzet Bisnis?
                    </h2>
                    <p>
                      Banyak pemilik bisnis dan pengelola UMKM memandang pemilihan
                      teknologi website semata-mata sebagai urusan teknis belaka.
                      Padahal, dalam lanskap digital modern,{" "}
                      <strong className="text-[#000519] font-semibold">
                        kecepatan muat halaman (load speed)
                      </strong>
                      ,{" "}
                      <strong className="text-[#000519] font-semibold">
                        stabilitas server
                      </strong>
                      , dan{" "}
                      <strong className="text-[#000519] font-semibold">
                        kemudahan alur transaksi
                      </strong>{" "}
                      berkorelasi langsung dengan tingkat konversi dan pendapatan.
                    </p>
                    <p>
                      Riset Google menunjukkan bahwa penambahan waktu muat sebesar{" "}
                      <strong className="text-[#000519] font-semibold">
                        1 detik
                      </strong>{" "}
                      dapat menurunkan konversi penjualan hingga{" "}
                      <strong className="text-[#000519] font-semibold">
                        20%
                      </strong>{" "}
                      pada perangkat seluler. Ketika pengunjung membuka website
                      Anda dan menghadapi halaman lambat atau formulir yang
                      macet, mereka tidak akan menunggu — mereka akan langsung
                      berpindah ke kompetitor.
                    </p>

                    <div className="p-5 rounded-xl bg-cyan-50/70 border border-cyan-200 flex items-start gap-3.5 text-xs sm:text-sm text-[#0c4a6e]">
                      <Lightbulb className="w-5 h-5 text-[#007FA1] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#000519] block mb-0.5">
                          Prinsip Penting:
                        </span>
                        Teknologi terbaik bukan teknologi yang paling populer atau
                        paling rumit, melainkan teknologi yang paling efisien
                        menyelesaikan masalah bisnis Anda dengan biaya
                        pemeliharaan paling rasional.
                      </div>
                    </div>
                  </section>

                  {/* Section 2 */}
                  <section id="perbandingan-stack" className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#000519] tracking-tight border-b border-dashed border-neutral-200 pb-3">
                      2. Perbandingan: WordPress vs Platform No-Code vs Custom Modern Stack
                    </h2>
                    <p>
                      Berikut matriks perbandingan objektif antara tiga opsi utama
                      pembuatan website untuk kebutuhan bisnis Anda saat ini:
                    </p>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white my-6 shadow-xs">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-neutral-200 bg-[#fafafa] text-[#000519]">
                            <th className="p-3.5 font-semibold">Parameter</th>
                            <th className="p-3.5 font-semibold">
                              WordPress (CMS Tradisional)
                            </th>
                            <th className="p-3.5 font-semibold">
                              Platform No-Code (Shopify/Wix)
                            </th>
                            <th className="p-3.5 font-semibold text-[#007FA1]">
                              Custom Stack (Next.js + Cloud)
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 text-[#334155]">
                          <tr>
                            <td className="p-3.5 font-medium text-[#000519]">
                              Skor Kecepatan (PageSpeed)
                            </td>
                            <td className="p-3.5 text-amber-600 font-medium">
                              Sedang (50 - 75)
                            </td>
                            <td className="p-3.5 text-amber-600 font-medium">
                              Sedang (60 - 80)
                            </td>
                            <td className="p-3.5 text-emerald-600 font-semibold">
                              Sangat Tinggi (95 - 100)
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3.5 font-medium text-[#000519]">
                              Biaya Langganan Bulanan
                            </td>
                            <td className="p-3.5">Hosting + Plugin berbayar</td>
                            <td className="p-3.5 text-rose-600 font-medium">
                              Tinggi ($29 - $299/bulan)
                            </td>
                            <td className="p-3.5 text-emerald-600 font-semibold">
                              Mulai Rp 0 (Free Tier Cloud)
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3.5 font-medium text-[#000519]">
                              Fleksibilitas Fitur Custom
                            </td>
                            <td className="p-3.5">
                              Terbatas pada plugin eksternal
                            </td>
                            <td className="p-3.5">
                              Sangat terbatas pada app store
                            </td>
                            <td className="p-3.5 text-emerald-600 font-semibold">
                              100% Bebas Tanpa Batas
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3.5 font-medium text-[#000519]">
                              Kerentanan Keamanan
                            </td>
                            <td className="p-3.5 text-rose-600 font-medium">
                              Rentan eksploitasi plugin lama
                            </td>
                            <td className="p-3.5 text-emerald-600 font-medium">
                              Aman (Managed)
                            </td>
                            <td className="p-3.5 text-emerald-600 font-semibold">
                              Sangat Aman (Serverless &amp; RLS)
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3.5 font-medium text-[#000519]">
                              Kepemilikan Kode &amp; Data
                            </td>
                            <td className="p-3.5">Penuh</td>
                            <td className="p-3.5 text-rose-600 font-medium">
                              Terkunci di platform mereka
                            </td>
                            <td className="p-3.5 text-emerald-600 font-semibold">
                              Penuh 100% Hak Milik Anda
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Section 3 */}
                  <section id="anatomi-modern-stack" className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#000519] tracking-tight border-b border-dashed border-neutral-200 pb-3">
                      3. Anatomi Custom Stack: Next.js 14 App Router &amp; Supabase
                    </h2>
                    <p>
                      Kombinasi <strong className="text-[#000519] font-semibold">Next.js 14 App Router</strong> dan{" "}
                      <strong className="text-[#000519] font-semibold">Supabase (PostgreSQL Cloud)</strong> adalah fondasi
                      arsitektur yang saya gunakan pada proyek produksi nyata
                      seperti sistem reservasi <em>Yuwanyie Picnic</em>. Mengapa
                      kombinasi ini menjadi standar emas?
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong className="text-[#000519] font-semibold">Server Components (RSC):</strong> HTML dirender
                        langsung di server sebelum dikirim ke browser. Pengunjung
                        tidak perlu mengunduh bundle JavaScript besar hanya untuk
                        melihat katalog menu atau halaman produk.
                      </li>
                      <li>
                        <strong className="text-[#000519] font-semibold">Row-Level Security (RLS) di Database:</strong>{" "}
                        Aturan otorisasi diterapkan langsung di level tabel
                        PostgreSQL, sehingga data sensitif pesanan klien tidak
                        akan pernah bocor meskipun diakses dari sisi klien.
                      </li>
                      <li>
                        <strong className="text-[#000519] font-semibold">Server Actions:</strong> Komunikasi data form
                        terjadi tanpa perlu membuat puluhan file controller API
                        terpisah.
                      </li>
                    </ul>

                    <p className="pt-2">
                      Berikut contoh implementasi nyata Server Action di Next.js
                      14 untuk validasi dan pemrosesan order secara aman:
                    </p>

                    <CodeBlock
                      filename="actions/checkoutOrder.ts"
                      language="typescript"
                      code={`"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

interface OrderPayload {
  packageId: string;
  customerName: string;
  customerPhone: string;
  reservationDate: string;
}

export async function processBookingOrder(payload: OrderPayload) {
  // 1. Inisialisasi Supabase Server Client dengan Cookie Session
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } }
  );

  // 2. Validasi Ketersediaan Slot pada Tanggal Terpilih
  const { data: existingSlots, error: slotError } = await supabase
    .from("reservations")
    .select("id")
    .eq("reservation_date", payload.reservationDate)
    .neq("status", "cancelled");

  if (slotError || (existingSlots && existingSlots.length >= 10)) {
    return { success: false, message: "Maaf, kuota tanggal ini sudah penuh." };
  }

  // 3. Simpan Pesanan ke Database dengan Row-Level Security
  const { data: newOrder, error: insertError } = await supabase
    .from("reservations")
    .insert([
      {
        package_id: payload.packageId,
        customer_name: payload.customerName,
        customer_phone: payload.customerPhone,
        reservation_date: payload.reservationDate,
        status: "pending_payment",
      },
    ])
    .select()
    .single();

  if (insertError) {
    return { success: false, message: "Gagal menyimpan pesanan. Silakan coba lagi." };
  }

  return { success: true, orderId: newOrder.id };
}`}
                    />
                  </section>

                  {/* Section 4 */}
                  <section id="kapan-butuh-flutter" className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#000519] tracking-tight border-b border-dashed border-neutral-200 pb-3">
                      4. Kapan Bisnis Anda Membutuhkan Mobile App Flutter?
                    </h2>
                    <p>
                      Tidak semua bisnis membutuhkan aplikasi mobile native di
                      Google Play Store atau App Store. Banyak klien datang dengan
                      permintaan &ldquo;Saya ingin aplikasi Android seperti
                      Gojek&rdquo;, padahal model bisnis mereka sebenarnya cukup
                      dipenuhi dengan <strong className="text-[#000519] font-semibold">Progressive Web App (PWA)</strong>{" "}
                      responsif yang jauh lebih hemat biaya.
                    </p>
                    <p>
                      Berdasarkan pengalaman saya merilis aplikasi mobile{" "}
                      <em>PanenKita</em> ke Google Play Store, bisnis Anda baru{" "}
                      <strong className="text-[#000519] font-semibold">benar-benar membutuhkan Flutter</strong> jika
                      memiliki kriteria berikut:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
                      <div className="p-4 rounded-xl bg-[#fafafa] border border-neutral-200 space-y-1.5 shadow-xs">
                        <div className="text-[#007FA1] font-semibold text-xs flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Akses Hardware &amp; Sensor</span>
                        </div>
                        <p className="text-xs text-[#52525b]">
                          Aplikasi butuh Bluetooth thermal printer kasir,
                          background GPS tracking kurir, atau kamera barcode
                          scanner intensif.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#fafafa] border border-neutral-200 space-y-1.5 shadow-xs">
                        <div className="text-[#007FA1] font-semibold text-xs flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Offline-First Synchronization</span>
                        </div>
                        <p className="text-xs text-[#52525b]">
                          Pengguna (misalnya petani atau sales lapangan) harus
                          bisa mencatat data tanpa sinyal internet, lalu sync
                          otomatis saat online.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#fafafa] border border-neutral-200 space-y-1.5 shadow-xs">
                        <div className="text-[#007FA1] font-semibold text-xs flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Push Notifications Re-engagement</span>
                        </div>
                        <p className="text-xs text-[#52525b]">
                          Siklus interaksi pengguna harian yang membutuhkan push
                          alert instan langsung ke status bar smartphone.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#fafafa] border border-neutral-200 space-y-1.5 shadow-xs">
                        <div className="text-[#007FA1] font-semibold text-xs flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Branding &amp; Play Store Trust</span>
                        </div>
                        <p className="text-xs text-[#52525b]">
                          Target pasar Anda menuntut kredibilitas bahwa aplikasi
                          resmi dapat diunduh langsung dari Google Play Store.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 5 */}
                  <section id="analisis-biaya-cloud" className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#000519] tracking-tight border-b border-dashed border-neutral-200 pb-3">
                      5. Analisis Biaya Server &amp; Pemeliharaan Jangka Panjang
                    </h2>
                    <p>
                      Salah satu keuntungan terbesar memilih arsitektur modern
                      adalah{" "}
                      <strong className="text-[#000519] font-semibold">
                        biaya operasional bulanan yang sangat rendah
                      </strong>{" "}
                      pada fase awal bisnis.
                    </p>
                    <p>
                      Dengan hosting di <strong className="text-[#000519] font-semibold">Vercel</strong> dan database di{" "}
                      <strong className="text-[#000519] font-semibold">Supabase</strong>, website Anda dapat berjalan pada{" "}
                      <em>Hobby / Free Tier</em> yang sudah mencakup SSL gratis,
                      CDN global 100+ lokasi, dan kapasitas ribuan pengunjung per
                      hari tanpa biaya langganan bulanan. Anda baru mulai membayar
                      ketika traffic bisnis Anda sudah menghasilkan pendapatan
                      signifikan.
                    </p>
                  </section>

                  {/* Section 6 */}
                  <section id="rekomendasi-matriks" className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#000519] tracking-tight border-b border-dashed border-neutral-200 pb-3">
                      6. Rekomendasi Tech Stack Berdasarkan Model Bisnis
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong className="text-[#000519] font-semibold">
                          Landing Page Promosi &amp; Company Profile:
                        </strong>{" "}
                        Next.js 14 SSG + Tailwind CSS + Formspree/EmailJS. (Load
                        time &lt; 0.8 detik, SEO sempurna, biaya hosting Rp 0).
                      </li>
                      <li>
                        <strong className="text-[#000519] font-semibold">
                          Website Katalog Bisnis &amp; Pemesanan (F&amp;B, Jasa,
                          Booking):
                        </strong>{" "}
                        Next.js 14 App Router + Supabase PostgreSQL + Cloudinary +
                        Midtrans/QRIS.
                      </li>
                      <li>
                        <strong className="text-[#000519] font-semibold">
                          Aplikasi Operasional Lapangan &amp; Supply Chain:
                        </strong>{" "}
                        Flutter (Android/iOS) + Node.js/Express REST API +
                        PostgreSQL.
                      </li>
                      <li>
                        <strong className="text-[#000519] font-semibold">Sistem Informasi Internal &amp; Kampus:</strong>{" "}
                        Next.js + Prisma ORM + TanStack Table + NextAuth RBAC
                        (Skala ratusan ribu records).
                      </li>
                    </ul>
                  </section>

                  {/* Section 7 */}
                  <section id="kesimpulan" className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#000519] tracking-tight border-b border-dashed border-neutral-200 pb-3">
                      7. Kesimpulan &amp; Tindakan Selanjutnya
                    </h2>
                    <p>
                      Jangan terburu-buru menghabiskan puluhan juta rupiah untuk
                      infrastruktur yang tidak Anda butuhkan, namun jangan pula
                      mengorbankan performa bisnis Anda dengan solusi instan yang
                      rapuh.
                    </p>
                    <p>
                      Jika Anda memiliki konsep produk digital dan ingin
                      mendiskusikan arsitektur paling tepat dan hemat biaya, saya
                      siap membantu memetakan arsitekturnya secara objektif.
                    </p>
                  </section>
                </>
              )}

              {/* ── Article Tags ── */}
              <div className="pt-8 border-t border-dashed border-neutral-200 space-y-3">
                <span className="text-[10px] font-semibold text-[#71717a] uppercase tracking-wider block">
                  Topik &amp; Kata Kunci Terkait:
                </span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-[#fafafa] text-[#52525b] border border-neutral-200 hover:border-[#007FA1] hover:text-[#007FA1] transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* ── Right Column: Sticky Architectural Sidebar (4 Cols) ── */}
            <aside className="lg:col-span-4 p-6 sm:p-8 lg:p-10 bg-[#fafafa]/40 space-y-6">
              <div className="sticky top-28 space-y-6">
                {/* 1. Table of Contents */}
                <TableOfContents items={post.toc} theme="light" />

                {/* 2. Social Share Widget */}
                <SocialShareWidget
                  title={post.titleId}
                  slug={post.slug}
                  theme="light"
                />

                {/* 3. Informasi Penulis Artikel */}
                <div className="p-5 sm:p-6 rounded-xl bg-white border border-neutral-200 shadow-xs space-y-3.5">
                  <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-neutral-100">
                    <span className="text-[10px] uppercase font-semibold text-[#71717a] tracking-wider block">
                      Tentang Penulis
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#007FA1]/10 text-[#007FA1] border border-[#007FA1]/30">
                      {post.author.roleId}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 shrink-0">
                      <Image
                        src="/julhan-foto-profile.jpg"
                        alt={post.author.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <h4 className="text-sm font-semibold text-[#000519] truncate">
                        {post.author.name}
                      </h4>
                      <p className="text-xs text-[#71717a]">
                        Berbasis di Sukabumi, Jawa Barat
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Diskusi & Kolaborasi Teknis (Dipindahkan ke Sisi Kanan) */}
                <div className="p-5 sm:p-6 rounded-xl bg-white border border-neutral-200 shadow-xs space-y-3.5">
                  <div className="flex items-center gap-2 pb-2.5 border-b border-neutral-100">
                    <MessageCircle className="w-3.5 h-3.5 text-[#007FA1]" />
                    <span className="text-[10px] uppercase font-semibold text-[#007FA1] tracking-wider">
                      Diskusi &amp; Kolaborasi Teknis
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-[#000519] leading-snug">
                      Punya rencana proyek web atau aplikasi digital?
                    </h4>
                    <p className="text-xs text-[#52525b] leading-relaxed">
                      Mari diskusikan arsitektur sistem, pemilihan tech stack, atau audit kode bersama saya.
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <a
                      href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                        `Halo Mas Julhan, saya membaca artikel "${post.titleId}" di website Anda dan ingin berdiskusi teknis.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-lg text-xs font-semibold bg-[#007FA1] hover:bg-[#00A2C9] text-white transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Diskusi via WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <Link
                      href="/#portfolio"
                      className="w-full py-2.5 rounded-lg text-xs font-semibold bg-[#fafafa] border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-100 text-[#000519] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                    >
                      <FolderGit2 className="w-3.5 h-3.5 text-[#71717a]" />
                      <span>Lihat Portfolio</span>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* ── Row 3: Next / Previous Post Navigation (Siku 90° Presisi) ── */}
          {prevPost || nextPost ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-neutral-300 border-b border-dashed border-neutral-300 bg-white">
              {prevPost ? (
                <Link
                  href={`/artikel/${prevPost.slug}`}
                  className="p-6 sm:p-8 hover:bg-[#fafafa] transition-colors group flex flex-col justify-center text-left"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717a] group-hover:text-[#007FA1] flex items-center gap-1.5 transition-colors">
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    <span>Artikel Sebelumnya</span>
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#000519] group-hover:text-[#007FA1] transition-colors line-clamp-1 mt-1">
                    {prevPost.titleId}
                  </span>
                </Link>
              ) : (
                <div className="p-6 sm:p-8 hidden sm:block bg-[#fafafa]/20" />
              )}

              {nextPost ? (
                <Link
                  href={`/artikel/${nextPost.slug}`}
                  className="p-6 sm:p-8 hover:bg-[#fafafa] transition-colors group flex flex-col justify-center text-right sm:items-end"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#71717a] group-hover:text-[#007FA1] flex items-center justify-end gap-1.5 transition-colors">
                    <span>Artikel Selanjutnya</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#000519] group-hover:text-[#007FA1] transition-colors line-clamp-1 mt-1">
                    {nextPost.titleId}
                  </span>
                </Link>
              ) : (
                <div className="p-6 sm:p-8 hidden sm:block bg-[#fafafa]/20" />
              )}
            </div>
          ) : (
            <div className="p-6 sm:p-8 border-b border-dashed border-neutral-300 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/artikel"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#000519] hover:text-[#007FA1] transition-colors group cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Kembali ke Seluruh Artikel</span>
              </Link>
              <span className="text-xs text-[#71717a]">
                Publikasi Rekayasa Software &amp; Tech Stack
              </span>
            </div>
          )}

          {/* Spacer Row Akhir Canvas */}
          <div
            className="w-full h-[60px] lg:h-[80px]"
            aria-hidden="true"
          />
        </div>
      </section>
    </div>
  );
}
