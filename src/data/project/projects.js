// PROJECT IMAGES
// WEATHER APP
import weatherAppBasicInfoImg from "../../assets/images/weather-app-basic-info.png";
import weatherAppDetailsInfoImg from "../../assets/images/weather-app-details-info.png";
import weatherAppFavoriteCitiesImg from "../../assets/images/weather-app-favorite-cities.png";
import weatherAppLightThemeImgOne from "../../assets/images/weather-app-light-theme.png";
import weatherAppLightThemeImgTwo from "../../assets/images/weather-app-light-theme-2.png";
// REACT MEMORY GAME
import reactMemoryGameStartingScreen from "../../assets/images/react-memory-game-starting screen.png";
import reactMemoryGameInGame from "../../assets/images/react-memory-game-in-game.png";
import reactMemoryGameGameOverSuccess from "../../assets/images/react-memory-game-game-over-success.png";
import reactMemoryGameGameOverFail from "../../assets/images/react-memory-game-game-over-fail.png";
// VANILLA JS MORTGAGE CALCULATOR
import vanillaMortgageCalculatorAppMobile from "../../assets/images/vanilla-JS-mortgage-calculator-app-mobile-layout.png";
import vanillaMortgageCalculatorAppDesktop from "../../assets/images/vanilla-JS-mortgage-calculator-app-desktop-layout.png";
import vanillaMortgageCalculatorAppError from "../../assets/images/vanilla-JS-mortgage-calculator-app-desktop-errors.png";
import vanillaMortgageCalculatorAppCalculate from "../../assets/images/vanilla-JS-mortgage-calculator-app-calculate.png";
import vanillaMortgageCalculatorAppResults from "../../assets/images/vanilla-JS-mortgage-calculator-app-desktop-results.png";
// VANILLA JS MULTI-STEP FORM VALIDATION
import vanillaMultiStepFormValidationDesktop from "../../assets/images/vanilla-JS-multistep-form-validation-desktop.png";
import vanillaMultiStepFormValidationMobile from "../../assets/images/vanilla-JS-multistep-form-validation-mobile.png";
import vanillaMultiStepFormValidationError from "../../assets/images/vanilla-JS-multistep-form-validation-error.png";
import vanillaMultiStepFormValidationStepOne from "../../assets/images/vanilla-JS-multistep-form-validation-step1.png";
import vanillaMultiStepFormValidationStepTwo from "../../assets/images/vanilla-JS-multistep-form-validation-step2.png";
import vanillaMultiStepFormValidationStepThree from "../../assets/images/vanilla-JS-multistep-form-validation-step3.png";
import vanillaMultiStepFormValidationStepFour from "../../assets/images/vanilla-JS-multistep-form-validation-step4.png";
import vanillaMultiStepFormValidationSubsConfirmation from "../../assets/images/vanilla-JS-multistep-form-validation-subscription-confirmation.png";

