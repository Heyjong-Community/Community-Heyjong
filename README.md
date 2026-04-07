# Community Heyjong

Community Heyjong adalah aplikasi web platform komunitas yang dibangun menggunakan Next.js 15 dan React 19. Aplikasi ini menyediakan fungsionalitas publik dan dashboard admin untuk mengelola konten, anggota, kategori, serta artikel komunitas secara intuitif.

## Fitur Utama

- Autentikasi dan otorisasi pengguna
- Dashboard admin dengan manajemen artikel, kategori, dan anggota
- Tampilan publik untuk menu, artikel, kegiatan, dan halaman kontak
- Editor rich text untuk menambah dan mengedit artikel
- Komponen tabel interaktif dan UI responsif berbasis Tailwind CSS
- Navigasi menu dan sidebar yang modular

## Struktur Proyek

- `src/app/` - Routing aplikasi menggunakan App Router Next.js
- `src/components/` - Komponen UI dan organisasi desain sistem
- `src/hooks/` - Hook khusus untuk mengambil data dan logika state
- `src/services/` - API service untuk autentikasi, artikel, kategori, member, dan user
- `src/lib/` - Utility dan helper untuk RBAC, format tanggal, dan sanitasi HTML
- `src/types/` - Tipe TypeScript untuk model data aplikasi

## Teknologi

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI
- React Table
- React Quill
- Swiper
- Sonner toast notifications
- Lucide Icons / Heroicons

## Persiapan dan Jalankan

1. Install dependensi:

```bash
npm install
```

2. Jalankan server development:

```bash
npm run dev
```

3. Buka aplikasi di browser:

```text
http://localhost:3000
```

## Skrip NPM

- `npm run dev` - Menjalankan server development dengan Turbopack
- `npm run build` - Membangun aplikasi untuk production
- `npm run start` - Menjalankan aplikasi yang sudah dibangun
- `npm run lint` - Menjalankan linting ESLint

## Tips Pengembangan

- File entry utama halaman publik berada di `src/app/(menu)/`
- Dashboard admin berada di `src/app/(dashboard)/dashboard`
- Gunakan `src/components/organism/` untuk komponen layout yang dapat digunakan ulang
- Periksa `src/services/` untuk alur panggilan API dan integrasi backend

## Kontribusi

Jika Anda ingin mengembangkan proyek ini lebih lanjut, tambahkan fitur baru sesuai struktur modular dan pastikan kode tetap konsisten dengan pola komponen dan hook yang sudah ada.

---

Dokumentasi ini disesuaikan untuk `community-heyjong` agar mudah dipahami dan dikembangkan oleh tim.
