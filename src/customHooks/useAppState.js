import { useState, useCallback } from "react";
import { useActiveSection } from "./useActiveSection";
import { useViewportWidth } from "./useViewportWidth";
import { usePersistentMute } from "./usePersistentMute";

export function useAppState() {
  const { isMuted, toggleMute } = usePersistentMute();
  const activeSection = useActiveSection();
  const viewportWidth = useViewportWidth();

  const [clickedSection, setClickedSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const handleNavClick = useCallback((id) => {
    setClickedSection(id);
    setMenuOpen(false);

    setTimeout(() => {
      setClickedSection(null);
    }, 1000);
  }, []);

  return {
    activeSection,
    clickedSection,
    viewportWidth,
    menuOpen,
    isMuted,
    toggleMute,
    toggleMenu,
    handleNavClick,
  };
}
