import SectionHeaderDivider from "./SectionHeaderDivider";

export default function SectionHeader({ tag = "h3", children, ...props }) {
  const Tag = tag;
  return (
    <Tag
      {...props}
      className="flex justify-center items-center gap-2 text-md md:text-2xl font-semibold text-blue-700 dark:text-[#00ff88]"
    >
      <SectionHeaderDivider />
      {children}
      <SectionHeaderDivider />
    </Tag>
  );
}
