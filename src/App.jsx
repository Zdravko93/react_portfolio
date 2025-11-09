import React, { useEffect, Suspense } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/About/AboutMe";
import SectionDivider from "./components/UI/SectionDivider";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ContactForm from "./components/ContactForm/ContactForm";
import LevelComplete from "./components/LevelComplete/LevelComplete";
import Credits from "./components/Credits/Credits";
import EndCredits from "./components/Credits/EndCredits";
import Footer from "./components/Footer/Footer";
import ThemeSwitcher from "./components/Theme/ThemeSwitcher";
// custom hooks
import { useAppState } from "./customHooks/useAppState";
// use context
import { useTheme } from "./context/ThemeContext";

// Lazy loading
const CustomToaster = React.lazy(() => import("./components/UI/Toaster"));

function App() {
  const {
    activeSection,
    clickedSection,
    viewportWidth,
    menuOpen,
    isMuted,
    toggleMenu,
    toggleMute,
    handleNavClick,
  } = useAppState();

  // check for screen size to render ThemeSwitcher(button)
  // in a specific position based on a passed 'className' prop
  const isMobile = viewportWidth < 850;
  const { theme } = useTheme();

  // toggle theme app-wide
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Preload the toaster after 2s
  // if the user does eventually trigger a toast(), the component is likely already loaded
  useEffect(() => {
    const preload = () => import("./components/UI/Toaster");
    const timer = setTimeout(preload, 2000); // preload after 2s

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen transition-colors duration-300 bg-[radial-gradient(circle_at_center,_#ffffff,_#f0f0f0)] dark:bg-[radial-gradient(circle_at_center,_#1a1a1a,_#000000)]">
      <Header
        activeSection={clickedSection || activeSection}
        onNavClick={handleNavClick}
        viewportWidth={viewportWidth}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />
      <Hero toggleMute={toggleMute} isMuted={isMuted} />
      <SectionDivider />
      <AboutMe />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ContactForm />
      <SectionDivider />
      <LevelComplete />
      <SectionDivider />
      <Credits />
      <SectionDivider />
      <EndCredits />
      <Footer />
      <Suspense fallback={null}>
        <CustomToaster />
      </Suspense>
      {isMobile && (
        <ThemeSwitcher className="absolute top-20 right-4 w-7 h-7 flex justify-center items-center transition-all duration-100 z-[49]" />
      )}
    </main>
  );
}

export default App;
