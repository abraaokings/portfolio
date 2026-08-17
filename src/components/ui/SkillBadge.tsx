import type { Skill } from "@/data/profile";

type BadgeColor = {
  background: string;
  foreground: string;
};

const lightText = "#111111";
const darkText = "#ffffff";

const brandColors: Record<string, BadgeColor> = {
  "Ant Design": { background: "#0170FE", foreground: darkText },
  "AntD Form": { background: "#0170FE", foreground: darkText },
  "Apollo Client": { background: "#311C87", foreground: darkText },
  "Chakra UI": { background: "#319795", foreground: darkText },
  CSS3: { background: "#1572B6", foreground: darkText },
  Elementor: { background: "#92003B", foreground: darkText },
  Git: { background: "#F05032", foreground: darkText },
  GitHub: { background: "#181717", foreground: darkText },
  GraphQL: { background: "#E10098", foreground: darkText },
  "GraphQL Codegen": { background: "#E10098", foreground: darkText },
  HTML5: { background: "#E34F26", foreground: darkText },
  JavaScript: { background: "#F7DF1E", foreground: lightText },
  Lefthook: { background: "#FF1E1E", foreground: darkText },
  Linux: { background: "#FCC624", foreground: lightText },
  "Next.js": { background: "#111111", foreground: darkText },
  NPM: { background: "#CB3837", foreground: darkText },
  Orval: { background: "#6BA539", foreground: darkText },
  PNPM: { background: "#F69220", foreground: darkText },
  React: { background: "#61DAFB", foreground: lightText },
  "React Flow": { background: "#FF0072", foreground: darkText },
  "React Hook Form": { background: "#EC5990", foreground: darkText },
  "REST APIs": { background: "#6BA539", foreground: darkText },
  "shadcn/ui": { background: "#111111", foreground: darkText },
  Strapi: { background: "#4945FF", foreground: darkText },
  "Tailwind CSS": { background: "#06B6D4", foreground: darkText },
  "TanStack Query": { background: "#FF4154", foreground: darkText },
  TypeScript: { background: "#3178C6", foreground: darkText },
  Vercel: { background: "#111111", foreground: darkText },
  Vite: { background: "#646CFF", foreground: darkText },
  "VS Code": { background: "#007ACC", foreground: darkText },
  WordPress: { background: "#21759B", foreground: darkText },
  Yup: { background: "#C9A227", foreground: lightText },
  Zod: { background: "#3E67B1", foreground: darkText },
  Zustand: { background: "#443E38", foreground: darkText },
};

const fallbackColor: BadgeColor = {
  background: "#F6F6F6",
  foreground: "#555555",
};

export function SkillBadge({ initials, label }: Skill) {
  const color = brandColors[label] ?? fallbackColor;

  return (
    <span
      className="inline-flex min-h-[22px] items-center gap-1.5 whitespace-nowrap text-sm leading-none text-ink max-[430px]:text-[13px]"
      aria-label={label}
    >
      <span
        className="inline-flex size-[18px] items-center justify-center rounded-[3px] text-[8px] leading-none font-normal"
        style={{ backgroundColor: color.background, color: color.foreground }}
        aria-hidden="true"
      >
        {initials}
      </span>
      {label}
    </span>
  );
}
