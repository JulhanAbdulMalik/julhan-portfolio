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
    title: "CDU Portal – Sistem Monitoring Perkuliahan Universitas Nusa Putra",
    client: "Universitas Nusa Putra",
    year: "Juni – September 2026",
    categories: ["Institutional", "Web App"],
    roleId: "Full-Stack System Architect & Developer",
    roleEn: "Full-Stack System Architect & Developer",
    taglineId:
      "Sistem informasi manajemen perkuliahan skala universitas aktif mengelola ribuan kelas dan puluhan ribu sesi monitoring.",
    taglineEn:
      "Enterprise academic monitoring system actively managing thousands of university classes and session logs.",
    problemId:
      "Sebelumnya, rekapitulasi ribuan kelas dan sesi perkuliahan dari 28+ program studi di 7 fakultas dilakukan terpisah secara manual, rawan selisih data presensi dosen, dan evaluasi kurikulum memakan waktu berminggu-minggu.",
    impactId:
      "Kini, sistem berhasil mengelola ±1.400–1.500+ kelas aktif dengan auto-generate ±22.000–25.500+ data sesi monitoring secara real-time, integrasi LMS otomatis, dan resmi digunakan oleh universitas.",
    descriptionId:
      "Membangun sistem informasi manajemen perkuliahan skala universitas dengan aktif mengelola ±1.400–1.500+ kelas (Daring, Luring, Bimbingan) dari 28+ Program Studi di 7 Fakultas, dengan auto-generate ±22.000–25.500+ baris data sesi monitoring, ±310+ dosen, dan ±350+ mata kuliah aktif.",
    descriptionEn:
      "An enterprise university lecture monitoring management system actively managing ±1,400–1,500+ classes across 28+ Study Programs in 7 Faculties, auto-generating ±22,000–25,500+ session logs, ±310+ lecturers, and ±350+ active courses.",
    image: "/images/projects/cdu-portal.png",
    techStack: [
      "Next.js 16 App Router",
      "React 19",
      "TypeScript",
      "Prisma ORM v5",
      "NextAuth.js v5",
      "Zustand",
      "TanStack React Query v5",
      "shadcn/ui",
      "TanStack Table v9",
      "Recharts",
      "ExcelJS",
      "react-pdf/renderer",
    ],
    metrics: [
      {
        value: "25.500+",
        labelId: "Baris Data Sesi Monitoring",
        labelEn: "Monitoring Session Records",
      },
      {
        value: "1.500+",
        labelId: "Kelas Aktif Termonitor",
        labelEn: "Active Monitored Classes",
      },
      {
        value: "28+ / 7",
        labelId: "Program Studi & Fakultas",
        labelEn: "Study Programs & Faculties",
      },
      {
        value: "310+",
        labelId: "Dosen Pengampu Aktif",
        labelEn: "Active University Lecturers",
      },
    ],
    featuresId: [
      "Auto-generate ±22.000–25.500+ baris data sesi monitoring perkuliahan (Daring, Luring, Bimbingan)",
      "Sinkronisasi & import data LMS otomatis (Edlink / Sevima) secara seamless",
      "Sistem pengaduan perkuliahan terpadu (Lapor CDU) terintegrasi dosen dan fakultas",
      "Ekspor laporan komprehensif ke format Excel (ExcelJS/SheetJS) dan dokumen PDF resmi (react-pdf/renderer)",
      "Dashboard statistik & analitik visual interaktif berbasis Recharts untuk monitoring pimpinan",
      "High-performance data table berbasis TanStack Table v9 dengan sorting, filtering, dan virtual rendering",
    ],
    featuresEn: [
      "Auto-generation of ±22,000–25,500+ session monitoring records (Online, Offline, Mentoring)",
      "Automated LMS data synchronization & import (Edlink / Sevima)",
      "Integrated academic lecture grievance ticketing system (Lapor CDU)",
      "Comprehensive report exports to Excel (ExcelJS/SheetJS) and official PDF (react-pdf/renderer)",
      "Interactive visual analytics & statistics dashboard powered by Recharts for university leadership",
      "High-performance data table powered by TanStack Table v9 with sorting, filtering, and virtual rendering",
    ],
    architectureId: [
      "Next.js 16 App Router & React 19 dengan Server Components untuk efisiensi render volume data besar",
      "State management terstruktur dengan Zustand dan client caching via TanStack React Query v5",
      "Prisma ORM v5 dengan optimized connection pooling menangani relasi database kompleks",
      "Role-Based Access Control (RBAC) aman berbasis NextAuth.js v5 dan enkripsi token",
    ],
    architectureEn: [
      "Next.js 16 App Router & React 19 with Server Components optimizing large data volume rendering",
      "Structured state management with Zustand and efficient client caching via TanStack React Query v5",
      "Prisma ORM v5 with optimized connection pooling handling complex relational queries",
      "Secure Role-Based Access Control (RBAC) powered by NextAuth.js v5 and encrypted tokens",
    ],
    isConfidential: true,
    confidentialNoticeId:
      "Akses Langsung Dibatasi: Sistem ini adalah perangkat lunak operasional internal kampus Universitas Nusa Putra. Demi kepatuhan regulasi privasi data pendidikan dan perlindungan data sivitas akademika, kredensial login publik tidak dibagikan. Showcase ini menampilkan arsitektur teknis dan metrik capaian resmi.",
    confidentialNoticeEn:
      "Restricted Internal System: This software is an active operational system of Universitas Nusa Putra. To ensure compliance with educational data privacy regulations, public login credentials are not exposed. This showcase highlights technical architecture and verified metrics.",
    liveUrl: "https://curriculum.julhan.my.id",
    featured: true,
  },
  {
    id: "panenkita",
    slug: "panenkita-agritech-ecosystem",
    title: "PanenKita – Platform Agritech Full-Stack (Penelitian)",
    client: "Penelitian Dosen Nusa Putra",
    year: "September – November 2025",
    categories: ["Mobile App", "Web App"],
    roleId: "Full-Stack Mobile & Backend Developer",
    roleEn: "Full-Stack Mobile & Backend Developer",
    taglineId:
      "Platform agritech menghubungkan petani dan pembeli dengan Rencana Tanam real-time & Marketplace SCM.",
    taglineEn:
      "Agritech platform connecting farmers and buyers with real-time Planting Plan & SCM Marketplace.",
    problemId:
      "Sebelumnya, petani menghadapi ketidakpastian serapan panen akibat perantara rantai pasok (tengkulak) yang panjang, minimnya visibilitas estimasi panen, serta ketiadaan saluran langsung dengan pembeli.",
    impactId:
      "Kini, platform berhasil divalidasi via UAT 31 pengguna nyata, memangkas rantai pasok dengan estimasi stok real-time (Rencana Tanam), dan aplikasi telah resmi rilis di Google Play Store.",
    descriptionId:
      "Platform agritech full-stack yang menghubungkan petani dan pembeli dengan fitur Rencana Tanam (stok real-time), Kebutuhan Hasil Panen, dan Marketplace berbasis konsep Supply Chain Management (SCM). Dikembangkan untuk aplikasi Android (Flutter/Dart) dan website (React.js + Vite) dari satu backend RESTful API (Express.js + PostgreSQL) dengan Firebase Auth, teruji UAT bersama 31 pengguna nyata, serta resmi tersedia di Google Play Store.",
    descriptionEn:
      "A full-stack agritech platform connecting farmers and buyers featuring Planting Plan (real-time stock), Harvest Demand, and an SCM-based marketplace. Built across Android (Flutter/Dart) and Web (React.js + Vite) powered by a unified Express.js & PostgreSQL REST API with Firebase Auth, validated through UAT with 31 real users, and published on Google Play Store.",
    image: "/images/projects/panenkita.png",
    techStack: [
      "Flutter",
      "Dart",
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Firebase Auth",
      "Google Sign-In",
      "RESTful API",
      "Jest",
      "Agile Scrum",
    ],
    metrics: [
      {
        value: "31 Pengguna",
        labelId: "UAT Pengguna Nyata Lapangan",
        labelEn: "Real User UAT Testing",
      },
      {
        value: "Google Play",
        labelId: "Aplikasi Android Live di Play Store",
        labelEn: "Live on Google Play Store",
      },
      {
        value: "100% SCM",
        labelId: "Integrasi Rencana Tanam & Pasar",
        labelEn: "Integrated SCM & Marketplace",
      },
      {
        value: "Penelitian",
        labelId: "Kolaborasi Dosen Nusa Putra",
        labelEn: "Faculty Research Collaboration",
      },
    ],
    featuresId: [
      "Fitur Rencana Tanam untuk monitoring stok komoditas real-time sebelum masa panen tiba",
      "Modul Kebutuhan Hasil Panen untuk mempertemukan permintaan pembeli langsung ke petani",
      "Marketplace agritech berbasis alur Supply Chain Management (SCM) terintegrasi",
      "Aplikasi Android cross-platform performa tinggi dengan Flutter & Dart",
      "Portal website web admin & buyer responsive berbasis React.js dan Vite",
      "Sistem autentikasi aman dengan Firebase Authentication dan Google Sign-In terintegrasi",
    ],
    featuresEn: [
      "Planting Plan feature for real-time commodity stock forecasting prior to harvest",
      "Crop Yield Demand module directly linking buyer requisitions to farmer supplies",
      "Integrated agritech marketplace designed around Supply Chain Management (SCM) principles",
      "High-performance cross-platform Android mobile application built with Flutter & Dart",
      "Responsive web portal for management & buyers built with React.js and Vite",
      "Hardened authentication system with Firebase Authentication and Google Sign-In integration",
    ],
    architectureId: [
      "Satu unified RESTful API berbasis Express.js & PostgreSQL melayani aplikasi mobile dan web secara bersamaan",
      "Pengujian komprehensif: Unit Testing (Jest), Black Box Testing, dan User Acceptance Testing (UAT 31 responden)",
      "Pengembangan terstruktur dengan metodologi Agile Scrum dalam kolaborasi riset dosen Universitas Nusa Putra",
    ],
    architectureEn: [
      "Unified Express.js & PostgreSQL RESTful API serving both mobile app and web frontend concurrently",
      "Comprehensive testing: Unit Testing (Jest), Black Box Testing, and UAT with 31 real participants",
      "Agile Scrum methodology applied in faculty-partnered research at Universitas Nusa Putra",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.panenkita.app&pcampaignid=web_share",
    liveUrl: "https://panenkita.web.id/",
    githubUrl: "https://github.com/JulhanAbdulMalik",
    featured: true,
  },
  {
    id: "yuwanyie-picnic",
    slug: "yuwanyie-picnic-aesthetic-booking",
    title: "Yuwanyie Picnic – Web App & Business Management System",
    client: "Yuwanyie Picnic Sukabumi",
    year: "Juni – Agustus 2026",
    categories: ["Web App", "Landing Page"],
    roleId: "Full-Stack System Architect & Web Developer",
    roleEn: "Full-Stack System Architect & Web Developer",
    taglineId:
      "Sistem web full-stack end-to-end: customer storefront reservasi & admin dashboard analitik omset.",
    taglineEn:
      "End-to-end full-stack web system: customer booking storefront & business turnover dashboard.",
    problemId:
      "Sebelumnya, pemesanan sewa paket piknik estetik dikelola manual melalui obrolan chat, verifikasi transfer rawan tertinggal, dan perhitungan omset keuangan belum tersentralisasi.",
    impactId:
      "Kini, pelanggan memesan mandiri via customer storefront dengan pembayaran Bank/QRIS otomatis, dan manajemen memantau inventaris serta analitik omset bisnis secara real-time.",
    descriptionId:
      "Membangun sistem web full-stack end-to-end: customer storefront (pemesanan, galeri, testimoni) dan admin dashboard (inventaris, pembayaran Bank/QRIS dinamis, analitik omset bisnis menggunakan Recharts). Didukung Next.js 16 App Router, React 19, TypeScript 5, Supabase RLS, Cloudinary CDN, serta dual-language i18n.",
    descriptionEn:
      "An end-to-end full-stack web application: customer storefront (booking, gallery, testimonials) and admin dashboard (inventory, dynamic Bank/QRIS payments, revenue analytics with Recharts). Powered by Next.js 16 App Router, React 19, TypeScript 5, Supabase RLS, Cloudinary CDN, and dual-language i18n.",
    image: "/images/projects/yuwanyie-picnic.png",
    techStack: [
      "Next.js 16 App Router",
      "React 19",
      "TypeScript 5",
      "Supabase RLS",
      "Cloudinary CDN",
      "next-intl",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Tailwind CSS",
    ],
    metrics: [
      {
        value: "100% Digital",
        labelId: "Pemesanan & Reservasi Mandiri",
        labelEn: "Self-Service Digital Bookings",
      },
      {
        value: "QRIS & Bank",
        labelId: "Verifikasi Pembayaran Otomatis",
        labelEn: "Automated Payment Verification",
      },
      {
        value: "2 Bahasa",
        labelId: "Dukungan Bahasa (ID & EN)",
        labelEn: "Bilingual Support (ID & EN)",
      },
      {
        value: "Real-time",
        labelId: "Analitik Omset & Stok Recharts",
        labelEn: "Real-time Revenue Analytics",
      },
    ],
    featuresId: [
      "Customer storefront interaktif: katalog paket estetik, pemilihan slot tanggal, galeri foto, dan testimoni",
      "Admin dashboard lengkap: manajemen stok & inventaris paket piknik secara terperinci",
      "Integrasi sistem pembayaran otomatis via transfer Bank dan QRIS dinamis",
      "Visualisasi data analitik omset bisnis dan performa reservasi interaktif menggunakan Recharts",
      "Dukungan multibahasa Indonesia dan Inggris (i18n dual-language via next-intl)",
      "Validasi data formulir pemesanan ketat dan type-safe menggunakan React Hook Form & Zod",
    ],
    featuresEn: [
      "Interactive customer storefront: aesthetic setup catalog, date slot booking, photo gallery, and testimonials",
      "Comprehensive admin management portal: detailed picnic package stock & inventory control",
      "Automated dynamic payment integration supporting direct Bank transfers and dynamic QRIS",
      "Interactive business turnover and reservation performance data analytics powered by Recharts",
      "Dual-language internationalization (Indonesian & English) powered by next-intl",
      "Strict and type-safe form validation architecture built with React Hook Form & Zod",
    ],
    architectureId: [
      "Next.js 16 App Router + React 19 + TypeScript 5 untuk arsitektur frontend cepat dan type-safe",
      "Supabase PostgreSQL dengan Row-Level Security (RLS) menjamin keamanan otorisasi data admin",
      "Cloudinary CDN media optimization memastikan foto estetika termuat sangat cepat dengan format modern",
      "Animasi transisi halus dan micro-interactions modern menggunakan Framer Motion",
    ],
    architectureEn: [
      "Next.js 16 App Router + React 19 + TypeScript 5 providing a blazing fast and type-safe frontend",
      "Supabase PostgreSQL with Row-Level Security (RLS) guaranteeing secure admin data authorization",
      "Cloudinary CDN media optimization ensuring ultra-fast loading for aesthetic high-res photography",
      "Fluid page transitions and engaging micro-interactions powered by Framer Motion",
    ],
    liveUrl: "https://yuwanyie-picnic.com",
    githubUrl: "https://github.com/JulhanAbdulMalik",
    featured: true,
  },
  {
    id: "bhumi",
    slug: "bhumi-environmental-game-landing",
    title: "Bhumi – Website Landing Page Game Edukasi Lingkungan",
    client: "Kolaborasi Dosen UNP & Nusa Putra",
    year: "November – Desember 2025",
    categories: ["Landing Page"],
    roleId: "Lead Frontend Web Developer",
    roleEn: "Lead Frontend Web Developer",
    taglineId:
      "Landing page game edukasi lingkungan kolaborasi lintas universitas dengan 1.000+ pengguna aktif & rating 4.8/5.",
    taglineEn:
      "Eco-educational game landing page in multi-university collaboration with 1,000+ active users & 4.8/5 rating.",
    problemId:
      "Sebelumnya, game edukasi lingkungan yang dikembangkan belum memiliki portal landing page terpadu untuk mendistribusikan installer multi-platform serta memperkenalkan alur edukasinya ke masyarakat luas.",
    impactId:
      "Kini, landing page interaktif ini berhasil menjangkau 1.000+ pengguna aktif dengan rating kepuasan 4.8/5 dan distribusi installer langsung untuk platform Android dan Windows.",
    descriptionId:
      "Membangun landing page game edukasi 'Bhumi' (Android & Windows) dengan UI immersive kolaborasi lintas institusi bersama dosen Universitas Nusa Putra & Universitas Negeri Padang. Game menjangkau 1.000+ pengguna aktif dengan rating 4.8/5.",
    descriptionEn:
      "Engineered the official landing page for the educational game 'Bhumi' (Android & Windows) with an immersive UI, built in cross-institutional collaboration with faculty researchers from Universitas Nusa Putra and Universitas Negeri Padang. The game reached 1,000+ active users with a 4.8/5 rating.",
    image: "/images/projects/bhumi.png",
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
        labelId: "Pengguna Aktif Terjangkau",
        labelEn: "Active Registered Users",
      },
      {
        value: "4.8 / 5.0",
        labelId: "Rating Kepuasan Pengguna",
        labelEn: "User Review Rating",
      },
      {
        value: "2 Platform",
        labelId: "Dukungan Android & Windows",
        labelEn: "Android & Windows Platforms",
      },
      {
        value: "< 1.2s",
        labelId: "Kecepatan Akses (FCP)",
        labelEn: "First Contentful Paint",
      },
    ],
    featuresId: [
      "Tampilan antarmuka (UI) immersive dengan nuansa sinematik bertema pelestarian lingkungan hidup",
      "Pusat unduhan langsung multi-platform untuk installer game versi Android (.apk) dan Windows (.exe)",
      "Showcase karakter interaktif dengan preview trailer visual dan pengenalan alur cerita edukasi",
      "Desain sepenuhnya responsif yang dioptimalkan untuk akses super cepat di perangkat smartphone",
    ],
    featuresEn: [
      "Immersive environmental theme UI interface with cinematic visual storytelling elements",
      "Multi-platform direct download hub for Android (.apk) and Windows (.exe) game installers",
      "Interactive character lore showcase with gameplay trailers and educational narrative previews",
      "Fully responsive layout meticulously optimized for ultra-fast mobile device access",
    ],
    architectureId: [
      "Vite build pipeline menghasilkan bundle aset sangat ringan di bawah 300KB untuk efisiensi jaringan",
      "Animasi transisi halus dan scroll interactions modern didukung oleh Framer Motion",
      "Optimasi gambar SVG dan WebP modern untuk menjaga ketajaman grafis tanpa membebani kuota pengguna",
    ],
    architectureEn: [
      "Vite build pipeline producing an ultra-lightweight asset bundle under 300KB for network efficiency",
      "Fluid UI transitions and scroll-driven interactions driven by Framer Motion",
      "Modern WebP and SVG asset optimization preserving visual fidelity without sacrificing load speed",
    ],
    liveUrl: "https://bhumi.web.id",
    githubUrl: "https://github.com/JulhanAbdulMalik",
    featured: false,
  },
  {
    id: "discussion-forum",
    slug: "expert-discussion-forum-app",
    title: "Discussion Forum – Aplikasi Web Forum Diskusi (React Expert)",
    client: "Submission React Expert Dicoding",
    year: "Agustus 2025",
    categories: ["Web App"],
    roleId: "Frontend System Architect & Developer",
    roleEn: "Frontend System Architect & Developer",
    taglineId:
      "Aplikasi forum diskusi interaktif dengan centralized Redux state, Storybook UI, dan testing 100%.",
    taglineEn:
      "Interactive discussion forum app with centralized Redux state, Storybook UI, and 100% test coverage.",
    problemId:
      "Sebelumnya, arsitektur aplikasi berbasis React sering menghadapi kendala prop drilling, race conditions saat panggilan asynchronous API, serta ketiadaan dokumentasi komponen terisolasi.",
    impactId:
      "Kini, seluruh state terkelola bersih melalui Redux Toolkit & Thunk tanpa mutating bug, terdokumentasi visual di Storybook, dan terverifikasi dengan automated unit/integration testing berstandar React Expert.",
    descriptionId:
      "Forum diskusi interaktif dengan fitur like/dislike/komentar, Redux sebagai state management terpusat, Storybook untuk dokumentasi komponen sesuai standar React Expert level (Dicoding).",
    descriptionEn:
      "An interactive discussion forum web app featuring like/dislike/comments, centralized Redux state management, isolated component documentation via Storybook, and automated testing conforming to Dicoding's React Expert level standard.",
    image: "/images/projects/discussion-forum.png",
    techStack: [
      "React.js",
      "Redux Toolkit",
      "Redux Thunk",
      "TypeScript",
      "Storybook",
      "Jest",
      "React Testing Library",
      "Tailwind CSS",
    ],
    metrics: [
      {
        value: "100%",
        labelId: "Automated Test Coverage (Jest & RTL)",
        labelEn: "Critical Path Test Coverage",
      },
      {
        value: "React Expert",
        labelId: "Standar Kelulusan Dicoding Level",
        labelEn: "Dicoding Expert Review Grade",
      },
      {
        value: "0 Bug",
        labelId: "Zero State Mutation Anomaly",
        labelEn: "Zero State Mutation Anomaly",
      },
      {
        value: "Storybook",
        labelId: "Komponen UI Terdokumentasi Lengkap",
        labelEn: "Storybook UI Components",
      },
    ],
    featuresId: [
      "Forum diskusi interaktif: pembuatan topik thread, reply berjenjang, upvote & downvote real-time",
      "Optimistic UI updates untuk aksi voting sehingga interaksi terasa instan tanpa loading spinner",
      "Papan peringkat (leaderboard) kontributor teraktif secara real-time",
      "Katalog dokumentasi komponen terisolasi menggunakan Storybook component explorer",
      "Comprehensive automated testing suite: Unit test dan Integration test dengan Jest & React Testing Library",
    ],
    featuresEn: [
      "Interactive thread discussions: thread creation, nested replies, real-time upvotes & downvotes",
      "Optimistic UI updates for voting actions providing instantaneous feedback without spinners",
      "Community leaderboard ranking top contributors dynamically",
      "Isolated component catalog and design system documentation using Storybook explorer",
      "Comprehensive automated testing suite: Unit test and Integration test with Jest & React Testing Library",
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
    liveUrl: "https://discussion-forum-app-expert-end.vercel.app",
    githubUrl: "https://github.com/JulhanAbdulMalik",
    featured: false,
  },
];
