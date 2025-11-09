export default function RenderNavLink({ layout, isActive, link, onClick }) {
  return (
    <a
      {...(layout === "mobile" ? { role: "menuitem" } : {})}
      aria-current={isActive ? "page" : undefined}
      aria-label={`Navigate to ${link.label} section`}
      href={link.href}
      onClick={onClick}
      className={`relative px-1 py-1 text-[0.6rem] lg:text-[0.75rem]
                          font-medium tracking-wide
                          transition-all duration-300 whitespace-nowrap
                          ${
                            isActive
                              ? "bg-gradient-to-r from-red-300 to-red-500 dark:text-black dark:from-cyan-300 dark:to-blue-400 font-bold shadow-lg rounded-md"
                              : "text-[#1f2937] dark:text-white hover:text-[#15468f] dark:hover:text-cyan-300 hover:scale-[1.03]"
                          }
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 dark:focus-visible:ring-cyan-500`}
    >
      {link.label}
    </a>
  );
}
