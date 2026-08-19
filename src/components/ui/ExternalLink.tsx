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
  const accessibleLabel =
    ariaLabel ??
    (isExternal && typeof children === "string"
      ? `${children} (abre em uma nova aba)`
      : undefined);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={className}
      aria-label={accessibleLabel}
    >
      {children}
      {isExternal && showExternalIcon ? (
        <ExternalLinkIcon className="relative top-[-0.45em] ml-[5px] inline-block size-[7px]" />
      ) : null}
    </Link>
  );
}
