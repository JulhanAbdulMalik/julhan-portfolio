export interface ServiceDetail {
  id: string;
  titleId: string;
  titleEn: string;
  shortDescId: string;
  shortDescEn: string;
  fullDescId: string;
  fullDescEn: string;
  price: string;
  originalPrice: string;
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
    titleId: "Website Bisnis & Profil Usaha",
    titleEn: "Business Website & Company Profile",
    shortDescId: "Website perkenalan bisnis modern, cepat, elegan, dan fokus meningkatkan kepercayaan calon klien.",
    shortDescEn: "Modern, high-performance business website built to establish credibility and capture qualified leads.",
    fullDescId:
      "Website profil usaha yang dirancang untuk membangun citra profesional bisnis Anda, menampilkan profil perusahaan, legalitas usaha, serta memudahkan calon pelanggan langsung menghubungi Anda via WhatsApp atau formulir penawaran otomatis.",
    fullDescEn:
      "A tailored company profile website designed to elevate your brand presence, showcase services, and convert traffic into leads through direct WhatsApp integrations.",
    originalPrice: "Rp 4.000.000",
    price: "Mulai Rp 2.500.000",
    timeline: "± 15 Hari Kerja",
    deliverablesId: [
      "1 - 3 Halaman Responsif Cepat (Beranda, Profil, Layanan, Kontak)",
      "Desain Antarmuka Premium Eksklusif & Modern yang Diimplementasikan Langsung (Bersih, Elegan & Responsif)",
      "Setup Domain (.com / .id / .my.id / .web.id) & Deployment ke Cloud VPS Berkecepatan Tinggi",
      "Tombol WhatsApp Floating dengan Pesan Otomatis Interaktif",
      "Halaman 'Tentang Kami', Portofolio Karya, & Layanan Bisnis Terstruktur",
      "Optimasi SEO Google Teknis & Pendaftaran Google Search Console",
      "Koneksi Google Analytics 4 untuk Pantau Jumlah Pengunjung, Sumber Traffic, & Perilaku Pengguna",
      "Garansi Resmi Perbaikan Bug 30 Hari Kalender Penuh",
    ],
    deliverablesEn: [
      "1 - 3 Ultra-fast Responsive Pages (Home, About, Services, Contact)",
      "Premium Modern UI/UX Design Implemented Directly (Clean, Elegant & Responsive)",
      "Custom Domain Setup (.com / .id / .my.id / .web.id) & High-Speed Cloud VPS Deployment",
      "Interactive Floating WhatsApp Button with Prefilled Chat",
      "Structured 'About Us', Portfolio, & Business Services Pages",
      "Technical Google SEO Optimization & Search Console Setup",
      "Google Analytics 4 Setup to Track Visitors, Traffic Sources, & User Behavior",
      "Official 30 Full Calendar Days Free Bug Fix Warranty",
    ],
    techStack: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "Cloud VPS"],
    idealForId: "UMKM, Bisnis Lokal, Konsultan, Perusahaan Jasa, Personal Brand",
    idealForEn: "Small Businesses, Local Brands, Consultants, Service Firms",
  },
  {
    id: "coffee-shop",
    titleId: "Website Coffee Shop & Restaurant",
    titleEn: "Coffee Shop & Restaurant Web System",
    shortDescId: "Sistem web resto & kafe terpadu: landing page estetik, e-menu QR meja, pemesanan dine-in, pembayaran QRIS, nota digital, dan admin laporan.",
    shortDescEn: "Comprehensive F&B web platform: aesthetic storefront, table QR ordering, automated payments, digital receipts, and admin reports.",
    fullDescId:
      "Solusi ekosistem digital lengkap untuk bisnis kuliner modern (Coffee Shop, Restoran, Kafe, & Bistro). Menggabungkan landing page publik yang elegan untuk branding, sistem e-menu interaktif berbasis scan QR nomor meja, pemesanan mandiri (dine-in & takeaway), pembayaran QRIS otomatis, penerbitan nota/struk digital, hingga panel admin kasir/dapur untuk memantau pesanan masuk dan rekapitulasi laporan omzet harian ke format Excel/PDF.",
    fullDescEn:
      "An all-in-one digital ordering ecosystem tailored for modern F&B businesses. Combines an aesthetic brand website, QR code table ordering, automated QRIS payments, digital receipt generation, and real-time kitchen/cashier admin dashboard with Excel sales analytics.",
    originalPrice: "Rp 9.000.000",
    price: "Mulai Rp 5.500.000",
    timeline: "30 - 60 Hari Kerja",
    deliverablesId: [
      "Landing Page Publik Estetik Resto/Kafe (Branding, Galeri Suasana, Jam Operasional, & Google Maps)",
      "Katalog E-Menu Digital Interaktif & Sistem Scan QR Nomor Meja (Hemat Biaya Cetak Menu Fisik)",
      "Sistem Pemesanan Mandiri Dine-in & Takeaway (Pelanggan Pesan Langsung dari HP Tanpa Antre)",
      "Integrasi Gateway Pembayaran Otomatis QRIS Dinamis & Virtual Account Bank",
      "Penerbitan Struk Digital & Cetak Fisik Otomatis (Print ke Printer Kasir Thermal + Format PDF)",
      "Dashboard Admin Kasir & Dapur (Live Order Masuk, Manajemen Menu/Harga, & Update Stok)",
      "Laporan Omzet Penjualan Harian/Bulanan dengan Fitur Ekspor ke Format Excel & PDF",
      "Setup Domain (.com / .id / .web.id), Deployment Cloud VPS Aman, & Garansi Bug 60 Hari Kalender",
    ],
    deliverablesEn: [
      "Aesthetic Public Showcase Website (Brand Story, Photo Gallery, Operational Hours, & Google Maps)",
      "Interactive QR Code Digital Menu for Table-Side Browsing (Eliminate Physical Printing Overhead)",
      "Self-Service Dine-In & Takeaway Ordering Engine Directly from Smartphones",
      "Automated Instant QRIS & Bank Virtual Account Payment Gateway Integration",
      "Automated Digital & Physical Receipt Printing (Thermal Kasir Printer + PDF Format)",
      "Kitchen & Cashier Live Admin Portal (Real-time Incoming Orders, Menu Pricing, & Stock Toggles)",
      "Daily & Monthly Revenue Analytics Dashboard with One-Click Excel/PDF Export",
      "Custom Domain Setup (.com / .id / .web.id), Secure Cloud VPS Deployment, & 60-Day Warranty",
    ],
    techStack: ["Next.js 16", "PostgreSQL", "Prisma ORM", "QRIS Gateway", "Tailwind CSS", "PDF Engine"],
    idealForId: "Coffee Shop Modern, Restaurant, Kafe & Resto, Bistro, Usaha Kuliner F&B Berkembang",
    idealForEn: "Modern Coffee Shops, Casual & Fine Dining Restaurants, Cafes & Bistros, Growing F&B Brands",
  },
  {
    id: "ecommerce",
    titleId: "Toko Online & Pemesanan Otomatis",
    titleEn: "Online Store & Automated Ordering",
    shortDescId: "Sistem jualan online mandiri tanpa potongan komisi, pembayaran QRIS otomatis, dan kelola stok mudah.",
    shortDescEn: "Independent online storefront free from marketplace commissions, featuring automated QRIS checkout.",
    fullDescId:
      "Platform belanja online mandiri untuk brand Anda tanpa potongan komisi marketplace. Dilengkapi katalog produk interaktif, varian produk, keranjang belanja, serta checkout pembayaran QRIS & Transfer Bank otomatis.",
    fullDescEn:
      "Commission-free e-commerce store with dynamic product catalog, inventory tracking, and instant automated QRIS & Bank payments.",
    originalPrice: "Rp 9.500.000",
    price: "Mulai Rp 5.800.000",
    timeline: "30 - 60 Hari Kerja",
    deliverablesId: [
      "Katalog Produk Dinamis dengan Kategori, Filter, & Pencarian Cepat",
      "Halaman Detail Produk dengan Galeri Foto, Varian, & Deskripsi Lengkap",
      "Sistem Keranjang Belanja & Formulir Checkout Pengiriman",
      "Integrasi Gateway Pembayaran QRIS & Transfer Bank Otomatis",
      "Sistem Notifikasi Status Pesanan Otomatis ke Email Pelanggan",
      "Dashboard Admin untuk Mengelola Produk, Stok, & Status Pesanan",
      "Optimasi Meta SEO Tiap Halaman Produk & Verifikasi Google Search Console agar Mudah Ditemukan di Google",
      "Database Cloud PostgreSQL Aman, Pelatihan Staf, & Garansi Bug 60 Hari Kalender",
    ],
    deliverablesEn: [
      "Dynamic Product Catalog with Category Filtering & Instant Search",
      "Product Detail Pages with Photo Gallery, Variants, & Full Descriptions",
      "Shopping Cart & Checkout Delivery Form",
      "Automated QRIS & Bank Transfer Payment Gateway",
      "Automated Order Status Email Notifications to Customers",
      "Admin Dashboard to Manage Stock, Orders, & Revenue Analytics",
      "Per-Page SEO Meta Optimization & Google Search Console Verification for Better Google Discovery",
      "Secure PostgreSQL Cloud Database, Staff Training, & 60 Full Calendar Days Warranty",
    ],
    techStack: ["Next.js 16", "PostgreSQL", "Prisma ORM", "Midtrans / Xendit", "Tailwind CSS"],
    idealForId: "Bisnis Retail, F&B, Fashion, Produk Fisik / Digital, Brand Berkembang",
    idealForEn: "Retail, F&B, Fashion Brands, Physical & Digital Goods",
  },
  {
    id: "dashboard",
    titleId: "Sistem Kasir, Inventaris & Dashboard Operasional",
    titleEn: "POS, Inventory & Operations Dashboard",
    shortDescId: "Gantikan pencatatan Excel terpisah menjadi satu sistem web manajemen terpusat dan analitik real-time.",
    shortDescEn: "Replace manual disconnected Excel sheets with a unified cloud management system and real-time analytics.",
    fullDescId:
      "Aplikasi web custom untuk efisiensi operasional internal. Mengelola ribuan data, pencatatan transaksi kasir, inventaris barang, hak akses staf bertingkat (RBAC), grafik pendapatan real-time, dan ekspor laporan otomatis ke Excel atau PDF.",
    fullDescEn:
      "Custom internal operations dashboard to track inventory, staff transactions, multi-tiered role access (RBAC), sales visual charts, and automated Excel/PDF reports.",
    originalPrice: "Rp 10.000.000",
    price: "Mulai Rp 6.000.000",
    timeline: "30 - 60 Hari Kerja",
    deliverablesId: [
      "Tabel Data Cepat dengan Pencarian, Sorting, & Filter Canggih",
      "Sistem Autentikasi Pengguna & Hak Akses Bertingkat (RBAC)",
      "Dashboard Statistik Grafik Interaktif Real-time (Recharts)",
      "Fitur Ekspor Laporan Otomatis ke Format Excel (ExcelJS) & PDF",
      "Arsitektur Database Terstruktur (Prisma ORM + PostgreSQL)",
      "Manajemen Stok & Inventaris Barang dengan Peringatan Stok Menipis Otomatis",
      "Pelatihan Staf Mengoperasikan Sistem Admin secara Langsung & Komprehensif",
      "Garansi Resmi Perbaikan Bug & Keandalan Sistem 60 Hari Kalender Penuh",
    ],
    deliverablesEn: [
      "High-Performance Data Tables with Advanced Filters & Sorting",
      "User Authentication & Role-Based Access Control (RBAC)",
      "Interactive Real-time Visual Analytics Charts (Recharts)",
      "Automated One-click Excel & PDF Export Tools",
      "Robust Database Architecture (Prisma ORM + PostgreSQL)",
      "Stock & Inventory Management with Automatic Low-Stock Alerts",
      "Direct & Comprehensive Staff Training on Admin System Operation",
      "Official 60 Full Calendar Days Bug Fix & System Reliability Warranty",
    ],
    techStack: ["Next.js 16", "TypeScript", "Prisma ORM", "PostgreSQL", "Recharts", "TanStack Table"],
    idealForId: "Perusahaan Menengah, Kantor Operasional, Distributor, Bisnis Jasa",
    idealForEn: "Mid-sized Enterprises, Operational Offices, Distributors, Service Firms",
  },
  {
    id: "mobile-app",
    titleId: "Aplikasi Mobile Android & iOS (Flutter)",
    titleEn: "Cross-Platform Mobile App (Flutter)",
    shortDescId: "Aplikasi mobile responsif performa native 60fps yang siap dipublikasikan ke Google Play Store.",
    shortDescEn: "Native-performance 60fps mobile application ready for deployment on Google Play Store & iOS.",
    fullDescId:
      "Aplikasi smartphone multiplatform berbasis Flutter dengan animasi mulus, UI interaktif modern, notifikasi push, penyimpanan lokal, serta koneksi terintegrasi ke RESTful API server Anda.",
    fullDescEn:
      "High-performance cross-platform Flutter application with fluid animations, push notifications, offline caching, and seamless RESTful API backend connectivity.",
    originalPrice: "Rp 12.000.000",
    price: "Mulai Rp 7.500.000",
    timeline: "30 - 60 Hari Kerja",
    deliverablesId: [
      "Desain UI/UX Mobile Modern Diimplementasikan Langsung dengan Tampilan Native & Mulus",
      "Aplikasi Android Siap Rilis (APK & AAB Production Bundle)",
      "Bantuan Pendaftaran Akun & Peluncuran ke Google Play Store",
      "Integrasi Autentikasi Akun, Profil, & RESTful API Backend",
      "Fitur Notifikasi Push Real-time via Firebase (Update Status, Promo, & Pengingat Penting langsung ke HP)",
      "Mode Akses Offline: Data Tersimpan Lokal di Perangkat agar Aplikasi Tetap Bisa Digunakan Tanpa Internet",
      "Pengujian Fungsionalitas Lengkap di Berbagai Tipe & Ukuran Smartphone",
      "Garansi Resmi Perbaikan Bug 60 Hari Kalender Penuh",
    ],
    deliverablesEn: [
      "Modern Mobile UI/UX Design Implemented Directly with Native & Smooth Appearance",
      "Production-Ready Android Packages (APK & AAB)",
      "Google Play Store Account Setup & Submission Guidance",
      "User Authentication & RESTful API Integration",
      "Real-time Firebase Push Notifications (Status Updates, Promos, & Important Reminders Sent Directly to Device)",
      "Offline Mode: Local Data Storage so the App Works Even Without an Internet Connection",
      "Full Functionality Testing Across Various Smartphone Types & Screen Sizes",
      "Official 60 Full Calendar Days Free Bug Fix Warranty",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "REST API", "Provider / BLoC"],
    idealForId: "Startup, Komunitas, Platform Konsumen, Aplikasi Petugas Lapangan",
    idealForEn: "Startups, Communities, Customer Portals, Field Workforce Apps",
  },
  {
    id: "bundle-app",
    titleId: "Bundle Ekosistem Web + Aplikasi Mobile Flutter",
    titleEn: "Unified Bundle: Web Portal + Mobile App",
    shortDescId: "Solusi terlengkap: website publik, dashboard admin, dan aplikasi Android dari satu tim terpadu.",
    shortDescEn: "The ultimate digital ecosystem: public website, admin dashboard, and Android app from one unified team.",
    fullDescId:
      "Paket all-in-one untuk bisnis yang ingin langsung memiliki website modern sekaligus aplikasi Android yang saling terhubung dalam satu database dan server backend yang sama secara real-time.",
    fullDescEn:
      "An end-to-end digital ecosystem combining a modern web portal and synchronized Flutter mobile application running on a unified cloud database and backend.",
    originalPrice: "Rp 19.500.000",
    price: "Mulai Rp 13.000.000",
    timeline: "45 - 90 Hari Kerja",
    deliverablesId: [
      "Website Next.js 16 + Aplikasi Mobile Android (Flutter)",
      "Satu Backend RESTful API Terpadu & Database Cloud PostgreSQL",
      "Dashboard Admin Web untuk Memantau Seluruh Aktivitas Pengguna",
      "Desain UI/UX Konsisten antara Aplikasi Mobile & Website (Unified Design System)",
      "Publikasi Domain Resmi & Rilis ke Google Play Store",
      "Integrasi Gateway Pembayaran QRIS Dinamis & Transfer Bank Otomatis pada Web & Aplikasi Mobile",
      "Sistem Notifikasi In-App Real-time untuk Update Transaksi & Aktivitas Pengguna",
      "Pelatihan Tim Mengoperasikan Web Admin & Aplikasi Mobile, serta Garansi Bug 90 Hari Kalender",
    ],
    deliverablesEn: [
      "Next.js 16 Web Portal + Flutter Android Mobile App",
      "Unified RESTful API Backend & PostgreSQL Cloud Database",
      "Central Web Admin Portal for Operations & Real-time Analytics",
      "Consistent UI/UX Design Across Mobile App & Website (Unified Design System)",
      "Custom Domain Deployment & Google Play Store Publishing",
      "Dynamic QRIS & Bank Transfer Payment Gateway on Both Web & Mobile App",
      "Real-time In-App Notification System for Transaction & User Activity Updates",
      "Team Training on Web Admin & Mobile App, plus 90 Full Calendar Days Bug Warranty",
    ],
    techStack: ["Next.js 16", "Flutter", "Express.js", "PostgreSQL", "Supabase", "Prisma ORM"],
    idealForId: "Bisnis Berkembang, Startup Agritech/Fintech/F&B, Perusahaan Komersial",
    idealForEn: "Scaling Brands, Agritech/Fintech Startups, Commercial Enterprises",
  },
  {
    id: "redesign-opt",
    titleId: "Renovasi & Optimasi Kecepatan Website Lama",
    titleEn: "Website Redesign & Speed Optimization",
    shortDescId: "Perbarui tampilan website lama agar modern, responsif di HP, dan bebas lemot dengan skor SEO tinggi.",
    shortDescEn: "Revamp outdated websites with modern aesthetics, lightning-fast speeds, and top-tier SEO benchmarks.",
    fullDescId:
      "Website lama Anda terasa lambat, tampilan kaku, atau kurang nyaman dibuka di HP? Kami rombak total dengan teknologi Next.js terkini. Menghasilkan skor Google Core Web Vitals 95+, navigasi mulus, dan desain elegan yang memikat pengunjung.",
    fullDescEn:
      "Transform sluggish, outdated websites into ultra-fast, modern web experiences with Next.js, achieving 95+ Core Web Vitals and polished mobile responsiveness.",
    originalPrice: "Rp 3.500.000",
    price: "Mulai Rp 2.000.000",
    timeline: "± 15 Hari Kerja",
    deliverablesId: [
      "Redesign Antarmuka Visual Modern, Bersih, & Nyaman di Smartphone",
      "Pembersihan Kode Usang & Migrasi ke Framework Modern (Next.js)",
      "Optimasi Total Kecepatan Muat (Skor Google Core Web Vitals 95+)",
      "Perbaikan Struktur Meta SEO, OpenGraph Sosial Media, & Sitemap",
      "Pembaruan Konten, Foto, & Teks Website Sesuai Kebutuhan Bisnis Terkini",
      "Pemasangan SSL Aktif & Konfigurasi Keamanan Dasar Server",
      "Pengujian Kompatibilitas di Berbagai Browser & Perangkat Mobile",
      "Migrasi & Deployment ke Cloud VPS Berkecepatan Tinggi & Garansi Bug 30 Hari",
    ],
    deliverablesEn: [
      "Modern UI/UX Visual Revamp Optimized for Mobile Screens",
      "Legacy Code Cleanup & Migration to Next.js Modern Stack",
      "Total Page Speed Optimization (95+ Core Web Vitals)",
      "Technical SEO Overhaul: Meta Tags, OpenGraph, & Clean Sitemaps",
      "Content, Photos, & Text Updates to Match Current Business Needs",
      "SSL Certificate Installation & Basic Server Security Configuration",
      "Cross-browser & Multi-device Compatibility Testing",
      "Migration & Deployment to High-Speed Cloud VPS & 30-Day Bug Warranty",
    ],
    techStack: ["Next.js 16", "Tailwind CSS", "TypeScript", "Google Lighthouse", "Cloud VPS"],
    idealForId: "Pemilik Website Lama (WordPress/PHP Jadul) yang Ingin Modern & Cepat",
    idealForEn: "Owners of Outdated Websites Seeking Modern Speed & Fresh Aesthetics",
  },
  {
    id: "backend-api",
    titleId: "Pembuatan API Backend & Integrasi Sistem",
    titleEn: "Backend API & System Integration",
    shortDescId: "Bangun arsitektur server aman, database cepat, serta koneksi otomatis ke payment gateway dan layanan cloud storage.",
    shortDescEn: "Build secure server architectures, scalable databases, and automated third-party API integrations.",
    fullDescId:
      "Layanan pengembangan RESTful API backend yang aman, terstruktur, dan berkecepatan tinggi. Siap dihubungkan ke aplikasi mobile Flutter, sistem kasir, atau payment gateway otomatis.",
    fullDescEn:
      "Architect secure, scalable RESTful APIs connecting your mobile apps, internal POS systems, and online payment gateways.",
    originalPrice: "Rp 7.500.000",
    price: "Mulai Rp 4.500.000",
    timeline: "15 - 30 Hari Kerja",
    deliverablesId: [
      "Arsitektur RESTful API Terstruktur dengan Validasi Data Ketat",
      "Desain Skema Database PostgreSQL / Supabase yang Optimal",
      "Sistem Autentikasi JWT Aman (Login, Register, Refresh Token, & Proteksi Route)",
      "Integrasi Gateway Pembayaran (QRIS, Virtual Account, E-Wallet)",
      "Integrasi Layanan Cloud Storage & CDN untuk Upload, Manajemen, & Distribusi File Aman",
      "Middleware Keamanan: Rate Limiting, CORS, & Sanitasi Input Data",
      "Dokumentasi API Lengkap & Interaktif (Swagger / Postman Collection)",
      "Garansi Keandalan Sistem & Bug Fix 60 Hari Kalender Penuh",
    ],
    deliverablesEn: [
      "Clean RESTful API Architecture with Strict Data Validation",
      "Optimized PostgreSQL / Supabase Relational Database Schemas",
      "Secure JWT Authentication System (Login, Register, Refresh Token, & Route Protection)",
      "Automated Payment Gateway Integrations (QRIS, VA, E-Wallets)",
      "Cloud Storage & CDN Integration for Secure File Upload, Management, & Distribution",
      "Security Middleware: Rate Limiting, CORS Configuration, & Input Sanitization",
      "Comprehensive Interactive API Documentation (Postman / Swagger)",
      "Official 60 Full Calendar Days Bug Fix & System Reliability Warranty",
    ],
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Supabase", "Redis"],
    idealForId: "Bisnis yang Butuh Integrasi Pembayaran atau API Khusus",
    idealForEn: "Businesses Requiring Custom Webhooks, Payment Sync, or Mobile APIs",
  },
];

