export default function Input({ className = "", ...props }) {
  const baseClasses =
    "w-full text-xs mb-4 px-3 py-2 rounded bg-[#f0f0f0] text-gray-600 dark:text-gray-400 dark:bg-gray-800 border border-[#dddddd] dark:border-gray-700 focus:outline-none focus:border-cyan-600 dark:focus:border-cyan-400";

  return <input className={`${baseClasses} ${className}`} {...props} />;
}
