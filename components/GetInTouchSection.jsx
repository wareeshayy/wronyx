'use client';

import React, { useState } from 'react';
import { Send, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companyUrl: '',
    region: '',
    projectDetails: '',
    jobInquiry: '',
    services: []
  });

  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Remote IT Resources',
    'Custom Software Development',
    'Web Development',
    'Mobile App Development',
    'AR/VR & Spatial',
    'Gaming Engineering',
    'Cyber Security',
    'AI Automation & Agents'
  ];

  const handleCheckboxChange = (service) => {
    setFormData(prev => {
      const exists = prev.services.includes(service);
      if (exists) {
        return { ...prev, services: prev.services.filter(s => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        companyUrl: '',
        region: '',
        projectDetails: '',
        jobInquiry: '',
        services: []
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#101418] border-t border-[#333b40] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form Section */}
          <div className="lg:col-span-8 text-left">
            <div className="flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.19em] text-[#d7dfe3] uppercase mb-4">
              <span className="w-9 h-[1px] bg-[#c7ff4a]"></span>
              INITIATE CONTACT
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-none mb-10">
              Get in <em>Touch.</em>
            </h2>

            {submitted ? (
              <div className="p-8 rounded-2xl border border-[#c7ff4a] bg-white/[0.04] backdrop-blur-md text-center shadow-2xl animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#c7ff4a]/20 border border-[#c7ff4a] mx-auto flex items-center justify-center text-[#c7ff4a] text-3xl mb-4">
                  ✓
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-2">Transmission Received</h3>
                <p className="text-gray-300 text-base">A WRONYX AI specialist will analyze your parameters and connect within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md">
                
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 mb-2 uppercase tracking-wider">Full Name*</label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1115] border border-white/15 text-white focus:outline-none focus:border-[#c7ff4a] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 mb-2 uppercase tracking-wider">Email Address*</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1115] border border-white/15 text-white focus:outline-none focus:border-[#c7ff4a] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 mb-2 uppercase tracking-wider">Phone Number*</label>
                    <div className="flex gap-2">
                      <div className="px-3 py-3 rounded-xl bg-[#0d1115] border border-white/15 text-white font-bold text-xs flex items-center gap-1.5">
                        <span>🇺🇸</span>
                        <span>+1</span>
                      </div>
                      <input 
                        type="tel" 
                        required
                        placeholder="(201) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1115] border border-white/15 text-white focus:outline-none focus:border-[#c7ff4a] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 mb-2 uppercase tracking-wider">Company Name*</label>
                    <input 
                      type="text" 
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1115] border border-white/15 text-white focus:outline-none focus:border-[#c7ff4a] transition-colors"
                    />
                  </div>
                </div>

                {/* Region & URL Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 mb-2 uppercase tracking-wider">Company Website</label>
                    <input 
                      type="url" 
                      placeholder="https://example.com"
                      value={formData.companyUrl}
                      onChange={(e) => setFormData({ ...formData, companyUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1115] border border-white/15 text-white focus:outline-none focus:border-[#c7ff4a] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-300 mb-2 uppercase tracking-wider">Operating Region*</label>
                    <select 
                      required
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1115] border border-white/15 text-white focus:outline-none focus:border-[#c7ff4a] transition-colors"
                    >
                      <option value="">Select Region</option>
                      <option value="North America">North America</option>
                      <option value="Middle East">Middle East</option>
                      <option value="Europe">Europe</option>
                      <option value="Asia Pacific">Asia Pacific</option>
                      <option value="Africa">Africa</option>
                    </select>
                  </div>
                </div>

                {/* Services Checkboxes */}
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 mb-3 uppercase tracking-wider">Capabilities Required*</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableServices.map((service, sIdx) => (
                      <label key={sIdx} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/[0.03]">
                        <input 
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleCheckboxChange(service)}
                          className="w-4 h-4 accent-[#c7ff4a] rounded border-white/20 bg-[#0d1115] cursor-pointer"
                        />
                        <span className="text-xs font-medium text-gray-300 group-hover:text-[#c7ff4a] transition-colors">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-300 mb-2 uppercase tracking-wider">Project Specification*</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Describe your technical objectives and timeline..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1115] border border-white/15 text-white focus:outline-none focus:border-[#c7ff4a] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-10 py-4 rounded-full bg-[#c7ff4a] text-[#101418] font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(199,255,74,0.3)] hover:bg-[#b4f323] hover:scale-105 transition-all cursor-pointer border-0 flex items-center gap-2"
                >
                  Transmit Inquiry <Send size={16} />
                </button>

              </form>
            )}
          </div>

          {/* Right Callouts Section */}
          <div className="lg:col-span-4 space-y-8 pl-0 lg:pl-6 sticky top-32">
            
            {/* Global Presence Callout */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-left">
              <div className="w-12 h-12 rounded-xl bg-[#c7ff4a]/10 border border-[#c7ff4a]/20 flex items-center justify-center text-[#c7ff4a] text-xl mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#c7ff4a] leading-tight mb-3">
                Global Presence
              </h3>
              <p className="text-sm text-[#aeb7bc] mb-6 leading-relaxed">
                Operating across 5 continents with sovereign delivery hubs in Los Angeles, Dubai, London, Riyadh, and Lahore.
              </p>
              <a 
                href="#footer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-[#c7ff4a] border-b border-white/30 hover:border-[#c7ff4a] pb-1 transition-all"
              >
                View Offices <ArrowRight size={14} className="text-[#c7ff4a]" />
              </a>
            </div>

            {/* Compliance Callout */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-left">
              <div className="w-12 h-12 rounded-xl bg-[#0ba9cc]/10 border border-[#0ba9cc]/20 flex items-center justify-center text-[#0ba9cc] text-xl mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight mb-3">
                ISO & SOC2 Certified
              </h3>
              <p className="text-sm text-[#aeb7bc] mb-6 leading-relaxed">
                All client engagements operate under strict ISO 27001 data governance and NDA isolation protocols.
              </p>
              <span className="text-xs font-mono text-[#c7ff4a] font-bold">100% Deterministic Guarantee</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