export const schoolPartnershipProgram = {
  badge: "Program Khusus Sekolah & Yayasan Pendidikan",
  title: "Biaya Pembuatan Awal Rp 0,- (Gratis). Sistem Informasi Sekolah Modern & Siap Pakai.",
  description:
    "Solusi khusus untuk Sekolah, Madrasah, dan Pesantren: Kami bangunkan sistem informasi dan portal data sekolah kustom tanpa biaya pembuatan di awal (Rp 0,-). Seluruh modul dan alur kerja dirancang fleksibel menyesuaikan kebutuhan serta sistem yang sedang berjalan di sekolah Anda saat ini.",
  highlights: [
    "Investasi Awal Rp 0,- (Tanpa Biaya Pembuatan Software di Awal)",
    "Gratis Biaya Cloud Hosting, Setup Domain Sekolah, & SSL",
    "Fitur Sistem Kustom Menyesuaikan Kebutuhan & Alur Sekolah",
    "Pendampingan & Pelatihan Operator TU serta Guru sampai Mahir",
    "Skema Sewa / Subscription Fleksibel Disesuaikan dengan Kapasitas Sekolah",
    "Garansi Pemeliharaan Sistem Berkelanjutan Selama Masa Kerjasama",
  ],
  ctaText: "Konsultasi Program Sekolah",
  waMessage:
    "Halo Julhan & Tim, saya dari pihak Sekolah/Yayasan Pendidikan ingin konsultasi mengenai Program Sistem Data Sekolah dengan Biaya Pembuatan Awal Rp 0,-.",
};

