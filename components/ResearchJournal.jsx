'use client';

import React from 'react';

export default function ResearchJournal() {
  const publications = [
    {
      volume: 'Vol. 12, Issue 4 — 2026',
      title: 'Autonomous Multi-Agent Consensus Models in Ultra-Low Latency Enterprise Environments',
      authors: 'Wareesha Ashraf (CEO & Founder, WRONYX), et al.',
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
      authors: 'Wareesha Ashraf (Lead Author)',
      category: 'Enterprise Security',
      citations: 215,
      doi: '10.1016/j.wronyx.2025.08.204',
      abstract: 'Establishes cryptographic state isolation for autonomous agents operating across sovereign database boundaries.'
    }
  ];

  return (
    <section className="section py-20 bg-[#1E2226] relative" id="journal">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Section Header */}
        <div className="section-header text-center mb-12">
          <div className="section-tag inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/30 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-[#00A3E0] fa-book-bookmark"></i> Peer-Reviewed AIKE Research Journal
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            WRONYX <span className="text-gradient">Research Publications</span>
          </h2>
          <p className="section-subtitle text-gray-400 max-w-2xl mx-auto mt-2 text-sm sm:text-base">
            Advancing the state of the art in Artificial Intelligence, Knowledge Engineering, and Cognitive Systems.
          </p>
        </div>

        {/* Journal Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 bg-[#282C31] rounded-xl border border-[#383E45] text-center">
            <span className="block text-2xl font-black text-[#00A3E0]">4.92</span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Journal Impact Factor</span>
          </div>
          <div className="p-4 bg-[#282C31] rounded-xl border border-[#383E45] text-center">
            <span className="block text-2xl font-black text-white">Open Access</span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Peer-Reviewed Papers</span>
          </div>
          <div className="p-4 bg-[#282C31] rounded-xl border border-[#383E45] text-center">
            <span className="block text-2xl font-black text-[#00A3E0]">ISSN 2790-412X</span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Registered Journal</span>
          </div>
          <div className="p-4 bg-[#282C31] rounded-xl border border-[#383E45] text-center">
            <span className="block text-2xl font-black text-white">Double-Blind</span>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Review Protocol</span>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div 
              key={idx} 
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#383E45] bg-[#282C31] hover:border-[#00A3E0] transition-all duration-300 shadow-xl group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#00A3E0] bg-[#00A3E0]/10 px-3 py-1 rounded-md border border-[#00A3E0]/30">
                  {pub.volume}
                </span>
                <span className="text-xs text-gray-400 font-semibold bg-[#1E2226] px-3 py-1 rounded-md border border-[#383E45]">
                  <i className="fa-solid fa-folder-open text-[#00A3E0] mr-1"></i> {pub.category}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00A3E0] transition-colors mb-2 leading-snug">
                {pub.title}
              </h3>

              <p className="text-xs font-medium text-gray-400 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-[#00A3E0] fa-user-pen text-[#00A3E0]"></i> {pub.authors}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 bg-[#1E2226] p-4 rounded-xl border border-[#383E45]">
                {pub.abstract}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#383E45]/50 text-xs">
                <span className="font-mono text-gray-400">
                  DOI: <span className="text-gray-200">{pub.doi}</span>
                </span>

                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-semibold">
                    <i className="fa-solid fa-quote-left text-[#00A3E0] mr-1"></i> {pub.citations} Citations
                  </span>
                  <button type="button" className="btn btn-secondary text-xs py-1.5 px-3 rounded-lg flex items-center gap-1.5">
                    <i className="fa-solid fa-file-pdf text-red-400"></i> Read PDF
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
