export type Skill = {
  label: string;
  initials: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  description?: string[];
  href?: string;
  note?: string;
  kind?: string;
  kindDescription?: string;
  skills?: Skill[];
};

export const profile = {
  name: "Abraão Silva dos Reis",
  role: "Desenvolvedor Front-end",
  location: "Brasil",
  avatar: "/images/abraao-silva.png",
  email: "abraao.reis.reis@gmail.com",
  about:
    "Desenvolvedor Front-end focado em aplicações web com React, Next.js e TypeScript. Tenho experiência com dashboards, formulários complexos, autenticação e autorização, gerenciamento de estado, APIs REST e GraphQL, além da criação de componentes reutilizáveis.",
};

export const contacts = [
  {
    label: "Email",
    value: "abraao.reis.reis@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=abraao.reis.reis@gmail.com",
    ariaLabel:
      "Abrir o Gmail para escrever um novo email para abraao.reis.reis@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/abraão-silva-72992a151",
    href: "https://www.linkedin.com/in/abraão-silva-72992a151",
    ariaLabel: "Abrir perfil de Abraão Silva dos Reis no LinkedIn",
  },
  {
    label: "Instagram",
    value: "instagram.com/abraaosilva3113",
    href: "https://instagram.com/abraaosilva3113",
    ariaLabel: "Abrir perfil de Abraão Silva dos Reis no Instagram",
  },
  {
    label: "GitHub",
    value: "github.com/abraaokings",
    href: "https://github.com/abraaokings",
    ariaLabel: "Abrir perfil de Abraão Silva dos Reis no GitHub",
  },
];

export const experiences: TimelineItem[] = [
  {
    period: "nov 2025 — Agora",
    title: "Desenvolvedor front-end",
    href: "https://www.globalsys.com.br/",
    description: [
      "Globalsys · Cooperado",
      "Vila Velha, Espírito Santo, Brasil · Remoto",
    ],
  },
  {
    period: "fev 2024 — nov 2025",
    title: "Programador",
    href: "https://indoorchannel.com.br/",
    description: [
      "Indoor Channel · CLT",
      "Tianguá, Ceará, Brasil · Presencial",
    ],
  },
  {
    period: "mai 2018 — fev 2020",
    title: "Estágio Remunerado",
    href: "https://www.ifto.edu.br/colinas",
    description: [
      "Instituto Federal de Educação, Ciência e Tecnologia do Tocantins · Estágio",
      "Colinas do Tocantins, Tocantins, Brasil · Presencial",
    ],
  },
];

export const skills = {
  languages: [
    { initials: "TS", label: "TypeScript" },
    { initials: "JS", label: "JavaScript" },
    { initials: "HT", label: "HTML5" },
    { initials: "CS", label: "CSS3" },
  ],
  next: [{ initials: "NX", label: "Next.js" }],
  react: [{ initials: "RE", label: "React" }],
  reactFlow: [{ initials: "RF", label: "React Flow" }],
  wordpress: [
    { initials: "WP", label: "WordPress" },
    { initials: "EL", label: "Elementor" },
    { initials: "HT", label: "HTML5" },
    { initials: "CS", label: "CSS3" },
    { initials: "JS", label: "JavaScript" },
  ],
  tanstack: [{ initials: "TQ", label: "TanStack Query" }],
  zustand: [{ initials: "ZS", label: "Zustand" }],
  zod: [{ initials: "ZD", label: "Zod" }],
  antd: [{ initials: "AD", label: "Ant Design" }],
  graphql: [
    { initials: "GQ", label: "GraphQL" },
    { initials: "AP", label: "Apollo Client" },
    { initials: "CG", label: "GraphQL Codegen" },
  ],
  strapi: [{ initials: "ST", label: "Strapi" }],
  lefthook: [{ initials: "LH", label: "Lefthook" }],
} satisfies Record<string, Skill[]>;

