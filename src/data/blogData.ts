export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export interface Author {
  name: string;
  roleId: string;
  roleEn: string;
  avatar: string;
  bioId: string;
  bioEn: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  titleId: string;
  titleEn: string;
  excerptId: string;
  excerptEn: string;
  category: "Tech Stack & Architecture" | "Code Review & Best Practice" | "Tutorial" | "Freelance & Business";
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
  coverImage: string;
  author: Author;
  toc: TOCItem[];
  viewsCount: number;
}

export const blogCategories = [
  { key: "All", labelId: "Semua Kategori", labelEn: "All Categories" },
  { key: "Tech Stack & Architecture", labelId: "Arsitektur & Tech Stack", labelEn: "Tech Stack & Architecture" },
  { key: "Code Review & Best Practice", labelId: "Code Review & Clean Code", labelEn: "Code Review & Best Practice" },
  { key: "Tutorial", labelId: "Tutorial Praktis", labelEn: "Practical Tutorials" },
  { key: "Freelance & Business", labelId: "Bisnis & Freelance", labelEn: "Business & Freelance" },
];

export const defaultAuthor: Author = {
  name: "Julhan Abdul Malik",
  roleId: "Web & Mobile App Developer • Academy Code Reviewer",
  roleEn: "Web & Mobile App Developer • Academy Code Reviewer",
  avatar: "/images/profile/avatar-dummy.svg",
  bioId:
    "Developer independen berbasis di Sukabumi dengan IPK 3.92, bersertifikasi BNSP, dan telah me-review 258+ submission proyek pemrograman di Dicoding Indonesia. Berpengalaman membangun sistem enterprise kampus hingga aplikasi mobile produksi.",
  bioEn:
    "Independent developer based in Sukabumi with a 3.92 GPA, BNSP certified, and reviewed 258+ software engineering submissions at Dicoding Indonesia. Experienced in architecting enterprise academic portals to production mobile apps.",
};

export const blogPosts: BlogPost[] = [
  {
    id: "tech-stack-guide",
    slug: "panduan-memilih-tech-stack-website-bisnis",
    titleId: "Panduan Memilih Tech Stack untuk Website Bisnis & UMKM: Next.js, Supabase, hingga Flutter",
    titleEn: "Tech Stack Selection Guide for Business & SMEs: Next.js, Supabase, to Flutter",
    excerptId:
      "Bingung memilih antara WordPress, platform No-Code, atau Custom Stack untuk website bisnis Anda? Artikel ini mengulas perbandingan performa, estimasi biaya server, dan skalabilitas jangka panjang berdasarkan pengalaman proyek nyata.",
    excerptEn:
      "Stuck choosing between WordPress, No-Code builders, or a Custom Stack for your business? This article examines real-world performance benchmarks, cloud hosting costs, and architectural scalability based on production client projects.",
    category: "Tech Stack & Architecture",
    publishedAt: "28 Oktober 2024",
    readTimeMinutes: 7,
    tags: ["Next.js 14", "Supabase", "Tech Stack", "Bisnis UMKM", "Arsitektur Web"],
    coverImage: "/images/blog/tech-stack-guide.svg",
    author: defaultAuthor,
    viewsCount: 1420,
    toc: [
      { id: "latar-belakang-bisnis", title: "1. Mengapa Tech Stack Berdampak Langsung ke Omzet?", level: 2 },
      { id: "perbandingan-stack", title: "2. Perbandingan: WordPress vs No-Code vs Custom Stack", level: 2 },
      { id: "anatomi-modern-stack", title: "3. Anatomi Custom Stack: Next.js + Supabase", level: 2 },
      { id: "kapan-butuh-flutter", title: "4. Kapan Bisnis Anda Butuh Mobile App Flutter?", level: 2 },
      { id: "analisis-biaya-cloud", title: "5. Analisis Biaya Server & Pemeliharaan", level: 2 },
      { id: "rekomendasi-matriks", title: "6. Rekomendasi Berdasarkan Model Bisnis", level: 2 },
      { id: "kesimpulan", title: "7. Kesimpulan & Tindakan Selanjutnya", level: 2 },
    ],
  },
  {
    id: "dicoding-code-review",
    slug: "review-258-proyek-web-dicoding-kesalahan-coding",
    titleId: "Review 258+ Proyek Web di Dicoding: 5 Kesalahan Coding React & JS yang Sering Terjadi",
    titleEn: "Reviewing 258+ Web Projects at Dicoding: 5 Most Common React & JS Coding Mistakes",
    excerptId:
      "Sebagai Academy Code Reviewer di Dicoding yang telah memeriksa 258+ submission siswa, berikut 5 kesalahan arsitektur React dan JavaScript yang paling sering ditemui serta standar clean code solusinya.",
    excerptEn:
      "As an Academy Code Reviewer at Dicoding who examined 258+ student project submissions, here are the 5 most frequent React and JavaScript architectural pitfalls along with enterprise clean code solutions.",
    category: "Code Review & Best Practice",
    publishedAt: "25 Oktober 2024",
    readTimeMinutes: 9,
    tags: ["React.js", "Clean Code", "Dicoding Reviewer", "JavaScript", "Code Review"],
    coverImage: "/images/blog/code-review-dicoding.svg",
    author: defaultAuthor,
    viewsCount: 2380,
    toc: [
      { id: "pengantar-reviewer", title: "1. Pengantar: Pengalaman sebagai Code Reviewer", level: 2 },
      { id: "kesalahan-1-mutasi-state", title: "2. Kesalahan #1: Direct State Mutation", level: 2 },
      { id: "kesalahan-2-useeffect-loop", title: "3. Kesalahan #2: Infinite Loop pada useEffect", level: 2 },
      { id: "kesalahan-3-prop-drilling", title: "4. Kesalahan #3: Prop Drilling Tanpa State Management", level: 2 },
      { id: "kesalahan-4-async-error-handling", title: "5. Kesalahan #4: Pengabaian Error & Loading State", level: 2 },
      { id: "kesalahan-5-semantic-html", title: "6. Kesalahan #5: Div Soup & Pengabaian Aksesibilitas", level: 2 },
      { id: "checklist-clean-code", title: "7. Checklist Clean Code Sebelum Production", level: 2 },
      { id: "kesimpulan", title: "8. Kesimpulan", level: 2 },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

