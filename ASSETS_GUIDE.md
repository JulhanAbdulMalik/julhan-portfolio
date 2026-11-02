# 📸 Panduan Penggantian Aset Foto & Mockup - julhan.my.id

Website ini telah dibangun dengan standar **Zero Broken Images**. Seluruh placeholder saat ini menggunakan SVG grafis berkualitas tinggi yang responsif dan ringan. Kapan pun Anda siap menggantinya dengan foto atau screenshot asli, ikuti panduan praktis berikut.

---

## 📁 1. Peta Lokasi Aset Gambar

| Lokasi File Saat Ini                          | Digunakan Pada                                    | Rekomendasi Resolusi     | Format Ideal            |
| --------------------------------------------- | ------------------------------------------------- | ------------------------ | ----------------------- |
| `public/images/profile/avatar-dummy.svg`      | Foto Profil di Hero, About Me, Blog, Author Badge | 400 x 400 px (Rasio 1:1) | `.jpg`, `.png`, `.webp` |
| `public/images/projects/cdu-portal.svg`       | Mockup Proyek CDU Portal (Nusa Putra)             | 1280 x 720 px (16:9)     | `.webp`, `.png`, `.jpg` |
| `public/images/projects/panenkita.svg`        | Mockup Proyek PanenKita (Agritech Flutter)        | 1280 x 720 px (16:9)     | `.webp`, `.png`, `.jpg` |
| `public/images/projects/yuwanyie-picnic.svg`  | Mockup Proyek Yuwanyie Picnic (F&B)               | 1280 x 720 px (16:9)     | `.webp`, `.png`, `.jpg` |
| `public/images/projects/bhumi.svg`            | Mockup Proyek Bhumi Game (Eco-game)               | 1280 x 720 px (16:9)     | `.webp`, `.png`, `.jpg` |
| `public/images/projects/discussion-forum.svg` | Mockup Proyek Discussion Forum (React Expert)     | 1280 x 720 px (16:9)     | `.webp`, `.png`, `.jpg` |
| `public/images/blog/tech-stack-guide.svg`     | Cover Artikel Tech Stack Guide                    | 1200 x 630 px            | `.webp`, `.jpg`         |
| `public/images/blog/code-review-dicoding.svg` | Cover Artikel Code Review Dicoding                | 1200 x 630 px            | `.webp`, `.jpg`         |
| `public/images/og/og-cover.svg`               | Social Media Share Banner (WA, X, LinkedIn)       | 1200 x 630 px            | `.png`, `.jpg`, `.svg`  |

---

## 🛠️ 2. Cara Mengganti Gambar

### **Metode A: Timpa Langsung (Paling Mudah, Tanpa Edit Kode)**

Jika Anda menggunakan file baru dengan format `.svg` atau menimpa nama file yang sama:

1. Siapkan foto/screenshot Anda.
2. Salin (_copy-paste_) ke folder tujuan (misal: `public/images/profile/`).
3. Beri nama file yang sama persis (misal: `avatar-dummy.svg`).
4. Selesai! Website otomatis menampilkan gambar baru tanpa perlu mengubah kode.

---

### **Metode B: Menggunakan Format Gambar Nyata (.png / .jpg / .webp)**

Jika Anda memiliki foto asli berformat JPG atau PNG:

1. Masukkan file ke folder terkait, contohnya:
   - Foto Anda: `public/images/profile/julhan-photo.jpg`
   - Screenshot proyek: `public/images/projects/cdu-portal.webp`
2. Buka file konfigurasi data berikut di editor:
   - **Untuk Foto Profil & About:** Buka `src/components/sections/AboutSection.tsx` dan `src/data/blogData.ts`, ubah:
     ```ts
     avatar: "/images/profile/julhan-photo.jpg",
     ```
   - **Untuk Mockup Proyek:** Buka `src/data/portfolioData.ts`, ubah properti `image`:
     ```ts
     image: "/images/projects/cdu-portal.webp",
     ```
   - **Untuk Cover Artikel Blog:** Buka `src/data/blogData.ts`, ubah properti `coverImage`:
     ```ts
     coverImage: "/images/blog/tech-stack-guide.webp",
     ```
3. Simpan file, lalu jalankan `npm run build` untuk memverifikasi.

---

## ⚡ 3. Tips Optimasi Performa (Grade A Speed)

1. **Gunakan Format Modern:** Prioritaskan format `.webp` untuk kompresi maksimal dengan kualitas tajam.
2. **Kompres Sebelum Upload:** Gunakan tool gratis seperti [TinyPNG](https://tinypng.com) atau [Squoosh](https://squoosh.app) agar ukuran file di bawah **150 KB**.
3. **Pencahayaan Konsisten:** Untuk screenshot antarmuka aplikasi, disarankan mengambil tangkapan layar dalam tema gelap (_Dark Mode_) agar menyatu harmonis dengan palet _luxury navy_ HexaCore.
