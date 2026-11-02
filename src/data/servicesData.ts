export interface ServiceDetail {
  id: string;
  titleId: string;
  titleEn: string;
  shortDescId: string;
  shortDescEn: string;
  fullDescId: string;
  fullDescEn: string;
  price: string;
  timeline: string;
  deliverablesId: string[];
  deliverablesEn: string[];
  techStack: string[];
  idealForId: string;
  idealForEn: string;
}

export const servicesList: ServiceDetail[] = [
  {
    id: "landing-page",
    titleId: "Landing Page & Company Profile",
    titleEn: "Landing Page & Company Profile",
    shortDescId: "Website perkenalan bisnis modern dengan kecepatan muat instan dan konversi tinggi.",
    shortDescEn: "Modern business showcase website with instant loading speeds and high conversion rate.",
    fullDescId:
      "Website satu hingga beberapa halaman yang dirancang untuk membangun citra profesional bisnis Anda, menampilkan layanan, portfolio, serta memudahkan pengunjung langsung menghubungi Anda via WhatsApp atau form penawaran.",
    fullDescEn:
      "High-impact 1-to-3 page website designed to establish credibility, showcase services, and convert visitors into qualified leads with seamless WhatsApp integrations.",
    price: "Mulai Rp 500.000",
    timeline: "3 - 7 Hari Kerja",
    deliverablesId: [
      "1 - 3 Halaman Responsif (Beranda, Tentang, Layanan, Kontak)",
      "Desain UI/UX Eksklusif & Modern (Figma)",
      "Setup Domain (.my.id / .com) & Cloud Hosting Gratis/Murah",
      "Tombol WhatsApp Floating dengan Pesan Otomatis",
      "Optimasi SEO Teknis & Pendaftaran ke Google Search Console",
      "Garansi Pemeliharaan Bug Fix 14 Hari",
    ],
    deliverablesEn: [
      "1 - 3 Responsive Pages (Home, About, Services, Contact)",
      "Custom Modern UI/UX Wireframe & Design (Figma)",
      "Domain Setup & Free/Affordable Cloud Hosting",
      "Floating WhatsApp Button with Prefilled Chat",
      "Technical SEO Optimization & Google Indexing",
      "14-Day Free Bug Fix Warranty",
    ],
    techStack: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "Vercel"],
    idealForId: "UMKM, Bisnis Lokal, Konsultan, Personal Brand, Produk Baru",
    idealForEn: "Small Businesses, Freelancers, Consultants, New Products",
  },
  {
    id: "ecommerce",
    titleId: "Toko Online & E-Commerce",
    titleEn: "E-Commerce & Online Storefront",
    shortDescId: "Sistem belanja online lengkap dengan katalog produk, keranjang, dan pembayaran otomatis.",
    shortDescEn: "Full shopping experience with product catalog, cart, and automated checkout payments.",
    fullDescId:
      "Solusi jualan online mandiri tanpa potongan komisi marketplace. Dilengkapi katalog interaktif, varian produk, keranjang belanja, integrasi QRIS & Transfer Bank otomatis, serta notifikasi pesanan ke WhatsApp admin.",
    fullDescEn:
      "Independent e-commerce storefront free from marketplace commission cuts. Includes interactive product catalogs, variants, cart, automated QRIS/Bank checkout, and WhatsApp notifications.",
    price: "Mulai Rp 1.500.000",
    timeline: "10 - 20 Hari Kerja",
    deliverablesId: [
      "Storefront Pelanggan dengan Filter & Kategori Produk",
      "Sistem Keranjang Belanja & Form Checkout Alamat",
      "Integrasi Gateway Pembayaran QRIS & Transfer Bank",
      "Admin Dashboard untuk Kelola Produk, Stok, & Pesanan",
      "Database Cloud PostgreSQL / Supabase Realtime",
      "Pelatihan Staf Mengelola Produk & Garansi 30 Hari",
    ],
    deliverablesEn: [
      "Customer Storefront with Dynamic Product Filters",
      "Cart System & Order Checkout Shipping Form",
      "Automated QRIS & Bank Transfer Payment Gateway",
      "Admin Dashboard to Manage Stock, Products, & Orders",
      "PostgreSQL / Supabase Realtime Cloud Database",
      "Staff Training for Admin Portal & 30-Day Warranty",
    ],
    techStack: ["Next.js 16", "Supabase RLS", "PostgreSQL", "Cloudinary", "Zod", "Tailwind CSS"],
    idealForId: "Bisnis Retail, F&B, Fashion, Produk Fisik / Digital",
    idealForEn: "Retail, F&B, Fashion, Physical & Digital Goods Brands",
  },
  {
    id: "dashboard",
    titleId: "Sistem Manajemen & Admin Dashboard",
    titleEn: "Business Management System & Dashboard",
    shortDescId: "Aplikasi web internal custom untuk operasional, pencatatan data, dan analitik bisnis.",
    shortDescEn: "Custom internal web app for operations, data records, and visual analytics.",
    fullDescId:
      "Menggantikan pencatatan manual di Excel yang terpisah menjadi satu sistem web terpusat. Cocok untuk mengelola ribuan data, manajemen inventaris, hak akses staf (RBAC), grafik analitik pendapatan, dan ekspor laporan ke Excel atau PDF.",
    fullDescEn:
      "Transition manual Excel sheets into a unified, secure cloud system. Ideal for managing thousands of data records, inventory tracking, role-based permissions (RBAC), and Excel/PDF reports.",
    price: "Mulai Rp 2.000.000",
    timeline: "14 - 30 Hari Kerja",
    deliverablesId: [
      "Tabel Data Performa Tinggi dengan Pencarian & Filter Cepat",
      "Sistem Autentikasi Pengguna & Hak Akses Bertingkat (RBAC)",
      "Dashboard Statistik Grafik Interaktif (Recharts)",
      "Fitur Ekspor Laporan Otomatis ke Excel (ExcelJS) & PDF",
      "Arsitektur Database Terstruktur (Prisma ORM + PostgreSQL)",
      "Dokumentasi Penggunaan Sistem & Garansi 30 Hari",
    ],
    deliverablesEn: [
      "High-Performance Data Tables with Instant Filters",
      "User Authentication & Role-Based Permissions (RBAC)",
      "Interactive Visual Analytics Charts (Recharts)",
      "Automated Excel (ExcelJS) & PDF Report Generators",
      "Robust Database Schema (Prisma ORM + PostgreSQL)",
      "System Documentation Manual & 30-Day Warranty",
    ],
    techStack: ["Next.js 16", "TypeScript", "Prisma ORM", "PostgreSQL", "Recharts", "TanStack Table"],
    idealForId: "Institusi Pendidikan, Kantor, Perusahaan Menengah, Bisnis Jasa",
    idealForEn: "Educational Institutions, Offices, Mid-sized Firms, Service Agencies",
  },
  {
    id: "mobile-app",
    titleId: "Aplikasi Mobile Android (Flutter)",
    titleEn: "Android Mobile App (Flutter/Dart)",
    shortDescId: "Aplikasi Android native performa tinggi siap rilis di Google Play Store.",
    shortDescEn: "High-performance native Android application ready for Google Play Store publishing.",
    fullDescId:
      "Aplikasi mobile berbasis Flutter yang menawarkan animasi halus 60fps, UI interaktif, integrasi notifikasi push, penyimpanan lokal, serta koneksi ke RESTful API backend Anda.",
    fullDescEn:
      "Flutter-based mobile app offering fluid 60fps animations, interactive UI, push notifications, offline caching, and seamless connection to RESTful backend APIs.",
    price: "Mulai Rp 2.500.000",
    timeline: "14 - 30 Hari Kerja",
    deliverablesId: [
      "Desain UI/UX Mobile Khusus di Figma",
      "Aplikasi Android Siap Rilis (APK & AAB Bundle)",
      "Bantuan Pendaftaran & Rilis ke Google Play Store",
      "Integrasi Otentikasi Pengguna & API Backend",
      "Pengujian Fungsionalitas Lengkap (Unit Testing & UAT)",
      "Garansi Perbaikan Bug 30 Hari Pasca Rilis",
    ],
    deliverablesEn: [
      "Custom Mobile UI/UX Design in Figma",
      "Production-Ready Android Package (APK & AAB)",
      "Google Play Store Submission & Publishing Assistance",
      "User Auth Integration & Backend API Sync",
      "Comprehensive Testing (Unit Testing & Real UAT)",
      "30-Day Post-Launch Bug Fix Warranty",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "REST API", "State Management Provider/Bloc"],
    idealForId: "Startup, Komunitas, Platform Konsumen, Aplikasi Lapangan",
    idealForEn: "Startups, Communities, Customer Apps, Field Operations",
  },
  {
    id: "bundle-app",
    titleId: "Bundle Terpadu: Website + Mobile App",
    titleEn: "Unified Bundle: Web App + Mobile Flutter",
    shortDescId: "Satu ekosistem lengkap: website publik, dashboard admin, dan aplikasi Android dari satu tim.",
    shortDescEn: "Complete digital ecosystem: web app, admin portal, and Android app from one unified team.",
    fullDescId:
      "Paket terlengkap untuk bisnis yang ingin langsung memiliki website modern sekaligus aplikasi Android yang saling tersinkronisasi dalam satu database dan backend yang sama.",
    fullDescEn:
      "The complete package for businesses requiring a modern web portal and synchronized Android application operating on a unified database and API backend.",
    price: "Mulai Rp 3.500.000",
    timeline: "21 - 45 Hari Kerja",
    deliverablesId: [
      "Website Next.js 16 + Aplikasi Mobile Flutter",
      "Satu Backend RESTful API Terpadu & Database PostgreSQL",
      "Admin Dashboard Web untuk Memantau Seluruh Data",
      "Publikasi Website ke Domain Sendiri & App ke Play Store",
      "Integrasi Gateway Pembayaran & Notifikasi Sistem",
      "Dukungan Prioritas Dedicated & Garansi 45 Hari",
    ],
    deliverablesEn: [
      "Next.js 16 Web Portal + Flutter Mobile App",
      "Unified RESTful API Backend & PostgreSQL Database",
      "Central Web Admin Dashboard for Real-time Control",
      "Custom Domain Deployment & Google Play Store Publishing",
      "Payment Gateway Integration & System Notifications",
      "Dedicated Priority Support & 45-Day Warranty",
    ],
    techStack: ["Next.js 16", "Flutter", "Express.js", "PostgreSQL", "Supabase", "Cloudinary"],
    idealForId: "Bisnis Skala Menengah, Startup Agritech/Fintech/F&B, Brand Berkembang",
    idealForEn: "Growing Brands, Agritech/Fintech/F&B Startups, Established Businesses",
  },
  {
    id: "blog-portal",
    titleId: "Blog & Portal Konten / Berita",
    titleEn: "Blog & Content News Portal",
    shortDescId: "Website media artikel ultra cepat dengan optimasi SEO Google dan manajemen MDX.",
    shortDescEn: "Lightning-fast content and editorial portal with Google SEO and MDX engine.",
    fullDescId:
      "Portal konten dan blog yang memprioritaskan skor performa Google (100% Core Web Vitals). Dilengkapi pencarian kata kunci real-time, filter kategori, penomoran halaman, estimasi waktu baca, serta dukungan penulisan artikel tanpa coding.",
    fullDescEn:
      "Content publishing portal optimized for 100% Core Web Vitals. Features real-time keyword search, category filters, pagination, reading time calculators, and code-free article management.",
    price: "Mulai Rp 800.000",
    timeline: "5 - 10 Hari Kerja",
    deliverablesId: [
      "Halaman List Artikel dengan Filter Kategori & Pencarian Real-time",
      "Halaman Baca Detail dengan Daftar Isi Otomatis (Table of Contents)",
      "Syntax Highlighter untuk Potongan Kode Pemrograman (Bila Diperlukan)",
      "Widget Berbagi ke WhatsApp, LinkedIn, & Twitter/X",
      "Sitemap XML & Robots.txt Otomatis untuk Peringkat Google",
      "Garansi Bug Fix 14 Hari",
    ],
    deliverablesEn: [
      "Article Grid with Category Tabs & Real-time Search",
      "Article Reader with Automated Table of Contents",
      "Syntax Code Highlighting with One-Click Copy",
      "Social Share Widget (WhatsApp, LinkedIn, X)",
      "Automated XML Sitemap & Robots.txt for Google SEO",
      "14-Day Free Bug Fix Warranty",
    ],
    techStack: ["Next.js 16", "MDX", "Tailwind CSS", "TypeScript", "Vercel"],
    idealForId: "Media Online, Kreator Konten, Komunitas, Edukasi, Portal Berita",
    idealForEn: "Online Media, Content Creators, Communities, Educators, News Portals",
  },
];

