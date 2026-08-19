import type { CSSProperties } from "react";
import type { Skill } from "@/data/profile";

export function SkillBadge({ initials, label, foreground }: Skill) {
  const badgeStyle = {
    "--skill-color": "#666666",
    "--skill-foreground": foreground ?? "#ffffff",
  } as CSSProperties;

  return (
    <span
      className="inline-flex min-h-[22px] items-center gap-1.5 whitespace-nowrap align-middle text-sm leading-[1.2] text-ink max-[430px]:text-[13px]"
      aria-label={label}
    >
      <span
        className="inline-flex size-4 shrink-0 items-center justify-center rounded-[3px] bg-[linear-gradient(180deg,var(--badge-top)_0%,var(--badge-bottom)_100%)] text-[7px] leading-none font-normal text-[var(--badge-foreground)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--skill-color)_58%,transparent),inset_0_1px_0_var(--badge-shadow),0_1px_2px_rgb(0_0_0_/_0.1)]"
        aria-hidden="true"
        style={badgeStyle}
      >
        {initials}
      </span>
      <span className="inline-flex items-center leading-none">{label}</span>
    </span>
  );
}
