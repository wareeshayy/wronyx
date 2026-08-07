'use client';

import React from 'react';

export default function Partnerships() {
  const partners = [
    { name: 'Microsoft', icon: 'fa-windows', color: 'text-blue-400', label: 'Gold Solution Partner' },
    { name: 'Salesforce', icon: 'fa-cloud', color: 'text-cyan-400', label: 'Summit Tier Partner' },
    { name: 'Shopify Plus', icon: 'fa-bag-shopping', color: 'text-emerald-400', label: 'Official Enterprise Partner' },
    { name: 'Amazon Web Services', icon: 'fa-aws', color: 'text-amber-400', label: 'Advanced Tier Partner' }
  ];

  return (
    <section className="py-24 bg-[#101418] border-t border-[#333b40] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Kicker & Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.19em] text-[#d7dfe3] uppercase mb-4">
            <span className="w-9 h-[1px] bg-[#c7ff4a]"></span>
            GLOBAL ECOSYSTEM
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
            Global Enterprise <em>Partnerships.</em>
          </h2>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col items-center justify-center text-center shadow-lg hover:border-[#c7ff4a] hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(199,255,74,0.15)] transition-all duration-300 group"
            >
              <i className={`fa-brands ${partner.icon} text-5xl mb-4 ${partner.color} group-hover:scale-110 transition-transform`}></i>
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                {partner.name}
              </h3>
              <span className="text-xs font-mono font-bold text-[#c7ff4a] uppercase tracking-wider">
                {partner.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

