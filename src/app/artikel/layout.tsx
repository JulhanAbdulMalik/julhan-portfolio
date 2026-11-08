import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel Rekayasa Web & Clean Code | Julhan Abdul Malik",
  description:
    "Catatan arsitektur, panduan tech stack modern, dan tips praktis rekayasa perangkat lunak dari pengalaman me-review 258+ submission kode developer.",
  keywords: [
    "Artikel Programming Indonesia",
    "Tips Clean Code React",
    "Panduan Next.js App Router",
    "Reviewer Dicoding Indonesia",
    "Arsitektur Web Modern",
  ],
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

