import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar Harga & Transparansi Biaya Pembuatan Website | Julhan Abdul Malik",
  description:
    "Estimasi investasi pembuatan website dan aplikasi mobile mulai Rp 500.000. Transparan tanpa biaya tersembunyi, 100% hak milik kode sumber, dan garansi pemeliharaan resmi.",
  keywords: [
    "Harga Jasa Pembuatan Website",
    "Biaya Bikin Aplikasi Mobile",
    "Paket Landing Page Murah",
    "Tarif Freelance Web Developer",
    "Garansi Website Resmi",
  ],
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

