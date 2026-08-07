'use client';

import React from 'react';

export default function ClientLogos() {
  const logos = [
    { name: 'Kallidus', icon: 'fa-cube' },
    { name: 'HoneyBricks', icon: 'fa-layer-group' },
    { name: 'Weatherbys', icon: 'fa-tree' },
    { name: 'inDrive', icon: 'fa-car' },
    { name: 'Sacred Tails', icon: 'fa-dragon' },
    { name: 'Nishat', icon: 'fa-building' },
    { name: 'Alef Education', icon: 'fa-graduation-cap' },
    { name: 'Eduleaf', icon: 'fa-leaf' },
    { name: 'Aesop', icon: 'fa-flask' },
    { name: 'BARQ', icon: 'fa-bolt' },
    { name: 'METAPLEX', icon: 'fa-microchip' },
    { name: 'Zellbury', icon: 'fa-shield-halved' }
  ];

  return (
    <section className="py-10 bg-[#101418] border-y border-[#333b40] overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-80 hover:opacity-100 transition-opacity">
          {logos.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-[#c7ff4a] hover:text-white transition-colors cursor-pointer group">
              <i className={`fa-solid ${item.icon} text-base group-hover:scale-110 transition-transform`}></i>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-300 group-hover:text-[#c7ff4a] transition-colors">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

