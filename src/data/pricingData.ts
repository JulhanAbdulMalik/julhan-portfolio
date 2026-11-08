export interface PricingPlan {
  id: string;
  name: string;
  target: string;
  originalPrice: string;
  price: string;
  period?: string;
  priceSubtext?: string;
  duration: string;
  guarantee: string;
  popular: boolean;
  badge?: string;
  features: string[];
  note?: string;
  ctaText: string;
  waMessage: string;
}

export const projectPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Paket Starter",
    target: "Website Bisnis, Profil Usaha & Landing Page",
    originalPrice: "Rp 4.000.000",
    price: "Mulai Rp 2.500.000",
    duration: "± 15 Hari Kerja",
    guarantee: "Garansi 30 Hari Kalender Penuh",
    popular: false,
    features: [
      "1 - 3 Halaman Web Cepat (Next.js 16 & Tailwind)",
      "Desain Eksklusif & Nyaman di Semua Ukuran Layar HP",
      "Setup Domain Resmi (.com/.id) & Cloud Hosting Cepat",
      "Integrasi Tombol WhatsApp Floating dengan Pesan Otomatis",
      "Optimasi SEO Google Teknis & Google Search Console",
      "Garansi Resmi Perbaikan Bug 30 Hari Kalender Penuh",
    ],
    ctaText: "Pilih Paket Starter",
    waMessage: "Halo Julhan & Tim, saya tertarik dengan Paket Starter untuk pembuatan website bisnis (Mulai Rp 2.5jt).",
  },
  {
    id: "professional",
    name: "Paket Professional",
    target: "Toko Online, Kasir & Dashboard Operasional",
    originalPrice: "Rp 9.500.000",
    price: "Mulai Rp 5.800.000",
    duration: "30 - 60 Hari Kerja",
    guarantee: "Garansi 60 Hari Kalender Penuh",
    popular: true,
    badge: "Paling Populer",
    features: [
      "Semua fitur di Paket Starter",
      "Katalog Produk Dinamis / Sistem Reservasi Interaktif",
      "Pembayaran Otomatis QRIS & Transfer Bank (Gateway)",
      "Dashboard Admin untuk Kelola Data, Stok, & Transaksi",
      "Database Cloud PostgreSQL Aman & Terstruktur",
      "Fitur Ekspor Laporan Excel/PDF & Garansi Bug 60 Hari Penuh",
    ],
    ctaText: "Pilih Paket Professional",
    waMessage: "Halo Julhan & Tim, saya tertarik dengan Paket Professional untuk Toko Online / Dashboard (Mulai Rp 5.8jt).",
  },
  {
    id: "enterprise",
    name: "Bundle Web + Mobile App",
    target: "Ekosistem Web & Aplikasi Smartphone Flutter",
    originalPrice: "Rp 19.500.000",
    price: "Mulai Rp 13.000.000",
    duration: "45 - 90 Hari Kerja",
    guarantee: "Garansi 90 Hari Kalender Penuh",
    popular: false,
    badge: "Solusi Terlengkap",
    features: [
      "Website Next.js + Aplikasi Mobile Flutter (Android & iOS)",
      "Satu Backend RESTful API Terpadu & Terintegrasi Real-time",
      "Bantuan Rilis & Publikasi ke Google Play Store",
      "Keamanan Hak Akses Pengguna Bertingkat (RBAC)",
      "Dashboard Pemantauan Seluruh Aktivitas Operasional",
      "Dukungan Khusus & Garansi Bug 90 Hari Kalender Penuh",
    ],
    ctaText: "Diskusikan Proyek Bundle",
    waMessage: "Halo Julhan & Tim, saya ingin konsultasi Paket Bundle Web + Mobile App Flutter (Mulai Rp 13jt).",
  },
];

