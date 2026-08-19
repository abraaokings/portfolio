import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { ProfileHeader } from "@/components/portfolio/ProfileHeader";
import { SideNavigation } from "@/components/portfolio/SideNavigation";
import { StackSection } from "@/components/portfolio/StackSection";
import { TimelineSection } from "@/components/portfolio/TimelineSection";
import { certificates, education, experiences, projects } from "@/data/profile";

export function PortfolioPage() {
  return (
    <main aria-label="Currículo de perfil" id="content">
      <a href="#profile-title" className="skip-link">
        Pular para o conteúdo
      </a>
      <SideNavigation />
      <div className="flex min-h-screen justify-center px-12 py-[72px] max-[640px]:px-6 max-[640px]:py-12 max-[430px]:px-5 max-[430px]:py-9">
        <div className="w-full max-w-[540px] [zoom:1.08] max-[640px]:[zoom:1]">
          <ProfileHeader />
          <ContactSection />
          <AboutSection />
          <TimelineSection
            title="Experiência profissional"
            titleId="work-title"
            items={experiences}
          />
          <StackSection />
          <TimelineSection
            title="Projetos"
            titleId="projects-title"
            items={projects}
            compact
          />
          <TimelineSection
            title="Formação acadêmica"
            titleId="education-title"
            items={education}
            compact
          />
          <TimelineSection
            title="Certificados"
            titleId="certificates-title"
            titleNote="A maior parte dos certificados adicionados foi usada para abater horas extracurriculares."
            items={certificates}
            compact
            initialVisibleItems={3}
          />
        </div>
      </div>
    </main>
  );
}
