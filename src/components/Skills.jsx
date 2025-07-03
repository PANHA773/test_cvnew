// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaBootstrap,
  FaMicrosoft, FaPaintBrush // used for C# and Illustrator as placeholders
} from "react-icons/fa";
import {
  SiTailwindcss, SiMysql, SiFlutter, SiPostman, SiSqlite,
  SiAdobephotoshop, SiAdobeillustrator // these exist in devicons
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "C#", icon: <FaMicrosoft className="text-violet-400" /> }, // more appropriate for .NET/C#
  { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-yellow-500" /> },
  { name: "SQLite", icon: <SiSqlite className="text-slate-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
  { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-blue-300" /> },
  { name: "Adobe Illustrator", icon: <SiAdobeillustrator className="text-yellow-500" /> },
];

const itemVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="bg-zinc-800 py-20 px-6 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Skills I Can Do</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="group flex flex-col items-center bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-indigo-500/30 transition"
              custom={i}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-stone-300 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
