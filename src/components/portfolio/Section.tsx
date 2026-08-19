import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/utils/cn";

type SectionProps = {
  title: string;
  titleId: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ title, titleId, children, className }: SectionProps) {
  return (
    <section aria-labelledby={titleId} className={cn(className ?? "pt-[60px]")}>
      <SectionTitle id={titleId}>{title}</SectionTitle>
      {children}
    </section>
  );
}
