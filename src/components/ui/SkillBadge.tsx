import type { Skill } from "@/data/profile";

export function SkillBadge({ initials, label }: Skill) {
  return (
    <span
      className="inline-flex min-h-[22px] items-center gap-1.5 whitespace-nowrap text-sm leading-none text-ink max-[430px]:text-[13px]"
      aria-label={label}
    >
      <span
        className="inline-flex size-4 items-center justify-center rounded-[3px] bg-[linear-gradient(180deg,#2c2c2c_0%,#111111_100%)] text-[7px] leading-none font-normal text-white shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)]"
        aria-hidden="true"
      >
        {initials}
      </span>
      {label}
    </span>
  );
}
