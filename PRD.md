# PRD — Portfolio "RIVERA.DEV" (Neo-Brutalist)

## 1. Ringkasan
Website portfolio pribadi bergaya **Neo-Brutalist** untuk Alex Rivera, seorang *Digital Product Engineer* (frontend engineering, UI/UX design, motion, branding). Saat ini berupa single-file HTML statis (Tailwind via CDN + vanilla JS). Dokumen ini mendefinisikan requirement untuk migrasi ke **framework Astro** dengan struktur komponen yang rapi, dapat dikembangkan, dan tetap mempertahankan seluruh perilaku/visual yang ada.

- **Bahasa konten:** Indonesia
- **Target pengguna akhir:** Recruiter, klien freelance, sesama developer/desainer yang mengunjungi portfolio
- **Platform:** Web, responsif (mobile → desktop)

## 2. Tujuan Produk
1. Menyajikan identitas & keahlian Alex Rivera secara ringkas dan mengesankan dalam <10 detik pertama (hero section).
2. Menampilkan karya (project) dengan detail yang bisa difilter per kategori (IT/Dev, Desain, Video).
3. Memberi jalur kontak yang jelas (email, form guestbook, CTA "Rekrut Saya").
4. Menunjukkan kredibilitas lewat statistik, timeline pengalaman, dan testimoni klien.
5. Memberikan pengalaman interaktif yang playful namun tetap accessible (keyboard nav, reduced motion, skip link).

## 3. Non-Tujuan
- Tidak ada backend/database sungguhan — form guestbook & command palette bersifat client-side/mock (bisa dihubungkan ke API nanti).
- Tidak membangun CMS; konten project/testimoni di-hardcode di data file (mudah diedit manual).
- Tidak membangun sistem autentikasi.

## 4. Persona
| Persona | Kebutuhan |
|---|---|
| Recruiter/HR | Cepat menilai skill, pengalaman, dan cara menghubungi |
| Klien Freelance | Melihat portofolio nyata, testimoni, dan CTA kontak |
| Sesama Developer | Mengagumi detail interaksi/motion, mungkin ingin lihat kode |

## 5. Fitur & Requirement Fungsional

### 5.1 Global / Layout
- **Header sticky** dengan logo, navigasi anchor (`Tentang`, `Karir`, `Karya`, `Testimoni`, `Kontak`), tombol Command Palette (⌘K), tombol toggle tema (light/dark), CTA "Rekrut Saya".
- **Marquee ticker** (atas) berisi status ketersediaan, stack, dan lokasi — infinite scroll horizontal, pause on hover.
- **Scroll progress bar** di top viewport.
- **Custom cursor** (dot + ring) khusus perangkat pointer:fine, membesar saat hover elemen interaktif.
- **Loader/splash screen** saat pertama kali load (± 1.4s) dengan animasi stempel nama.
- **Toast notification system** (bottom-right) untuk feedback aksi (copy email, ganti tema, kirim pesan, dll).
- **Command Palette** (⌘K / Ctrl+K): cari & jalankan aksi (scroll ke section, salin email, ganti tema, unduh CV, buka link sosial). Mendukung navigasi keyboard (↑/↓/Enter/Esc).
- **Skip link** untuk aksesibilitas (lewati ke konten utama).
- **Dark/Light theme** tersimpan di `localStorage`, sinkron dengan `prefers-color-scheme`, dan diterapkan sebelum render (no-FOUC).
- **Scroll reveal** animasi fade+translate saat section masuk viewport (menghormati `prefers-reduced-motion`).
- **Active nav indicator** — link nav aktif sesuai section yang sedang dilihat (IntersectionObserver).

### 5.2 Hero Section (`#home`)
- Headline besar (display font), sub-headline, CTA utama.
- (Sesuai HTML asli: badge/stamp branding, ilustrasi/dekorasi neo-brutalist).

### 5.3 About Section (`#about`)
- **Bio card**: foto, nama, jabatan, deskripsi singkat, CTA "Unduh CV" & "Lihat Project".
- **Now Playing widget**: mock lagu yang sedang diputar + progress bar (dekoratif).
- **Live Clock widget**: jam real-time zona Asia/Jakarta, update tiap detik.
- **Tech Stack grid**: ikon + label tools utama (React, Next.js, Figma, TS, Premiere, Tailwind).

### 5.4 Stats Strip
- 4 angka statistik (tahun pengalaman, project selesai, klien puas, sertifikasi) dalam strip kontras (dark bg).

### 5.5 Experience / Timeline (`#pengalaman`)
- Timeline vertikal (mobile) / center-aligned (desktop) dengan dot penanda tiap entri karir.

### 5.6 Portfolio / Katalog (`#portfolio`)
- **Tab filter**: Semua / IT-Dev / Desain / Video — filter client-side tanpa reload.
- **Project card grid** (2 kolom desktop): gambar, judul, deskripsi singkat, tag teknologi, tombol "Detail →".
- **Project modal**: klik card membuka modal dengan gambar besar, deskripsi lengkap, tag, tombol "Lihat Live" & "Repo Kode". Tutup via tombol ✕, klik overlay, atau Esc.
- Data project minimal punya field: `title, desc, shortDesc, img, tags[], category, live, repo`.

