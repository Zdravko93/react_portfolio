import SectionHeaderDivider from "./SectionHeaderDivider";

import type { SectionHeaderProps } from "../../types/userInterface";

export default function SectionHeader({
  tag = "h3",
  children,
  className,
  ...props
}: SectionHeaderProps) {
  const Tag = tag;

  return (
    <Tag
      {...props}
      className={`flex justify-center items-center gap-2 text-md md:text-2xl font-semibold text-blue-700 dark:text-[#00ff88] ${className ?? ""}`}
    >
      <SectionHeaderDivider />
      {children}
      <SectionHeaderDivider />
    </Tag>
  );
}
