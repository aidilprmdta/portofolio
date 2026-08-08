export type ProjectCategory = "it" | "design" | "video";

export interface Project {
  title: string;
  shortDesc: string;
  desc: string;
  img: string;
  thumb: string;
  tags: string[];
  category: ProjectCategory;
  live: string;
  repo: string;
  rotate: string;
  tagColor: "lime" | "coral" | "blue";
  initiallyHidden?: boolean;
}

export const projects: Project[] = [
  {
    title: "SISTEM E-COMMERCE HEADLESS",
    shortDesc:
      "Toko online performa tinggi dibangun dengan React modern dan serverless database.",
    desc: "Toko online performa tinggi dibangun dengan arsitektur headless: React di frontend, layanan serverless untuk katalog & checkout, serta cache di edge supaya loading tetap kilat walau traffic tinggi. Fokus utama proyek ini adalah conversion rate — mulai dari micro-interaction tombol beli sampai proses checkout satu halaman.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    thumb:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    tags: ["Next.js", "GraphQL", "Stripe", "Vercel"],
    category: "it",
    live: "#",
    repo: "#",
    rotate: "rotate-[0.6deg]",
    tagColor: "lime",
  },
  {
    title: 'DESIGN SYSTEM "AURA"',
    shortDesc:
      "Panduan gaya, pustaka komponen Figma, dan antarmuka komprehensif produk FinTech.",
    desc: "Design system komprehensif untuk produk FinTech: token warna & tipografi, 60+ komponen Figma siap pakai, dan dokumentasi penggunaan agar tim desain dan engineering tetap selaras. Dipakai lintas 4 tim produk internal.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    thumb:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    tags: ["Figma", "Design Tokens", "Branding", "Storybook"],
    category: "design",
    live: "#",
    repo: "#",
    rotate: "-rotate-[0.6deg]",
    tagColor: "coral",
  },
  {
    title: 'REEL PROMOSI "NUSANTARA"',
    shortDesc:
      "Video promosi pariwisata dengan color grading sinematik dan motion graphic kustom.",
    desc: "Video promosi pariwisata berdurasi 90 detik dengan color grading sinematik, motion graphic kustom untuk teks & transisi, serta sound design yang disesuaikan ritme visual. Digunakan sebagai materi kampanye media sosial multi-platform.",
    img: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=1000",
    thumb:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&q=80&w=600",
    tags: ["Premiere Pro", "After Effects", "Color Grading"],
    category: "video",
    live: "#",
    repo: "#",
    rotate: "-rotate-[0.4deg]",
    tagColor: "blue",
    initiallyHidden: true,
  },
  {
    title: "DASHBOARD ANALITIK REALTIME",
    shortDesc:
      "Visualisasi data live untuk tim operasional dengan websocket dan chart interaktif.",
    desc: "Dashboard operasional dengan data live via WebSocket, chart interaktif (D3.js) untuk memantau ribuan event per menit, serta sistem alert otomatis ketika metrik menyimpang dari ambang batas normal. Dipakai harian oleh tim ops.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    thumb:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    tags: ["React", "D3.js", "WebSocket", "Node.js"],
    category: "it",
    live: "#",
    repo: "#",
    rotate: "rotate-[0.3deg]",
    tagColor: "lime",
    initiallyHidden: true,
  },
];

export const tagColorClass: Record<Project["tagColor"], string> = {
  lime: "bg-[var(--lime)]",
  coral: "bg-[var(--coral)] text-white",
  blue: "bg-[var(--blue)] text-white",
};

export const certifications = [
  {
    name: "Google Certified UX Designer",
    issuer: "Google Coursera • 2023",
  },
  {
    name: "Advanced React Developer",
    issuer: "Dicoding Indonesia • 2022",
  },
];
