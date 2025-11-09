import RenderNavLink from "./RenderNavLink";

import { navLinks } from "../../data/project/data";

export default function RenderNavLinks({
  activeSection,
  onNavClick,
  layout = "desktop",
  menuOpen = false,
}) {
  return (
    <ul
      className={
        layout === "mobile"
          ? "flex flex-col gap-1 border-b border-[#4a2e1f] dark:border-green-500"
          : "flex flex-row gap-4"
      }
    >
      {navLinks.map((link, index) => {
        const sectionId = link.href.substring(1);
        const isActive = activeSection === sectionId;
        return (
          <li
            key={link.label}
            className={`transition-all duration-300 ease-in-out
              ${layout === "mobile" ? "py-2" : "px-2 py-8"}
              ${
                layout === "mobile"
                  ? `${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    } transform`
                  : ""
              }
            `}
            style={
              layout === "mobile"
                ? {
                    transitionDelay: `${index * 100}ms`, // stagger delay
                  }
                : {}
            }
          >
            <RenderNavLink
              layout={layout}
              isActive={isActive}
              link={link}
              onClick={() => onNavClick(sectionId)}
            />
          </li>
        );
      })}
    </ul>
  );
}
