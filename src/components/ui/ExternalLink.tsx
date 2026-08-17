import Link from "next/link";
import { ExternalLinkIcon } from "@/components/ui/icons/ExternalLinkIcon";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  showExternalIcon?: boolean;
};

export function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
  showExternalIcon = true,
}: ExternalLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
      {isExternal && showExternalIcon ? (
        <ExternalLinkIcon className="relative top-[-0.45em] ml-[5px] inline-block size-[7px]" />
      ) : null}
    </Link>
  );
}
