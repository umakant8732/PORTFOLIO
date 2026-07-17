import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './ui/BrandIcons';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#faf6fe] border-t border-purple-100/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Name and Tag */}
        <div className="mb-6">
          <h3 className="text-purple-950 font-semibold text-lg">UMAKANT BHENDARKAR</h3>
          <p className="text-zinc-500 text-xs mt-1">Full Stack Developer &bull; MERN Expert</p>
        </div>

        {/* Social Navigation */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/umakant8732"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-purple-700 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/umakant-bhendarkar-758303256/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-purple-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:umakantbhendarkar94@gmail.com"
            className="text-zinc-500 hover:text-purple-700 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-zinc-600 text-xs">
          &copy; {currentYear} Umakant Bhendarkar. All rights reserved. Designed with React, Tailwind & GSAP.
        </p>

      </div>
    </footer>
  );
}
