'use client';

import React from 'react';
import { 
  ShoppingBag, Plane, Building2, Radio, Store, Zap, TrendingUp, 
  ShoppingCart, CreditCard, HeartPulse, Gamepad2, ArrowRight 
} from 'lucide-react';

export default function ImpactIndustries({ onOpenContact }) {
  const industries = [
    { title: 'Shopify & Headless Commerce', icon: ShoppingBag },
    { title: 'Travel & Hospitality AI', icon: Plane },
    { title: 'Public Sector Governance', icon: Building2 },
    { title: 'Telecommunications & 5G Mesh', icon: Radio },
    { title: 'Retail & CPG Intelligence', icon: Store },
    { title: 'Oil, Gas & Energy Systems', icon: Zap },
    { title: 'Startups & Venture Backed', icon: TrendingUp },
    { title: 'Global E-Commerce Engines', icon: ShoppingCart },
    { title: 'Banking & Fintech Protocols', icon: CreditCard },
    { title: 'Healthcare & Life Sciences', icon: HeartPulse },
    { title: 'Spatial Gaming & Web3', icon: Gamepad2 }
  ];

  return (
    <section id="industries" className="py-24 bg-[#101418] border-t border-[#333b40] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Kicker & Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.19em] text-[#d7dfe3] uppercase mb-4">
            <span className="w-9 h-[1px] bg-[#c7ff4a]"></span>
            SECTOR ADVANTAGE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
            Discover our Impact Across <em>Industries.</em>
          </h2>
        </div>

        {/* Dual-Column Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-16">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-5 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#c7ff4a] hover:bg-white/[0.05] transition-all group cursor-pointer"
                onClick={onOpenContact}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0d1115] border border-white/10 flex items-center justify-center text-[#c7ff4a] text-xl group-hover:border-[#c7ff4a] group-hover:bg-[#c7ff4a] group-hover:text-[#101418] transition-all shadow-[0_0_15px_rgba(199,255,74,0.1)]">
                  <Icon size={22} />
                </div>
                <span className="text-lg md:text-xl font-bold text-white group-hover:text-[#c7ff4a] transition-colors">
                  {ind.title}
                </span>
                <ArrowRight size={18} className="ml-auto text-gray-600 group-hover:text-[#c7ff4a] group-hover:translate-x-1 transition-all" />
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <button
            onClick={onOpenContact}
            className="px-9 py-4 rounded-full bg-[#c7ff4a] text-[#101418] font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(199,255,74,0.3)] hover:bg-[#b4f323] hover:scale-105 transition-all flex items-center gap-2 border-0 cursor-pointer"
          >
            Let's Talk Business <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}

