import { SectionTitle } from "@/components/ui/SectionTitle";

type SectionProps = {
  title: string;
  titleId: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ title, titleId, children, className }: SectionProps) {
  return (
    <section aria-labelledby={titleId} className={className ?? "pt-[60px]"}>
      <SectionTitle id={titleId}>{title}</SectionTitle>
      {children}
    </section>
  );
}
