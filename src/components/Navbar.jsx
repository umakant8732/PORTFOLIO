import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Github, Linkedin } from './ui/BrandIcons';
import { gsap } from 'gsap';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Elegant entrance animation for Nav
    gsap.fromTo(
      '.nav-item',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0 nav-item">
            <a href="#home" className="text-xl font-bold tracking-tight text-purple-950 hover:text-purple-700 transition-colors">
              UMAKANT<span className="text-purple-500">.B</span>
            </a>
          </div>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-item text-sm font-medium text-zinc-600 hover:text-purple-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="hidden md:flex items-center space-x-4 nav-item">
            <a
              href="https://github.com/umakant8732"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-purple-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/umakant-bhendarkar-758303256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-purple-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-zinc-600 hover:text-purple-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#faf6fe]/95 border-b border-purple-100">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 px-3 py-3 border-t border-purple-100 mt-2">
              <a
                href="https://github.com/umakant8732"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-purple-700"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/umakant-bhendarkar-758303256/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-purple-700"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
