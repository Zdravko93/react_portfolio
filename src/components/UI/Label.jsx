export default function Label({ className = "", children, ...props }) {
  const baseClasses =
    "block mb-1 font-medium text-sm text-[#444444] dark:text-white";
  return (
    <label className={`${baseClasses} ${className}`} {...props}>
      {children}
    </label>
  );
}
