import { ExternalLink } from "@/components/ui/ExternalLink";
import { InfoIcon } from "@/components/ui/InfoIcon";
import { SkillList } from "@/components/portfolio/SkillList";
import type { TimelineItem } from "@/data/profile";

export function TimelineEntry({
  period,
  title,
  description,
  href,
  note,
  kind,
  kindDescription,
  skills,
}: TimelineItem) {
  const detailsId = `${title}-${period}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <li
      className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-9 pt-9 max-[640px]:gap-x-6 max-[520px]:grid-cols-1 max-[520px]:gap-y-1 max-[520px]:pt-7"
      aria-labelledby={detailsId}
    >
      <p
        className="text-sm leading-relaxed text-subtle"
        aria-label={`Período: ${period}`}
      >
        {period}
      </p>
      <div className="min-w-0 pb-3">
        <h3
          id={detailsId}
          className="text-sm leading-relaxed font-normal text-ink"
        >
          {href ? (
            <ExternalLink
              href={href}
              className="hover:underline hover:underline-offset-3"
            >
              {title}
            </ExternalLink>
          ) : (
            title
          )}
          {note ? (
            <span className="ml-1.5 inline-block text-xs leading-[inherit] text-subtle before:mr-[5px] before:content-['•']">
              {note}
            </span>
          ) : null}
        </h3>

        {description?.map((line) => (
          <p key={line} className="pb-2 text-sm leading-relaxed text-muted">
            {line}
          </p>
        ))}

        {kind ? (
          kindDescription ? (
            <p
              tabIndex={0}
              aria-describedby={`${detailsId}-kind-description`}
              className="group relative inline-flex cursor-help items-center gap-1.5 text-sm leading-relaxed text-muted after:pointer-events-none after:absolute after:top-[calc(100%+8px)] after:left-1/2 after:z-10 after:w-[min(220px,calc(100vw-48px))] after:-translate-x-1/2 after:rounded-md after:bg-ink after:px-2.5 after:py-2 after:text-xs after:leading-snug after:text-inverted after:opacity-0 after:transition-opacity after:content-[attr(aria-label)] hover:after:opacity-100 focus-visible:after:opacity-100 max-[520px]:after:left-0 max-[520px]:after:translate-x-0"
              aria-label={`${kind}: ${kindDescription}`}
            >
              {kind}
              <span id={`${detailsId}-kind-description`} className="sr-only">
                {kindDescription}
              </span>
              <InfoIcon />
            </p>
          ) : (
            <p className="inline-block text-sm leading-relaxed text-muted">
              {kind}
            </p>
          )
        ) : null}

        {skills ? (
          <SkillList
            items={skills}
            ariaLabel={`Tecnologias usadas em ${title}`}
            className="flex min-w-0 flex-wrap gap-x-3.5 gap-y-2 pt-2 max-[520px]:gap-x-3"
          />
        ) : null}
      </div>
    </li>
  );
}
