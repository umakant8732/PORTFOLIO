import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending', 'success', null
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        '.contact-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.contact-header',
            start: 'top 85%',
          }
        }
      );

      // Contact contents reveal
      gsap.fromTo(
        '.contact-fade',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-[#f8fafc] border-t border-purple-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="contact-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
            Have a project in mind, a job opportunity, or just want to connect? Drop a message!
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4" />
        </div>

        {/* Contact Layout */}
        <div className="contact-content grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Contact Details Panel */}
          <div className="contact-fade lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Contact Information
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Feel free to reach out directly via call or email. I typically respond within 24 hours.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:umakantbhendarkar94@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl glass-card transition-colors hover:border-purple-600"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center border border-purple-100 shrink-0">
                  <Mail className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Me</div>
                  <div className="text-sm font-semibold text-slate-900 break-all">umakantbhendarkar94@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+919588418970"
                className="flex items-center gap-4 p-4 rounded-xl glass-card transition-colors hover:border-purple-600"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center border border-purple-100 shrink-0">
                  <Phone className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Call Me</div>
                  <div className="text-sm font-semibold text-slate-900">+91 9588418970</div>
                </div>
              </a>

              <div 
                className="flex items-center gap-4 p-4 rounded-xl glass-card"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center border border-purple-100 shrink-0">
                  <MapPin className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Location</div>
                  <div className="text-sm font-semibold text-slate-900 font-medium">Nagbhid, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-fade lg:col-span-7 glass-card p-6 sm:p-8 rounded-xl">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Umakant, let's talk about..."
                  className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary py-3 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span>Sending Message...</span>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5 text-white" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