export const workflowSteps = [
  {
    step: "01",
    titleId: "Konsultasi & Discovery Kebutuhan",
    titleEn: "Consultation & Requirements Discovery",
    descId:
      "Kita mendiskusikan visi, target pengguna, fitur yang diinginkan, serta anggaran Anda melalui WhatsApp atau Google Meet. 100% gratis tanpa komitmen.",
    descEn:
      "We discuss your product vision, target audience, key features, and budget via WhatsApp or video call. 100% free with no strings attached.",
    timeframe: "1 - 2 Hari",
  },
  {
    step: "02",
    titleId: "Perancangan UI/UX & Arsitektur Database",
    titleEn: "UI/UX Prototyping & Database Architecture",
    descId:
      "Saya merancang antarmuka visual di Figma dan menyusun struktur database PostgreSQL yang aman, efisien, dan siap dikembangkan jangka panjang.",
    descEn:
      "I craft interactive UI designs in Figma and model clean, scalable PostgreSQL schemas prepared for long-term growth.",
    timeframe: "2 - 5 Hari",
  },
  {
    step: "03",
    titleId: "Sprint Coding & Clean Development",
    titleEn: "Clean Coding & Development Sprints",
    descId:
      "Proses penulisan kode menggunakan Next.js dan Flutter berstandar industri. Anda akan diberikan tautan live staging untuk memantau progress secara berkala.",
    descEn:
      "Writing clean, modular code in Next.js and Flutter adhering to expert industry benchmarks, with live staging access to monitor milestones.",
    timeframe: "Sesuai Paket",
  },
  {
    step: "04",
    titleId: "Quality Assurance, UAT & Uji Beban",
    titleEn: "Testing, UAT & Quality Assurance",
    descId:
      "Pengujian menyeluruh meliputi fungsionalitas tombol, keamanan database, kompatibilitas mobile, dan kecepatan akses di seluruh perangkat.",
    descEn:
      "Rigorous end-to-end testing across mobile responsiveness, database security, cross-browser compatibility, and sub-second load speeds.",
    timeframe: "2 - 4 Hari",
  },
  {
    step: "05",
    titleId: "Peluncuran Live & Serah Terima Penuh",
    titleEn: "Live Production Launch & Full Handoff",
    descId:
      "Deployment ke domain resmi Anda, publikasi ke cloud/Play Store, pelatihan cara penggunaan sistem, serta penyerahan 100% hak milik kode (source code).",
    descEn:
      "Production deployment to your custom domain/Play Store, staff operational walkthrough, and complete 100% source code ownership handover.",
    timeframe: "1 Hari",
  },
];

