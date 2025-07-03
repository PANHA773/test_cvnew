// src/components/Hero.jsx
import React from "react";
import profilePic from "../assets/Panha.png";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-16 py-16"
    >
      {/* Text Section */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 text-white"
          variants={item}
        >
          Hi, I'm Panha
        </motion.h1>

        <motion.p className="text-lg text-stone-300 mb-4" variants={item}>
          I'm a{" "}
          <span className="text-indigo-400 font-semibold">
            Full-Stack Developer
          </span>{" "}
          passionate about crafting modern, responsive, and scalable applications.
        </motion.p>

        <motion.p className="text-stone-400 mb-6" variants={item}>
          I work with technologies like{" "}
          <strong>React, Laravel, Flutter, MySQL, PHP, Tailwind</strong> and
          more—building full web and mobile experiences.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row sm:justify-start items-center gap-4"
          variants={item}
        >
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-indigo-500 text-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition font-medium"
          >
            Hire Me
          </a>
        </motion.div>
      </motion.div>

      {/* Image with Animated Light Border */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <div className="relative animate-border-glow-wrapper p-1 rounded-xl overflow-hidden">
          <div className="absolute inset-0 border-animation z-0" />
          <img
            src={profilePic}
            alt="Panha"
            className="relative z-10 w-full max-w-2xl h-auto object-cover rounded-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
