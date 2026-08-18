import { SkillBadge } from "@/components/ui/SkillBadge";
import type { Skill } from "@/data/profile";

type SkillListProps = {
  items: Skill[];
  className?: string;
  ariaLabel?: string;
};

export function SkillList({ items, className, ariaLabel }: SkillListProps) {
  return (
    <ul
      aria-label={ariaLabel}
      className={className ?? "flex min-w-0 flex-wrap gap-x-[18px] gap-y-3"}
    >
      {items.map((item) => (
        <li
          className="flex items-center"
          key={`${item.initials}-${item.label}`}
        >
          <SkillBadge {...item} />
        </li>
      ))}
    </ul>
  );
}
