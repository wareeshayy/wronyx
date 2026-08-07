'use client';

import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AwardsCertifications() {
  const awards = [
    { title: 'TOP STAFF AUGMENTATION COMPANY', subtitle: 'Clutch', location: 'DUBAI 2025' },
    { title: 'TOP WEB DEVELOPERS', subtitle: 'Clutch', location: 'REAL ESTATE DUBAI' },
    { title: 'TOP WEB DEVELOPERS', subtitle: 'Clutch', location: 'RETAIL DUBAI' },
    { title: 'TOP AR/VR DEVELOPMENT COMPANY', subtitle: 'Clutch', location: 'DUBAI 2025' },
    { title: 'TOP SOFTWARE DEVELOPERS', subtitle: 'Clutch', location: 'SAUDI ARABIA' },
    { title: 'MOST REVIEWED APP DEVELOPMENT', subtitle: 'THE MANIFEST', location: 'UNITED KINGDOM' },
    { title: 'TOP SOFTWARE DEVELOPERS', subtitle: 'Clutch', location: 'GAMING UK' },
    { title: 'ISO 9001:2015 CERTIFIED', subtitle: 'QUALITY', location: 'QUALITY MANAGEMENT' },
    { title: 'ISO 27001 CERTIFIED', subtitle: 'SECURITY', location: 'INFORMATION SECURITY' },
    { title: 'SOC2 TYPE II COMPLIANT', subtitle: 'AUDITED', location: 'DATA PRIVACY' }
  ];

  return (
    <section className="py-24 bg-[#101418] border-t border-[#333b40] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Kicker & Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.19em] text-[#d7dfe3] uppercase mb-4">
            <span className="w-9 h-[1px] bg-[#c7ff4a]"></span>
            EXCELLENCE VERIFIED
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
            Awards and <em>Certifications.</em>
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {awards.map((badge, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col items-center justify-center text-center shadow-lg hover:border-[#c7ff4a] hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(199,255,74,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge Icon */}
              <div className="w-20 h-20 mb-4 rounded-xl border border-[#c7ff4a]/40 bg-[#0d1115] flex flex-col items-center justify-center p-2 group-hover:scale-110 group-hover:bg-[#c7ff4a] transition-all">
                <span className="text-[9px] font-mono font-bold text-gray-400 group-hover:text-[#101418] uppercase leading-none mb-1">{badge.subtitle}</span>
                <Award size={24} className="text-[#c7ff4a] group-hover:text-[#101418] my-1" />
                <span className="text-[8px] font-mono font-extrabold text-[#0ba9cc] group-hover:text-[#101418] tracking-tighter uppercase">{badge.location}</span>
              </div>

              <h3 className="text-xs font-bold text-white uppercase tracking-wider leading-tight group-hover:text-[#c7ff4a] transition-colors">
                {badge.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

