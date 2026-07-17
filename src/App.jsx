import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#faf6fe] min-h-screen text-zinc-700 antialiased selection:bg-purple-100 selection:text-purple-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Landing */}
      <Hero />

      {/* Main Sections */}
      <main className="max-w-full">
        {/* About & Experience */}
        <About />

        {/* Academic Education */}
        <Education />

        {/* Technical Skills */}
        <Skills />

        {/* Portfolio Projects */}
        <Projects />

        {/* Contact Page */}
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}
