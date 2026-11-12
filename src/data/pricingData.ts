export interface PricingPlan {
  id: string;
  name: string;
  target: string;
  originalPrice: string;
  price: string;
  discountBadge?: string;
  period?: string;
  priceSubtext?: string;
  duration: string;
  guarantee: string;
  popular: boolean;
  badge?: string;
  features: string[];
  note?: string;
  ctaText: string;
  waMessage: string;
}

export const maintenancePlans: PricingPlan[] = [
  {
    id: "starter-care",
    name: "Starter Care",
    target: "Monitoring Server & Pemeliharaan Web",
    originalPrice: "Rp 850.000",
    price: "Rp 499.000",
    discountBadge: "Diskon 41%",
    period: "/ bulan",
    duration: "Langganan Bulanan Fleksibel",
    guarantee: "Monitoring Uptime Cloud 24/7",
    popular: false,
    features: [
      "Gratis Biaya Cloud VPS Server & Perpanjangan Domain Resmi (.com / .id / .web.id)",
      "Pembaruan Sertifikat SSL Keamanan Otomatis",
      "Backup Data Berkala Bulanan Otomatis",
      "Pemeliharaan Rutin Performa & Ruang Simpan Database",
      "Revisi Konten Ringan (Ganti Teks & Gambar Produk)",
      "Monitoring Status Uptime Server 24/7",
      "Penanganan Bug & Kendala Error Server Standar",
    ],
    note: "Jauh lebih hemat daripada merekrut staf IT khusus. Mengelola server dan domain membutuhkan keahlian teknis—serahkan pemeliharaannya kepada tim IT kami agar website Anda selalu aktif dan aman.",
    ctaText: "Pilih Starter Care",
    waMessage: "Halo Julhan & Tim, saya tertarik berlangganan Starter Care (Rp 499rb/bln) untuk pemeliharaan website.",
  },
  {
    id: "pro-care",
    name: "Professional Care",
    target: "Pemeliharaan Aktif Toko Online, Kasir & Dashboard",
    originalPrice: "Rp 2.500.000",
    price: "Rp 1.150.000",
    discountBadge: "Diskon 54%",
    period: "/ bulan",
    duration: "Langganan Bulanan Fleksibel",
    guarantee: "Prioritas Tanggap Darurat Bug (Maks. 1x24 Jam)",
    popular: true,
    badge: "Paling Diminati untuk Bisnis Aktif",
    features: [
      "Semua cakupan layanan di Paket Starter Care",
      "Gratis Biaya Cloud VPS Server & Perpanjangan Domain Resmi",
      "Pemantauan Transaksi Gateway QRIS & Bank Virtual Account",
      "Backup Data Mingguan Otomatis (Aman dari Kehilangan Transaksi)",
      "Pengembangan Fitur Baru pada Sistem Berjalan Maks. 3x sebulan",
      "Optimalisasi Indeks Database agar Tetap Kencang Saat Transaksi Menumpuk",
      "Prioritas Perbaikan Bug & Kendala Darurat",
      "Monitoring Status Uptime Server 24/7",
    ],
    note: "Jauh lebih hemat daripada menggaji tim IT in-house. Sistem transaksi, server, dan database Anda terawat penuh oleh tim IT kami tanpa beban operasional kantor.",
    ctaText: "Pilih Professional Care",
    waMessage: "Halo Julhan & Tim, saya ingin berlangganan Professional Care (Rp 1.150.000/bln) dengan kuota 3x penambahan fitur bulanan.",
  },
  {
    id: "enterprise-care",
    name: "Virtual IT Department",
    target: "Tim IT Profesional Pribadi di Perusahaan Anda",
    originalPrice: "Rp 3.750.000",
    price: "Rp 1.950.000",
    discountBadge: "Diskon 48%",
    period: "/ bulan",
    duration: "Langganan Bulanan Fleksibel",
    guarantee: "Dedicated Tech Partner & Respons Prioritas",
    popular: false,
    badge: "Solusi Hemat Kantor (< Rp 2 Juta)",
    features: [
      "Semua cakupan di Paket Starter & Professional Care",
      "Pemeliharaan Sistem Flutter & Rilis Update Google Play Store",
      "Pemantauan Latensi API & Optimasi Query Database",
      "Pengembangan & Peningkatan Fitur Sistem Maks. 5x sebulan",
      "Backup Data Harian / Dua Mingguan Otomatis",
      "Konsultasi Arsitektur & Strategi Teknologi Bulanan",
      "Dedicated WhatsApp Support Prioritas Khusus Langsung ke Tim Utama",
    ],
    note: "Hemat jutaan rupiah dibanding merekrut staf developer in-house (Rp 5-10jt/bln). Seluruh ekosistem web, mobile, dan server ditangani profesional oleh tim kami.",
    ctaText: "Sewa Tim IT Virtual",
    waMessage: "Halo Julhan & Tim, saya tertarik dengan layanan Virtual IT Department (Rp 1.950.000/bln) untuk menjadi tim IT perusahaan kami.",
  },
];
