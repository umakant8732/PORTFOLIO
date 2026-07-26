import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Link2, Printer, Download } from 'lucide-react';

export default function App() {
  const [scale, setScale] = useState(1);
  const wrapperRef = useRef(null);
  const PAGE_WIDTH = 820;
  const PAGE_HEIGHT = 1300;

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const handleResize = () => {
      if (!wrapperRef.current) return;
      const containerWidth = wrapperRef.current.offsetWidth;
      if (containerWidth < PAGE_WIDTH) {
        setScale(containerWidth / PAGE_WIDTH);
      } else {
        setScale(1);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    const timeoutId = setTimeout(handleResize, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f1f5f9] py-6 sm:py-10 px-2 sm:px-6 print:p-0 print:bg-white flex flex-col items-center">
      
      {/* Floating Action Bar (Invisible on Print) */}
      <div className="w-full max-w-[820px] mb-6 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between bg-white/85 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 shadow-[0_4px_20px_rgba(148,163,184,0.08)] no-print">
        <div className="flex flex-col">
          <h1 className="text-sm font-bold text-slate-800 tracking-tight">UMAKANT | MERN DEV</h1>
          <p className="text-[11px] text-slate-500 mt-0.5">Pixel-perfect A4 print preview</p>
        </div>
        <div className="flex gap-2.5 w-full sm:w-auto">
          <button 
            onClick={handlePrint}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / Save PDF
          </button>
          <a 
            href="/Umakant_MERN_Dev.pdf" 
            download="Umakant_MERN_Dev.pdf"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Raw Download
          </a>
        </div>
      </div>

      {/* Wrapper container that takes full width */}
      <div 
        ref={wrapperRef} 
        className="w-full max-w-[820px] flex justify-center overflow-hidden print:overflow-visible"
      >
        {/* A4 Resume Sheet Container */}
        <div 
          className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-200/50 print:border-none print:shadow-none p-8 sm:p-10 text-slate-900 leading-normal print-page flex flex-col justify-between origin-top shrink-0"
          style={{
            width: `${PAGE_WIDTH}px`,
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: 'none',
            height: `${PAGE_HEIGHT}px`,
            transform: `scale(${scale})`,
            marginBottom: `calc(${PAGE_HEIGHT * scale}px - ${PAGE_HEIGHT}px)`,
            fontFamily: '"Times New Roman", Times, Georgia, serif'
          }}
        >
        
        {/* Header Block */}
        <div className="text-center pb-3 border-b border-slate-200">
          <h1 className="text-4xl font-extrabold tracking-wide uppercase text-slate-900">
            UMAKANT BHENDARKAR
          </h1>
          <p className="text-[16px] font-bold tracking-widest text-slate-600 mt-1 uppercase">
            Full Stack Developer (MERN)
          </p>
          
          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[14px] text-slate-700 mt-2.5 font-medium">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-slate-500" />
              +91 9588418970
            </span>
            <span className="text-slate-300">|</span>
            <a href="mailto:umakantbhendarkar94@gmail.com" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Mail className="w-4 h-4 text-slate-500" />
              umakantbhendarkar94@gmail.com
            </a>
            <span className="text-slate-300">|</span>
            <a href="https://www.linkedin.com/in/umakant-bhendarkar-758303256/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-semibold">
              LinkedIn
            </a>
            <span className="text-slate-300">|</span>
            <a href="https://github.com/umakant8732" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-semibold">
              GitHub
            </a>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-slate-500" />
              Nagbhid, Maharashtra 441205
            </span>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-4">
          <h2 className="text-[15.5px] font-extrabold tracking-wider uppercase text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-2">
            Technical Skills
          </h2>
          <ul className="space-y-0.5 text-[14px] text-slate-800 list-disc pl-4 leading-relaxed font-medium">
            <li>
              <strong className="text-slate-950 font-bold">Frontend:</strong> React.js, TypeScript, JavaScript (ES6+), Redux Toolkit, TanStack Query, Tailwind CSS
            </li>
            <li>
              <strong className="text-slate-950 font-bold">Backend:</strong> Node.js, Express.js, REST APIs, JWT Authentication, RBAC, MVC Architecture, Socket.IO, BullMQ
            </li>
            <li>
              <strong className="text-slate-950 font-bold">Database & Cache:</strong> MongoDB, MySQL, Redis
            </li>
            <li>
              <strong className="text-slate-950 font-bold">Cloud / DevOps / Media:</strong> AWS EC2, AWS S3, AWS CloudFront, Nginx, Linux (Ubuntu), GitHub Actions, FFmpeg, HLS
            </li>
            <li>
              <strong className="text-slate-950 font-bold">Tools & Integrations:</strong> Git, GitHub, Postman, Bruno, Visual Studio Code, Razorpay
            </li>
          </ul>
        </div>

        {/* Professional Experience Section */}
        <div className="mt-4">
          <h2 className="text-[15.5px] font-extrabold tracking-wider uppercase text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-2">
            Professional Experience
          </h2>
          
          <div className="space-y-3.5">
            
            {/* Experience Block 1 */}
            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-[16px] font-bold text-slate-950">Amika Softwares</h3>
                <span className="text-[12px] font-semibold text-slate-600">Dec 2024 – Dec 2025 | Nagpur, India</span>
              </div>
              <div className="flex justify-between items-baseline mb-1">
                <p className="text-[14.5px] font-bold text-slate-800">Jr. MERN Stack Developer</p>
              </div>
              <ul className="space-y-0.5 text-[14px] text-slate-800 list-disc pl-4 leading-relaxed">
                <li>
                  Built and delivered <strong className="text-slate-950 font-semibold">15+ full-stack modules</strong> for <strong className="text-slate-950 font-semibold">E-commerce</strong>, <strong className="text-slate-950 font-semibold">Insurance CRM</strong>, and <strong className="text-slate-950 font-semibold">Hospital Management systems</strong>.
                </li>
                <li>
                  Strengthened backend workflows by implementing validation, access control, and consistent error handling across modules.
                </li>
                <li>
                  <strong className="text-slate-950 font-semibold">Optimized MongoDB queries</strong>, indexing, and backend workflows, reducing API response times by 30%.
                </li>
                <li>
                  Integrated <strong className="text-slate-950 font-semibold">5+ third-party</strong> APIs and services, improving business process efficiency by 20%.
                </li>
                <li>
                  Worked on application deployment using <strong className="text-slate-950 font-semibold">AWS EC2</strong> and managed media storage with <strong className="text-slate-950 font-semibold">AWS S3</strong>.
                </li>
                <li>
                  <strong className="text-slate-950 font-semibold">Collaborated with clients</strong> to understand business needs and deliver solutions aligned with project goals.
                </li>
              </ul>
            </div>

            {/* Experience Block 2 */}
            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-[16px] font-bold text-slate-950">Amika Softwares</h3>
                <span className="text-[12px] font-semibold text-slate-600">Jun 2024 – Dec 2024 | Nagpur, India</span>
              </div>
              <div className="flex justify-between items-baseline mb-1">
                <p className="text-[14.5px] font-bold text-slate-800">React Developer (Intern)</p>
              </div>
              <ul className="space-y-0.5 text-[14px] text-slate-800 list-disc pl-4 leading-relaxed">
                <li>
                  Built modular and responsive user interfaces in <strong className="text-slate-950 font-semibold">React.js</strong> with a focus on reusability and clean component design.
                </li>
                <li>
                  <strong className="text-slate-950 font-semibold">Connected 25+ backend APIs</strong> to frontend screens and ensured smooth data handling across multiple features.
                </li>
                <li>
                  Improved screen consistency by structuring frontend flows and UI behavior in a more organized and reusable way.
                </li>
                <li>
                  Delivered user-facing features by converting product requirements into practical and functional frontend implementations.
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-4">
          <h2 className="text-[15.5px] font-extrabold tracking-wider uppercase text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-2">
            Projects
          </h2>
          
          <div className="space-y-3.5">
            
            {/* Project Block 1 */}
            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-[16px] font-bold text-slate-950 flex items-center gap-1">
                  Acadex LMS Platform (Personal Project)
                  <a href="https://acadexlearning.xyz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-print">
                    <Link2 className="w-3.5 h-3.5" />
                  </a>
                </h3>
                <span className="text-[12px] font-semibold text-slate-600">May 2026 – Present</span>
              </div>
              <ul className="space-y-0.5 text-[14px] text-slate-800 list-disc pl-4 leading-relaxed">
                <li>
                  Built a scalable LMS with separate teacher and student modules using <strong className="text-slate-950 font-semibold">React.js</strong>, <strong className="text-slate-950 font-semibold">Node.js</strong>, <strong className="text-slate-950 font-semibold">Express.js</strong>, and <strong className="text-slate-950 font-semibold">MongoDB</strong>.
                </li>
                <li>
                  Developed secure <strong className="text-slate-950 font-semibold">JWT</strong>- and <strong className="text-slate-950 font-semibold">RBAC</strong>-based APIs for course, lecture, payment, and protected playback workflows.
                </li>
                <li>
                  Implemented <strong className="text-slate-950 font-semibold">AWS S3</strong> presigned uploads with <strong className="text-slate-950 font-semibold">BullMQ</strong> and <strong className="text-slate-950 font-semibold">FFmpeg</strong> for <strong className="text-slate-950 font-semibold">HLS</strong> video processing and streaming.
                </li>
                <li>
                  Integrated <strong className="text-slate-950 font-semibold">CloudFront</strong> signed playback and <strong className="text-slate-950 font-semibold">Socket.IO</strong> for secure delivery and real-time lecture status updates.
                </li>
                <li>
                  Integrated <strong className="text-slate-950 font-semibold">Razorpay</strong> payment gateway, <strong className="text-slate-950 font-semibold">Redis caching</strong>, <strong className="text-slate-950 font-semibold">TanStack Query</strong>, and enrollment-based course access.
                </li>
                <li>
                  Deployed the platform on <strong className="text-slate-950 font-semibold">AWS EC2</strong> with <strong className="text-slate-950 font-semibold">Nginx</strong>, <strong className="text-slate-950 font-semibold">PM2</strong>, <strong className="text-slate-950 font-semibold">HTTPS</strong>, and custom domain configuration for production use.
                </li>
              </ul>
            </div>

            {/* Project Block 2 */}
            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-[16px] font-bold text-slate-950 flex items-center gap-1">
                  Gram Panchayat Information Portal (Freelance)
                  <a href="https://grampanchayat-kotgaon.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-print">
                    <Link2 className="w-3.5 h-3.5" />
                  </a>
                </h3>
                <span className="text-[12px] font-semibold text-slate-600">Jan 2026 – Present</span>
              </div>
              <ul className="space-y-0.5 text-[14px] text-slate-800 list-disc pl-4 leading-relaxed">
                <li>
                  <strong className="text-slate-950 font-semibold">Independently</strong> designed, developed, and deployed a responsive Gram Panchayat website.
                </li>
                <li>
                  Showcased village budget details, government schemes, public notices, and development initiatives.
                </li>
                <li>
                  Implemented <strong className="text-slate-950 font-semibold">downloadable</strong> birth and marriage certificate formats for citizen services.
                </li>
                <li>
                  Developed a <strong className="text-slate-950 font-semibold">mobile-friendly</strong> interface to improve accessibility for citizens across devices.
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Education Section */}
        <div className="mt-4 mb-1">
          <h2 className="text-[15.5px] font-extrabold tracking-wider uppercase text-slate-900 border-b-2 border-slate-900 pb-0.5 mb-2">
            Education
          </h2>
          
          <div className="space-y-2.5">
            
            {/* Education Block 1 */}
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-[14.5px] font-bold text-slate-950">Master of Computer Application (MCA)</h3>
                <p className="text-[12.5px] text-slate-600 mt-0.5 font-medium">Inter Institutional Computer Centre, RTMNU Nagpur</p>
              </div>
              <div className="text-right">
                <span className="text-[12px] font-semibold text-slate-600 block">Nov 2021 – Sep 2023</span>
                <span className="text-[12px] text-slate-500 block mt-0.5">Nagpur, India</span>
              </div>
            </div>

            {/* Education Block 2 */}
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-[14.5px] font-bold text-slate-950">Bachelor of Science (Computer Science)</h3>
                <p className="text-[12.5px] text-slate-600 mt-0.5 font-medium">Rashtrapita Mahatma Gandhi Arts & Science College, Nagbhid</p>
              </div>
              <div className="text-right">
                <span className="text-[12px] font-semibold text-slate-600 block">Jul 2017 – Sep 2021</span>
                <span className="text-[12px] text-slate-500 block mt-0.5">Nagbhid, India</span>
              </div>
            </div>

          </div>
        </div>

        </div>
      
      </div>

    </div>
  );
}
