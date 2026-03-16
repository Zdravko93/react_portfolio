import type { LabelProps } from "../../types/userInterface";

export default function Label({
  className = "",
  children,
  ...props
}: LabelProps) {
  const baseClasses =
    "block mb-1 font-medium text-sm text-[#444444] dark:text-white";
  return (
    <label className={`${baseClasses} ${className}`} {...props}>
      {children}
    </label>
  );
}
