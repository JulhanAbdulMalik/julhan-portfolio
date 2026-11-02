import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Studi Kasus Sistem Produksi | Julhan Abdul Malik",
  description:
    "Eksplorasi hasil karya nyata sistem perangkat lunak yang telah teruji di industri: portal enterprise monitoring kurikulum kampus, agritech mobile app, dan sistem reservasi F&B.",
  keywords: [
    "Portfolio Web Developer",
    "Studi Kasus Next.js",
    "Flutter App Showcase",
    "Sistem Akademik Kampus",
    "Julhan Abdul Malik Portfolio",
  ],
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