export const skillGroups: Array<{ label: string; items: Skill[] }> = [
  { label: "Linguagens", items: skills.languages },
  {
    label: "Frameworks",
    items: [
      ...skills.react,
      ...skills.next,
      ...skills.reactFlow,
      ...skills.strapi,
    ],
  },
  {
    label: "Bibliotecas de UI",
    items: [
      { initials: "TW", label: "Tailwind CSS" },
      { initials: "CK", label: "Chakra UI" },
      ...skills.antd,
      { initials: "AF", label: "AntD Form" },
      { initials: "UI", label: "shadcn/ui" },
    ],
  },
  { label: "CMS &\nNo-code", items: skills.wordpress.slice(0, 2) },
  {
    label: "Build Tools",
    items: [{ initials: "VT", label: "Vite" }],
  },
  {
    label: "Estado &\nFormulários",
    items: [
      ...skills.tanstack,
      ...skills.zustand,
      { initials: "HF", label: "React Hook Form" },
    ],
  },
  {
    label: "Validação",
    items: [{ initials: "YP", label: "Yup" }, ...skills.zod],
  },
  {
    label: "APIs &\nIntegração",
    items: [
      { initials: "AP", label: "REST APIs" },
      ...skills.graphql,
      { initials: "OV", label: "Orval" },
    ],
  },
  {
    label: "Controle de Versão",
    items: [
      { initials: "GT", label: "Git" },
      { initials: "GH", label: "GitHub" },
      ...skills.lefthook,
    ],
  },
  {
    label: "Ambiente &\nEditor",
    items: [
      { initials: "VS", label: "VS Code" },
      { initials: "LX", label: "Linux" },
    ],
  },
  {
    label: "Gerenciadores de Pacotes",
    items: [
      { initials: "PN", label: "PNPM" },
      { initials: "NP", label: "NPM" },
    ],
  },
  {
    label: "Deploy",
    items: [{ initials: "VC", label: "Vercel" }],
  },
];

const nextBackoffice = [
  ...skills.next,
  ...skills.tanstack,
  ...skills.zustand,
  ...skills.zod,
  ...skills.antd,
  ...skills.lefthook,
];

const nextInstitutional = [
  ...skills.next,
  ...skills.tanstack,
  ...skills.graphql,
  ...skills.strapi,
  ...skills.lefthook,
];

export const projects: TimelineItem[] = [
  {
    period: "2026",
    title: "Plexo",
    note: "sem URL oficial",
    kind: "Backoffice",
    kindDescription:
      "Painel interno para equipes gerenciarem dados, processos e operações.",
    skills: nextBackoffice,
  },
  {
    period: "2026",
    title: "Braveo Holding",
    note: "sem URL oficial",
    kind: "Site institucional",
    skills: nextInstitutional,
  },
  {
    period: "2026",
    title: "Braveo Log",
    href: "https://braveolog.com.br/",
    kind: "Site institucional",
    skills: nextInstitutional,
  },
  {
    period: "2025 — 2026",
    title: "SayCheers, depois Bridia",
    href: "https://www.saycheers.com.br/",
    kind: "Backoffice",
    kindDescription:
      "Painel interno para equipes gerenciarem dados, processos e operações.",
    skills: nextBackoffice,
  },
  {
    period: "2025 — 2026",
    title: "Memoria Aguia Branca",
    href: "https://memoriaaguiabranca.com.br/",
    kind: "Site institucional",
    skills: nextInstitutional,
  },
  {
    period: "2025 — 2026",
    title: "GAB",
    href: "https://gab.com.br/",
    kind: "Site institucional",
    skills: nextInstitutional,
  },
  {
    period: "2024 — 2025",
    title: "Senha Livre",
    href: "https://senhalivre.com/",
    kind: "Site institucional",
    skills: [...skills.react, ...skills.reactFlow],
  },
  {
    period: "2024 — 2025",
    title: "Indoor Channel",
    href: "https://indoorchannel.com.br/",
    kind: "Site institucional",
    skills: skills.wordpress,
  },
  {
    period: "2024 — 2025",
    title: "Kirash",
    href: "https://kirash.com.br/",
    kind: "Site institucional",
    skills: skills.wordpress,
  },
  {
    period: "2024 — 2025",
    title: "Estranho Audio Parts",
    href: "https://estranhoaudioparts.com.br/",
    kind: "Site institucional",
    skills: skills.wordpress,
  },
];

export const education: TimelineItem[] = [
  {
    period: "jul 2021 — Agora",
    title: "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
    href: "https://portal.ifce.edu.br/campus/tiangua/",
    description: [
      "Bacharelado, Ciência da Computação",
      "Transferido da Licenciatura em Computação",
    ],
  },
  {
    period: "2017 — 2020",
    title:
      "IFTO - Instituto Federal de Educação, Ciência e Tecnologia do Tocantins",
    href: "https://www.ifto.edu.br/colinas",
    description: ["Licenciatura em Computação"],
  },
];

export const certificates: TimelineItem[] = [
  {
    period: "Em breve",
    title: "Estou procurando e digitalizando os certificados. Aguarde ;)",
  },
];