export const maintenancePlans: PricingPlan[] = [
  {
    id: "starter-care",
    name: "Starter Care",
    target: "Monitoring Server & Pemeliharaan Web",
    originalPrice: "Rp 1.250.000",
    price: "Rp 800.000",
    period: "/ bulan",
    duration: "Langganan Bulanan Fleksibel",
    guarantee: "Monitoring Uptime Cloud 24/7",
    popular: false,
    features: [
      "Gratis Biaya Cloud Server & Setup Domain",
      "Pembaruan Sertifikat SSL Keamanan Otomatis",
      "Backup Data Berkala Bulanan",
      "Pemeliharaan Rutin Performa Database",
      "Revisi Konten Ringan (Ganti Teks & Gambar Produk)",
      "Monitoring Status Uptime Server 24/7",
    ],
    note: "Khusus pemeliharaan & revisi konten, belum termasuk fitur baru",
    ctaText: "Pilih Starter Care",
    waMessage: "Halo Julhan & Tim, saya tertarik berlangganan Starter Care (Rp 800rb/bln) untuk pemeliharaan website.",
  },
  {
    id: "pro-care",
    name: "Professional Care",
    target: "Pemeliharaan Aktif Toko Online & Sistem",
    originalPrice: "Rp 1.750.000",
    price: "Rp 950.000",
    period: "/ bulan",
    duration: "Langganan Bulanan Fleksibel",
    guarantee: "Prioritas Tanggap Darurat Bug",
    popular: true,
    badge: "Paling Diminati (Hanya beda 150rb)",
    features: [
      "Semua cakupan layanan di Paket Starter Care",
      "Gratis Biaya Cloud Server & Perpanjangan Domain",
      "Pemeliharaan Database Cloud Terintegrasi",
      "Pemantauan Transaksi Payment QRIS & Bank Gateway",
      "Backup Data Mingguan Otomatis",
      "Pengembangan Fitur Baru Maks. 3x sebulan",
      "Prioritas Perbaikan Bug & Kendala Darurat",
    ],
    ctaText: "Pilih Professional Care",
    waMessage: "Halo Julhan & Tim, saya ingin berlangganan Professional Care (Rp 950rb/bln) dengan kuota 3x penambahan fitur bulanan.",
  },
  {
    id: "enterprise-care",
    name: "Virtual IT Department",
    target: "Tim IT Profesional Pribadi di Perusahaan Anda",
    originalPrice: "Rp 2.800.000",
    price: "Rp 1.500.000",
    period: "/ bulan",
    duration: "Langganan Bulanan Fleksibel",
    guarantee: "Dedicated Tech Partner",
    popular: false,
    badge: "Solusi Hemat Kantor",
    features: [
      "Semua cakupan di Starter & Professional Care",
      "Pemeliharaan Sistem Flutter & Rilis Update Play Store",
      "Pemantauan Latensi API & Optimasi Query Database",
      "Pengembangan Fitur Baru Maks. 5x sebulan",
      "Konsultasi Arsitektur & Strategi Teknologi Bulanan",
      "Dedicated WhatsApp Support Prioritas Khusus",
    ],
    note: "Hemat jutaan rupiah dibanding rekrut staf in-house (Rp 5-10jt/bln)",
    ctaText: "Sewa Tim IT Virtual",
    waMessage: "Halo Julhan & Tim, saya tertarik dengan layanan Virtual IT Department (Rp 1.5jt/bln) untuk menjadi tim IT perusahaan kami.",
  },
];

export interface FeatureMatrixRow {
  category: string;
  categoryEn: string;
  nameId: string;
  nameEn: string;
  starter: boolean | string;
  pro: boolean | string;
  bundle: boolean | string;
}

