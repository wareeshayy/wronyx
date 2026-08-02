'use client';

import React from 'react';

export default function WronyxLogo({ size = 'md', showText = true, className = '' }) {
  const emblemSizes = {
    sm: { width: 34, height: 34, titleSize: '1.05rem', subSize: '8px' },
    md: { width: 44, height: 44, titleSize: '1.25rem', subSize: '9px' },
    lg: { width: 72, height: 72, titleSize: '2.2rem', subSize: '12px' },
    xl: { width: 110, height: 110, titleSize: '3.5rem', subSize: '15px' },
  };

  const current = emblemSizes[size] || emblemSizes.md;

  return (
    <div className={`inline-flex items-center gap-3 select-none text-decoration-none ${className}`}>
      {/* Native Vector SVG Logo Emblem */}
      <svg 
        viewBox="0 0 100 100" 
        width={current.width} 
        height={current.height} 
        className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
        style={{ filter: 'drop-shadow(0 0 12px rgba(0, 163, 224, 0.5))' }}
      >
        <defs>
          <linearGradient id="cyberBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A3E0" />
            <stop offset="50%" stopColor="#0088FF" />
            <stop offset="100%" stopColor="#0A60A8" />
          </linearGradient>

          <linearGradient id="cyanBrightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#00A3E0" />
          </linearGradient>

          <linearGradient id="metalGunmetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="50%" stopColor="#5A626A" />
            <stop offset="100%" stopColor="#383E45" />
          </linearGradient>

          <filter id="cyanGlowEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Central Circular Ring */}
        <circle 
          cx="48" 
          cy="50" 
          r="30" 
          stroke="url(#cyberBlueGrad)" 
          strokeWidth="7.5" 
          fill="none" 
          filter="url(#cyanGlowEffect)" 
        />

        {/* Outer W Loop */}
        <path 
          d="M 14,36 L 24,70 L 36,44 L 46,70 L 56,40" 
          fill="none" 
          stroke="url(#cyanBrightGrad)" 
          strokeWidth="7.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          filter="url(#cyanGlowEffect)" 
        />

        {/* Inner Metallic N */}
        <path 
          d="M 38,40 L 38,62 L 54,40 L 54,62" 
          fill="none" 
          stroke="url(#metalGunmetalGrad)" 
          strokeWidth="5.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Diagonal X Sword Blade */}
        <path 
          d="M 30,68 L 76,24 L 84,30 L 60,74 Z" 
          fill="url(#cyberBlueGrad)" 
          filter="url(#cyanGlowEffect)" 
        />
        <path 
          d="M 44,28 L 72,70 L 62,75 L 36,32 Z" 
          fill="url(#metalGunmetalGrad)" 
          opacity="0.85" 
        />
      </svg>

      {/* Typography Block */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span 
            className="font-heading font-black tracking-widest text-white leading-tight"
            style={{ 
              fontSize: current.titleSize, 
              letterSpacing: '3px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 60%, #A0A6AC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 15px rgba(0, 163, 224, 0.3)'
            }}
          >
            WRONYX
          </span>
          <span 
            className="font-heading font-bold text-[#00A3E0] uppercase whitespace-nowrap mt-0.5"
            style={{ 
              fontSize: current.subSize, 
              letterSpacing: '2px',
              color: '#00A3E0',
              textShadow: '0 0 8px rgba(0, 163, 224, 0.5)'
            }}
          >
            INNOVATE. CONNECT. LEAD.
          </span>
        </div>
      )}
    </div>
  );
}
