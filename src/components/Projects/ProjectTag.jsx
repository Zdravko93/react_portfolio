export default function ProjectTag({
  label,
  isLightTheme,
  isModalTag = false,
}) {
  const baseClasses =
    "outline outline-1 font-semibold tracking-wide leading-relaxed px-3 py-1 rounded-full text-[0.6rem]  dark:outline-none";
  // Light theme modal tag styles
  if (isLightTheme && isModalTag) {
    return (
      <li className={`${baseClasses} bg-cyan-700 text-white`} title={label}>
        {label}
      </li>
    );
  }
  // Dark theme modal tag styles
  else if (!isLightTheme && isModalTag) {
    return (
      <li
        className={`${baseClasses}
                  dark:bg-white dark:text-cyan-700 
                   `}
        title={label}
      >
        {label}
      </li>
    );
  }
  // Basic light/dark tag styles
  return (
    <li
      className={`${baseClasses} 
                  bg-white text-cyan-700 outline-cyan-300 dark:outline-none dark:bg-cyan-700 dark:text-white
                   `}
      title={label}
    >
      {label}
    </li>
  );
}
