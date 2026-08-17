const navigationItems = [
  { href: "#profile-title", label: "Perfil" },
  { href: "#contact-title", label: "Contato" },
  { href: "#about-title", label: "Sobre" },
  { href: "#work-title", label: "Experiência" },
  { href: "#stack-title", label: "Stack" },
  { href: "#projects-title", label: "Projetos" },
  { href: "#education-title", label: "Formação" },
  { href: "#certificates-title", label: "Certificados" },
];

export function SideNavigation() {
  return (
    <nav
      aria-label="Navegação por seções"
      className="fixed top-1/2 left-[calc(50%+340px)] hidden -translate-y-1/2 xl:block"
    >
      <ol className="relative flex flex-col gap-4 before:absolute before:top-2 before:bottom-2 before:left-[3px] before:w-px before:bg-line">
        {navigationItems.map((item) => (
          <li key={item.href} className="relative">
            <a
              href={item.href}
              className="group flex items-center gap-3 text-xs leading-none text-subtle transition-colors hover:text-ink"
            >
              <span
                aria-hidden="true"
                className="relative z-10 size-[7px] rounded-[2px] bg-line transition-colors group-hover:bg-ink"
              />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
