import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/utils/cn";

type SectionProps = {
  title: string;
  titleId: string;
  children: React.ReactNode;
  className?: string;
  titleNote?: string;
};

export function Section({
  title,
  titleId,
  children,
  className,
  titleNote,
}: SectionProps) {
  return (
    <section aria-labelledby={titleId} className={cn(className ?? "pt-[60px]")}>
      <SectionTitle id={titleId} note={titleNote}>
        {title}
      </SectionTitle>
      {children}
    </section>
  );
}
