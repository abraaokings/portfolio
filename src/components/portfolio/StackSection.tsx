import { Section } from "@/components/portfolio/Section";
import { SkillList } from "@/components/portfolio/SkillList";
import { skillGroups } from "@/data/profile";
import { cn } from "@/utils/cn";
import { subtleTextClassName, timelineGridClassName } from "@/utils/styles";

export function StackSection() {
  return (
    <Section title="Stack" titleId="stack-title">
      <ul>
        {skillGroups.map((group, index) => (
          <li
            key={group.label}
            className={cn(
              timelineGridClassName,
              "pt-7 max-[520px]:gap-y-2 max-[520px]:pt-6",
            )}
          >
            <p
              className={cn(
                subtleTextClassName,
                "whitespace-pre-line max-[520px]:whitespace-normal",
                index === 0 && "pt-0",
              )}
            >
              {group.label}
            </p>
            <SkillList
              items={group.items}
              ariaLabel={`Stacks em ${group.label.replace(/\n/g, " ")}`}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
