import { InfoIcon } from "@/components/ui/InfoIcon";

type SectionTitleProps = {
  children: React.ReactNode;
  id: string;
  note?: string;
};

export function SectionTitle({ children, id, note }: SectionTitleProps) {
  return (
    <h2
      id={id}
      tabIndex={0}
      className="flex items-center gap-1.5 text-[15px] leading-[26px] font-normal text-ink"
    >
      <span>{children}</span>
      {note ? (
        <span
          tabIndex={0}
          aria-label={note}
          className="group relative inline-flex cursor-help items-center after:pointer-events-none after:absolute after:top-[calc(100%+8px)] after:left-1/2 after:z-10 after:w-[min(260px,calc(100vw-48px))] after:-translate-x-1/2 after:rounded-md after:bg-ink after:px-2.5 after:py-2 after:text-xs after:leading-snug after:text-inverted after:opacity-0 after:transition-opacity after:content-[attr(aria-label)] hover:after:opacity-100 focus-visible:after:opacity-100 max-[520px]:after:left-0 max-[520px]:after:translate-x-0"
        >
          <InfoIcon />
        </span>
      ) : null}
    </h2>
  );
}
