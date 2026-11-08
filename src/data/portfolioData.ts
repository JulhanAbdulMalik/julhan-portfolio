export type ProjectCategory =
  | "Web App"
  | "Mobile App"
  | "Landing Page"
  | "Institutional";

export interface ProjectMetric {
  value: string;
  labelId: string;
  labelEn: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  categories: ProjectCategory[];
  roleId: string;
  roleEn: string;
  taglineId: string;
  taglineEn: string;
  problemId?: string;
  impactId?: string;
  descriptionId: string;
  descriptionEn: string;
  image: string;
  techStack: string[];
  metrics: ProjectMetric[];
  featuresId: string[];
  featuresEn: string[];
  architectureId: string[];
  architectureEn: string[];
  isConfidential?: boolean;
  confidentialNoticeId?: string;
  confidentialNoticeEn?: string;
  liveUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  featured: boolean;
}

export const portfolioCategories: {
  key: string;
  labelId: string;
  labelEn: string;
}[] = [
  { key: "All", labelId: "Semua Kategori", labelEn: "All Projects" },
  { key: "Web App", labelId: "Web App", labelEn: "Web App" },
  { key: "Mobile App", labelId: "Mobile App", labelEn: "Mobile App" },
  { key: "Landing Page", labelId: "Landing Page", labelEn: "Landing Page" },
  { key: "Institutional", labelId: "Institutional", labelEn: "Institutional" },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "cdu-portal",
    slug: "cdu-portal-nusa-putra",
    title: "CDU Portal - Academic Monitoring & Curriculum System",
    client: "Universitas Nusa Putra",
    year: "2024",
    categories: ["Institutional", "Web App"],
    roleId: "Full-Stack System Architect & Developer",
    roleEn: "Full-Stack System Architect & Developer",
    taglineId:
      "Platform enterprise monitoring perkuliahan & sinkronisasi data kurikulum skala 28 program studi.",
    taglineEn:
      "Enterprise academic lecture monitoring & curriculum sync platform across 28 university departments.",
    problemId:
      "Sebelumnya, rekapitulasi ribuan jam perkuliahan dan kurikulum 28 program studi masih menggunakan spreadsheet manual terpisah, rentan redudansi data, dan proses audit akreditasi memakan waktu berminggu-minggu.",
    impactId:
      "Kini, seluruh 25.500+ sesi kuliah tervalidasi otomatis secara real-time, audit dosen terdokumentasi akurat, dan pimpinan kampus mendapatkan dashboard analitik instan.",
    descriptionId:
      "Sistem portal monitoring kurikulum dan aktivitas perkuliahan terintegrasi di Universitas Nusa Putra. Dirancang untuk mengelola dan memvalidasi volume data perkuliahan yang masif, dashboard analitik real-time pimpinan, serta otomatisasi audit log perkuliahan dosen.",
    descriptionEn:
      "An integrated curriculum and lecture session monitoring portal built for Universitas Nusa Putra. Architected to aggregate and validate massive lecture datasets, executive real-time analytics dashboards, and automated lecturer audit logging.",
    image: "/images/projects/cdu-portal.svg",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "NextAuth v5",
      "Recharts",
      "TanStack Table v9",
      "ExcelJS",
      "Tailwind CSS",
    ],
    metrics: [
      {
        value: "25.500+",
        labelId: "Data Sesi Kuliah Tervalidasi",
        labelEn: "Validated Lecture Records",
      },
      {
        value: "1.500+",
        labelId: "Kelas Akademik Termonitor",
        labelEn: "Monitored Academic Classes",
      },
      {
        value: "28",
        labelId: "Program Studi Terintegrasi",
        labelEn: "Integrated Study Programs",
      },
      {
        value: "99.8%",
        labelId: "Akurasi Rekap Nilai & Sesi",
        labelEn: "Report & Session Accuracy",
      },
    ],
    featuresId: [
      "Dashboard analitik multi-role (Rektorat, Dekanat, Kaprodi, Dosen Pengampu)",
      "High-performance data grid dengan TanStack Table (virtual scrolling, multi-column sort & filter)",
      "Ekspor laporan komprehensif ke format Excel (.xlsx) dan PDF dalam hitungan detik via worker background",
      "Role-Based Access Control (RBAC) ketat dengan session encryption NextAuth v5",
      "Real-time monitoring persentase kehadiran dosen dan kesesuaian silabus RPS",
    ],
    featuresEn: [
      "Multi-tier executive analytics dashboards (Rectorate, Deans, Department Heads, Lecturers)",
      "High-performance data grid powered by TanStack Table (virtual scrolling, multi-column sorting & filters)",
      "Fast report exports to Excel (.xlsx) and PDF formats processed seamlessly within seconds",
      "Strict Role-Based Access Control (RBAC) with encrypted NextAuth v5 session tokens",
      "Real-time audit tracking for lecturer attendance and syllabus compliance",
    ],
    architectureId: [
      "Server-side rendering (SSR) dengan Next.js App Router untuk initial data hydration secepat kilat",
      "Prisma ORM dengan pooling connection teroptimasi untuk query database berelasi kompleks",
      "Zero-exposure database architecture: data rahasia akademik terlindungi di balik API route yang terautentikasi",
    ],
    architectureEn: [
      "Server-side rendering (SSR) with Next.js App Router for ultra-fast initial data hydration",
      "Prisma ORM with optimized connection pooling handling complex relational database queries",
      "Zero-exposure database architecture: sensitive academic records securely guarded behind authenticated API routes",
    ],
    isConfidential: true,
    confidentialNoticeId:
      "Akses Langsung Dibatasi: Sistem ini adalah perangkat lunak operasional internal kampus Universitas Nusa Putra. Demi kepatuhan regulasi privasi data pendidikan dan perlindungan data sivitas akademika, kredensial login publik tidak dibagikan. Showcase ini hanya menampilkan arsitektur teknis dan metrik capaian.",
    confidentialNoticeEn:
      "Restricted Internal System: This software is an internal operational asset of Universitas Nusa Putra. To comply with educational privacy regulations and protect academic confidentiality, public login credentials are not exposed. This showcase presents high-level architecture and milestone metrics only.",
    liveUrl: "https://curriculum.julhan.my.id",
    featured: true,
  },
  {
    id: "panenkita",
    slug: "panenkita-agritech-ecosystem",
    title: "PanenKita - Agritech SCM & Digital Marketplace",
    client: "Riset Kolaborasi & Platform Komersial",
    year: "2024",
    categories: ["Mobile App", "Web App"],
    roleId: "Full-Stack Backend & Mobile App Developer",
    roleEn: "Full-Stack Backend & Mobile App Developer",
    taglineId:
      "Ekosistem supply chain pertanian digital penghubung petani lokal langsung ke pasar grosir & ritel.",
    taglineEn:
      "Digital agricultural supply chain ecosystem directly connecting local farmers to wholesale and retail markets.",
    problemId:
      "Sebelumnya, rantai pasok komoditas petani sangat panjang melewati banyak tengkulak, transparansi harga pasar harian sangat minim, dan pencatatan hasil panen masih di buku tulis fisik.",
    impactId:
      "Kini, petani terhubung langsung ke pembeli skala besar, harga pasar terupdate real-time via aplikasi mobile, dan efisiensi waktu transaksi meningkat hingga 60%.",
    descriptionId:
      "Aplikasi mobile multi-platform berbasis Flutter dipadukan dengan web admin dashboard untuk memangkas rantai pasok komoditas pertanian. Membantu petani mendapatkan transparansi harga pasar harian, pencatatan hasil panen, dan pesanan langsung dari pembeli skala besar.",
    descriptionEn:
      "A cross-platform Flutter mobile application paired with a centralized web admin dashboard designed to shorten the agricultural supply chain. Empowers local farmers with real-time price transparency, yield tracking, and direct purchase orders.",
    image: "/images/projects/panenkita.svg",
    techStack: [
      "Flutter",
      "Dart",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Firebase Auth",
      "Cloudinary",
      "RESTful API",
    ],
    metrics: [
      {
        value: "31 Pengguna",
        labelId: "Pengujian UAT Lapangan",
        labelEn: "Field UAT Test Participants",
      },
      {
        value: "4.8 / 5.0",
        labelId: "Skor Kepuasan Pengguna UAT",
        labelEn: "User Satisfaction Score",
      },
      {
        value: "100%",
        labelId: "Kesiapan Rilis Google Play",
        labelEn: "Google Play Store Ready",
      },
      {
        value: "< 250ms",
        labelId: "Rata-rata Latensi Endpoint API",
        labelEn: "Avg API Endpoint Latency",
      },
    ],
    featuresId: [
      "Aplikasi Android Flutter dengan navigasi bottom-bar lancar & animasi micro-interactions",
      "Katalog komoditas real-time dengan filter lokasi panen, grade kualitas, dan harga harian",
      "Sistem pemesanan langsung dengan kalkulator logistik & biaya pengiriman terintegrasi",
      "Web Management Dashboard untuk admin agregator memantau stok gudang dan distribusi",
      "Autentikasi Firebase via nomor handphone (SMS OTP) dan email untuk kemudahan petani",
    ],
    featuresEn: [
      "Native Flutter Android application with fluid bottom-bar navigation & micro-interactions",
      "Real-time commodity marketplace filtered by harvest origin, produce grade, and market pricing",
      "Direct ordering engine with integrated logistics and freight estimation calculator",
      "Web Management Dashboard for centralized aggregator inventory and regional dispatch",
      "Firebase phone authentication (SMS OTP) and email sign-in optimized for rural farmers",
    ],
    architectureId: [
      "Arsitektur clean architecture pada Flutter memisahkan layer Presentation, Domain, dan Data",
      "Backend REST API Express.js modular dengan validasi skema Joi dan middleware JWT secure",
      "Database relasional PostgreSQL dengan indexing geospasial untuk pencarian petani terdekat",
    ],
    architectureEn: [
      "Clean architecture pattern on Flutter separating Presentation, Domain, and Data layers",
      "Modular Express.js REST API with strict Joi payload validation and hardened JWT middleware",
      "PostgreSQL relational database with geospatial indexing for nearby farm discovery",
    ],
    playStoreUrl: "https://play.google.com/store/apps",
    liveUrl: "https://panenkita.web.id",
    githubUrl: "https://github.com/JulhanMalik",
    featured: true,
  },
  {
    id: "yuwanyie-picnic",
    slug: "yuwanyie-picnic-aesthetic-booking",
    title: "Yuwanyie Picnic - Aesthetic Picnic Experience & Digital Booking",
    client: "Yuwanyie Picnic Sukabumi",
    year: "2024",
    categories: ["Web App", "Landing Page"],
    roleId: "Lead Full-Stack Web Developer",
    roleEn: "Lead Full-Stack Web Developer",
    taglineId:
      "Platform web reservasi & rental paket piknik estetik dengan sistem checkout QRIS otomatis.",
    taglineEn:
      "Aesthetic picnic experience booking platform & automated QRIS checkout system.",
    problemId:
      "Sebelumnya, proses reservasi paket dekorasi piknik mengandalkan chat WhatsApp manual satu per satu, rawan bentrok jadwal slot, dan pengecekan bukti transfer memakan waktu lama.",
    impactId:
      "Kini, pelanggan dapat memilih set dekorasi & slot kalender secara visual, pembayaran QRIS otomatis terverifikasi instan, serta pemesanan berjalan mandiri 24 jam nonstop.",
    descriptionId:
      "Platform web interaktif dan sistem reservasi online otomatis untuk layanan sewa paket piknik estetik. Menghadirkan katalog set dekorasi, pemilihan jadwal slot real-time, integrasi pembayaran QRIS dinamis, serta admin dashboard analitik berbasis Supabase.",
    descriptionEn:
      "Interactive web application and automated booking platform for an aesthetic picnic experience and rental brand. Features a curated setup catalog, real-time slot calendar, automated dynamic QRIS payments, and an executive management dashboard powered by Supabase.",
    image: "/images/projects/yuwanyie-picnic.svg",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "Supabase RLS",
      "Cloudinary",
      "next-intl",
      "Tailwind CSS",
      "QRIS Payment",
    ],
    metrics: [
      {
        value: "+40%",
        labelId: "Peningkatan Konversi Pemesanan",
        labelEn: "Increase in Booking Conversions",
      },
      {
        value: "0 Error",
        labelId: "Ketidaksesuaian Pembayaran",
        labelEn: "Payment Mismatch Rate",
      },
      {
        value: "2 Bahasa",
        labelId: "Dukungan Bahasa (ID & EN)",
        labelEn: "Bilingual Experience (ID/EN)",
      },
      {
        value: "100%",
        labelId: "Mobile Responsive Friendly",
        labelEn: "Mobile Responsive Score",
      },
    ],
    featuresId: [
      "Katalog interaktif paket set piknik estetik, dekorasi tematik, dan add-on perlengkapan",
      "Kalender pemilihan slot tanggal & jam reservasi dengan validasi kuota real-time",
      "Integrasi QRIS dinamis untuk pembayaran instan dan konfirmasi otomatis ke WhatsApp admin",
      "Admin portal terlindungi Supabase Row-Level Security (RLS) untuk update status order",
      "Dukungan multibahasa seamless (Indonesia & Inggris) via next-intl",
    ],
    featuresEn: [
      "Interactive digital catalog for aesthetic picnic packages, themed sets, and custom equipment add-ons",
      "Real-time slot reservation calendar with instant capacity and slot availability checking",
      "Dynamic QRIS integration for instant digital payments and automated WhatsApp confirmation",
      "Secure admin dashboard protected with Supabase Row-Level Security (RLS) for order triage",
      "Seamless bilingual localization (Indonesian & English) powered by next-intl",
    ],
    architectureId: [
      "JAMstack Next.js 16 dengan Incremental Static Regeneration (ISR) untuk SEO maksimal",
      "Supabase Backend-as-a-Service dengan aturan otorisasi Row-Level Security (RLS) tingkat granular",
      "Asset media makanan beresolusi tinggi di-host di Cloudinary dengan auto-format WebP/AVIF",
    ],
    architectureEn: [
      "Next.js 16 JAMstack with Incremental Static Regeneration (ISR) ensuring maximum SEO rank",
      "Supabase serverless backend with granular Row-Level Security (RLS) policies",
      "High-resolution media assets delivered through Cloudinary with automatic WebP/AVIF compression",
    ],
    liveUrl: "https://yuwanyiepicnic.com",
    githubUrl: "https://github.com/JulhanMalik",
    featured: true,
  },
  {
    id: "bhumi",
    slug: "bhumi-environmental-game-landing",
    title: "Bhumi - Environmental Education Game Official Website",
    client: "Kolaborasi Riset Universitas Negeri Padang (UNP)",
    year: "2023",
    categories: ["Landing Page"],
    roleId: "Lead Frontend Web Developer",
    roleEn: "Lead Frontend Web Developer",
    taglineId:
      "Landing page interaktif kampanye game edukasi pelestarian lingkungan dengan 1.000+ pemain.",
    taglineEn:
      "Interactive educational game landing page for environmental preservation with 1,000+ players.",
    problemId:
      "Sebelumnya, sosialisasi game edukasi lingkungan sulit menjangkau target audiens luas karena belum memiliki portal showcase resmi dan materi trailer yang terintegrasi.",
    impactId:
      "Kini, landing page sinematik berhasil menarik 1.000+ pemain aktif terdaftar dengan waktu muat ultra cepat di bawah 1.2 detik di seluruh perangkat.",
    descriptionId:
      "Website showcase resmi dan landing page promosi untuk game bertema kelestarian alam hasil kolaborasi riset edukasi dengan Universitas Negeri Padang. Menampilkan trailer interaktif, walkthrough gameplay, papan informasi karakter, dan direct download link.",
    descriptionEn:
      "Official promotional landing page and showcase portal for an eco-educational video game created in research collaboration with Universitas Negeri Padang. Highlights trailer previews, gameplay walkthroughs, character lore, and direct download buttons.",
    image: "/images/projects/bhumi.svg",
    techStack: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript ES6+",
      "Vite",
      "Framer Motion",
      "Responsive UI",
    ],
    metrics: [
      {
        value: "1.000+",
        labelId: "Pemain Aktif Terdaftar",
        labelEn: "Active Registered Players",
      },
      {
        value: "4.8 / 5.0",
        labelId: "Rating Review Game",
        labelEn: "Game Review Rating",
      },
      {
        value: "< 1.2s",
        labelId: "First Contentful Paint",
        labelEn: "First Contentful Paint",
      },
      {
        value: "100%",
        labelId: "Cross-Device Compatibility",
        labelEn: "Cross-Device Compatibility",
      },
    ],
    featuresId: [
      "Hero section sinematik dengan video trailer showcase terintegrasi tanpa lag",
      "Character lore carousel dengan animasi smooth entrance dan sound toggle",
      "Section download game multi-platform dengan deteksi perangkat otomatis",
      "Desain ramah anak & edukatif dengan visualisasi alam bernuansa cerah",
    ],
    featuresEn: [
      "Cinematic hero banner with zero-lag embedded gameplay video trailer",
      "Character lore carousel with smooth entrance animations and audio control",
      "Multi-platform game download section with smart device detection",
      "Kid-friendly and educational visual aesthetic with vibrant nature themes",
    ],
    architectureId: [
      "Bundle ringan dengan Vite bundling pipeline menghasilkan ukuran assets under 300KB",
      "Optimasi gambar SVG dan WebP untuk mempertahankan performa di jaringan seluler 3G/4G",
    ],
    architectureEn: [
      "Ultra-lightweight Vite bundling pipeline yielding total payload under 300KB",
      "Aggressive SVG and WebP compression ensuring instantaneous load even on mobile networks",
    ],
    liveUrl: "https://gamebhumi.com",
    githubUrl: "https://github.com/JulhanMalik",
    featured: false,
  },
  {
    id: "discussion-forum",
    slug: "expert-discussion-forum-app",
    title: "Discussion Forum - React Enterprise Architecture",
    client: "Dicoding Academy Certification (React Expert)",
    year: "2023",
    categories: ["Web App"],
    roleId: "Frontend System Architect",
    roleEn: "Frontend System Architect",
    taglineId:
      "Aplikasi forum komunitas developer dengan Redux centralized state & automated testing 100%.",
    taglineEn:
      "Developer community forum application with centralized Redux state & 100% automated test coverage.",
    problemId:
      "Sebelumnya, sistem forum diskusi komunitas sering mengalami kendala inkonsistensi state mutation dan latensi saat interaksi voting thread dalam skala masif.",
    impactId:
      "Kini, sistem berjalan stabil dengan centralized Redux Toolkit state terpusat, cakupan automated testing 100%, dan navigasi diskusi yang sangat responsif.",
    descriptionId:
      "Aplikasi web forum diskusi modern berstandar industri enterprise yang dibangun untuk mendemonstrasikan keunggulan arsitektur React profesional. Mencakup centralized state Redux Toolkit, asynchronous thunk actions, automated unit/integration testing dengan Jest & RTL, serta dokumentasi visual Storybook.",
    descriptionEn:
      "An enterprise-grade developer discussion forum web application engineered to showcase mastery of professional React architecture. Implements centralized Redux Toolkit state, async thunk dispatchers, 100% automated unit/integration test coverage with Jest & RTL, and Storybook UI documentation.",
    image: "/images/projects/discussion-forum.svg",
    techStack: [
      "React.js",
      "Redux Toolkit",
      "Redux Thunk",
      "TypeScript",
      "Storybook",
      "Jest",
      "React Testing Library",
      "Cypress",
      "Tailwind CSS",
    ],
    metrics: [
      {
        value: "100%",
        labelId: "Critical Path Test Coverage",
        labelEn: "Critical Path Test Coverage",
      },
      {
        value: "0 State Bug",
        labelId: "State Mutation Anomaly",
        labelEn: "State Mutation Anomaly",
      },
      {
        value: "A+",
        labelId: "Dicoding Expert Review Grade",
        labelEn: "Dicoding Expert Review Grade",
      },
      {
        value: "15+ Komponen",
        labelId: "Komponen Storybook UI",
        labelEn: "Storybook UI Components",
      },
    ],
    featuresId: [
      "Alur diskusi thread interaktif: pembuatan topik, reply berjenjang, upvote & downvote real-time",
      "Optimistic UI updates untuk aksi voting sehingga interaksi terasa instan tanpa loading spinner",
      "Papan leaderboard komunitas dengan ranking kontributor teratas secara live",
      "Dokumentasi sistem komponen terisolasi menggunakan Storybook component explorer",
      "Comprehensive automated testing suite: Unit test, Integration test, dan End-to-End test",
    ],
    featuresEn: [
      "Interactive thread discussions: thread creation, nested replies, real-time upvotes & downvotes",
      "Optimistic UI updates for voting actions providing instantaneous feedback without spinners",
      "Community leaderboard ranking top contributors dynamically",
      "Isolated component catalog and design system documentation using Storybook explorer",
      "Comprehensive test suite: Unit tests, Integration tests, and End-to-End Cypress tests",
    ],
    architectureId: [
      "Redux Toolkit slice architecture dengan immutable state reducer terstandar",
      "Redux Thunk middleware untuk penanganan asynchronous API call yang tahan terhadap error jaringan",
      "Test-Driven Development (TDD) principles memastikan kestabilan kode saat penambahan fitur",
    ],
    architectureEn: [
      "Redux Toolkit slice architecture enforcing predictable and immutable state updates",
      "Redux Thunk middleware for resilient asynchronous API network call handling",
      "Test-Driven Development (TDD) approach guaranteeing zero regressions during feature expansion",
    ],
    liveUrl: "https://discussion-forum-julhan.vercel.app",
    githubUrl: "https://github.com/JulhanMalik",
    featured: false,
  },
];
