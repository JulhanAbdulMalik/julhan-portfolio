"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
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
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-24 relative overflow-hidden select-none">
      {/* Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none -z-0 opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Back navigation */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#71717a] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Daftar Blog</span>
          </Link>
        </div>

        {/* Article Header & Meta */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#0ea5e9]/15 text-[#38bdf8] border border-[#0ea5e9]/30">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#71717a] font-mono">
              <Calendar className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span>{post.publishedAt}</span>
            </span>
            <span className="text-[#71717a] text-xs">•</span>
            <span className="flex items-center gap-1.5 text-xs text-[#71717a] font-mono">
              <Clock className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span>
                {post.readTimeMinutes} Menit Baca
              </span>
            </span>
            <span className="text-[#71717a] text-xs">•</span>
            <span className="flex items-center gap-1.5 text-xs text-[#71717a] font-mono">
              <Eye className="w-3.5 h-3.5 text-[#71717a]" />
              <span>{post.viewsCount.toLocaleString()} views</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {post.titleId}
          </h1>

          <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
            {post.excerptId}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-3.5 pt-4 border-t border-white/[0.08]">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#141414] border border-white/[0.1] shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">
                  {post.author.name}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#0ea5e9]/20 text-[#38bdf8] border border-[#0ea5e9]/30">
                  Author &amp; Reviewer
                </span>
              </div>
              <span className="text-xs text-[#71717a] font-mono">
                {post.author.roleId}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Cover Banner */}
        <div className="relative w-full h-64 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#111111]">
          <Image
            src={post.coverImage}
            alt={post.titleId}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 2-Column Grid: Content & Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Body (8 Cols) */}
          <div className="lg:col-span-8 space-y-10 text-[#a1a1aa] leading-relaxed text-sm sm:text-base">
            {/* Article 1: Tech Stack Selection Guide */}
            {post.id === "tech-stack-guide" && (
              <>
                {/* Section 1 */}
                <section id="latar-belakang-bisnis" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    1. Mengapa Pilihan Tech Stack Berdampak Langsung ke Omzet
                    Bisnis?
                  </h2>
                  <p>
                    Banyak pemilik bisnis dan pengelola UMKM memandang pemilihan
                    teknologi website semata-mata sebagai urusan teknis belaka.
                    Padahal, dalam lanskap digital modern,{" "}
                    <strong>kecepatan muat halaman (load speed)</strong>,{" "}
                    <strong>stabilitas server</strong>, dan{" "}
                    <strong>kemudahan alur transaksi</strong> berkorelasi
                    langsung dengan tingkat konversi dan pendapatan.
                  </p>
                  <p>
                    Riset Google menunjukkan bahwa penambahan waktu muat sebesar{" "}
                    <strong>1 detik</strong> dapat menurunkan konversi penjualan
                    hingga <strong>20%</strong> pada perangkat seluler. Ketika
                    pengunjung membuka website Anda dan menghadapi halaman
                    lambat atau formulir yang macet, mereka tidak akan menunggu
                    - mereka akan langsung berpindah ke kompetitor.
                  </p>

                  <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-start gap-3 text-xs sm:text-sm text-cyan-200">
                    <Lightbulb className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    2. Perbandingan: WordPress vs Platform No-Code vs Custom
                    Modern Stack
                  </h2>
                  <p>
                    Berikut matriks perbandingan objektif antara tiga opsi utama
                    pembuatan website untuk kebutuhan bisnis Anda saat ini:
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#111111] my-6">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-white/[0.08] bg-[#141414] text-white">
                          <th className="p-3.5 font-semibold">Parameter</th>
                          <th className="p-3.5 font-semibold">
                            WordPress (CMS Tradisional)
                          </th>
                          <th className="p-3.5 font-semibold">
                            Platform No-Code (Shopify/Wix)
                          </th>
                          <th className="p-3.5 font-semibold text-accent-light">
                            Custom Stack (Next.js + Cloud)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.08] text-[#a1a1aa]">
                        <tr>
                          <td className="p-3.5 font-medium text-white">
                            Skor Kecepatan (PageSpeed)
                          </td>
                          <td className="p-3.5 text-amber-400">
                            Sedang (50 - 75)
                          </td>
                          <td className="p-3.5 text-amber-400">
                            Sedang (60 - 80)
                          </td>
                          <td className="p-3.5 text-emerald-400 font-semibold">
                            Sangat Tinggi (95 - 100)
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-medium text-white">
                            Biaya Langganan Bulanan
                          </td>
                          <td className="p-3.5">Hosting + Plugin berbayar</td>
                          <td className="p-3.5 text-rose-400">
                            Tinggi ($29 - $299/bulan)
                          </td>
                          <td className="p-3.5 text-emerald-400 font-semibold">
                            Mulai Rp 0 (Free Tier Cloud)
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-medium text-white">
                            Fleksibilitas Fitur Custom
                          </td>
                          <td className="p-3.5">
                            Terbatas pada plugin eksternal
                          </td>
                          <td className="p-3.5">
                            Sangat terbatas pada app store
                          </td>
                          <td className="p-3.5 text-emerald-400 font-semibold">
                            100% Bebas Tanpa Batas
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-medium text-white">
                            Kerentanan Keamanan
                          </td>
                          <td className="p-3.5 text-rose-400">
                            Rentan eksploitasi plugin lama
                          </td>
                          <td className="p-3.5 text-emerald-400">
                            Aman (Managed)
                          </td>
                          <td className="p-3.5 text-emerald-400 font-semibold">
                            Sangat Aman (Serverless &amp; RLS)
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3.5 font-medium text-white">
                            Kepemilikan Kode &amp; Data
                          </td>
                          <td className="p-3.5">Penuh</td>
                          <td className="p-3.5 text-rose-400">
                            Terkunci di platform mereka
                          </td>
                          <td className="p-3.5 text-emerald-400 font-semibold">
                            Penuh 100% Hak Milik Anda
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="anatomi-modern-stack" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    3. Anatomi Custom Stack: Next.js 14 App Router &amp;
                    Supabase
                  </h2>
                  <p>
                    Kombinasi <strong>Next.js 14 App Router</strong> dan{" "}
                    <strong>Supabase (PostgreSQL Cloud)</strong> adalah fondasi
                    arsitektur yang saya gunakan pada proyek produksi nyata
                    seperti sistem reservasi <em>Yuwanyie Picnic</em>. Mengapa
                    kombinasi ini menjadi standar emas?
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Server Components (RSC):</strong> HTML dirender
                      langsung di server sebelum dikirim ke browser. Pengunjung
                      tidak perlu mengunduh bundle JavaScript besar hanya untuk
                      melihat katalog menu atau halaman produk.
                    </li>
                    <li>
                      <strong>Row-Level Security (RLS) di Database:</strong>{" "}
                      Aturan otorisasi diterapkan langsung di level tabel
                      PostgreSQL, sehingga data sensitif pesanan klien tidak
                      akan pernah bocor meskipun diakses dari sisi klien.
                    </li>
                    <li>
                      <strong>Server Actions:</strong> Komunikasi data form
                      terjadi tanpa perlu membuat puluhan file controller API
                      terpisah.
                    </li>
                  </ul>

                  <p className="pt-2">
                    Berikut contoh implementasi nyata Server Action di Next.js
                    14 untuk validasi dan pemrosesan order secara aman:
                  </p>

                  {/* VS Code CodeBlock Mockup */}
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    4. Kapan Bisnis Anda Membutuhkan Mobile App Flutter?
                  </h2>
                  <p>
                    Tidak semua bisnis membutuhkan aplikasi mobile native di
                    Google Play Store atau App Store. Banyak klien datang dengan
                    permintaan &ldquo;Saya ingin aplikasi Android seperti
                    Gojek&rdquo;, padahal model bisnis mereka sebenarnya cukup
                    dipenuhi dengan <strong>Progressive Web App (PWA)</strong>{" "}
                    responsif yang jauh lebih hemat biaya.
                  </p>
                  <p>
                    Berdasarkan pengalaman saya merilis aplikasi mobile{" "}
                    <em>PanenKita</em> ke Google Play Store, bisnis Anda baru{" "}
                    <strong>benar-benar membutuhkan Flutter</strong> jika
                    memiliki kriteria berikut:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                    <div className="p-4 rounded-xl bg-[#111111] border border-white/[0.08] space-y-1.5">
                      <div className="text-emerald-400 font-semibold text-xs flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Akses Hardware &amp; Sensor</span>
                      </div>
                      <p className="text-xs text-[#71717a]">
                        Aplikasi butuh Bluetooth thermal printer kasir,
                        background GPS tracking kurir, atau kamera barcode
                        scanner intensif.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#111111] border border-white/[0.08] space-y-1.5">
                      <div className="text-emerald-400 font-semibold text-xs flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Offline-First Synchronization</span>
                      </div>
                      <p className="text-xs text-[#71717a]">
                        Pengguna (misalnya petani atau sales lapangan) harus
                        bisa mencatat data tanpa sinyal internet, lalu sync
                        otomatis saat online.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#111111] border border-white/[0.08] space-y-1.5">
                      <div className="text-emerald-400 font-semibold text-xs flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Push Notifications Re-engagement</span>
                      </div>
                      <p className="text-xs text-[#71717a]">
                        Siklus interaksi pengguna harian yang membutuhkan push
                        alert instan langsung ke status bar smartphone.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#111111] border border-white/[0.08] space-y-1.5">
                      <div className="text-emerald-400 font-semibold text-xs flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Branding &amp; Play Store Trust</span>
                      </div>
                      <p className="text-xs text-[#71717a]">
                        Target pasar Anda menuntut kredibilitas bahwa aplikasi
                        resmi dapat diunduh langsung dari Google Play Store.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="analisis-biaya-cloud" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    5. Analisis Biaya Server &amp; Pemeliharaan Jangka Panjang
                  </h2>
                  <p>
                    Salah satu keuntungan terbesar memilih arsitektur modern
                    adalah{" "}
                    <strong>
                      biaya operasional bulanan yang sangat rendah
                    </strong>{" "}
                    pada fase awal bisnis.
                  </p>
                  <p>
                    Dengan hosting di <strong>Vercel</strong> dan database di{" "}
                    <strong>Supabase</strong>, website Anda dapat berjalan pada{" "}
                    <em>Hobby / Free Tier</em> yang sudah mencakup SSL gratis,
                    CDN global 100+ lokasi, dan kapasitas ribuan pengunjung per
                    hari tanpa biaya langganan bulanan. Anda baru mulai membayar
                    ketika traffic bisnis Anda sudah menghasilkan pendapatan
                    signifikan.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="rekomendasi-matriks" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    6. Rekomendasi Tech Stack Berdasarkan Model Bisnis
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>
                        Landing Page Promosi &amp; Company Profile:
                      </strong>{" "}
                      Next.js 14 SSG + Tailwind CSS + Formspree/EmailJS. (Load
                      time &lt; 0.8 detik, SEO sempurna, biaya hosting Rp 0).
                    </li>
                    <li>
                      <strong>
                        Website Katalog Bisnis &amp; Pemesanan (F&amp;B, Jasa,
                        Booking):
                      </strong>{" "}
                      Next.js 14 App Router + Supabase PostgreSQL + Cloudinary +
                      Midtrans/QRIS.
                    </li>
                    <li>
                      <strong>
                        Aplikasi Operasional Lapangan &amp; Supply Chain:
                      </strong>{" "}
                      Flutter (Android/iOS) + Node.js/Express REST API +
                      PostgreSQL.
                    </li>
                    <li>
                      <strong>Sistem Informasi Internal &amp; Kampus:</strong>{" "}
                      Next.js + Prisma ORM + TanStack Table + NextAuth RBAC
                      (Skala ratusan ribu records).
                    </li>
                  </ul>
                </section>

                {/* Section 7 */}
                <section id="kesimpulan" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
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

            {/* Article 2: Dicoding Code Reviewer Insights */}
            {post.id === "dicoding-code-review" && (
              <>
                {/* Section 1 */}
                <section id="pengantar-reviewer" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    1. Pengantar: Pengalaman sebagai Academy Code Reviewer
                  </h2>
                  <p>
                    Selama lebih dari 2 tahun menjadi{" "}
                    <strong>Academy Code Reviewer di Dicoding Indonesia</strong>
                    , saya telah memeriksa, menganalisis, dan memberikan
                    feedback mendalam kepada lebih dari{" "}
                    <strong>258 submission proyek pemrograman web</strong>{" "}
                    (termasuk kelas React Expert, Menjadi Front-End Web
                    Developer Expert, dan Fundamental Web).
                  </p>
                  <p>
                    Dari ratusan submission tersebut, ada pola kesalahan
                    arsitektural yang berulang kali dilakukan oleh developer
                    pemula hingga menengah. Kode mereka mungkin tampak berjalan
                    lancar saat didemokan, namun menyimpan <em>memory leak</em>,{" "}
                    <em>race conditions</em>, dan potensi crash parah saat
                    diterjunkan ke lingkungan produksi berskala besar.
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs sm:text-sm text-amber-200">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">
                        Fokus Artikel:
                      </span>
                      Artikel ini merangkum 5 kesalahan paling fatal yang sering
                      ditemukan di lapangan, disertai komparasi langsung antara{" "}
                      <strong>Bad Code (Anti-Pattern)</strong> dan{" "}
                      <strong>Good Code (Clean Architecture)</strong>.
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="kesalahan-1-mutasi-state" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    2. Kesalahan #1: Direct State Mutation (Mutasi State
                    Langsung)
                  </h2>
                  <p>
                    Ini adalah kesalahan nomor satu yang paling sering
                    menggagalkan submission siswa. Mengubah isi array atau
                    object state secara langsung tanpa membuat salinan baru
                    (shallow/deep copy) membuat React tidak dapat mendeteksi
                    perubahan referensi memory, sehingga komponen{" "}
                    <strong>gagal re-render</strong>.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      <span>
                        ❌ Bad Code: Mutasi Langsung (Array push pada State)
                      </span>
                    </div>
                    <CodeBlock
                      filename="AntiPatternState.tsx"
                      language="typescript"
                      code={`// ❌ BURUK: Memodifikasi referensi array state yang sama secara langsung!
const handleAddTodo = (newTodo: string) => {
  todos.push(newTodo); // Mutasi langsung! React tidak tahu referensi berubah
  setTodos(todos);     // Alamat memori sama persis, re-render TIDAK terpanggil!
};`}
                    />

                    <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 pt-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>
                        ✅ Good Code: Immutable State Update dengan Spread
                        Operator
                      </span>
                    </div>
                    <CodeBlock
                      filename="CleanState.tsx"
                      language="typescript"
                      code={`// ✅ BENAR: Menggunakan functional update & spread operator untuk referensi baru
const handleAddTodo = (newTodo: string) => {
  setTodos((prevTodos) => [...prevTodos, newTodo]);
};`}
                    />
                  </div>
                </section>

                {/* Section 3 */}
                <section id="kesalahan-2-useeffect-loop" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    3. Kesalahan #2: Infinite Loop &amp; Dependency Terabaikan
                    pada useEffect
                  </h2>
                  <p>
                    Banyak siswa menulis fungsi async di dalam{" "}
                    <code>useEffect</code> tanpa membersihkan event listener
                    atau mengabaikan <code>dependency array</code>, yang
                    berujung pada siklus fetching data tanpa henti (infinite
                    loop) yang membakar kuota API server.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>
                        ✅ Good Code: AbortController Cleanup &amp; Exhaustive
                        Dependencies
                      </span>
                    </div>
                    <CodeBlock
                      filename="useDataFetcher.ts"
                      language="typescript"
                      code={`import { useState, useEffect } from "react";

export function useDataFetcher(apiEndpoint: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gunakan AbortController untuk membatalkan request saat komponen di-unmount
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(apiEndpoint, { signal: controller.signal });
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error("Gagal mengambil data:", err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup function mencegah memory leak & race conditions!
    return () => {
      controller.abort();
    };
  }, [apiEndpoint]); // Dependency lengkap terdefinisi

  return { data, loading };
}`}
                    />
                  </div>
                </section>

                {/* Section 4 */}
                <section id="kesalahan-3-prop-drilling" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    4. Kesalahan #3: Prop Drilling Berlebihan Tanpa State
                    Management Terpusat
                  </h2>
                  <p>
                    Mengirim props data otentikasi user hingga 5 tingkat
                    komponen anak ke bawah (
                    <code>
                      GrandParent ➔ Parent ➔ Child ➔ SubChild ➔ Button
                    </code>
                    ) membuat kode sangat rapuh terhadap perubahan arsitektur.
                  </p>
                  <p>
                    Pada submission kelas React Expert, solusinya adalah
                    memanfaatkan <strong>Redux Toolkit (RTK)</strong> atau React
                    Context untuk state global, memisahkan logika UI dari
                    manajemen data.
                  </p>
                </section>

                {/* Section 5 */}
                <section
                  id="kesalahan-4-async-error-handling"
                  className="space-y-4"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    5. Kesalahan #4: Pengabaian Error &amp; Loading State pada
                    Asynchronous API
                  </h2>
                  <p>
                    Banyak aplikasi hanya menangani skenario sukses (
                    <em>happy path</em>). Ketika internet pengguna mati atau
                    server mengembalikan error 500, layar hanya menampilkan
                    blank putih tanpa pesan apapun.
                  </p>
                  <p>
                    Setiap request asynchronous <strong>wajib</strong> memiliki
                    tiga kondisi visual:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>
                      <strong>Loading State:</strong> Skeleton loader atau
                      spinner indikator.
                    </li>
                    <li>
                      <strong>Error State:</strong> Alert ramah pengguna dengan
                      tombol coba lagi (*Retry*).
                    </li>
                    <li>
                      <strong>Success State:</strong> Penyajian data yang rapi
                      dan responsif.
                    </li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section id="kesalahan-5-semantic-html" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    6. Kesalahan #5: Div Soup &amp; Pengabaian Aksesibilitas
                    (A11y)
                  </h2>
                  <p>
                    Membuat tombol klik menggunakan tag{" "}
                    <code>&lt;div onClick=...&gt;</code> alih-alih tag semantik{" "}
                    <code>&lt;button&gt;</code> membuat website tidak dapat
                    diakses pengguna tunanetra dengan Screen Reader dan tidak
                    dapat dinavigasi via keyboard (tombol Tab dan Enter).
                  </p>
                  <p>
                    Website profesional wajib mengutamakan HTML5 semantik:{" "}
                    <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>,{" "}
                    <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, dan
                    atribut <code>aria-label</code>.
                  </p>
                </section>

                {/* Section 7 */}
                <section id="checklist-clean-code" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    7. Checklist Standar Clean Code Sebelum Naik ke Production
                  </h2>
                  <div className="space-y-2.5">
                    {[
                      "Tidak ada console.log debug yang tertinggal di kode produksi.",
                      "State selalu diperbarui secara immutable (spread operator / functional updates).",
                      "Semua efek samping (useEffect) memiliki dependency array lengkap & cleanup function.",
                      "Setiap panggilan API memiliki penanganan try-catch dan loading feedback.",
                      "Seluruh elemen interaktif memiliki tag semantik yang ramah navigasi keyboard.",
                      "Tidak ada unused imports atau variabel tak terpakai (Lolosan ESLint 0 error).",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#111111] border border-white/[0.08] text-xs sm:text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 8 */}
                <section id="kesimpulan" className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/[0.08] pb-3">
                    8. Kesimpulan
                  </h2>
                  <p>
                    Menulis kode yang bisa berjalan adalah langkah pertama,
                    namun menulis kode yang{" "}
                    <strong>
                      mudah dibaca, aman terhadap race condition, dan siap
                      di-maintain orang lain
                    </strong>{" "}
                    adalah penanda seorang software engineer profesional.
                  </p>
                </section>
              </>
            )}

            {/* Author Bio Card at Bottom */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-white/[0.08] space-y-4 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#141414] border border-white/[0.1] shrink-0">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {post.author.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#0ea5e9]/15 text-[#38bdf8] border border-[#0ea5e9]/30">
                      Author
                    </span>
                  </div>
                  <p className="text-xs text-[#71717a] font-mono">
                    {post.author.roleId}
                  </p>
                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed pt-2 font-normal">
                    {post.author.bioId}
                  </p>
                </div>
              </div>
            </div>

            {/* Next / Prev Post Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="p-4 rounded-xl bg-[#111111] border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col space-y-1 text-left group"
                >
                  <span className="text-[11px] font-mono text-[#71717a] flex items-center gap-1 group-hover:text-[#0ea5e9]">
                    <ArrowLeft className="w-3 h-3" />
                    <span>Artikel Sebelumnya</span>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#38bdf8] transition-colors line-clamp-1">
                    {prevPost.titleId}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="p-4 rounded-xl bg-[#111111] border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col space-y-1 text-right group"
                >
                  <span className="text-[11px] font-mono text-[#71717a] flex items-center justify-end gap-1 group-hover:text-[#0ea5e9]">
                    <span>Artikel Selanjutnya</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#38bdf8] transition-colors line-clamp-1">
                    {nextPost.titleId}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>

          {/* Sticky Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Table of Contents */}
            <TableOfContents items={post.toc} />

            {/* Social Share Widget */}
            <SocialShareWidget
              title={post.titleId}
              slug={post.slug}
            />

            {/* Sidebar Consultation Callout */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/[0.1] space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-[#0ea5e9] text-xs font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Punya Proyek Serupa?</span>
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed font-normal">
                Butuh arsitektur web yang rapi, cepat, dan standar industri? Diskusikan ide Anda langsung dengan saya.
              </p>
              <a
                href={`https://wa.me/6283111030309?text=${encodeURIComponent(
                  `Halo Mas Julhan, saya baru membaca artikel blog "${post.titleId}" dan ingin berdiskusi teknis.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg text-xs font-bold bg-[#0ea5e9] hover:bg-[#0284c7] text-white transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
