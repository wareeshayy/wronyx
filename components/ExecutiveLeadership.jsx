'use client';

import React from 'react';

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
    bio: 'Pioneering next-generation autonomous multi-agent orchestration, self-healing knowledge graphs, and cognitive AI architectures for enterprise intelligence.'
  };

  return (
    <section className="section py-20 bg-[#1A1D21] relative overflow-hidden" id="leadership">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#00A3E0]/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-[1240px] relative z-10">
        <div className="section-header text-center mb-12">
          <div className="section-tag inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/30 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-crown"></i> Executive Leadership
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Meet Our <span className="text-gradient">Visionary Founder</span>
          </h2>
          <p className="section-subtitle text-gray-400 max-w-2xl mx-auto mt-2 text-sm sm:text-base">
            Driven by engineering excellence and groundbreaking research in autonomous cognitive AI.
          </p>
        </div>

        {/* Founder Card Container */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-[#383E45] bg-[#282C31] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Avatar & Emblem Column */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-[#00A3E0] via-[#0A60A8] to-cyan-400 shadow-[0_0_30px_rgba(0,163,224,0.5)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#1E2226] flex flex-col items-center justify-center border-2 border-[#383E45] overflow-hidden">
                    <span className="font-heading font-black text-4xl text-white tracking-wider">WA</span>
                    <span className="text-[10px] text-[#00A3E0] font-bold tracking-widest uppercase mt-1">WRONYX CEO</span>
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-[#00A3E0] text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg flex items-center gap-1">
                  <i className="fa-solid fa-circle-check"></i> Verified
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-wide">
                {founder.name}
              </h3>
              <p className="text-[#00A3E0] font-bold text-sm tracking-wider uppercase mt-1">
                {founder.role}
              </p>
              <p className="text-gray-400 text-xs font-mono mt-1">
                {founder.title}
              </p>
            </div>

            {/* Content & Social Details Column */}
            <div className="md:col-span-7 space-y-6">
              <blockquote className="border-l-4 border-[#00A3E0] pl-4 text-gray-300 italic text-sm sm:text-base leading-relaxed bg-[#1E2226] p-4 rounded-r-xl border-y border-r border-[#383E45]">
                "{founder.bio}"
              </blockquote>

              {/* Direct Contacts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a 
                  href={`mailto:${founder.email}`}
                  className="flex items-center gap-3 p-3 bg-[#1E2226] rounded-xl border border-[#383E45] text-gray-300 hover:border-[#00A3E0] hover:text-white transition-all group"
                >
                  <i className="fa-solid fa-envelope text-[#00A3E0] text-base group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-gray-500 font-bold uppercase">Direct Email</span>
                    <span className="truncate font-mono font-medium">{founder.email}</span>
                  </div>
                </a>

                <a 
                  href={`tel:${founder.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-3 bg-[#1E2226] rounded-xl border border-[#383E45] text-gray-300 hover:border-[#00A3E0] hover:text-white transition-all group"
                >
                  <i className="fa-solid fa-phone text-[#00A3E0] text-base group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-gray-500 font-bold uppercase">Executive Line</span>
                    <span className="truncate font-mono font-medium">{founder.phone}</span>
                  </div>
                </a>
              </div>

              {/* Social Link Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href={founder.portfolio} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary text-xs py-2.5 px-4 rounded-xl font-bold flex items-center gap-2"
                >
                  <i className="fa-solid fa-globe"></i> Interactive Portfolio
                </a>

                <a 
                  href={founder.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-xs py-2.5 px-4 rounded-xl font-bold flex items-center gap-2 bg-[#1E2226] text-white border border-[#383E45] hover:border-[#00A3E0]"
                >
                  <i className="fa-brands fa-github text-[#00A3E0]"></i> GitHub Profile
                </a>

                <a 
                  href={founder.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-xs py-2.5 px-4 rounded-xl font-bold flex items-center gap-2 bg-[#1E2226] text-white border border-[#383E45] hover:border-[#00A3E0]"
                >
                  <i className="fa-brands fa-linkedin text-[#00A3E0]"></i> LinkedIn Connect
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
