import { Section } from "@/components/portfolio/Section";
import { SkillList } from "@/components/portfolio/SkillList";
import { skillGroups } from "@/data/profile";

export function StackSection() {
  return (
    <Section title="Stack" titleId="stack-title">
      <ul>
        {skillGroups.map((group, index) => (
          <li
            key={group.label}
            className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-9 pt-7 max-[640px]:gap-x-6 max-[520px]:grid-cols-1 max-[520px]:gap-y-2 max-[520px]:pt-6"
          >
            <p
              className={`whitespace-pre-line text-sm leading-relaxed text-subtle max-[520px]:whitespace-normal ${
                index === 0 ? "pt-0" : ""
              }`}
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
