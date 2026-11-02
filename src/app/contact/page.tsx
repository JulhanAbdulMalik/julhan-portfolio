import { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Hubungi Julhan Abdul Malik | Konsultasi Pembuatan Website & Aplikasi",
  description:
    "Konsultasikan ide pembuatan website, sistem manajemen bisnis, atau aplikasi mobile Flutter Anda. Dapatkan estimasi biaya dan waktu pengerjaan gratis.",
};

export default function ContactPage() {
  return (
    <div className="w-full pt-16">
      <ContactSection />
    </div>
  );
}

