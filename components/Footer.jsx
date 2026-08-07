'use client';

import React from 'react';
import WronyxLogo from './WronyxLogo';

export default function Footer() {
  const offices = [
    {
      country: 'Pakistan',
      tag: '(Global Delivery Center)',
      flag: '🇵🇰',
      address: 'Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab'
    },
    {
      country: 'USA',
      tag: '(Regional Office)',
      flag: '🇺🇸',
      address: '18 S 2nd Street #120 San Jose, CA, 95113, United States'
    },
    {
      country: 'UAE',
      tag: '(Regional Office)',
      flag: '🇦🇪',
      address: '34HW+5J5 - Parkside Retail Level - Cluster R - Jumeirah Lakes Towers - Dubai'
    },
    {
      country: 'UK',
      tag: '(Regional Office)',
      flag: '🇬🇧',
      address: '128 City Road London EC1V 2NX, United Kingdom'
    },
    {
      country: 'KSA',
      tag: '(Regional Office)',
      flag: '🇸🇦',
      address: '3141 Anas Ibn Malik Rd, Al Malqa, Riyadh 13521 KSA'
    }
  ];

  return (
    <footer id="footer" className="bg-[#0a0e10] text-white pt-20 pb-12 border-t border-[#333b40] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0ba9cc]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 pb-16 border-b border-white/10">
          
          {/* Logo Column */}
          <div className="lg:col-span-3">
            <a href="#" className="inline-block mb-6">
              <WronyxLogo size="md" />
            </a>
            <p className="text-xs text-[#aeb7bc] leading-relaxed max-w-xs">
              Empowering ambitious companies with intelligent products, scalable platforms, and enduring digital advantage.
            </p>
          </div>

          {/* Quick Menu Columns */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-8 text-left">
            <div>
              <h4 className="text-xs font-mono font-bold text-[#c7ff4a] uppercase tracking-widest mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
                <li><a href="#leadership" className="hover:text-[#c7ff4a] transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-[#c7ff4a] transition-colors">Careers</a></li>
                <li><a href="#insights" className="hover:text-[#c7ff4a] transition-colors">Case Studies</a></li>
                <li><a href="#contact" className="hover:text-[#c7ff4a] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-[#c7ff4a] uppercase tracking-widest mb-4">
                Industries
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
                <li><a href="#industries" className="hover:text-[#c7ff4a] transition-colors">Fintech & Banking</a></li>
                <li><a href="#industries" className="hover:text-[#c7ff4a] transition-colors">Healthcare</a></li>
                <li><a href="#industries" className="hover:text-[#c7ff4a] transition-colors">E-Commerce</a></li>
                <li><a href="#industries" className="hover:text-[#c7ff4a] transition-colors">Public Sector</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-[#c7ff4a] uppercase tracking-widest mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
                <li><a href="#services" className="hover:text-[#c7ff4a] transition-colors">Generative AI</a></li>
                <li><a href="#services" className="hover:text-[#c7ff4a] transition-colors">Custom Software</a></li>
                <li><a href="#services" className="hover:text-[#c7ff4a] transition-colors">Mobile App Dev</a></li>
                <li><a href="#services" className="hover:text-[#c7ff4a] transition-colors">DevOps & Cloud</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold text-[#c7ff4a] uppercase tracking-widest mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
                <li><a href="#insights" className="hover:text-[#c7ff4a] transition-colors">Featured Insights</a></li>
                <li><a href="#journal" className="hover:text-[#c7ff4a] transition-colors">Research Journal</a></li>
                <li><a href="#services" className="hover:text-[#c7ff4a] transition-colors">AI Sandbox</a></li>
                <li><a href="#contact" className="hover:text-[#c7ff4a] transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Offices Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 text-left">
          {offices.map((office, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#c7ff4a] transition-colors">
              <h5 className="text-xs font-mono font-bold text-white flex items-center gap-2 mb-2">
                <span>{office.country}</span>
                <span className="text-[10px] text-gray-500 font-normal">{office.tag}</span>
                <span>{office.flag}</span>
              </h5>
              <p className="text-xs text-gray-400 leading-relaxed">
                {office.address}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-xs text-gray-400">
          
          <a href="mailto:global.business@wronyx.com" className="text-sm font-mono font-bold text-[#c7ff4a] hover:text-white transition-colors">
            global.business@wronyx.com
          </a>

          <div className="flex items-center gap-6 font-medium">
            <a href="#" className="hover:text-[#c7ff4a] transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-[#c7ff4a] transition-colors">Privacy Policy</a>
          </div>

          <div className="flex items-center gap-5 text-base">
            <a href="#" className="hover:text-[#c7ff4a] transition-colors" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="hover:text-[#c7ff4a] transition-colors" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" className="hover:text-[#c7ff4a] transition-colors" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-[#c7ff4a] transition-colors" aria-label="X Twitter"><i className="fa-brands fa-x-twitter"></i></a>
          </div>

        </div>

      </div>
    </footer>
  );
}

