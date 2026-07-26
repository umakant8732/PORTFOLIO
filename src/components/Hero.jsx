import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Download } from 'lucide-react';
import BackgroundCodeTyping from './ui/BackgroundCodeTyping';

export default function Hero() {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium staggered slide-up & fade-in for title elements
      gsap.fromTo(
        '.hero-fade',
        { opacity: 0, y: 35, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1.2, 
          stagger: 0.12, 
          ease: 'power4.out',
          delay: 0.1
        }
      );
    }, containerRef);

    // Spotlight cursor tracking (light mode subtle highlight)
    const handleMouseMoveSpotlight = (e) => {
      if (!spotlightRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      gsap.to(spotlightRef.current, {
        x: x - 250,
        y: y - 250,
        duration: 0.8,
        ease: 'power2.out'
      });
    };

    // Magnetic buttons setup
    const buttons = [btn1Ref.current, btn2Ref.current];
    const listeners = [];

    buttons.forEach((btn) => {
      if (!btn) return;
      
      const moveListener = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          scale: 1.015,
          duration: 0.3,
          ease: 'power2.out'
        });
      };
      
      const leaveListener = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'elastic.out(1, 0.3)'
        });
      };

      btn.addEventListener('mousemove', moveListener);
      btn.addEventListener('mouseleave', leaveListener);
      listeners.push({ btn, moveListener, leaveListener });
    });

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMoveSpotlight);
    }

    return () => {
      ctx.revert();
      if (currentContainer) {
        currentContainer.removeEventListener('mousemove', handleMouseMoveSpotlight);
      }
      listeners.forEach(({ btn, moveListener, leaveListener }) => {
        if (btn) {
          btn.removeEventListener('mousemove', moveListener);
          btn.removeEventListener('mouseleave', leaveListener);
        }
      });
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#f8fafc]"
    >
      {/* Enhanced syntax-highlighted coding background simulator */}
      <BackgroundCodeTyping />

      {/* Mouse follow spotlight glow (Soft light mode) */}
      <div 
        ref={spotlightRef}
        className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,rgba(6,182,212,0.04)_50%,transparent_100%)] blur-3xl pointer-events-none left-0 top-0 opacity-90 z-0"
        style={{ transform: 'translate3d(-1000px, -1000px, 0)' }}
      />

      {/* Decorative Ambient Lights (Light theme) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-200/15 blur-[130px] pointer-events-none z-0" />

      {/* Grid Pattern overlay (Subtle slate grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b05_1px,transparent_1px),linear-gradient(to_bottom,#64748b05_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 text-center z-10 select-none">
        
        {/* Availability Badge */}
        <div className="hero-fade mb-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-purple-100 text-purple-700 shadow-[0_2px_10px_rgba(124,58,237,0.05)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10b981]" />
            Available for New Opportunities
          </span>
        </div>

        {/* Name Header with gorgeous slate-purple-cyan gradient */}
        <h1 className="hero-fade text-4xl sm:text-7xl md:text-8xl font-black tracking-tight text-slate-900 mb-6">
          <span className="text-gradient-purple-cyan block sm:inline">UMAKANT </span>
          <span className="text-slate-900 block sm:inline">BHENDARKAR</span>
        </h1>

        {/* Roles / Tech tagline */}
        <p className="hero-fade text-lg sm:text-2xl text-slate-600 font-medium tracking-tight mb-6 max-w-3xl mx-auto">
          Full Stack Developer &bull; <span className="text-purple-600 font-semibold underline decoration-cyan-400 decoration-2 underline-offset-8">MERN Core Specialist</span>
        </p>

        {/* Description paragraph */}
        <p className="hero-fade text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed mb-10">
          I build high-performance web systems with clean database schemas, fast backend queues, and elegant modern layouts.
        </p>

        {/* Action buttons */}
        <div className="hero-fade flex flex-col sm:flex-row items-center justify-center gap-5">
          <a 
            ref={btn1Ref}
            href="#projects" 
            className="btn-primary px-7 py-4 rounded-xl flex items-center gap-2 text-sm font-semibold w-full sm:w-auto justify-center group"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            ref={btn2Ref}
            href="/Umakant_Bhendarkar_Resume.pdf" 
            download="Umakant_Bhendarkar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-7 py-4 rounded-xl flex items-center gap-2 text-sm font-semibold w-full sm:w-auto justify-center"
          >
            <Download className="w-4 h-4 text-purple-600 shrink-0" />
            View Resume
          </a>
        </div>

      </div>
    </section>
  );
}
