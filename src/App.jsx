// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
// Other components like About, Projects, Contact...

const App = () => {
  return (
    <div className="bg-black min-h-screen text-stone-300 antialiased overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

      </main>
    </div>
  );
};

export default App;
