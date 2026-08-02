'use client';

import React, { useState } from 'react';
import WronyxLogo from './WronyxLogo';

export default function Navbar({ onOpenContact }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="navbar-container" id="navbar">
        <div className="nav-content max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="brand-logo-container flex items-center text-decoration-none">
            <WronyxLogo size="md" />
          </a>

          <nav className="nav-links hidden md:flex items-center gap-8">
            <a href="#solutions" className="nav-link text-sm font-medium text-gray-300 hover:text-[#00A3E0] transition-colors">Solutions</a>
            <a href="#playground" className="nav-link text-sm font-medium text-gray-300 hover:text-[#00A3E0] transition-colors">AI Sandbox</a>
            <a href="#architecture" className="nav-link text-sm font-medium text-gray-300 hover:text-[#00A3E0] transition-colors">Architecture</a>
            <a href="#roi-calculator" className="nav-link text-sm font-medium text-gray-300 hover:text-[#00A3E0] transition-colors">ROI Calculator</a>
            <a href="#brand-system" className="nav-link text-sm font-medium text-gray-300 hover:text-[#00A3E0] transition-colors">Brand System</a>
            <a href="#pricing" className="nav-link text-sm font-medium text-gray-300 hover:text-[#00A3E0] transition-colors">Pricing</a>
          </nav>

          <div className="nav-actions hidden md:flex items-center gap-4">
            <a href="#playground" className="btn btn-secondary">
              <i className="fa-solid fa-play"></i> Live Sandbox
            </a>
            <button className="btn btn-primary" onClick={onOpenContact}>
              Get Started <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <button 
            type="button"
            className="mobile-toggle md:hidden text-white text-xl p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
        <a href="#solutions" className="mobile-link" onClick={() => setMobileOpen(false)}>Solutions</a>
        <a href="#playground" className="mobile-link" onClick={() => setMobileOpen(false)}>AI Sandbox</a>
        <a href="#architecture" className="mobile-link" onClick={() => setMobileOpen(false)}>Architecture</a>
        <a href="#roi-calculator" className="mobile-link" onClick={() => setMobileOpen(false)}>ROI Calculator</a>
        <a href="#brand-system" className="mobile-link" onClick={() => setMobileOpen(false)}>Brand System</a>
        <a href="#pricing" className="mobile-link" onClick={() => setMobileOpen(false)}>Pricing</a>
        <button className="btn btn-primary w-full mt-4" onClick={() => { setMobileOpen(false); onOpenContact(); }}>
          Get Started
        </button>
      </div>
    </>
  );
}
