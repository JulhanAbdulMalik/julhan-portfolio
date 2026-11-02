import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Arsitektur Web & Clean Code | Julhan Abdul Malik",
  description:
    "Catatan arsitektur, panduan tech stack modern, dan tips praktis rekayasa perangkat lunak dari pengalaman me-review 258+ submission kode developer.",
  keywords: [
    "Blog Programming Indonesia",
    "Tips Clean Code React",
    "Panduan Next.js App Router",
    "Reviewer Dicoding Indonesia",
    "Arsitektur Web Modern",
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

