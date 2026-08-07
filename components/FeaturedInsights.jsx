'use client';

import React from 'react';
import { ArrowRight, FileText, BookOpen, Layers, LineChart, Sparkles } from 'lucide-react';

export default function FeaturedInsights({ onOpenContact }) {
  const insights = [
    {
      type: 'Case Study',
      title: 'US Fashion Resale Platform Scales to 100K Monthly Transactions',
      icon: LineChart,
      metric: '+142% Throughput',
      tag: 'SCALING'
    },
    {
      type: 'Blogs',
      title: 'Custom Web Application Development: Everything You Need to Know',
      icon: FileText,
      metric: '8 Min Read',
      tag: 'ARCHITECTURE'
    },
    {
      type: 'Case Study',
      title: 'Hospitality AI Platform Reconciles $300M+ in OTA Commissions Automatically',
      icon: Sparkles,
      metric: 'Zero Hallucination',
      tag: 'FINTECH AI'
    },
    {
      type: 'Blogs',
      title: 'How Cloud Computing Can Transform Small Businesses',
      icon: BookOpen,
      metric: '5 Min Read',
      tag: 'CLOUD OPS'
    },
    {
      type: 'Blogs',
      title: "Trends of Mobile Design: What's Next for Your Business?",
      icon: Layers,
      metric: '6 Min Read',
      tag: 'UX PARADIGMS'
    },
    {
      type: 'Case Study',
      title: "Pakistan Furniture Leader's Shopify Migration Drives 55% Growth",
      icon: LineChart,
      metric: '55% Revenue YoY',
      tag: 'E-COMMERCE'
    },
    {
      type: 'Blogs',
      title: 'How Generative AI is Transforming Business Operations',
      icon: Sparkles,
      metric: '10 Min Read',
      tag: 'AGENTIC AI'
    },
    {
      type: 'Case Study',
      title: "US Fintech's AI Financial Modeling Secures $2M+ Funding",
      icon: LineChart,
      metric: '$2M+ Capital Raised',
      tag: 'INVESTMENT AI'
    }
  ];

  return (
    <section id="insights" className="py-24 bg-[#101418] border-t border-[#333b40] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Callout */}
          <div className="lg:col-span-5 text-left sticky top-32">
            <div className="flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.19em] text-[#d7dfe3] uppercase mb-4">
              <span className="w-9 h-[1px] bg-[#c7ff4a]"></span>
              FEATURED INSIGHTS
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-none mb-6">
              Stories of our <em>transformations.</em>
            </h2>
            <p className="text-lg text-[#aeb7bc] mb-8 leading-relaxed">
              Explore real-world case studies and deep-dive technical engineering blogs from WRONYX labs.
            </p>

            <button
              onClick={onOpenContact}
              className="px-9 py-4 rounded-full bg-[#c7ff4a] text-[#101418] font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(199,255,74,0.3)] hover:bg-[#b4f323] hover:scale-105 transition-all flex items-center gap-2 border-0 cursor-pointer"
            >
              Explore All Insights <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: High-Tech Abstract Visual Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  onClick={onOpenContact}
                  className="group relative h-72 p-6 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-md cursor-pointer shadow-lg hover:border-[#c7ff4a] hover:bg-gradient-to-b hover:from-[#0ba9cc]/15 hover:via-white/[0.05] hover:to-transparent hover:shadow-[0_0_30px_rgba(199,255,74,0.15)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  {/* Tech Matrix Mesh */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c7ff4a_1px,transparent_1px)] [background-size:12px_12px]" />

                  {/* Top Bar */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-mono font-bold text-[#101418] bg-[#c7ff4a] px-3 py-1 rounded-full uppercase tracking-wider">
                      {card.type}
                    </span>
                    <span className="text-[10px] font-mono text-[#0ba9cc] font-bold">
                      {card.metric}
                    </span>
                  </div>

                  {/* Center Icon Decorative */}
                  <div className="relative z-10 my-2">
                    <div className="w-12 h-12 rounded-xl border border-white/15 bg-[#0d1115] flex items-center justify-center text-[#c7ff4a] group-hover:border-[#c7ff4a] group-hover:scale-110 transition-all">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div className="relative z-10">
                    <span className="text-[9px] font-mono text-gray-500 block mb-1 uppercase tracking-widest">{card.tag}</span>
                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#c7ff4a] transition-colors">
                      {card.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

