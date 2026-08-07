'use client';

import React, { useState } from 'react';
import { Cpu, Shield, Activity, Globe, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export default function GlobalLeadership() {
  const leaders = [
    {
      nameFirst: 'Usman',
      nameLast: 'Asif',
      role: 'Chief Executive Officer',
      code: 'EXEC-01',
      initials: 'UA',
      icon: Cpu,
      spec: 'Autonomous AI Strategy & Global Scaling',
      badge: 'SYSTEM ARCHITECT',
      status: 'ONLINE'
    },
    {
      nameFirst: 'Qamar Abbas',
      nameLast: 'Sipra',
      role: 'Chief Financial Officer',
      code: 'EXEC-02',
      initials: 'QS',
      icon: Shield,
      spec: 'Capital Allocation & Enterprise Risk Governance',
      badge: 'FINANCE CORE',
      status: 'ONLINE'
    },
    {
      nameFirst: 'Sarah',
      nameLast: 'Jenkins',
      role: 'Chief Technology Officer',
      code: 'EXEC-03',
      initials: 'SJ',
      icon: Activity,
      spec: 'Multi-Agent Mesh & Distributed Cloud Platforms',
      badge: 'NEURAL CTO',
      status: 'ONLINE'
    },
    {
      nameFirst: 'Tariq',
      nameLast: 'Al-Mansoor',
      role: 'VP of Enterprise AI',
      code: 'EXEC-04',
      initials: 'TA',
      icon: Globe,
      spec: 'Generative AI Deployment & Knowledge Graphs',
      badge: 'AI DIRECTOR',
      status: 'ONLINE'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? leaders.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="leadership" className="py-24 bg-[#101418] border-t border-[#333b40] overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Kicker & Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.19em] text-[#d7dfe3] uppercase mb-4">
              <span className="w-9 h-[1px] bg-[#c7ff4a]"></span>
              EXECUTIVE GOVERNANCE
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
              Our Global <em>Leadership.</em>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-[#333b40] text-[#c7ff4a] hover:bg-[#c7ff4a] hover:text-[#101418] transition-all flex items-center justify-center text-lg cursor-pointer shadow-[0_0_15px_rgba(199,255,74,0.1)]"
              aria-label="Previous Leader"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[#333b40] text-[#c7ff4a] hover:bg-[#c7ff4a] hover:text-[#101418] transition-all flex items-center justify-center text-lg cursor-pointer shadow-[0_0_15px_rgba(199,255,74,0.1)]"
              aria-label="Next Leader"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Leadership Cards Display Grid (Zero Human Photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, idx) => {
            const Icon = leader.icon;
            const isActive = idx === currentIndex;
            return (
              <div 
                key={idx}
                className={`group flex flex-col p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden backdrop-blur-md ${
                  isActive 
                    ? 'border-[#c7ff4a] bg-gradient-to-b from-[#0ba9cc]/15 via-white/[0.05] to-transparent shadow-[0_0_30px_rgba(199,255,74,0.15)]' 
                    : 'border-white/10 bg-white/[0.03] hover:border-[#c7ff4a]/50 hover:bg-white/[0.05]'
                }`}
              >
                {/* Tech Badge Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono text-[#c7ff4a] font-bold tracking-widest px-2.5 py-1 rounded bg-[#c7ff4a]/10 border border-[#c7ff4a]/20">
                    {leader.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {leader.status}
                  </div>
                </div>

                {/* Abstract Glowing Core Visual Container */}
                <div className="w-full h-56 rounded-xl border border-white/10 bg-[#0d1115] relative flex items-center justify-center overflow-hidden mb-6 group-hover:border-[#c7ff4a]/40 transition-colors">
                  {/* Subtle Tech Radial Grid */}
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#c7ff4a_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  {/* Glowing Ring Animation */}
                  <div className="w-32 h-32 rounded-full border border-[#0ba9cc]/30 absolute animate-[spin_20s_linear_infinite]" />
                  <div className="w-24 h-24 rounded-full border border-dashed border-[#c7ff4a]/40 absolute animate-[spin_15s_linear_infinite_reverse]" />
                  
                  {/* Core Emblem Initials & Icon */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0ba9cc] to-[#04517c] p-0.5 shadow-[0_0_30px_rgba(11,169,204,0.5)] z-10 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#101418] flex flex-col items-center justify-center text-center">
                      <span className="font-extrabold text-2xl text-white tracking-widest">{leader.initials}</span>
                    </div>
                  </div>

                  {/* Corner Code Label */}
                  <span className="absolute bottom-3 left-3 text-[9px] font-mono text-gray-500">{leader.code}</span>
                  <div className="absolute bottom-3 right-3 text-[#c7ff4a]">
                    <Icon size={16} />
                  </div>
                </div>

                {/* Leader Details */}
                <h3 className="text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-[#c7ff4a] transition-colors">
                  {leader.nameFirst} <span className="text-[#c7ff4a] font-normal">{leader.nameLast}</span>
                </h3>

                <p className="text-xs font-extrabold text-[#0ba9cc] uppercase tracking-wider mt-1 mb-3">
                  {leader.role}
                </p>

                <p className="text-xs text-[#aeb7bc] leading-relaxed border-t border-white/10 pt-3 mt-auto">
                  {leader.spec}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

