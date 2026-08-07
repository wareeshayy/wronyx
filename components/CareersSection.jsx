'use client';

import React from 'react';
import { ArrowRight, Terminal, Cpu, Zap, ShieldCheck } from 'lucide-react';

export default function CareersSection({ onOpenContact }) {
  return (
    <section id="careers" className="py-24 bg-[#101418] border-t border-[#333b40] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left High-Tech AI Matrix Container (Zero Human Photos) */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/15 bg-white/[0.03] backdrop-blur-md p-8 shadow-2xl group">
            {/* Tech Mesh Background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c7ff4a_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#0ba9cc]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header Status Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal size={18} className="text-[#c7ff4a]" />
                  <span className="text-xs font-mono text-[#c7ff4a] font-bold tracking-wider">NEURAL RECRUITMENT MESH</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  HIRING ACTIVE
                </div>
              </div>

              {/* Real-time Telemetry Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0d1115] border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-1">
                    <Cpu size={14} className="text-[#0ba9cc]" />
                    <span>Global Hubs</span>
                  </div>
                  <span className="text-2xl font-extrabold text-white">5 Continents</span>
                </div>
                <div className="p-4 rounded-xl bg-[#0d1115] border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-1">
                    <Zap size={14} className="text-[#c7ff4a]" />
                    <span>Work Model</span>
                  </div>
                  <span className="text-2xl font-extrabold text-[#c7ff4a]">100% Remote / Hybrid</span>
                </div>
              </div>

              {/* Code Snippet Card */}
              <div className="p-4 rounded-xl bg-[#080b0e] border border-white/10 font-mono text-xs text-gray-300 space-y-1.5">
                <div className="text-gray-500">// Join our autonomous AI engineering collective</div>
                <div><span className="text-[#c7ff4a]">const</span> talent = <span className="text-[#0ba9cc]">new</span> <span className="text-yellow-400">EngineeringCollective</span>();</div>
                <div>talent.<span className="text-blue-400">deploy</span>(&#123; impact: <span className="text-emerald-400">'GLOBAL'</span>, autonomy: <span className="text-[#c7ff4a]">true</span> &#125;);</div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/10">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#c7ff4a]" /> ISO 27001 Certified Workflows
                </span>
                <span className="font-mono text-[#c7ff4a]">18 Open Roles</span>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.19em] text-[#d7dfe3] uppercase mb-4">
              <span className="w-9 h-[1px] bg-[#c7ff4a]"></span>
              JOIN WRONYX
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-none mb-6">
              Engineering the <em>next</em> wave of intelligence.
            </h2>

            <p className="text-lg text-[#aeb7bc] mb-8 leading-relaxed">
              Join an elite collective of AI engineers, systems architects, and product innovators building high-impact cognitive platforms worldwide.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={onOpenContact}
                className="px-9 py-4 rounded-full bg-[#c7ff4a] text-[#101418] font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(199,255,74,0.3)] hover:bg-[#b4f323] hover:scale-105 transition-all flex items-center gap-2 border-0 cursor-pointer"
              >
                Join Our Team <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

