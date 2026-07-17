import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Layout, Server, Database, Cloud, Wrench,
  Globe, Lock, ShieldCheck, Zap, Layers, 
  RefreshCw, Play, Terminal, CreditCard, Code
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Helper function to return beautiful custom logos/icons for every single tech item
function getTechIcon(name) {
  const sizeClass = "w-3.5 h-3.5 shrink-0";
  
  switch (name) {
    case 'React.js':
      return (
        <svg className={`${sizeClass} text-[#61DAFB]`} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="currentColor" strokeWidth="1.1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'TypeScript':
      return (
        <svg className={`${sizeClass} text-[#3178C6]`} viewBox="0 0 100 100" fill="currentColor">
          <rect width="100" height="100" rx="15" />
          <path d="M72.7 65.5h-10v5.3c0 3 1.8 4.7 5.1 4.7 3.5 0 5-1.9 5-4.4V65.5zM62.7 54.3h10v5h-10v-5zm-22.3-9.5h8.9v35.7H40.4V44.8zm-9.3-15h27.4v7.7H31.1v-7.7z" fill="#fff"/>
        </svg>
      );
    case 'JavaScript (ES6+)':
      return (
        <svg className={`${sizeClass} text-[#F7DF1E] bg-black rounded-xs`} viewBox="0 0 100 100" fill="currentColor">
          <rect width="100" height="100" rx="15" />
          <path d="M72.7 65.5h-10v5.3c0 3 1.8 4.7 5.1 4.7 3.5 0 5-1.9 5-4.4V65.5zM38.4 44.8h8.9v35.7H38.4V44.8z" fill="#000"/>
        </svg>
      );
    case 'Redux Toolkit':
      return (
        <svg className={`${sizeClass} text-[#764ABC]`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      );
    case 'TanStack Query':
      return <RefreshCw className={`${sizeClass} text-[#FF4154] animate-spin-slow`} />;
    case 'Tailwind CSS':
      return (
        <svg className={`${sizeClass} text-[#06B6D4]`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624.913.913 2.274 2.296 5.248 2.296 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
      );
    case 'Node.js':
      return (
        <svg className={`${sizeClass} text-[#339933]`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 1.93-.68 3.7-1.8 5.1L17.9 15.39z"/>
        </svg>
      );
    case 'Express.js':
      return <Server className={`${sizeClass} text-slate-700`} />;
    case 'REST APIs':
      return <Globe className={`${sizeClass} text-indigo-500`} />;
    case 'JWT Auth':
      return <Lock className={`${sizeClass} text-amber-500`} />;
    case 'RBAC & MVC':
      return <ShieldCheck className={`${sizeClass} text-emerald-600`} />;
    case 'Socket.IO':
      return <Zap className={`${sizeClass} text-purple-600`} />;
    case 'BullMQ':
      return <Layers className={`${sizeClass} text-pink-500`} />;
    case 'MongoDB':
      return (
        <svg className={`${sizeClass} text-[#47A248]`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.15 12.35c-.86-2.88-2.65-5.06-4.54-7.38-.28-.35-.7-.35-.98 0-1.89 2.32-3.68 4.5-4.54 7.38-.83 2.76-.05 5.51 1.98 7.34.28.25.68.25.96 0 2.03-1.83 2.81-4.58 1.98-7.34z"/>
        </svg>
      );
    case 'MySQL':
      return (
        <svg className={`${sizeClass} text-[#00758F]`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 10v4c0 1.66 1.79 3 4 3s4-1.34 4-3v-4c0 1.66-1.79 3-4 3s-4-1.34-4-3zm12-6c-2.21 0-4 1.34-4 3s1.79 3 4 3 4-1.34 4-3-1.79-3-4-3zm0 8c-2.21 0-4 1.34-4 3s1.79 3 4 3 4-1.34 4-3-1.79-3-4-3z"/>
        </svg>
      );
    case 'Redis':
      return (
        <svg className={`${sizeClass} text-[#DC2626]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      );
    case 'AWS EC2':
    case 'AWS S3':
    case 'AWS CloudFront':
      return (
        <svg className={`${sizeClass} text-[#FF9900]`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
        </svg>
      );
    case 'Nginx':
      return (
        <svg className={`${sizeClass} text-[#009639]`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.002 2.001L2.005 7.001l9.997 5 9.993-5-9.993-5zm-9.997 10l9.997 5 9.993-5v2.999l-9.993 5-9.997-5v-2.999z"/>
        </svg>
      );
    case 'Linux (Ubuntu)':
      return <Terminal className={`${sizeClass} text-[#E95420]`} />;
    case 'GitHub Actions':
      return <Play className={`${sizeClass} text-[#2088FF]`} />;
    case 'FFmpeg & HLS':
      return <Play className={`${sizeClass} text-[#007800]`} />;
    case 'Git & GitHub':
      return (
        <svg className={`${sizeClass} text-[#F05032]`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
        </svg>
      );
    case 'Postman & Bruno':
      return (
        <svg className={`${sizeClass} text-[#FF6C37]`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.05 16.89l-5-5h10l-5 5zm-3.05-7l3.05-3.05 3.05 3.05h-6.1z"/>
        </svg>
      );
    case 'VS Code':
      return (
        <svg className={`${sizeClass} text-[#007ACC]`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.985 6.842a.502.502 0 0 0-.251-.433L12.235.043a.507.507 0 0 0-.472 0L.266 6.409a.502.502 0 0 0-.251.433v10.316c0 .178.095.342.251.433l11.498 6.366c.147.081.325.081.472 0l11.498-6.366a.502.502 0 0 0-.251-.433V6.842zm-12.985.6L12 6.273l1.001 1.168-1.001 1.168-1.001-1.167zM12 2.103l9.645 5.339L12 12.781 2.355 7.442 12 2.103zm-1 20.015L2.553 17.47v-8.322L11 13.829v8.289zm2 0v-8.289l8.447-4.681v8.322L13 22.118z"/>
        </svg>
      );
    case 'Razorpay Gateway':
      return <CreditCard className={`${sizeClass} text-[#0B409C]`} />;
    default:
      return <Code className={`${sizeClass} text-purple-600`} />;
  }
}

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        '.skills-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.skills-header',
            start: 'top 85%',
          }
        }
      );

      // Staggered categories fade-in
      gsap.fromTo(
        '.skill-category-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="w-5 h-5 text-purple-600" />,
      items: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5 text-purple-600" />,
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC & MVC', 'Socket.IO', 'BullMQ']
    },
    {
      title: 'Database & Cache',
      icon: <Database className="w-5 h-5 text-purple-600" />,
      items: ['MongoDB', 'MySQL', 'Redis']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-5 h-5 text-purple-600" />,
      items: ['AWS EC2', 'AWS S3', 'AWS CloudFront', 'Nginx', 'Linux (Ubuntu)', 'GitHub Actions', 'FFmpeg & HLS']
    },
    {
      title: 'Tools & Integrations',
      icon: <Wrench className="w-5 h-5 text-purple-600" />,
      items: ['Git & GitHub', 'Postman & Bruno', 'VS Code', 'Razorpay Gateway']
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-[#faf6fe] border-t border-purple-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="skills-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-purple-950 mb-4">
            Technical Skillset
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 max-w-lg mx-auto">
            A comprehensive overview of libraries, frameworks, tools, and platforms I work with.
          </p>
          <div className="w-12 h-0.5 bg-purple-200 mx-auto mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="skill-category-card glass-card p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center border border-purple-100">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-purple-950">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white border border-purple-100/80 rounded-md text-zinc-700 hover:text-purple-700 hover:border-purple-300 transition-colors shadow-xs"
                    >
                      {getTechIcon(item)}
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