export const pricingMatrix: FeatureMatrixRow[] = [
  // Desain & Frontend
  {
    category: "Desain & Tampilan",
    categoryEn: "Design & Frontend",
    nameId: "Desain UI/UX Eksklusif (Figma Wireframe)",
    nameEn: "Custom UI/UX Wireframe (Figma)",
    starter: true,
    pro: true,
    bundle: true,
  },
  {
    category: "Desain & Tampilan",
    categoryEn: "Design & Frontend",
    nameId: "Jumlah Halaman / Modul Tampilan",
    nameEn: "Web Page Count",
    starter: "1 - 3 Halaman",
    pro: "Hingga 10 Halaman",
    bundle: "Tak Terbatas (Dynamic)",
  },
  {
    category: "Desain & Tampilan",
    categoryEn: "Design & Frontend",
    nameId: "Animasi Interaktif & Transisi Halus",
    nameEn: "Fluid Animations & Transitions",
    starter: "Standar",
    pro: "Lengkap & Halus",
    bundle: "Advanced Immersive",
  },
  {
    category: "Desain & Tampilan",
    categoryEn: "Design & Frontend",
    nameId: "Mode Tampilan Gelap & Terang (Dark/Light)",
    nameEn: "Dark & Light Mode Toggle",
    starter: true,
    pro: true,
    bundle: true,
  },

  // Backend & Database
  {
    category: "Sistem Data & Backend",
    categoryEn: "Backend & Database",
    nameId: "Database Cloud (PostgreSQL Relasional)",
    nameEn: "Cloud Database (PostgreSQL Relational)",
    starter: false,
    pro: true,
    bundle: true,
  },
  {
    category: "Sistem Data & Backend",
    categoryEn: "Backend & Database",
    nameId: "Dashboard Admin Pengelolaan Data & Stok",
    nameEn: "Admin Management Dashboard",
    starter: false,
    pro: true,
    bundle: true,
  },
  {
    category: "Sistem Data & Backend",
    categoryEn: "Backend & Database",
    nameId: "Sistem Autentikasi Pengguna & Hak Akses (RBAC)",
    nameEn: "User Authentication & RBAC",
    starter: false,
    pro: true,
    bundle: true,
  },
  {
    category: "Sistem Data & Backend",
    categoryEn: "Backend & Database",
    nameId: "Ekspor Laporan Otomatis ke Excel & PDF",
    nameEn: "Automated Excel & PDF Export",
    starter: false,
    pro: true,
    bundle: true,
  },

  // Transaksi & Integrasi
  {
    category: "Transaksi & Integrasi",
    categoryEn: "Transactions & Integrations",
    nameId: "Integrasi Tombol WhatsApp Direct Chat",
    nameEn: "WhatsApp Direct Chat Button",
    starter: true,
    pro: true,
    bundle: true,
  },
  {
    category: "Transaksi & Integrasi",
    categoryEn: "Transactions & Integrations",
    nameId: "Integrasi Pembayaran Otomatis QRIS & Bank",
    nameEn: "Automated QRIS & Bank Payment Gateway",
    starter: false,
    pro: true,
    bundle: true,
  },
  {
    category: "Transaksi & Integrasi",
    categoryEn: "Transactions & Integrations",
    nameId: "Notifikasi Otomatis ke WhatsApp Admin",
    nameEn: "Automated WhatsApp Alerts",
    starter: false,
    pro: "By Request",
    bundle: true,
  },

  // Mobile App
  {
    category: "Aplikasi Smartphone",
    categoryEn: "Mobile Application",
    nameId: "Aplikasi Mobile Multiplatform (Flutter)",
    nameEn: "Cross-Platform Mobile App (Flutter)",
    starter: false,
    pro: false,
    bundle: true,
  },
  {
    category: "Aplikasi Smartphone",
    categoryEn: "Mobile Application",
    nameId: "Rilis & Publikasi ke Google Play Store",
    nameEn: "Google Play Store Publishing",
    starter: false,
    pro: false,
    bundle: true,
  },

  // SEO & Performa
  {
    category: "SEO & Kecepatan",
    categoryEn: "SEO & Performance",
    nameId: "Skor Google Core Web Vitals Hijau (95+)",
    nameEn: "Green Core Web Vitals (95+)",
    starter: true,
    pro: true,
    bundle: true,
  },
  {
    category: "SEO & Kecepatan",
    categoryEn: "SEO & Performance",
    nameId: "Sitemap XML & Robots.txt Otomatis",
    nameEn: "Automated XML Sitemap & Robots",
    starter: true,
    pro: true,
    bundle: true,
  },

  // Garansi & Hak Milik
  {
    category: "Garansi & Hak Milik",
    categoryEn: "Warranty & Ownership",
    nameId: "100% Hak Milik Source Code (Full IP)",
    nameEn: "100% Source Code Ownership",
    starter: true,
    pro: true,
    bundle: true,
  },
  {
    category: "Garansi & Hak Milik",
    categoryEn: "Warranty & Ownership",
    nameId: "Putaran Revisi Desain & Fitur",
    nameEn: "Revision Rounds",
    starter: "2 Putaran",
    pro: "3 Putaran",
    bundle: "Fleksibel Unlimited",
  },
  {
    category: "Garansi & Hak Milik",
    categoryEn: "Warranty & Ownership",
    nameId: "Masa Garansi Bebas Biaya Bug Fix",
    nameEn: "Free Bug Fix Warranty Period",
    starter: "30 Hari Penuh",
    pro: "60 Hari Penuh",
    bundle: "90 Hari Penuh",
  },
];

export const pricingTerms = [
  {
    titleId: "Skema Pembayaran Transparan (2 Opsi)",
    titleEn: "Transparent Payment Milestones (2 Options)",
    descId:
      "Opsi A: DP 50% di awal dan pelunasan 50% saat serah terima. Opsi B (khusus proyek skala menengah-besar): Termin 3 Tahap (30% DP awal, 40% setelah progres staging disetujui, dan 30% serah terima akhir).",
    descEn:
      "Option A: Standard 50% deposit and 50% upon handoff. Option B (medium-large projects): 3-Stage Milestone (30% deposit, 40% upon staging demonstration, 30% final handoff).",
  },
  {
    titleId: "100% Hak Milik Penuh Source Code",
    titleEn: "100% Source Code Ownership",
    descId:
      "Seluruh repository kode sumber di GitHub, database cloud, dan file aset desain diserahkan 100% menjadi milik perusahaan Anda. Tanpa ikatan vendor dan tanpa biaya lisensi tersembunyi.",
    descEn:
      "All GitHub repositories, cloud database credentials, and Figma assets are completely transferred to you with zero vendor lock-in fees.",
  },
  {
    titleId: "Garansi Resmi Perbaikan Bug 30, 60, & 90 Hari",
    titleEn: "Official 30, 60 & 90-Day Bug Fix Warranty",
    descId:
      "Kami menjamin setiap baris kode yang dibuat. Jika ditemukan kendala teknis atau error pasca peluncuran, kami memperbaikinya secara gratis dan cepat selama masa garansi kalender penuh.",
    descEn:
      "We guarantee every line of code. In case of unexpected technical bugs post-launch, we resolve them with high priority at zero cost during the full calendar warranty period.",
  },
];
