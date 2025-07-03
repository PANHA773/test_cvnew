// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-zinc-900 text-stone-300 px-6 py-20 lg:px-32"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>

        <p className="text-lg leading-relaxed text-stone-400">
          I’m a passionate <span className="text-indigo-400 font-semibold">Full-Stack Developer</span> with a strong foundation in frontend and backend technologies.
          I specialize in building responsive, accessible, and user-friendly web and mobile applications using modern tools like
          <span className="text-indigo-400 font-medium"> React</span>,
          <span className="text-indigo-400 font-medium"> Tailwind CSS</span>,
          <span className="text-indigo-400 font-medium"> Laravel</span>,
          <span className="text-indigo-400 font-medium"> PHP</span>, and
          <span className="text-indigo-400 font-medium"> Flutter</span>.
        </p>

        <p className="text-lg leading-relaxed mt-4 text-stone-400">
          I enjoy solving real-world problems with clean code and great UI/UX design. 
          Whether working solo or on a team, I’m constantly learning new frameworks, libraries, and best practices to build fast and scalable applications.
        </p>

        <p className="text-lg leading-relaxed mt-4 text-stone-400">
          Let’s build something <span className="text-indigo-400 font-medium">creative</span>, <span className="text-indigo-400 font-medium">meaningful</span>, and <span className="text-indigo-400 font-medium">impactful</span> together!
        </p>
      </div>
    </section>
  );
};

export default About;
