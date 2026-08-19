import { ExternalLink } from "@/components/ui/ExternalLink";
import { ExternalLinkIcon } from "@/components/ui/icons/ExternalLinkIcon";
import { Section } from "@/components/portfolio/Section";
import { contacts } from "@/data/profile";

export function ContactSection() {
  return (
    <Section title="Contato" titleId="contact-title" className="pt-[60px]">
      <ul className="pt-4">
        {contacts.map((contact) => (
          <li
            key={contact.href}
            className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-9 py-2 max-[640px]:gap-x-6 max-[520px]:grid-cols-1 max-[520px]:gap-y-1"
          >
            <span className="whitespace-nowrap text-sm leading-relaxed text-subtle">
              {contact.label}
            </span>
            <ExternalLink
              href={contact.href}
              ariaLabel={contact.ariaLabel}
              showExternalIcon={false}
              className="min-w-0 text-sm leading-relaxed font-normal text-ink [overflow-wrap:anywhere] underline underline-offset-3"
            >
              <strong className="font-normal">
                {contact.value}
                <ExternalLinkIcon
                  ariaHidden
                  className="relative top-[-0.45em] ml-[5px] inline-block size-[7px]"
                />
              </strong>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
