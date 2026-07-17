import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        '.edu-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.edu-header',
            start: 'top 85%',
          }
        }
      );

      // Cards Animation
      gsap.fromTo(
        '.edu-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.edu-grid',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const educationData = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'Inter Institutional Computer Centre, RTMNU Nagpur',
      period: 'Nov 2021 – Sep 2023',
      location: 'Nagpur, India',
      grade: '80%',
      description: 'Advanced coursework in Database Management Systems, Software Engineering, Web Technologies, and Data Structures.'
    },
    {
      degree: 'Bachelor of Science (Computer Science)',
      institution: 'Rashtrapita Mahatma Gandhi Arts & Science College, Nagbhid',
      period: 'Jul 2017 – Sep 2021',
      location: 'Nagbhid, Maharashtra',
      grade: '68%',
      description: 'Foundation courses in Programming Languages (C, C++, Java), Web Architecture, Operating Systems, and Mathematics.'
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-24 bg-[#faf6fe] border-t border-purple-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="edu-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-purple-950 mb-4">
            Education
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 max-w-md mx-auto">
            My academic foundation and qualifications.
          </p>
          <div className="w-12 h-0.5 bg-purple-200 mx-auto mt-4" />
        </div>

        {/* Education Grid */}
        <div className="edu-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="edu-card glass-card p-6 sm:p-8 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center border border-purple-100 shrink-0">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-purple-950 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Stats & Meta Footer */}
              <div className="pt-6 border-t border-purple-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-600">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-600">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Score badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 border border-purple-100 text-xs font-semibold text-purple-700">
                  <Award className="w-4 h-4 text-purple-500" />
                  <span>Score: {edu.grade}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
