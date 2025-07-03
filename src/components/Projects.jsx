// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

// Import images from src/assets/projects/
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

// Project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React and Tailwind CSS.",
    image: project1,
    demoLink: "https://your-portfolio.com",
    codeLink: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A simple weather app using OpenWeatherMap API and React hooks.",
    image: project2,
    demoLink: "https://weather-demo.com",
    codeLink: "https://github.com/yourusername/weather-app",
  },
  {
    id: 3,
    title: "E-commerce Shop",
    description: "A modern e-commerce web app using React, Redux, and Firebase.",
    image: project3,
    demoLink: "https://ecommerce-demo.com",
    codeLink: "https://github.com/yourusername/ecommerce-shop",
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "A full-stack blog CMS using MERN stack with admin dashboard.",
    image: project4,
    demoLink: "https://blogcms-demo.com",
    codeLink: "https://github.com/yourusername/blog-cms",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map(({ id, title, description, image, demoLink, codeLink }, i) => (
            <motion.div
              key={id}
              className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/fallback.webp"; // Optional fallback image in public/
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-stone-400 mb-4">{description}</p>
                <div className="flex space-x-4">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-indigo-600 text-indigo-400 px-4 py-2 rounded hover:bg-indigo-600 hover:text-white transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
