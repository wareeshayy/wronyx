'use client';

import React from 'react';
import { BookMarked, FolderOpen, FileCode, Quote, Download } from 'lucide-react';

export default function ResearchJournal() {
  const publications = [
    {
      volume: 'Vol. 12, Issue 4 — 2026',
      title: 'Autonomous Multi-Agent Consensus Models in Ultra-Low Latency Enterprise Environments',
      authors: 'WRONYX Neural Intelligence Research Group',
      category: 'Agentic Orchestration',
      citations: 142,
      doi: '10.1016/j.wronyx.2026.04.012',
      abstract: 'Presents a novel deterministic consensus framework enabling sub-100ms multi-agent reasoning loops with mathematical zero-hallucination verification.'
    },
    {
      volume: 'Vol. 12, Issue 3 — 2026',
      title: 'Self-Healing Knowledge Graphs for Dynamic Vector Embeddings & Graph-RAG Synthesis',
      authors: 'WRONYX Neural Intelligence Research Group',
      category: 'Knowledge Engineering',
      citations: 98,
      doi: '10.1016/j.wronyx.2026.03.088',
      abstract: 'Proposes an adaptive graph topology that auto-refactors entity relations in real-time, reducing vector lookup latency by 64%.'
    },
    {
      volume: 'Vol. 11, Issue 8 — 2025',
      title: 'Zero-Trust AI Compliance Guardrails & PII Masking in Multi-Tenant Agent Memory State',
      authors: 'WRONYX Security Research Group',
      category: 'Enterprise Security',
      citations: 215,
      doi: '10.1016/j.wronyx.2025.08.204',
      abstract: 'Establishes cryptographic state isolation for autonomous agents operating across sovereign database boundaries.'
    }
  ];

  return (
    <section className="py-24 bg-[#101418] relative overflow-hidden border-t border-[#333b40]" id="journal">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[10px] font-extrabold tracking-[0.19em] text-[#d7dfe3] uppercase mb-4 px-4 py-1.5 rounded-full border border-[#c7ff4a]/20 bg-[#c7ff4a]/10">
            <BookMarked size={14} className="text-[#c7ff4a]" /> PEER-REVIEWED AI RESEARCH
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
            WRONYX <em>Research Publications.</em>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Advancing the state of the art in Artificial Intelligence, Knowledge Engineering, and Cognitive Systems.
          </p>
        </div>

        {/* Journal Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] text-center">
            <span className="block text-2xl font-extrabold text-[#c7ff4a]">4.92</span>
            <span className="text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider">Impact Factor</span>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] text-center">
            <span className="block text-2xl font-extrabold text-white">Open Access</span>
            <span className="text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider">Peer-Reviewed</span>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] text-center">
            <span className="block text-2xl font-extrabold text-[#0ba9cc]">ISSN 2790-412X</span>
            <span className="text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider">Registered Journal</span>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03] text-center">
            <span className="block text-2xl font-extrabold text-white">Double-Blind</span>
            <span className="text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider">Review Protocol</span>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-[#c7ff4a] transition-all duration-300 shadow-xl group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono font-bold text-[#c7ff4a] bg-[#c7ff4a]/10 px-3 py-1 rounded border border-[#c7ff4a]/20">
                  {pub.volume}
                </span>
                <span className="text-xs font-mono text-gray-400 bg-[#0d1115] px-3 py-1 rounded border border-white/10 flex items-center gap-1.5">
                  <FolderOpen size={13} className="text-[#0ba9cc]" /> {pub.category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#c7ff4a] transition-colors mb-3 leading-snug">
                {pub.title}
              </h3>

              <p className="text-xs font-mono text-[#0ba9cc] mb-4">
                Author: {pub.authors}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 bg-[#0d1115] p-4 rounded-xl border border-white/10">
                {pub.abstract}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10 text-xs">
                <span className="font-mono text-gray-500">
                  DOI: <span className="text-gray-300">{pub.doi}</span>
                </span>

                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-mono flex items-center gap-1">
                    <Quote size={13} className="text-[#c7ff4a]" /> {pub.citations} Citations
                  </span>
                  <button type="button" className="px-3.5 py-1.5 rounded-full border border-white/15 text-white hover:border-[#c7ff4a] hover:text-[#c7ff4a] text-xs font-bold flex items-center gap-1.5 transition-all">
                    <Download size={13} /> Read PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
