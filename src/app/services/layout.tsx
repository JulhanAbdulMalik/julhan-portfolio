import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Pembuatan Website & Aplikasi Mobile | Julhan Abdul Malik",
  description:
    "Katalog layanan lengkap pembuatan website Next.js berkecepatan tinggi, aplikasi Android Flutter, sistem manajemen toko online, dan dashboard kustom berstandar industri.",
  keywords: [
    "Jasa Pembuatan Website",
    "Jasa Aplikasi Flutter",
    "Web Developer Sukabumi",
    "Pembuatan Website UMKM",
    "Dashboard Bisnis",
    "Next.js Developer Indonesia",
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

