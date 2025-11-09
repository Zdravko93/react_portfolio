// ICONS
// STATS GRID + LEVEL COMPLETE SECTIONS
import unlock from "../../assets/images/unlock.png";
import brain from "../../assets/images/brain.png";
import skills from "../../assets/images/skills.png";
import experience from "../../assets/images/experience.png";
import levelUp from "../../assets/images/level-up.png";

// CREDITS
import palleteImg from "../../assets/images/pallete.png";
import coffeeImg from "../../assets/images/coffee.png";
import buildImg from "../../assets/images/build.png";
import joystickImg from "../../assets/images/joystick.png";

export const statsData = [
  { label: "HTML", percent: 90 },
  { label: "CSS", percent: 85 },
  { label: "JavaScript", percent: 80 },
  {
    label: "React",
    image: unlock,
    alt: "Unlock icon representing React progress status",
    description: "Unlocked",
  },
  {
    label: "Teamwork",
    image: brain,
    fullWidth: true,
    alt: "Brain icon representing teamwork",
    description: "Strategic",
  },
];

export const navLinks = [
  { label: "Home Base", href: "#home" },
  { label: "Player Profile", href: "#about-me" },
  { label: "Quests Completed", href: "#projects" },
  { label: "Send a Raven", href: "#contact" },
];

export const skillsData = [
  "React",
  "Tailwind",
  "JavaScript",
  "Framer Motion",
  "Git",
  "CSS",
  "HTML",
];

export const skillsInProgressData = ["Next.js", "TypeScript", "GSAP"];

export const levelCompleteData = [
  {
    entry: "XP GAINED",
    value: "+300",
    percent: 75,
    image: {
      src: experience,
      alt: "XP icon representing experience gained during the project",
    },
  },
  {
    entry: "SKILLS UNLOCKED",
    value: ["React", "Tailwind", "Framer Motion"],
    image: {
      src: skills,
      alt: "Icon of crossed tools symbolizing unlocked frontend skills",
    },
  },
  {
    entry: "WISDOM ACQUIRED",
    value: ["Component Architecture", "Animations", "Reusability"],
    image: {
      src: brain,
      alt: "Brain icon representing acquired frontend development wisdom",
    },
  },
  {
    entry: "NEXT LEVEL",
    value: "Your Team?",
    image: {
      src: levelUp,
      alt: "Up arrow or level-up icon symbolizing readiness for the next challenge",
    },
  },
];

export const creditsData = [
  {
    entry: "Design & Development",
    images: {
      src: palleteImg,
      alt: "Pallete icon representing design and development",
    },
  },
  {
    entry: "Brainstorms Fueled By",
    value: "Caffeine",
    images: [
      { src: brain, alt: "Brain icon representing..." },
      {
        src: coffeeImg,
        alt: "Coffee icon representing...",
      },
    ],
  },
  {
    entry: "Built With",
    value: ["React", "Tailwind", "Framer Motion"],
    images: [
      {
        src: buildImg,
        alt: "Build icon representing technologies used in this project",
      },
    ],
  },
  {
    entry: "Game Engine",
    value: "Pure Frontend Magic",
    images: [
      {
        src: joystickImg,
        alt: "Joystick icon representing game engine",
      },
    ],
  },
];
