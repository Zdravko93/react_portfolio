import { motion } from "framer-motion";

import Card from "../UI/Card";
import SectionHeader from "../UI/SectionHeader";
import SectionDivider from "../UI/SectionDivider";
import SkillsSection from "./SkillsSection";

import { skillsData } from "../../data/project/data";
import { skillsInProgressData } from "../../data/project/data";
import { ctaVariants } from "../../data/animations/animations";

import { useTheme } from "../../context/ThemeContext";

export default function AboutMe() {
  const paragraphClasses =
    "mt-6 text-gray-800 dark:text-white text-xs md:text-sm leading-loose";

  const { theme } = useTheme();
  const bgClass =
    theme === "dark"
      ? "bg-cyan-900"
      : "bg-[radial-gradient(circle_at_top_left,_#ffffff,_#e8fafe)]";

  return (
    <Card
      as="section"
      id="about-me"
      className="scroll-mt-48 text-left max-w-[80%] md:w-[800px] mx-auto"
    >
      {/* Who I Am */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeader tag="h2">Who I Am</SectionHeader>
        <h3 className="mt-6 text-sm md:text-lg text-gray-800 dark:text-gray-200 leading-loose">
          <span
            role="img"
            aria-label="waving hand"
            className="text-lg md:text-2xl"
          >
            👋
          </span>{" "}
          Hey, I’m{" "}
          <span className="text-blue-600 dark:text-[#00ff88]">Zdravko</span> — a
          frontend developer with a passion for crafting clean, fast, and
          intuitive web experiences.
        </h3>
        <p className={paragraphClasses}>
          I specialize in React and modern JavaScript, turning complex ideas
          into performant, scalable solutions with a focus on detail and
          usability.
        </p>
        <p className={paragraphClasses}>
          From hooks and state logic to responsive design and animations, I love
          solving problems that make the web feel smoother, smarter, and more
          alive. Whether you need polished UI or pixel-perfect performance — I’m
          ready to press start.
        </p>
      </motion.div>
      {/* Why I Code */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeader>Why I Code</SectionHeader>
        <p className={paragraphClasses}>
          I started coding out of a deep curiosity about how things work behind
          the scenes on the web — from interactive animations to full-stack
          applications. My journey began with a few late-night tutorials, and I
          haven't looked back since. What started as a hobby quickly grew into a
          passion for solving real-world problems through technology. For me,
          coding became the ultimate creative quest — a way to level up ideas
          and bring them to life.
        </p>
      </motion.div>

      <SectionDivider />

      {/* Learned Skills */}
      <SkillsSection skills={skillsData} subtitleClasses="text-xl">
        Unlocked Abilities_
      </SkillsSection>
      {/* Learning Skills */}
      <SkillsSection
        skills={skillsInProgressData}
        subtitleClasses="text-md uppercase tracking-wider mb-4"
      >
        {">> EXP BOOST IN PROGRESS..."}
      </SkillsSection>
      {/* CTA Text */}
      <motion.div
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`mt-28 p-4 ${bgClass} border border-cyan-200 dark:border-cyan-600 rounded-lg shadow-md`}
      >
        <p
          className={`text-xs md:text-sm text-cyan-800 dark:text-cyan-400 leading-loose`}
        >
          Currently accepting quests! If you have an exciting web project or
          need a fellow adventurer, let's join forces and craft something epic.
        </p>
      </motion.div>
    </Card>
  );
}
