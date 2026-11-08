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
  roleId: "Software Engineer",
  roleEn: "Software Engineer",
  avatar: "/julhan-foto-profile.jpg",
  bioId:
    "Software Engineer dengan fokus pada pembangunan arsitektur web modern performa tinggi (Next.js) dan aplikasi mobile (Flutter) berkualitas produksi.",
  bioEn:
    "Software Engineer focused on architecting modern high-performance web systems (Next.js) and production-grade mobile apps (Flutter).",
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
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

