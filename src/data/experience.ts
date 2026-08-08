export interface ExperienceItem {
  period: string;
  title: string;
  desc: string;
  color: string;
}

export const experience: ExperienceItem[] = [
  {
    period: "2025 - SEKARANG",
    title: "DEPUTY HEAD OF THE INFORMATION AND COMMUNICATION DEPARTMENT",
    desc: "HIMATIF UIN SUSKA — ",
    color: "text-[var(--coral)]",
  },
  {
    period: "2025 - SEKARANG",
    title: "VICE HEAD — Riau DevOps",
    desc: "Berkontribusi dalam pengembangan ekosistem software development, web development, dan DevOps melalui RDO.",
    color: "text-[var(--pink)]",
  },
  {
    period: "2025 - SEKARANG",
    title: "Humas Fakultas Sains dan Teknologi - UIN SUSKA RIAU",
    desc: "",
    color: "text-[var(--pink)]",
  },
  {
    period: "2025",
    title: "Coordinator — HID, HIMATIF UIN SUSKA",
    desc: "Mengkoordinasikan public relations, information flow, dan documentation",
    color: "",
  },
  {
    period: "2021 - 2022",
    title: "Members Of Jurnalism",
    desc: "",
    color: "",
  },
  {
    period: "2025 - SEKARANG",
    title: "Freelance Video Editor & Graphic Designer",
    desc: "",
    color: "",
  },
  {
    period: "2019 - 2020",
    title: "Freelance Illustrator",
    desc: "Membuat ilustrasi untuk berbagai klien dan proyek",
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
