import type { Skill } from "@/data/profile";

export function SkillBadge({ initials, label }: Skill) {
  return (
    <span
      className="inline-flex min-h-[22px] items-center gap-1.5 whitespace-nowrap align-middle text-sm leading-[1.2] text-ink max-[430px]:text-[13px]"
      aria-label={label}
    >
      <span
        className="inline-flex size-4 shrink-0 items-center justify-center rounded-[3px] bg-[linear-gradient(180deg,var(--badge-top)_0%,var(--badge-bottom)_100%)] text-[7px] leading-none font-normal text-[var(--badge-foreground)] shadow-[inset_0_1px_0_var(--badge-shadow)]"
        aria-hidden="true"
      >
        {initials}
      </span>
      {label}
    </span>
  );
}