### 5.7 Testimoni (`#testimoni`)
- Marquee/carousel testimoni klien (dekoratif berjalan otomatis).

### 5.8 Contact (`#contact`)
- Info kontak + tombol salin email ke clipboard (dengan toast konfirmasi).
- **Guestbook form**: nama, jabatan/instansi, pesan → submit menambahkan entri baru ke daftar komentar (client-side, prepend ke list) + reset form + toast sukses.
- Daftar komentar existing (seed data) ditampilkan sebagai starting state.

### 5.9 Footer
- Marquee "MARI BEKERJA SAMA".
- Copyright + tombol "Kembali ke Atas".

## 6. Requirement Non-Fungsional
- **Performance**: Astro static output (SSG), image `loading="lazy"`, minim JS terkirim ke client (hanya island/script yang perlu interaktif).
- **Aksesibilitas**: focus-visible outline, aria-label pada tombol ikon, `role="dialog"` pada modal/overlay, skip link, hormati `prefers-reduced-motion`.
- **Responsif**: mobile-first, breakpoint `sm/md/lg` mengikuti Tailwind default.
- **SEO**: meta description, Open Graph tags, `<title>` per halaman, favicon SVG inline.
- **Browser support**: evergreen browsers (Chrome, Firefox, Safari, Edge terbaru).
- **Maintainability**: konten project/testimoni/skill dipisah ke file data (`src/data/*.ts`) agar mudah diubah tanpa menyentuh markup.

## 7. Arsitektur Teknis (Target)

```
astro-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Marquee.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── StatsStrip.astro
│   │   ├── Experience.astro
│   │   ├── Portfolio.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectModal.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── CommandPalette.astro
│   │   ├── Cursor.astro
│   │   ├── Loader.astro
│   │   └── ToastContainer.astro
│   ├── data/
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── testimonials.ts
│   │   └── comments.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── scripts/
│   │   ├── theme.ts
│   │   ├── cursor.ts
│   │   ├── commandPalette.ts
│   │   ├── portfolioFilter.ts
│   │   ├── guestbook.ts
│   │   ├── scrollProgress.ts
│   │   ├── scrollReveal.ts
│   │   ├── toast.ts
│   │   └── clock.ts
│   ├── styles/
│   │   └── global.css
│   └── pages/
│       └── index.astro
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── PRD.md
```

- **Framework**: Astro (SSG, output: `static`)
- **Styling**: Tailwind CSS (integrasi resmi `@astrojs/tailwind`), custom CSS variables untuk tema tetap di `global.css`
- **Interaktivitas**: vanilla TypeScript per fitur, di-load sebagai module script (`<script>` di komponen relevan) — tidak butuh React/Vue karena semua state sederhana (DOM-based)
- **Font**: Google Fonts (Archivo Black, Space Grotesk, JetBrains Mono) via `<link>` di layout

## 8. Rencana Migrasi (Fase)
1. **Setup**: init Astro + Tailwind, pindahkan CSS variables & utility classes ke `global.css`.
2. **Layout & Head**: buat `BaseLayout.astro` (meta tags, fonts, theme no-FOUC script, skip link).
3. **Komponen statis**: Header, Hero, About, StatsStrip, Experience, Testimonials, Footer.
4. **Data-driven**: pindahkan project cards & komentar guestbook ke `src/data/*.ts`, render via `.map()`.
5. **Interaktif (islands/script)**: Loader, Cursor, ScrollProgress, ScrollReveal, ThemeToggle, CommandPalette, PortfolioFilter, ProjectModal, Guestbook, Toast, LiveClock.
6. **QA**: cek parity visual & fungsional terhadap HTML asli, uji aksesibilitas & responsif.
7. **Build & Deploy**: `astro build`, deploy ke Vercel/Netlify/Cloudflare Pages.

## 9. Metrik Keberhasilan
- Lighthouse Performance/Accessibility/Best Practices/SEO ≥ 90.
- Waktu render awal (LCP) < 2.5s pada koneksi 4G.
- Semua fitur interaktif HTML asli berfungsi identik setelah migrasi (regresi = 0).

## 10. Risiko & Catatan
- Tailwind saat ini dipakai via CDN (`cdn.tailwindcss.com`) — di Astro harus pindah ke build-time Tailwind, perlu pastikan semua utility class arbitrary (`bg-[var(--ink)]`, dsb.) tetap didukung oleh konfigurasi PostCSS/Tailwind versi terbaru.
- Custom cursor & efek hover tidak relevan di perangkat sentuh — pastikan tetap disembunyikan via media query `pointer:fine`.
- Guestbook & Now Playing bersifat mock/dekoratif — beri catatan jelas di kode bila ingin dihubungkan ke backend nyata di masa depan.
