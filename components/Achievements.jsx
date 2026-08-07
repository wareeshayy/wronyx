'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Achievements({ onOpenContact }) {
  const stats = [
    { number: '3,000+', label: 'Successful Product Deployments' },
    { number: '23+', label: 'Global Sovereign Markets' },
    { number: '250+', label: 'Active Enterprise Partners' },
    { number: '15+', label: 'Years of Enablement Excellence' }
  ];

  return (
    <section className="py-24 bg-[#101418] border-t border-[#333b40] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Copy */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.19em] text-[#d7dfe3] uppercase mb-4">
              <span className="w-9 h-[1px] bg-[#c7ff4a]"></span>
              TRUSTED AT SCALE
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-none mb-6">
              WRONYX’s <em>achievements.</em>
            </h2>
            
            <p className="text-lg text-[#aeb7bc] mb-4 leading-relaxed font-medium">
              We take pride in empowering ambitious enterprises worldwide with scalable, intelligent cognitive platforms.
            </p>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              WRONYX brings an unwavering commitment to engineering rigor, zero-hallucination compliance, and global delivery advantage.
            </p>

            <button
              onClick={onOpenContact}
              className="px-9 py-4 rounded-full bg-[#c7ff4a] text-[#101418] font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(199,255,74,0.3)] hover:bg-[#b4f323] hover:scale-105 transition-all flex items-center gap-2 border-0 cursor-pointer"
            >
              Get in Touch <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Side Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-lg hover:border-[#c7ff4a] hover:bg-white/[0.05] transition-all group"
              >
                <div className="text-4xl md:text-6xl font-extrabold text-[#c7ff4a] mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm font-bold text-gray-300 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

