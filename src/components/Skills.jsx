import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, Server, Database, Cloud, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx}
                      className="px-3 py-1.5 text-xs font-medium bg-white border border-purple-100/80 rounded-md text-zinc-700 hover:text-purple-700 hover:border-purple-300 transition-colors"
                    >
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