export const servicesFAQs = [
  {
    qId: "Bagaimana sistem pembayaran untuk pengerjaan proyek?",
    qEn: "How does the payment schedule work?",
    aId:
      "Sistem pembayaran dibagi menjadi 2 tahap: DP 50% di awal setelah ruang lingkup kerja dan proposal disepakati, dan pelunasan 50% setelah website/aplikasi selesai diuji di server staging dan siap dipublikasikan ke domain resmi Anda.",
    aEn:
      "Payments are split into two transparent milestones: 50% deposit upon proposal agreement, and the remaining 50% balance after staging verification when the system is ready to launch on your domain.",
  },
  {
    qId: "Apakah source code (kode sumber) menjadi hak milik saya?",
    qEn: "Do I own the full source code after project completion?",
    aId:
      "Ya, 100%! Setelah pelunasan, seluruh hak milik kode sumber (GitHub repository), akun database, dan aset desain diserahkan sepenuhnya kepada Anda tanpa royalti atau lisensi terikat.",
    aEn:
      "Yes, 100%! Following final settlement, complete ownership of the GitHub repository, database credentials, and Figma assets are transferred directly to you with zero royalty ties.",
  },
  {
    qId: "Apakah saya dibantu untuk pembelian domain dan hosting?",
    qEn: "Will you help me set up custom domains and cloud hosting?",
    aId:
      "Tentu saja. Saya akan memandu dan membantu pemilihan domain (.com, .id, .co.id, dll) serta konfigurasi cloud server yang optimal dan hemat biaya (seperti Vercel, Supabase, atau Cloud VPS) atas nama akun Anda sendiri.",
    aEn:
      "Absolutely. I assist in purchasing your preferred domain and configure high-performance cloud infrastructure (such as Vercel, Supabase, or VPS) under your own account.",
  },
  {
    qId: "Bagaimana jika ada error atau bug setelah website diluncurkan?",
    qEn: "What happens if a bug or issue occurs after launch?",
    aId:
      "Setiap paket layanan dilengkapi Garansi Pemeliharaan Gratis (14 hingga 45 hari tergantung paket). Selama masa garansi, perbaikan bug atau error teknis akan ditangani tanpa biaya tambahan.",
    aEn:
      "Every project includes a Free Maintenance Warranty (14 to 45 days depending on the plan). Any technical bug or unexpected error during this period is resolved with zero extra charge.",
  },
  {
    qId: "Apakah saya bisa meminta kustomisasi fitur di luar paket yang tertera?",
    qEn: "Can I request custom features outside the predefined packages?",
    aId:
      "Sangat bisa! Paket harga di atas adalah acuan umum. Jika bisnis Anda memerlukan integrasi API khusus, AI, kalkulator kompleks, atau arsitektur unik, kita bisa menyusun penawaran khusus sesuai kebutuhan Anda.",
    aEn:
      "Certainly! The packages represent common baseline solutions. If your business requires specialized API integrations, AI workflows, or unique architectures, I provide tailored custom quotes.",
  },
];

