'use client';

import React from 'react';
import WronyxLogo from './WronyxLogo';

export default function CTA({ onOpenContact }) {
  return (
    <section className="section cta-banner-section py-20 relative">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="cta-box glass-panel p-10 md:p-16 rounded-3xl border border-[#383E45] bg-[#282C31] text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="cta-logo-glow mb-6 flex justify-center">
            <WronyxLogo size="lg" showText={false} />
          </div>
          <h2 className="cta-title text-3xl md:text-5xl font-extrabold text-white max-w-3xl mb-4 leading-tight">
            Ready To Transform Your Enterprise With <span className="text-gradient">WRONYX</span>?
          </h2>
          <p className="cta-text text-gray-400 text-lg mb-8 max-w-xl">
            Join leading innovators deploying autonomous AI agents today.
          </p>
          <button type="button" className="btn btn-primary btn-lg" onClick={onOpenContact}>
            <i className="fa-solid fa-rocket"></i> Schedule Executive Briefing
          </button>
        </div>
      </div>
    </section>
  );
}