export const servicesFAQs = [
  {
    qId: "Bagaimana skema pembayaran (termin) untuk pembuatan proyek?",
    qEn: "How does the project payment schedule work?",
    aId:
      "Kami menyediakan 2 opsi pembayaran transparan: (1) Skema 2 Tahap: DP 50% di awal setelah kesepakatan ruang lingkup kerja, dan pelunasan 50% setelah website/aplikasi selesai diuji di server staging kami. Atau (2) Skema 3 Tahap Milestone (khusus proyek skala menengah-besar): 30% DP awal, 40% setelah progres demo fitur utama disetujui, dan 30% saat serah terima penuh.",
    aEn:
      "We provide two transparent payment options: (1) 2-Stage standard: 50% deposit upon scope agreement and 50% balance after staging approval. Or (2) 3-Stage Milestone (for medium-large systems): 30% initial deposit, 40% after mid-point staging demo, and 30% upon final handoff.",
  },
  {
    qId: "Bagaimana cara mendapatkan estimasi atau penawaran harga untuk proyek saya?",
    qEn: "How do I get an estimate or formal quotation for my project?",
    aId:
      "Karena kebutuhan dan skala fitur setiap bisnis berbeda, kami tidak menerapkan tarif kaku. Anda dapat berkonsultasi gratis terlebih dahulu via WhatsApp untuk mendiskusikan konsep dan ruang lingkup proyek. Setelah spesifikasi disepakati bersama, kami akan menyusun penawaran transparan yang paling efisien sesuai kebutuhan nyata Anda tanpa biaya tersembunyi.",
    aEn:
      "Because every business has unique workflows and scaling requirements, we provide customized quotes rather than rigid one-size-fits-all rates. You can start with a free consultation via WhatsApp to discuss your goals. Once the scope is aligned, we deliver a transparent proposal tailored to your actual needs without hidden overheads.",
  },
  {
    qId: "Bagaimana jika ada error atau bug setelah proyek selesai diluncurkan?",
    qEn: "What happens if bugs occur after the project is launched?",
    aId:
      "Setiap proyek kami lindungi dengan Garansi Resmi Perbaikan Bug: 30 Hari untuk paket Starter, 60 Hari untuk paket Professional, dan 90 Hari Kalender Penuh untuk paket Enterprise. Selama periode ini, setiap kendala teknis atau perbaikan bug ditangani secara gratis dengan prioritas tinggi.",
    aEn:
      "Every project includes an Official Free Bug Fix Warranty: 30 days for Starter, 60 days for Professional, and 90 full calendar days for Enterprise. Any technical issues during this period are resolved at zero cost.",
  },
  {
    qId: "Apakah source code (kode sumber) menjadi hak milik saya sepenuhnya?",
    qEn: "Do I own 100% of the source code after completion?",
    aId:
      "Ya, 100%! Setelah pelunasan proyek, seluruh hak cipta dan akses kode sumber (GitHub repository), akun database cloud, serta aset desain menjadi hak milik penuh perusahaan Anda tanpa biaya royalti terikat.",
    aEn:
      "Yes, 100%! Following project settlement, complete ownership of the GitHub repository, database credentials, and design files are handed over directly to you with zero recurring royalty fees.",
  },
  {
    qId: "Bagaimana program khusus untuk Sekolah & Instansi Pendidikan?",
    qEn: "How does the special program for educational institutions work?",
    aId:
      "Untuk sekolah, madrasah, dan pesantren, kami menawarkan sistem portal akademik dan data sekolah dengan Biaya Pembuatan Awal Rp 0,- (Gratis). Sekolah cukup membayar biaya sewa & pemeliharaan bulanan yang sangat terjangkau, yang sudah mencakup cloud hosting, domain sekolah, update sistem, dan pendampingan staf.",
    aEn:
      "For schools and educational foundations, we offer initial development at Rp 0,- (Free). The school simply pays an affordable recurring subscription covering cloud hosting, maintenance, and ongoing staff support.",
  },
];
