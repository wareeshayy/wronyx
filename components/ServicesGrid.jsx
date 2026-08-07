'use client';

import React, { useState } from 'react';
import { 
  Bot, Cpu, Smartphone, Users, GitBranch, Layout, Globe, Code2, Shield, 
  BarChart3, Database, AppWindow, Cloud, RefreshCw, Box, Glasses, Lock, 
  Gamepad2, Sparkles, Layers, ShieldCheck, CheckCircle2, Server, ShoppingBag, 
  Wrench, Activity, ChevronDown, ChevronUp, ArrowRight
} from 'lucide-react';

export default function ServicesGrid({ onOpenContact }) {
  const [expanded, setExpanded] = useState(false);

  const services = [
    { title: 'Generative AI', icon: Bot, category: 'Artificial Intelligence', code: 'AI-GEN' },
    { title: 'Dynamics 365 ERP', icon: Database, category: 'Enterprise', code: 'ERP-D365' },
    { title: 'Mobile App Development', icon: Smartphone, category: 'Mobile', code: 'MOB-DEV' },
    { title: 'Staff Augmentation', icon: Users, category: 'Dedicated Engineering', code: 'ENG-STAFF' },
    { title: 'DevOps & CI/CD', icon: GitBranch, category: 'Infrastructure', code: 'INF-OPS' },
    { title: 'UI/UX Product Design', icon: Layout, category: 'Product Design', code: 'DES-UX' },
    { title: 'Web Development', icon: Globe, category: 'Engineering', code: 'WEB-CORE' },
    { title: 'Custom Software Architecture', icon: Code2, category: 'Software', code: 'SOFT-CUST' },
    
    // Additional items revealed when expanded
    { title: 'Cybersecurity & Zero Trust', icon: Shield, category: 'Security', code: 'SEC-ZERO' },
    { title: 'Data Analytics & Insights', icon: BarChart3, category: 'Data Science', code: 'DATA-AI' },
    { title: 'MS D365 CRM', icon: AppWindow, category: 'Enterprise', code: 'CRM-D365' },
    { title: 'Power Apps & Low Code', icon: Sparkles, category: 'Low Code', code: 'LOW-CODE' },
    { title: 'Cloud Application Modernization', icon: Cloud, category: 'Cloud', code: 'CLD-APP' },
    { title: 'Cloud Maintenance & Integration', icon: RefreshCw, category: 'Cloud Operations', code: 'CLD-OPS' },
    { title: 'Spatial Metaverse Architectures', icon: Box, category: 'Immersive', code: 'META-3D' },
    { title: 'Augmented Reality', icon: Glasses, category: 'Spatial Computing', code: 'AR-XR' },
    { title: 'Blockchain & Cryptography', icon: Lock, category: 'Web3 & Security', code: 'CHAIN-CRYPTO' },
    { title: 'Game Engineering', icon: Gamepad2, category: 'Gaming', code: 'GAME-ENG' },
    { title: 'Web3 & Decentralized Gaming', icon: Layers, category: 'Gaming', code: 'WEB3-GAME' },
    { title: 'AR/VR/XR Immersive Gaming', icon: Glasses, category: 'Spatial Gaming', code: 'XR-GAME' },
    { title: 'Gaming Art & 3D Assets', icon: Sparkles, category: 'Creative Tech', code: '3D-ART' },
    { title: 'Autonomous Quality Assurance', icon: ShieldCheck, category: 'Testing', code: 'QA-AUTO' },
    { title: 'Enterprise SaaS Platforms', icon: Server, category: 'Platform Engineering', code: 'SAAS-ENT' },
    { title: 'Cloud Migration & Ops', icon: Cloud, category: 'Cloud Infrastructure', code: 'CLD-MIG' },
    { title: 'Headless E-commerce & Shopify', icon: ShoppingBag, category: 'E-commerce', code: 'ECOM-HEAD' },
    { title: 'Full Lifecycle Engineering', icon: Wrench, category: 'Full Lifecycle', code: 'LIFE-ENG' },
    { title: 'Managed Cloud Support', icon: Activity, category: 'Managed Services', code: 'MAN-SUPP' },
    { title: 'AI Automation & Agents', icon: Bot, category: 'AI Automation', code: 'AUTO-AGENT' }
  ];

  const visibleServices = expanded ? services : services.slice(0, 8);

  return (
    <section id="services" className="py-24 bg-[#101418] text-white relative border-t border-[#333b40]">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.19em] text-[#d7dfe3] uppercase mb-4">
            <span className="w-9 h-[1px] bg-[#c7ff4a]"></span>
            OUR CAPABILITIES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
            Transform Your Business <em>faster.</em>
          </h2>
        </div>

        {/* 4-Column High-Tech Card Grid (Zero Stock Photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibleServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={idx}
                onClick={onOpenContact}
                className="group relative h-72 p-6 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md cursor-pointer shadow-lg hover:border-[#c7ff4a] hover:bg-gradient-to-b hover:from-[#0ba9cc]/15 hover:via-white/[0.05] hover:to-transparent hover:shadow-[0_0_30px_rgba(199,255,74,0.15)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Tech Dot Matrix Background Pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c7ff4a_1px,transparent_1px)] [background-size:12px_12px]" />

                {/* Card Top Row */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-mono font-bold text-[#c7ff4a] bg-[#c7ff4a]/10 border border-[#c7ff4a]/20 px-2.5 py-1 rounded">
                    {service.category}
                  </span>
                  <span className="text-[9px] font-mono text-gray-500">{service.code}</span>
                </div>

                {/* Card Icon Glow Container */}
                <div className="relative z-10 my-4">
                  <div className="w-14 h-14 rounded-xl border border-white/15 bg-[#0d1115] flex items-center justify-center text-[#c7ff4a] group-hover:border-[#c7ff4a] group-hover:bg-[#c7ff4a] group-hover:text-[#101418] group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(199,255,74,0.1)]">
                    <Icon size={26} />
                  </div>
                </div>

                {/* Title & Arrow */}
                <div className="relative z-10 flex items-end justify-between">
                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[#c7ff4a] transition-colors pr-2">
                    {service.title}
                  </h3>
                  <ArrowRight size={18} className="text-gray-500 group-hover:text-[#c7ff4a] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* View More / View Less Toggle Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-8 py-3.5 rounded-full border border-[#333b40] text-[#c7ff4a] font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-[#c7ff4a] hover:text-[#101418] transition-all shadow-[0_0_20px_rgba(199,255,74,0.15)] cursor-pointer"
          >
            <span>{expanded ? 'View Less' : 'View All 28 Capabilities'}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

      </div>
    </section>
  );
}
