import { Section } from "@/components/portfolio/Section";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <Section title="Sobre" titleId="about-title" className="pt-9">
      <p className="pt-6 text-sm leading-relaxed text-muted">{profile.about}</p>
    </Section>
  );
}
