import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { Github } from './ui/BrandIcons';


gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef(null);

  const projectsData = [
    {
      title: 'Acadex LMS Platform',
      category: 'Full Stack',
      period: 'May 2026 – Present',
      description: 'Built a scalable LMS with separate teacher and student modules using React.js, Node.js, Express.js, and MongoDB.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3/CloudFront', 'FFmpeg/HLS', 'BullMQ', 'Redis', 'Razorpay', 'Socket.IO'],
      github: 'https://github.com/umakant8732',
      live: 'https://acadexlearning.xyz',
      highlights: [
        'Developed secure JWT- and RBAC-based APIs for course, lecture, payment, and protected playback workflows.',
        'Implemented AWS S3 presigned uploads with BullMQ and FFmpeg for HLS video processing and streaming.',
        'Integrated CloudFront signed playback and Socket.IO for secure delivery and real-time lecture status updates.',
        'Integrated Razorpay payment gateway, Redis caching, TanStack Query, and enrollment-based course access.',
        'Deployed the platform on AWS EC2 with Nginx, PM2, HTTPS, and custom domain configuration for production use.'
      ]
    },
    {
      title: 'Gram Panchayat Portal',
      category: 'Frontend',
      period: 'Jan 2026 – Present',
      description: 'Independently designed, developed, and deployed a responsive Gram Panchayat website.',
      tags: ['HTML5', 'Tailwind CSS', 'JavaScript (ES6)', 'Responsive UI'],
      github: '#',
      live: 'https://grampanchayat-kotgaon.com',
      highlights: [
        'Showcased village budget details, government schemes, public notices, and development initiatives.',
        'Implemented downloadable birth and marriage certificate formats for citizen services.',
        'Developed a mobile-friendly interface to improve accessibility for citizens across devices.'
      ]
    },
    {
      title: 'Hospital Management System (OPD Module)',
      category: 'Full Stack',
      period: 'Amika Softwares',
      description: 'The core Outpatient Department (OPD) module managing daily consultation workflows, patient registrations, and waiting lines.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'RBAC', 'Socket.IO'],
      github: '#',
      live: '#',
      highlights: [
        'Built patient check-in and registration forms with validation checks to capture demographics and triage vitals.',
        'Developed doctor scheduling and slot booking selectors, using transaction controls to prevent calendar double-booking.',
        'Implemented a real-time patient queue dashboard using Socket.IO to manage waiting lines on receptionist and doctor monitors.',
        'Integrated consultation details forms for symptoms, diagnoses, prescription records, and diagnostic referrals.',
        'Created automated OPD billing calculation modules to invoice consults, medicines, and diagnostic lab tests.'
      ]
    },
    {
      title: 'Enterprise Insurance CRM',
      category: 'Full Stack',
      period: 'Amika Softwares',
      description: 'A unified business portal built to manage employee logs, access controls, and policy reminder services.',
      tags: ['React.js', 'Express.js', 'MongoDB', 'JWT Auth', 'RBAC', 'Node.js'],
      github: '#',
      live: '#',
      highlights: [
        'Developed Employee Modules with strict Role-Based Access Control (RBAC) to configure resource permissions.',
        'Created the Superadmin Leave Management system to track, approve, or reject employee leave logs.',
        'Integrated Message Reminder APIs (via SMS/Email gateways) to send automated status notifications.',
        'Managed core Master Modules (state catalogs, policy categories) to maintain uniform drop-down forms.',
        'Structured REST APIs for employee logins and synchronized workspace dashboards with MongoDB storage.'
      ]
    },
    {
      title: 'Modular B2B E-Commerce Core',
      category: 'Full Stack',
      period: 'Amika Softwares',
      description: 'A transactional service module focusing on cart optimization, payment checkout gateways, and fast invoice delivery.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'MVC Architecture'],
      github: '#',
      live: '#',
      highlights: [
        'Integrated third-party APIs for real-time logistic shipping calculations.',
        'Implemented strict error fallback handling on payment gateway steps.'
      ]
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header scroll trigger
      gsap.fromTo(
        '.projects-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.projects-header',
            start: 'top 85%',
          }
        }
      );

      // Projects card trigger
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filter]); // Re-run animation when filtering changes

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-zinc-950/40 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="projects-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 max-w-lg mx-auto">
            A handpicked selection of freelance portals, corporate modules, and personal full-stack projects.
          </p>
          <div className="w-12 h-0.5 bg-zinc-800 mx-auto mt-4" />
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center items-center gap-3 mb-12">
          {['All', 'Full Stack', 'Frontend'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === cat 
                  ? 'bg-zinc-800 text-white border border-zinc-700' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="project-card glass-card p-6 sm:p-8 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-5 h-5 text-zinc-400" />
                    <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500 font-medium">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights Bullet points */}
                {project.highlights && (
                  <ul className="mb-6 space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs text-zinc-500 flex items-start gap-1.5 leading-normal">
                        <span className="text-zinc-700 select-none mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-2 py-1 text-[11px] font-mono bg-zinc-900 border border-zinc-800 rounded text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-900/60">
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Codebase
                  </a>
                )}
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
