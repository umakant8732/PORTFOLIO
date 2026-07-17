import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const timelineLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        '.about-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.about-header',
            start: 'top 85%',
          }
        }
      );

      // Stat numbers animation (Counter effect)
      const stats = [
        { selector: '.stat-num-1', end: 15 },
        { selector: '.stat-num-2', end: 30 },
        { selector: '.stat-num-3', end: 25 }
      ];

      stats.forEach(stat => {
        gsap.fromTo(stat.selector, 
          { textContent: 0 },
          {
            textContent: stat.end,
            duration: 1.5,
            snap: { textContent: 1 },
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.stats-grid',
              start: 'top 90%',
            }
          }
        );
      });

      // Timeline vertical line filling on scroll
      gsap.fromTo(
        timelineLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 65%',
            end: 'bottom 45%',
            scrub: true,
          }
        }
      );

      // Left column reveal
      gsap.fromTo(
        '.about-left',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-left',
            start: 'top 85%',
          }
        }
      );

      // Stagger timeline cards slide in
      gsap.fromTo(
        '.timeline-card',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 75%',
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: 'Jr. MERN Stack Developer',
      company: 'Amika Softwares',
      period: 'Dec 2024 – Dec 2025',
      location: 'Nagpur, India',
      description: 'Worked on architecture, APIs, and client deliveries for multiple full-stack business ecosystems.',
      bullets: [
        'Built and delivered 15+ full-stack modules for E-commerce, Insurance CRM, and Hospital Management systems.',
        'Strengthened backend workflows by implementing validation, access control, and consistent error handling across modules.',
        'Optimized MongoDB queries, indexing, and backend workflows, reducing API response times by 30%.',
        'Integrated 5+ third-party APIs and services, improving business process efficiency by 20%.',
        'Worked on application deployment using AWS EC2 and managed media storage with AWS S3.',
        'Collaborated with clients to understand business needs and deliver solutions aligned with project goals.'
      ]
    },
    {
      title: 'React Developer (Intern)',
      company: 'Amika Softwares',
      period: 'Jun 2024 – Dec 2024',
      location: 'Nagpur, India',
      description: 'Designed reusable components, layouts, and synced backend resources for production displays.',
      bullets: [
        'Built modular and responsive user interfaces in React.js with a focus on reusability and clean component design.',
        'Connected 25+ backend APIs to frontend screens and ensured smooth data handling across multiple features.',
        'Improved screen consistency by structuring frontend flows and UI behavior in a more organized and reusable way.',
        'Delivered user-facing features by converting product requirements into practical and functional frontend implementations.'
      ]
    }
  ];

  return (
    <section id="about" ref={containerRef} className="py-28 bg-[#faf6fe] border-y border-purple-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="about-header text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-purple-950 mb-4">
            Profile & Career Journey
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 max-w-md mx-auto">
            My background, key metrics, and professional timeline.
          </p>
          <div className="w-12 h-0.5 bg-purple-200 mx-auto mt-4" />
        </div>

        {/* Outer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Bio & Stats (Left Column) */}
          <div className="about-left lg:col-span-5 space-y-12">
            
            {/* Bio info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-950 leading-tight">
                Crafting robust applications with efficiency and clean code structure.
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                I am a passionate Full Stack Developer with specialized expertise in the MERN stack. My career journey centers on designing scalable REST architectures, optimizing database queries, and integrating cloud storage/processing systems.
              </p>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                I hold a Master's degree in Computer Applications (MCA) and enjoy collaborating to build web solutions that solve business problems with absolute stability.
              </p>
            </div>

            {/* Metrics Dashboard */}
            <div className="stats-grid grid grid-cols-3 gap-4 pt-6 border-t border-purple-100">
              <div className="text-center p-3 rounded-lg bg-white/70 border border-purple-100">
                <span className="block text-2xl sm:text-3xl font-bold text-purple-950"><span className="stat-num-1">0</span>+</span>
                <span className="text-[10px] sm:text-xs text-purple-700 uppercase tracking-wider mt-1 block">Modules Delivered</span>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/70 border border-purple-100">
                <span className="block text-2xl sm:text-3xl font-bold text-purple-950"><span className="stat-num-2">0</span>%</span>
                <span className="text-[10px] sm:text-xs text-purple-700 uppercase tracking-wider mt-1 block">API Optimization</span>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/70 border border-purple-100">
                <span className="block text-2xl sm:text-3xl font-bold text-purple-950"><span className="stat-num-3">0</span>+</span>
                <span className="text-[10px] sm:text-xs text-purple-700 uppercase tracking-wider mt-1 block">Connected APIs</span>
              </div>
            </div>

            {/* Quick Details */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-sm text-zinc-600">
                <MapPin className="w-5 h-5 text-purple-400 shrink-0" />
                <span>Nagbhid, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-600">
                <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
                <span>Master of Computer Application (MCA)</span>
              </div>
            </div>

          </div>

          {/* Vertical Timeline (Right Column) */}
          <div className="lg:col-span-7 timeline-container relative pl-8 pb-4">
            
            {/* Dynamic Fill scroll-triggered line */}
            <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-purple-100" />
            <div 
              ref={timelineLineRef}
              className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-purple-600 origin-top transform scale-y-0" 
            />

            {/* Timeline Segment: Experience */}
            <div className="space-y-10 relative">
              <div className="flex items-center gap-2.5 mb-8 -ml-[45px] bg-[#faf6fe] pr-4 py-1 z-10 w-fit">
                <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-purple-600" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700">Experience History</h4>
              </div>

              {experiences.map((exp, index) => (
                <div key={index} className="timeline-card relative group">
                  {/* Bullet indicator */}
                  <div className="absolute -left-[41px] top-4 w-4 h-4 rounded-full bg-[#faf6fe] border-2 border-purple-200 group-hover:border-purple-600 transition-colors z-20" />
                  
                  <div className="glass-card p-6 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h5 className="text-base sm:text-lg font-bold text-purple-950">{exp.title}</h5>
                        <p className="text-xs sm:text-sm text-zinc-600 font-medium">{exp.company} &bull; <span className="font-normal text-zinc-400">{exp.location}</span></p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded w-fit h-fit">
                        <Calendar className="w-3 h-3 text-purple-400" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-zinc-600 flex items-start gap-2">
                          <CheckSquare className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
