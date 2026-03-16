import React from "react";
import { motion } from "framer-motion";

import avatar from "../../assets/images/user.svg";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Image from "../UI/Image";

const HeroProfile = React.memo(function HeroProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.4,
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <Card as="div">
        {/* AVATAR */}
        <div className="flex justify-center mt-8">
          <Image
            src={avatar}
            alt="Zdravko avatar"
            imageClassName="w-16 h-16 md:w-20 md:h-20  lg:w-24 md:h-24"
          />
        </div>
        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-4 text-gray-700 dark:text-[#00ff88]">
          <Button
            aria-label="Visit Zdravko's Github profile"
            href="https://github.com/Zdravko93"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-cyan-500"
          >
            <i className="fa-brands fa-github text-md lg:text-xl transition"></i>
          </Button>
          <Button
            aria-label="Visit Zdravko's LinkedIn profile"
            href="https://www.linkedin.com/in/zdravkodelic/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-cyan-500"
          >
            <i className="fa-brands fa-linkedin text-md lg:text-xl transition"></i>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
});

export default HeroProfile;
