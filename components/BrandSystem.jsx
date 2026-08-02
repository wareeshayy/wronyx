'use client';

import React from 'react';
import WronyxLogo from './WronyxLogo';

export default function BrandSystem() {
  const colorSwatches = [
    { name: 'Cyber Electric Blue', hex: '#00A3E0', rgb: 'rgb(0, 163, 224)', role: 'Primary Accent & Active States' },
    { name: 'Deep Metallic Blue', hex: '#0A60A8', rgb: 'rgb(10, 96, 168)', role: 'Secondary Accent & Gradients' },
    { name: 'Dark Slate / Concrete', hex: '#1E2226', rgb: 'rgb(30, 34, 38)', role: 'Website Dark Theme Base' },
    { name: 'Card Container BG', hex: '#282C31', rgb: 'rgb(40, 44, 49)', role: 'Glass Panels & Cards' },
    { name: 'Gunmetal Gray', hex: '#5A626A', rgb: 'rgb(90, 98, 106)', role: 'Metallic Shades & Muted Icons' },
    { name: 'Neutral Border', hex: '#383E45', rgb: 'rgb(56, 62, 69)', role: 'Container Lines & Outlines' },
  ];

  return (
    <section className="section brand-system-section py-20 bg-[#1E2226] relative" id="brand-system">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="section-header text-center mb-12">
          <div className="section-tag inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/30 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-palette"></i> Vector Brand System
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-white">
            The <span className="text-gradient">WRONYX</span> Visual Identity
          </h2>
          <p className="section-subtitle text-gray-400 max-w-2xl mx-auto mt-2">
            Pure SVG vector emblem and exact logo-extracted design tokens for seamless integration across all digital surfaces.
          </p>
        </div>

        <div className="brand-showcase-grid grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Wall Render Showcase Card */}
          <div className="brand-card glass-panel p-8 rounded-2xl border border-[#383E45] bg-[#282C31] flex flex-col justify-between">
            <div className="brand-card-badge inline-block bg-[#00A3E0]/10 border border-[#00A3E0]/30 text-[#00A3E0] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Architectural 3D Presentation
            </div>
            <div className="brand-image-frame rounded-xl overflow-hidden border border-[#383E45] shadow-2xl mb-6">
              <img src="/assets/wronyx_logo.png" alt="WRONYX Architectural Wall Logo" className="brand-wall-img w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="brand-card-body space-y-2">
              <h4 className="text-xl font-bold text-white">3D Architectural Emblem & Slate Wall</h4>
              <p className="text-gray-400 text-sm">
                Electric Cyber Blue looping W, central metallic N ring, and precision sword X mounted on dark concrete texture.
              </p>
            </div>
          </div>

          {/* Color Tokens & Vector Emblem Display */}
          <div className="brand-card glass-panel p-8 rounded-2xl border border-[#383E45] bg-[#282C31] flex flex-col justify-between">
            <div>
              <div className="brand-card-badge inline-block bg-[#00A3E0]/10 border border-[#00A3E0]/30 text-[#00A3E0] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                Vector SVG & Design Tokens
              </div>

              {/* Vector Logo Preview Box */}
              <div className="emblem-display-box grid grid-cols-2 gap-4 my-4 p-6 bg-[#16191C] rounded-xl border border-[#383E45]">
                <div className="emblem-preview-dark flex flex-col items-center justify-center p-4 bg-[#1E2226] rounded-lg border border-[#383E45]">
                  <WronyxLogo size="lg" showText={false} />
                  <span className="text-xs text-gray-400 font-semibold mt-3">Dark UI Mode</span>
                </div>
                <div className="emblem-preview-light flex flex-col items-center justify-center p-4 bg-[#282C31] rounded-lg border border-[#383E45]">
                  <WronyxLogo size="lg" showText={false} />
                  <span className="text-xs text-gray-400 font-semibold mt-3">Vector SVG Emblem</span>
                </div>
              </div>

              {/* Color Swatches Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6">
                {colorSwatches.map((color, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2.5 bg-[#1E2226] rounded-lg border border-[#383E45]">
                    <div className="w-7 h-7 rounded-md border border-gray-700 flex-shrink-0" style={{ backgroundColor: color.hex }}></div>
                    <div className="text-xs leading-tight">
                      <div className="font-bold text-white truncate">{color.name}</div>
                      <div className="text-[#00A3E0] font-mono">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="brand-actions flex flex-wrap sm:flex-nowrap gap-3 mt-4">
              <a href="/assets/wronyx_logo_transparent.png" download className="btn btn-secondary btn-sm flex-1 py-3 text-center text-xs">
                <i className="fa-solid fa-download"></i> Download PNG
              </a>
              <a href="/assets/wronyx_emblem.png" download className="btn btn-primary btn-sm flex-1 py-3 text-center text-xs">
                <i className="fa-solid fa-download"></i> Download Emblem
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
