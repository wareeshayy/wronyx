'use client';

import React from 'react';
import { Mail, Phone, Globe, Github, Linkedin, CheckCircle2, Crown, Sparkles } from 'lucide-react';

export default function ExecutiveLeadership() {
  const founder = {
    name: 'Wareesha Ashraf',
    role: 'CEO & Founder',
    title: 'Full Stack Developer | AI Engineer',
    email: 'wareeshaashraf09@gmail.com',
    phone: '+92 311 7714594',
    portfolio: 'https://wareeshaportfolio.netlify.app/',
    github: 'https://github.com/wareeshayy',
    linkedin: 'https://www.linkedin.com/in/wareesha-ashraf-17a99827b/',
    bio: 'Pioneering next-generation autonomous multi-agent orchestration, self-healing knowledge graphs, and cognitive AI architectures for enterprise digital advantage.'
  };

  return (
    <section className="py-24 bg-[#101418] relative overflow-hidden border-t border-[#333b40]" id="exec-leadership">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#0ba9cc]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Section Tag & Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.19em] text-[#d7dfe3] uppercase mb-4 px-4 py-1.5 rounded-full border border-[#c7ff4a]/20 bg-[#c7ff4a]/10">
            <Crown size={14} className="text-[#c7ff4a]" /> EXECUTIVE LEADERSHIP
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
            Meet Our <em>Visionary Founder.</em>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Driven by engineering excellence and groundbreaking research in autonomous cognitive AI.
          </p>
        </div>

        {/* Founder Card Container */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Cybernetic Avatar & Badge Column (Zero Human Photo) */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-[#0ba9cc] via-cyan-500 to-[#c7ff4a] shadow-[0_0_35px_rgba(199,255,74,0.3)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#101418] flex flex-col items-center justify-center border-2 border-white/10 p-4 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c7ff4a_1px,transparent_1px)] [background-size:8px_8px]" />
                    <span className="font-extrabold text-4xl sm:text-5xl text-white tracking-widest leading-none relative z-10">WA</span>
                    <span className="text-[9px] text-[#c7ff4a] font-mono font-bold tracking-widest uppercase mt-2 bg-[#c7ff4a]/10 px-2 py-0.5 rounded border border-[#c7ff4a]/30 relative z-10">
                      WRONYX FOUNDER
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-[#c7ff4a] text-[#101418] text-xs px-3 py-1 rounded-full font-extrabold shadow-lg flex items-center gap-1">
                  <CheckCircle2 size={13} /> Verified
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {founder.name}
              </h3>
              <p className="text-[#c7ff4a] font-extrabold text-xs tracking-widest uppercase mt-1">
                {founder.role}
              </p>
              <p className="text-gray-400 text-xs font-mono mt-1">
                {founder.title}
              </p>
            </div>

            {/* Content & Direct Contacts Column */}
            <div className="md:col-span-7 space-y-6">
              <blockquote className="border-l-2 border-[#c7ff4a] pl-4 text-[#aeb7bc] italic text-sm sm:text-base leading-relaxed bg-[#0d1115] p-5 rounded-r-xl border-y border-r border-white/10">
                "{founder.bio}"
              </blockquote>

              {/* Direct Contact Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a 
                  href={`mailto:${founder.email}`}
                  className="flex items-center gap-3 p-3.5 bg-[#0d1115] rounded-xl border border-white/10 text-gray-200 hover:border-[#c7ff4a] hover:text-white transition-all group text-decoration-none"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#c7ff4a]/10 border border-[#c7ff4a]/20 flex items-center justify-center text-[#c7ff4a] flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] text-gray-500 font-mono font-bold uppercase tracking-wider">Direct Email</span>
                    <span className="truncate font-mono font-bold text-white text-xs mt-0.5">{founder.email}</span>
                  </div>
                </a>

                <a 
                  href={`tel:${founder.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-3.5 bg-[#0d1115] rounded-xl border border-white/10 text-gray-200 hover:border-[#c7ff4a] hover:text-white transition-all group text-decoration-none"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#c7ff4a]/10 border border-[#c7ff4a]/20 flex items-center justify-center text-[#c7ff4a] flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] text-gray-500 font-mono font-bold uppercase tracking-wider">Executive Line</span>
                    <span className="truncate font-mono font-bold text-white text-xs mt-0.5">{founder.phone}</span>
                  </div>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href={founder.portfolio} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#c7ff4a] text-[#101418] text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 text-decoration-none shadow-[0_0_20px_rgba(199,255,74,0.3)] hover:bg-[#b4f323] hover:scale-105 transition-all"
                >
                  <Globe size={14} /> Interactive Portfolio
                </a>

                <a 
                  href={founder.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-full bg-[#0d1115] text-white text-xs font-bold border border-white/15 hover:border-[#c7ff4a] flex items-center gap-2 text-decoration-none transition-all"
                >
                  <Github size={14} className="text-[#c7ff4a]" /> GitHub
                </a>

                <a 
                  href={founder.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-full bg-[#0d1115] text-white text-xs font-bold border border-white/15 hover:border-[#c7ff4a] flex items-center gap-2 text-decoration-none transition-all"
                >
                  <Linkedin size={14} className="text-[#c7ff4a]" /> LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

