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
    category: "Desain & Frontend",
    categoryEn: "Design & Frontend",
    nameId: "Desain UI/UX Eksklusif (Figma)",
    nameEn: "Custom UI/UX Wireframe (Figma)",
    starter: true,
    pro: true,
    bundle: true,
  },
  {
    category: "Desain & Frontend",
    categoryEn: "Design & Frontend",
    nameId: "Jumlah Halaman Web",
    nameEn: "Web Page Count",
    starter: "1 - 3 Halaman",
    pro: "Hingga 10 Halaman",
    bundle: "Tak Terbatas (Dynamic)",
  },
  {
    category: "Desain & Frontend",
    categoryEn: "Design & Frontend",
    nameId: "Animasi Interaktif Halus (Framer Motion)",
    nameEn: "Fluid Animations (Framer Motion)",
    starter: "Dasar",
    pro: "Lengkap",
    bundle: "Advanced Immersive",
  },
  {
    category: "Desain & Frontend",
    categoryEn: "Design & Frontend",
    nameId: "Mode Gelap & Terang (Dark/Light Mode)",
    nameEn: "Dark & Light Mode Toggle",
    starter: true,
    pro: true,
    bundle: true,
  },

  // Backend & Database
  {
    category: "Backend & Database",
    categoryEn: "Backend & Database",
    nameId: "Database Cloud (PostgreSQL / Supabase)",
    nameEn: "Cloud Database (PostgreSQL / Supabase)",
    starter: false,
    pro: true,
    bundle: true,
  },
  {
    category: "Backend & Database",
    categoryEn: "Backend & Database",
    nameId: "Admin Dashboard Pengelolaan Data",
    nameEn: "Admin Management Dashboard",
    starter: false,
    pro: true,
    bundle: true,
  },
  {
    category: "Backend & Database",
    categoryEn: "Backend & Database",
    nameId: "Sistem Autentikasi Pengguna & Role (RBAC)",
    nameEn: "User Authentication & RBAC",
    starter: false,
    pro: true,
    bundle: true,
  },
  {
    category: "Backend & Database",
    categoryEn: "Backend & Database",
    nameId: "Ekspor Data ke Excel & PDF Otomatis",
    nameEn: "Automated Excel & PDF Export",
    starter: false,
    pro: "Opsional",
    bundle: true,
  },

  // Transaksi & E-Commerce
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
    nameEn: "Automated WhatsApp Order Alerts",
    starter: false,
    pro: true,
    bundle: true,
  },

  // Mobile App
  {
    category: "Aplikasi Mobile",
    categoryEn: "Mobile Application",
    nameId: "Aplikasi Android Native (Flutter/Dart)",
    nameEn: "Native Android App (Flutter/Dart)",
    starter: false,
    pro: false,
    bundle: true,
  },
  {
    category: "Aplikasi Mobile",
    categoryEn: "Mobile Application",
    nameId: "Rilis Siap Unduh di Google Play Store",
    nameEn: "Google Play Store Publishing",
    starter: false,
    pro: false,
    bundle: true,
  },

  // SEO & Kecepatan
  {
    category: "SEO & Performa",
    categoryEn: "SEO & Performance",
    nameId: "Skor Google Core Web Vitals Hijau (95+)",
    nameEn: "Green Core Web Vitals (95+)",
    starter: true,
    pro: true,
    bundle: true,
  },
  {
    category: "SEO & Performa",
    categoryEn: "SEO & Performance",
    nameId: "Sitemap XML & Robots.txt Otomatis",
    nameEn: "Automated XML Sitemap & Robots",
    starter: true,
    pro: true,
    bundle: true,
  },
  {
    category: "SEO & Performa",
    categoryEn: "SEO & Performance",
    nameId: "OpenGraph Banner Preview Sosial Media",
    nameEn: "Social Share OpenGraph Banners",
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
    nameId: "Masa Garansi Bug Fix Gratis",
    nameEn: "Free Bug Fix Warranty Period",
    starter: "14 Hari",
    pro: "30 Hari",
    bundle: "45 Hari",
  },
];

export const pricingTerms = [
  {
    titleId: "DP 50% di Awal, 50% Setelah Siap Rilis",
    titleEn: "50% Deposit, 50% Upon Final Handoff",
    descId:
      "Tidak ada risiko bagi Anda. Pengerjaan dimulai dengan DP 50%, dan pelunasan hanya dilakukan setelah Anda puas menguji sistem di server staging kami.",
    descEn:
      "Zero risk. Development begins with a 50% deposit, and the remaining balance is paid only after you inspect and approve the system on our staging server.",
  },
  {
    titleId: "100% Hak Milik Source Code",
    titleEn: "100% Source Code Ownership",
    descId:
      "Seluruh repository kode sumber, akun database, dan aset desain diserahkan sepenuhnya kepada Anda. Tidak ada biaya langganan bulanan tersembunyi.",
    descEn:
      "All source code repositories, cloud database credentials, and design files belong 100% to you. No hidden lock-in vendor fees.",
  },
  {
    titleId: "Garansi Resmi Bug Fix Bebas Biaya",
    titleEn: "Official Free Bug Fix Warranty",
    descId:
      "Jika terjadi kendala teknis atau error pasca peluncuran, saya bertanggung jawab penuh untuk memperbaikinya secara gratis selama masa garansi.",
    descEn:
      "In the unlikely event of technical bugs or crashes post-launch, I provide complete priority fixes at zero additional cost during the warranty.",
  },
];

