export interface ExperienceItem {
  period: string;
  title: string;
  desc: string;
  color: string;
}

export const experience: ExperienceItem[] = [
  {
    period: "2024 — SEKARANG",
    title: "SENIOR CREATIVE DEVELOPER",
    desc: "Studio Kinetic — memimpin pengembangan produk digital dari desain sistem sampai deployment.",
    color: "text-[var(--blue)]",
  },
  {
    period: "2022 — 2024",
    title: "FRONTEND ENGINEER",
    desc: "Klika Studio — membangun antarmuka React untuk klien FinTech dan e-commerce.",
    color: "text-[var(--coral)]",
  },
  {
    period: "2020 — 2022",
    title: "UI/UX DESIGNER",
    desc: "Digital Nexus — riset pengguna, wireframe, dan design system untuk aplikasi mobile.",
    color: "text-[var(--pink)]",
  },
  {
    period: "2019 — 2020",
    title: "JUNIOR WEB DEVELOPER",
    desc: "Freelance — mengerjakan landing page dan website profil untuk UMKM lokal.",
    color: "",
  },
];

export interface Skill {
  label: string;
  percent: number;
  color: string;
}

export const skills: Skill[] = [
  { label: "Frontend Development", percent: 92, color: "var(--blue)" },
  { label: "UI/UX Design", percent: 88, color: "var(--coral)" },
  { label: "Motion & Animasi", percent: 75, color: "var(--pink)" },
  { label: "Branding", percent: 70, color: "var(--ink)" },
];

export const stats = [
  { value: "1+", label: "TAHUN PENGALAMAN", color: "text-[var(--lime)]" },
  { value: "20+", label: "PROJECT SELESAI", color: "text-[var(--coral)]" },
  { value: "6", label: "KLIEN PUAS", color: "text-[var(--blue)]" },
  { value: "9", label: "SERTIFIKASI", color: "text-[var(--pink)]" },
];

export const techStack = [
  { icon: "⚛️", label: "React" },
  { icon: "⚡", label: "Next.js" },
  { icon: "🎨", label: "Figma" },
  { icon: "🔷", label: "JS" },
  { icon: "🔷", label: "Astro" },
  { icon: "🎬", label: "Premiere" },
  { icon: "💨", label: "Tailwind" },
];