export const projectsData = [
  {
    // REACT WEATHER APP
    id: 1,
    title: "React Weather App",
    description:
      "Built with React - useReducer and Context API, to showcase my growth in front-end development.",
    tech: [
      "HTML",
      "CSS modules",
      "Flexbox",
      "React",
      "Open Weather API",
      "Context API",
      "useReducer",
      "useEffect",
    ],
    details: {
      what: "This weather application was built with React as a way to challenge myself with real-world API integration, dynamic UI updates, and responsive design. The goal wasn’t just to show weather data, but to create a smooth and interactive user experience that reflects my growth in front-end development. It fetches live weather data from the Open Weather API, and allows users to view current conditions, explore forecasts, and interact with various features — all built from scratch, with special attention to UX, theme toggling, and persistent local data.",
      why: "I wanted to apply my React skills to a real-world challenge. A weather app is a classic project — but I pushed it further by focusing on user experience, theming, persistent data, and clean, modular component structure. It was a great opportunity to deepen my understanding of state management, useReducer, API handling, and responsiveness.",
      learned:
        "I deepened my understanding of managing asynchronous data and side effects in React using `useEffect` and custom hooks. I also gained hands-on experience with `useReducer` for organizing more complex state, local storage persistence, and theme toggling. On the UI side, I improved my responsive design workflow with CSS modules and made accessibility a focus from the start.",
      reflect:
        "This project reflects my ability to break down a multi-feature application into reusable, maintainable components. It shows how I approach real-world development: balancing functionality, user experience, and clean code. I also demonstrated ownership of the full development cycle — from planning and component structure to styling and final polish.",
    },
    images: [
      {
        src: weatherAppBasicInfoImg,
        alt: "Weather app home screen showing basic current weather info for a selected city",
      },
      {
        src: weatherAppDetailsInfoImg,
        alt: "Detailed weather view showing temperature, humidity, wind speed, and forecast breakdown",
      },
      {
        src: weatherAppFavoriteCitiesImg,
        alt: "List of favorite cities with quick access to each city's current weather",
      },
      {
        src: weatherAppLightThemeImgOne,
        alt: "Weather app interface in light theme displaying weather for a city",
      },
      {
        src: weatherAppLightThemeImgTwo,
        alt: "Another view of the light theme layout with weather details and UI elements",
      },
    ],
    demoLink:
      "https://zdravko93.github.io/weather_app_context_useReducer_portfolio/",
    codeLink:
      "https://github.com/Zdravko93/weather_app_context_useReducer_portfolio",
  },
  {
    // REACT MEMORY GAME
    id: 2,
    title: "React Memory Game",
    description:
      "The game challenges players to match pairs of cards, keeping track of the number of moves made and the time spent to complete the game.",

    tech: ["React", "CSS Modules", "Flexbox", "CSS Animations"],
    details: {
      what: "A classic memory game built with React that allows users to flip cards and match pairs. The game tracks the number of moves and logs the time each move was made, treating every two card clicks as a single move. It includes subtle animations and a polished UI using CSS Modules.",
      why: "I built this project to strengthen my React fundamentals and demonstrate my ability to create interactive UI experiences. It was also a chance to practice breaking down a concept from idea to execution while handling both state management and user interaction.",
      learned:
        "I improved my understanding of component state, conditional rendering, and React’s reactivity. I also developed a stronger grasp of CSS Modules for scoped styling and learned how to implement logic for flipping cards, resetting game state, and tracking user moves in a clean, maintainable way.",
      reflect:
        "This project boosted my confidence in building features independently from scratch. I pushed through moments where I was unsure, especially when structuring the flipping logic and layout. I’ve also become more comfortable refactoring code to improve clarity and reusability. More importantly, I feel like I finally gained the skill of actually finishing what I start — which has been a turning point in my growth as a developer.",
    },
    images: [
      {
        src: reactMemoryGameStartingScreen,
        alt: "Starting screen of the memory game",
      },
      {
        src: reactMemoryGameInGame,
        alt: "Game in progress with flipped cards",
      },
      {
        src: reactMemoryGameGameOverSuccess,
        alt: "Game over screen showing success",
      },
      {
        src: reactMemoryGameGameOverFail,
        alt: "Game over screen showing failure",
      },
    ],
    demoLink: "https://zdravko93.github.io/react_memory_game/",
    codeLink: "https://github.com/Zdravko93/react_memory_game",
  },
  {
    // FRONTEND MENTOR CHALLENGE - VANILLA JS MORTGAGE CALCULATOR APP
    id: 3,
    title: "Vanilla JS Mortgage Calculator App",
    description:
      "A responsive mortgage calculator built with vanilla JavaScript, HTML, and SCSS. Users can input loan details, choose a mortgage type, and receive monthly and total repayment results with smooth GSAP animations.",
    tech: ["HTML", "CSS", "Vanilla JS", "GSAP"],
    details: {
      what: "A vanilla JavaScript mortgage calculator that allows users to input key mortgage data—including loan amount, term, interest rate, and type—and see accurate monthly and total repayment figures. The UI responds dynamically to device screen size, and includes real-time validation feedback and animations for an engaging experience.",
      why: "I built this project to challenge myself with a fully interactive, frontend-only app without relying on frameworks. It helped me polish my JavaScript fundamentals, practice building responsive layouts with Flexbox, and explore animation techniques using GSAP for smoother user experience.",
      learned:
        "Through this project, I strengthened my understanding of core DOM manipulation and event handling. I improved my ability to structure and refactor vanilla JavaScript code for better readability and scalability. I also learned to estimate project scope more accurately, and gained hands-on experience integrating timeline-based animations to enhance UX.",
      reflect:
        "This project pushed me technically, especially when implementing the mortgage calculation logic accurately across different loan types. Despite the moments of frustration, I’m proud of pushing through and completing it. It reminded me that persistence pays off—and that even without libraries, it's possible to create highly interactive, polished web apps.",
    },
    images: [
      {
        src: vanillaMortgageCalculatorAppDesktop,
        alt: "Mortgage calculator desktop layout showing input form",
      },
      {
        src: vanillaMortgageCalculatorAppMobile,
        alt: "Mortgage calculator mobile layout showing input form",
      },
      {
        src: vanillaMortgageCalculatorAppError,
        alt: "Mortgage calculator showing error states for empty or invalid fields",
      },
      {
        src: vanillaMortgageCalculatorAppCalculate,
        alt: "Mortgage calculator with all fields filled out, ready for calculation",
      },
      {
        src: vanillaMortgageCalculatorAppResults,
        alt: "Mortgage calculator displaying the calculated monthly and total repayments",
      },
    ],
    demoLink: "https://zdravko93.github.io/mortgage-calculator-app/",
    codeLink: "https://github.com/Zdravko93/mortgage-calculator-app",
  },
  {
    // FRONTEND MENTOR CHALLENGE - MULTI-STEP FORM VALIDATION
    id: 4,
    title: "Vanilla JS Multi-step form validation",
    description:
      "An intuitive multi-step form built with vanilla JavaScript, HTML, and CSS, featuring real-time validation, a progress indicator, and a responsive design that enhances usability across devices.",
    tech: ["HTML", "CSS3", "Vanilla JS", "Client-side Validation"],
    details: {
      what: "A user-friendly multi-step form solution built from a Frontend Mentor challenge. The form walks users through several input steps with real-time validation, visually guides progress, and displays success only upon correctly completing all inputs.",
      why: "I created this project to sharpen my skills in form UX, client-side validation, and DOM manipulation—all without using a framework. It was a chance to focus on user guidance, error handling, and building a clean, responsive experience from scratch.",
      learned:
        "I deepened my understanding of form validation techniques and multi-step navigation in vanilla JS. I also improved my structuring of validation logic for clarity and maintainability, and strengthened responsive layouts using CSS3 across desktop and mobile screens.",
      reflect:
        "Building this form reinforced the importance of guiding users through complex forms and paying attention to usability details. Overcoming the challenge of managing validation and navigation logic gave me confidence in architecting more interactive, accessible front-end components.",
    },
    images: [
      {
        src: vanillaMultiStepFormValidationDesktop,
        alt: "Multi-step form validation desktop layout",
      },
      {
        src: vanillaMultiStepFormValidationMobile,
        alt: "Multi-step form validation mobile layout",
      },
      {
        src: vanillaMultiStepFormValidationError,
        alt: "Multi-step form validation showing error states for empty or invalid fields",
      },
      {
        src: vanillaMultiStepFormValidationStepOne,
        alt: "Multi-step form validation showing step one of the form",
      },
      {
        src: vanillaMultiStepFormValidationStepTwo,
        alt: "Multi-step form validation showing step two of the form",
      },
      {
        src: vanillaMultiStepFormValidationStepThree,

        alt: "Multi-step form validation showing step three of the form",
      },
      {
        src: vanillaMultiStepFormValidationStepFour,
        alt: "Multi-step form validation showing step four of the form",
      },
      {
        src: vanillaMultiStepFormValidationSubsConfirmation,
        alt: "Multi-step form validation showing subscription confirmation modal window",
      },
    ],
    demoLink: "https://zdravko93.github.io/multi-step-form-validation-project/",
    codeLink: "https://github.com/Zdravko93/multi-step-form-validation-project",
  },
];
