"use client";

import { Section } from "@/components/portfolio/Section";
import { TimelineEntry } from "@/components/portfolio/TimelineEntry";
import { ChevronDownIcon } from "@/components/ui/icons/ChevronDownIcon";
import type { TimelineItem } from "@/data/profile";
import { cn } from "@/utils/cn";
import { slugify } from "@/utils/slugify";
import { useState } from "react";

type TimelineSectionProps = {
  title: string;
  titleId: string;
  items: TimelineItem[];
  compact?: boolean;
  titleNote?: string;
  initialVisibleItems?: number;
};

export function TimelineSection({
  title,
  titleId,
  items,
  compact = false,
  titleNote,
  initialVisibleItems,
}: TimelineSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const canCollapse =
    typeof initialVisibleItems === "number" &&
    items.length > initialVisibleItems;
  const visibleItems = canCollapse
    ? items.slice(0, initialVisibleItems)
    : items;
  const hiddenItems = canCollapse ? items.slice(initialVisibleItems) : [];
  const expandedItemsId = `${slugify(titleId)}-items`;

  return (
    <Section title={title} titleId={titleId} titleNote={titleNote}>
      <ol className={cn(compact ? "[&>li]:pt-6" : "[&>li:first-child]:pt-6")}>
        {visibleItems.map((item) => (
          <TimelineEntry key={`${item.period}-${item.title}`} {...item} />
        ))}
      </ol>
      {canCollapse ? (
        <>
          <div
            id={expandedItemsId}
            className={cn(
              "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
              isExpanded
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0",
            )}
          >
            <ol
              start={initialVisibleItems + 1}
              className={cn(
                "min-h-0",
                compact ? "[&>li]:pt-6" : "[&>li:first-child]:pt-6",
              )}
            >
              {hiddenItems.map((item) => (
                <TimelineEntry key={`${item.period}-${item.title}`} {...item} />
              ))}
            </ol>
          </div>
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              aria-controls={expandedItemsId}
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded((current) => !current)}
              className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-wash px-3 text-xs leading-none text-ink shadow-[0_1px_2px_rgb(0_0_0_/_0.06)] transition-colors hover:bg-line"
            >
              {isExpanded ? "Mostrar menos" : "Ver mais certificados"}
              <ChevronDownIcon
                className={cn(
                  "size-4 transition-transform duration-300",
                  isExpanded && "rotate-180",
                )}
              />
            </button>
          </div>
        </>
      ) : null}
    </Section>
  );
}
