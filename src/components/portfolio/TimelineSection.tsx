import { Section } from "@/components/portfolio/Section";
import { TimelineEntry } from "@/components/portfolio/TimelineEntry";
import type { TimelineItem } from "@/data/profile";
import { cn } from "@/utils/cn";

type TimelineSectionProps = {
  title: string;
  titleId: string;
  items: TimelineItem[];
  compact?: boolean;
};

export function TimelineSection({
  title,
  titleId,
  items,
  compact = false,
}: TimelineSectionProps) {
  return (
    <Section title={title} titleId={titleId}>
      <ol className={cn(compact ? "[&>li]:pt-6" : "[&>li:first-child]:pt-6")}>
        {items.map((item) => (
          <TimelineEntry key={`${item.period}-${item.title}`} {...item} />
        ))}
      </ol>
    </Section>
  );
}
