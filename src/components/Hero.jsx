import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple staged slide-up animation
      gsap.fromTo(
        '.hero-fade',
        { opacity: 0, y: 25 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#0a0b0d]"
    >
      {/* Decorative Subtle Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-zinc-900/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-zinc-800/5 blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center z-10 select-none">
        
        {/* Availability Badge */}
        <div className="hero-fade mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for New Opportunities
          </span>
        </div>

        {/* Clean static name header */}
        <h1 className="hero-fade text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white mb-6">
          UMAKANT BHENDARKAR
        </h1>

        {/* Roles / Tech tagline */}
        <p className="hero-fade text-lg sm:text-2xl text-zinc-400 font-medium tracking-tight mb-6 max-w-3xl mx-auto">
          Full Stack Developer &bull; <span className="text-zinc-100 font-semibold underline decoration-zinc-700 decoration-2 underline-offset-4">MERN Core Specialist</span>
        </p>

        {/* Description paragraph */}
        <p className="hero-fade text-sm sm:text-base text-zinc-500 max-w-xl mx-auto leading-relaxed mb-10">
          I build high-performance web systems with clean database schemas, fast backend queues, and elegant modern layouts.
        </p>

        {/* Action buttons */}
        <div className="hero-fade flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="btn-primary px-6 py-3.5 rounded-lg flex items-center gap-2 text-sm w-full sm:w-auto justify-center group"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="btn-secondary px-6 py-3.5 rounded-lg flex items-center gap-2 text-sm w-full sm:w-auto justify-center"
          >
            Say Hello
          </a>
        </div>

      </div>
    </section>
  );
}
