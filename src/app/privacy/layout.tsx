import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Julhan Abdul Malik",
  description:
    "Kebijakan privasi dan komitmen kerahasiaan data klien oleh Julhan Abdul Malik, Web & Mobile App Developer.",
  alternates: {
    canonical: "https://julhan.my.id/privacy",
  },
  openGraph: {
    title: "Kebijakan Privasi | Julhan Abdul Malik",
    description:
      "Kebijakan privasi dan komitmen kerahasiaan data klien oleh Julhan Abdul Malik, Web & Mobile App Developer.",
    url: "https://julhan.my.id/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

