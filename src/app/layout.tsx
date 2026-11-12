import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const plusJakartaSans = localFont({
  src: "./fonts/PlusJakartaSans-Variable.woff2",
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: "300 800",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://julhan.my.id"),
  title: "Julhan A Malik | Web & Mobile App Developer",
  description:
    "Jasa pembuatan website profesional, aplikasi web sistem manajemen bisnis, dan aplikasi mobile Flutter berstandar industri.",
  keywords: [
    "Julhan Abdul Malik",
    "Web Developer Sukabumi",
    "Mobile Developer Flutter",
    "Jasa Pembuatan Website",
    "Full Stack Developer Indonesia",
    "Freelance Developer",
    "Next.js Developer Indonesia",
  ],
  authors: [{ name: "Julhan Abdul Malik", url: "https://julhan.my.id" }],
  creator: "Julhan Abdul Malik",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://julhan.my.id",
    title: "Julhan Abdul Malik — Web & Mobile App Developer",
    description:
      "Jasa pembuatan website profesional dan aplikasi mobile siap pakai untuk bisnis & UMKM.",
    siteName: "Julhan Abdul Malik Portfolio & Services",
    images: [
      {
        url: "/images/og/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Julhan Abdul Malik — Web & Mobile App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julhan Abdul Malik — Web & Mobile App Developer",
    description: "Jasa pembuatan website profesional dan aplikasi mobile siap pakai untuk bisnis & UMKM.",
    images: ["/images/og/og-cover.svg"],
    creator: "@julhan_a_malik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased min-h-screen flex flex-col`}
        style={{ backgroundColor: "#000519", color: "#ffffff" }}
      >
        <SmoothScrollProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
