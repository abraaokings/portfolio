type SectionTitleProps = {
  children: React.ReactNode;
  id: string;
};

export function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <h2
      id={id}
      tabIndex={0}
      className="text-[15px] leading-[26px] font-normal text-ink"
    >
      {children}
    </h2>
  );
}
