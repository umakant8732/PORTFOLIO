import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  ExternalLink, 
  Check, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Eye, 
  X, 
  Briefcase, 
  Code2,
  FileCheck2,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [downloadStatus, setDownloadStatus] = useState('idle'); // 'idle' | 'downloading' | 'completed'
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const RESUME_URL = '/UMAKANT_BHENDARKAR_MERN_STACK_DEV.pdf';
  const RESUME_FILENAME = 'UMAKANT_BHENDARKAR_MERN_STACK_DEV.pdf';

  const triggerDownload = (e) => {
    // Show download feedback state
    setDownloadStatus('downloading');

    // Programmatic click to ensure download triggers reliably across all browsers/mobile webviews
    const link = document.createElement('a');
    link.href = RESUME_URL;
    link.setAttribute('download', RESUME_FILENAME);
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => {
      setDownloadStatus('completed');
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3500);
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between items-center px-4 py-8 sm:py-12 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Ambient Radial Gradient Orbs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-r from-blue-600/25 via-indigo-500/25 to-cyan-400/20 blur-[120px] rounded-full pointer-events-none animate-pulse-glow-1" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[320px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-purple-600/15 blur-[130px] rounded-full pointer-events-none animate-pulse-glow-2" />

      {/* Top Header Badge */}
      <header className="relative z-10 w-full max-w-xl flex items-center justify-between mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md text-xs font-medium text-slate-300 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Full-Time & Contract Roles</span>
        </div>

        <span className="text-xs font-mono text-slate-400 tracking-wider hidden sm:inline-block">
          PORTFOLIO &bull; RESUME
        </span>
      </header>

      {/* Main Focus Card */}
      <main className="relative z-10 w-full max-w-xl my-auto">
        <div className="relative group">
          
          {/* Subtle Outer Glowing Gradient Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/40 via-blue-600/40 to-indigo-600/40 rounded-3xl blur-md opacity-70 group-hover:opacity-95 transition duration-500" />

          {/* Card Body */}
          <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col items-center text-center">
            
            {/* Monogram / Avatar with Glow */}
            <div className="relative mb-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/25">
                <div className="w-full h-full bg-slate-950/90 rounded-[14px] flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent font-sans">
                    UB
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-1 rounded-full ring-4 ring-slate-900" title="Verified Developer">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Developer Identity */}
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white sm:leading-tight">
              Umakant Bhendarkar
            </h1>
            <p className="mt-1.5 text-sm sm:text-base font-medium text-cyan-400 tracking-wide">
              Full Stack Developer &bull; MERN Stack Specialist
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Crafting scalable web architectures, modern React interfaces, robust Node.js microservices & cloud deployments.
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-4 max-w-md">
              {['React.js', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Redis', 'TypeScript', 'Tailwind'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 text-[11px] font-medium text-slate-300 bg-slate-800/80 border border-slate-700/70 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Document Details Box */}
            <div className="w-full mt-7 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/90 flex items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 truncate flex items-center gap-1.5">
                    <span>UMAKANT_BHENDARKAR_RESUME</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                      PDF
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                    <span>90 KB</span>
                    <span>&bull;</span>
                    <span>ATS Verified</span>
                    <span>&bull;</span>
                    <span className="text-emerald-400 font-medium">Updated 2026</span>
                  </div>
                </div>
              </div>

              {/* View in Browser Trigger */}
              <button
                type="button"
                onClick={() => setShowPreviewModal(true)}
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
                title="Preview document"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Preview</span>
              </button>
            </div>

            {/* Primary Action Button (Download Resume) */}
            <div className="w-full mt-5 flex flex-col gap-3">
              <button
                type="button"
                id="download-resume-btn"
                onClick={triggerDownload}
                disabled={downloadStatus === 'downloading'}
                className="w-full group/btn relative overflow-hidden py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400 active:scale-[0.99] text-white font-bold text-base sm:text-lg shadow-[0_10px_35px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-80"
              >
                {/* Button Sheen Highlight */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                {downloadStatus === 'idle' && (
                  <>
                    <Download className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/btn:-translate-y-0.5" />
                    <span>Download Resume</span>
                    <span className="text-xs font-normal opacity-80 px-2 py-0.5 rounded-full bg-white/20">
                      .PDF
                    </span>
                  </>
                )}

                {downloadStatus === 'downloading' && (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Preparing Download...</span>
                  </>
                )}

                {downloadStatus === 'completed' && (
                  <>
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300 animate-bounce" />
                    <span>Resume Downloaded!</span>
                  </>
                )}
              </button>

              {/* Direct Link Fallback / Open in New Tab */}
              <div className="flex items-center justify-center gap-3 text-xs text-slate-400 pt-1">
                <span>Want to view first?</span>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 hover:underline transition-colors"
                >
                  Open in New Tab
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick Contact & Links */}
            <div className="w-full mt-7 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
              <a 
                href="mailto:umakantbhendarkar94@gmail.com" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>umakantbhendarkar94@gmail.com</span>
              </a>

              <a 
                href="tel:+919588418970" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+91 9588418970</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/umakant-bhendarkar-758303256/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:text-blue-400 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a 
                href="https://github.com/umakant8732" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:text-white transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-xl text-center mt-8 sm:mt-12 text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Umakant Bhendarkar. All rights reserved.</p>
      </footer>

      {/* Embedded Resume Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl h-[88vh] bg-slate-900 border border-slate-700 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold text-slate-200">
                  Umakant Bhendarkar &bull; Resume Preview
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={triggerDownload}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreviewModal(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body / PDF Iframe */}
            <div className="flex-1 w-full bg-slate-950 relative">
              <iframe
                src={`${RESUME_URL}#toolbar=0&navpanes=0`}
                title="Resume Preview"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
