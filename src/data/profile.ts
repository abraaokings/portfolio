export type Skill = {
  label: string;
  initials: string;
  color: string;
  foreground?: string;
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
    label: "E-mail",
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
    title: "Desenvolvedor Front-end",
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
    { initials: "TS", label: "TypeScript", color: "#3178C6" },
    {
      initials: "JS",
      label: "JavaScript",
      color: "#F7DF1E",
      foreground: "#111111",
    },
    { initials: "HT", label: "HTML5", color: "#E34F26" },
    { initials: "CS", label: "CSS3", color: "#1572B6" },
  ],
  next: [{ initials: "NX", label: "Next.js", color: "#666666" }],
  react: [
    {
      initials: "RE",
      label: "React",
      color: "#61DAFB",
      foreground: "#111111",
    },
  ],
  reactFlow: [{ initials: "RF", label: "React Flow", color: "#FF0072" }],
  tailwind: [
    {
      initials: "TW",
      label: "Tailwind CSS",
      color: "#06B6D4",
      foreground: "#111111",
    },
  ],
  wordpress: [
    { initials: "WP", label: "WordPress", color: "#21759B" },
    { initials: "EL", label: "Elementor", color: "#92003B" },
    { initials: "HT", label: "HTML5", color: "#E34F26" },
    { initials: "CS", label: "CSS3", color: "#1572B6" },
    {
      initials: "JS",
      label: "JavaScript",
      color: "#F7DF1E",
      foreground: "#111111",
    },
  ],
  tanstack: [{ initials: "TQ", label: "TanStack Query", color: "#FF4154" }],
  zustand: [{ initials: "ZS", label: "Zustand", color: "#443E38" }],
  zod: [{ initials: "ZD", label: "Zod", color: "#3E67B1" }],
  antd: [{ initials: "AD", label: "Ant Design", color: "#1677FF" }],
  graphql: [
    { initials: "GQ", label: "GraphQL", color: "#E10098" },
    { initials: "AP", label: "Apollo Client", color: "#311C87" },
    { initials: "CG", label: "GraphQL Codegen", color: "#1F56C5" },
  ],
  strapi: [{ initials: "ST", label: "Strapi", color: "#4945FF" }],
  lefthook: [{ initials: "LH", label: "Lefthook", color: "#FF1E56" }],
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
      ...skills.tailwind,
      { initials: "CK", label: "Chakra UI", color: "#319795" },
      ...skills.antd,
      { initials: "AF", label: "AntD Form", color: "#1677FF" },
      { initials: "UI", label: "shadcn/ui", color: "#71717A" },
    ],
  },
  { label: "CMS &\nNo-code", items: skills.wordpress.slice(0, 2) },
  {
    label: "Build Tools",
    items: [
      {
        initials: "VT",
        label: "Vite",
        color: "#646CFF",
      },
    ],
  },
  {
    label: "Estado &\nFormulários",
    items: [
      ...skills.tanstack,
      ...skills.zustand,
      { initials: "HF", label: "React Hook Form", color: "#EC5990" },
    ],
  },
  {
    label: "Validação",
    items: [{ initials: "YP", label: "Yup", color: "#2563EB" }, ...skills.zod],
  },
  {
    label: "APIs &\nIntegração",
    items: [
      { initials: "AP", label: "REST APIs", color: "#009688" },
      ...skills.graphql,
    ],
  },
  {
    label: "Controle de Versão",
    items: [
      { initials: "GT", label: "Git", color: "#F05032" },
      { initials: "GH", label: "GitHub", color: "#6E5494" },
      ...skills.lefthook,
    ],
  },
  {
    label: "Ambiente &\nEditor",
    items: [
      { initials: "VS", label: "VS Code", color: "#007ACC" },
      {
        initials: "LX",
        label: "Linux",
        color: "#FCC624",
        foreground: "#111111",
      },
    ],
  },
  {
    label: "Gerenciadores de Pacotes",
    items: [
      {
        initials: "PN",
        label: "PNPM",
        color: "#F69220",
        foreground: "#111111",
      },
      { initials: "NP", label: "NPM", color: "#CB3837" },
    ],
  },
  {
    label: "Deploy",
    items: [{ initials: "VC", label: "Vercel", color: "#666666" }],
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
  ...skills.tailwind,
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
    kind: "Backoffice",
    kindDescription:
      "Painel interno para equipes gerenciarem dados, processos e operações.",
    skills: [...skills.react, ...skills.reactFlow, ...skills.tailwind],
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
    note: "Incompleto",
    description: ["Licenciatura em Computação"],
  },
];

export const certificates: TimelineItem[] = [
  {
    period: "2025",
    title: "JavaScript (básico)",
    href: "https://drive.google.com/file/d/1CnfdfVfUx3ppSbz7zR6X_QY4fNTea886/view?usp=sharing",
    description: [
      "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais",
      "Belo Horizonte, Minas Gerais, Brasil · 40 horas",
    ],
  },
  {
    period: "2022",
    title: "Oficina de Chatbot",
    href: "https://drive.google.com/file/d/1cB-41fdslchpeAVBaJNUIFMS1qcDIZ_0/view?usp=sharing",
    description: [
      "Instituto Federal de Educação, Ciência e Tecnologia do Ceará · Campus Tianguá",
      "Tianguá, Ceará, Brasil · 4 horas",
    ],
  },
  {
    period: "2022",
    title: "Desafio de Pensamento Computacional",
    href: "https://drive.google.com/file/d/1McfzgR_4S7NrkPWV42oHjfm7VqA5AzIo/view?usp=sharing",
    description: [
      "Instituto Federal de Educação, Ciência e Tecnologia do Ceará · Campus Tianguá",
      "Tianguá, Ceará, Brasil · 4 horas",
    ],
  },
  {
    period: "2022",
    title: "Introdução ao Arduino usando o simulador Tinkercad",
    href: "https://drive.google.com/file/d/18a7Kt3VuLcnKphuKWc6rW53wlJ9MU8wJ/view?usp=sharing",
    description: [
      "Instituto Federal de Educação, Ciência e Tecnologia do Ceará · Campus Tianguá",
      "Tianguá, Ceará, Brasil · 3 horas",
    ],
  },
  {
    period: "Em breve",
    title: "Mais certificados serão localizados e carregados em breve ;)",
  },
];
