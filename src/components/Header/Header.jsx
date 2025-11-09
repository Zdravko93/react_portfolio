import React, { useRef } from "react";

import Button from "../UI/Button";
import RenderNavLinks from "../Header/RenderNavLinks";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

import { useEscapeKey } from "../../customHooks/useEscapeKey";
import { useFocusTrap } from "../../customHooks/useFocusTrap";
import { useRestoreFocus } from "../../customHooks/useRestoreFocus";
import { useClickOutSide } from "../../customHooks/useClickOutside";

const Header = React.memo(function Header({
  activeSection,
  onNavClick,
  viewportWidth,
  menuOpen,
  toggleMenu,
}) {
  const menuRef = useRef(null);
  const burgerButtonRef = useRef(null);

  // Accessibility hooks
  useEscapeKey(menuOpen, toggleMenu);
  useFocusTrap(menuOpen, menuRef);
  useRestoreFocus(menuOpen, burgerButtonRef);
  useClickOutSide(menuOpen, toggleMenu, menuRef, burgerButtonRef);

  const isMobile = viewportWidth < 850;

  return (
    <header
      className="z-50 w-full  bg-[#fdf6f0] dark:bg-black  border-b border-red-100 
                 dark:border-transparent shadow-sm dark:shadow-none fixed top-0 left-0 px-4 py-4"
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="sr-only">Zdravko.dev - Frontend Developer Portfolio</h1>
        <span className="text-[#45638f] dark:text-[#00ff88] font-bold text-md lg:text-lg">
          Zdravko.dev
        </span>

        {/* Burger menu */}
        {isMobile && (
          <Button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            ref={burgerButtonRef}
            onClick={toggleMenu}
            className="group
                       text-white focus:outline-none"
          >
            <div
              className="relative z-50 w-[24px] h-[24px] transform transition-transform 
                         duration-200 group-focus-visible:scale-[1.5]"
            >
              <span
                className={`absolute left-0 w-[24px] h-[2px]  dark:bg-white bg-[#7a4a1f] 
                            transition-transform duration-300
                          ${menuOpen ? "rotate-45 top-1/2" : "top-[4px]"}`}
              ></span>
              <span
                className={`absolute top-1/2 -translate-y-1/2
                            left-0 w-[24px] h-[2px] dark:bg-white bg-[#7a4a1f] 
                            transition-all duration-300
                            
                            ${menuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`absolute left-0 w-[24px] h-[2px] dark:bg-white bg-[#7a4a1f] 
                            transform  transition-transform duration-300 
                          
                          ${menuOpen ? "-rotate-45 top-1/2" : "bottom-[4px]"}`}
              ></span>
            </div>
          </Button>
        )}

        {/* Desktop nav */}
        {!isMobile && (
          <nav aria-label="Main navigation" className="relative">
            <RenderNavLinks
              activeSection={activeSection}
              onNavClick={onNavClick}
            />
            <ThemeSwitcher className="absolute top-20 right-8 xl:-right-8 w-7 h-7 flex justify-center items-center transition-all duration-100 z-[49]" />
          </nav>
        )}
      </div>

      {/* Mobile nav */}
      {isMobile && (
        <>
          {/* Background overlay */}
          <div
            aria-hidden="true"
            className={`z-40 fixed inset-0 bg-black/80 dark:bg-black/90 transition-opacity duration-300 ${
              menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          ></div>

          <nav
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation"
            ref={menuRef}
            className={`relative z-50 transition-all duration-300 ease-in-out overflow-hidden mt-3
                       bg-white dark:bg-transparent rounded-md 
                ${
                  menuOpen
                    ? "max-h-[300px] opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2"
                }
               `}
          >
            <RenderNavLinks
              layout="mobile"
              activeSection={activeSection}
              onNavClick={onNavClick}
              menuOpen={menuOpen}
            />
          </nav>
        </>
      )}
    </header>
  );
});

export default Header;
