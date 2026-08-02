'use client';

import React from 'react';
import WronyxLogo from './WronyxLogo';

export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section pt-32 pb-20 relative overflow-hidden">
      <div className="hero-glow-sphere"></div>
      <div className="hero-glow-sphere-secondary"></div>

      <div className="container mx-auto px-4 hero-container max-w-[1240px]">
        {/* Top Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/30 mb-8 mx-auto">
          <span className="badge-dot w-2 h-2 rounded-full bg-[#00A3E0] shadow-[0_0_8px_#00A3E0] animate-pulse"></span>
          <span className="badge-text text-xs font-semibold text-[#00A3E0] tracking-wide uppercase">
            Next-Gen Autonomous Agentic Intelligence
          </span>
        </div>

        {/* Flagship WRONYX Brand Header Display */}
        <div className="hero-brand-header mb-8 flex flex-col items-center justify-center">
          <div className="hero-logo-large relative flex items-center justify-center mb-4">
            <div className="hero-logo-glow-ring"></div>
            <WronyxLogo size="xl" showText={false} />
          </div>
          <h1 className="hero-company-name text-4xl sm:text-6xl md:text-7xl font-black tracking-widest text-white mt-2">
            WRONYX
          </h1>
          <p className="hero-motto text-sm sm:text-base font-bold tracking-[8px] text-[#00A3E0] mt-2">
            INNOVATE. CONNECT. LEAD.
          </p>
        </div>

        {/* Main Headline */}
        <h2 className="hero-title text-2xl sm:text-4xl md:text-5xl font-extrabold text-white text-center max-w-4xl mx-auto leading-tight mb-6">
          Architecting Autonomous <span className="text-gradient">AI Solutions</span> For Enterprise Growth
        </h2>

        <p className="hero-description text-gray-300 text-base sm:text-lg text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          WRONYX empowers global organizations with multi-agent orchestration, self-healing knowledge graphs, and real-time neural automation pipelines designed to scale operations infinitely.
        </p>

        {/* Action Group */}
        <div className="hero-cta-group flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#playground" className="btn btn-primary btn-lg glow-effect">
            <i className="fa-solid fa-bolt"></i> Launch AI Sandbox
          </a>
          <a href="#brand-system" className="btn btn-secondary btn-lg">
            <i className="fa-solid fa-layer-group"></i> Explore Brand System
          </a>
        </div>

        {/* Floating Stats Bar */}
        <div className="hero-stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          <div className="stat-card glass-card p-6 text-center rounded-xl border border-[#383E45] bg-[#282C31]">
            <div className="stat-value text-2xl sm:text-3xl font-extrabold text-white">99.6%</div>
            <div className="stat-label text-xs font-medium text-gray-400 mt-1">Agent Task Accuracy</div>
          </div>
          <div className="stat-card glass-card p-6 text-center rounded-xl border border-[#383E45] bg-[#282C31]">
            <div className="stat-value text-2xl sm:text-3xl font-extrabold text-white">12x</div>
            <div className="stat-label text-xs font-medium text-gray-400 mt-1">Faster Decision Velocity</div>
          </div>
          <div className="stat-card glass-card p-6 text-center rounded-xl border border-[#383E45] bg-[#282C31]">
            <div className="stat-value text-2xl sm:text-3xl font-extrabold text-white">500M+</div>
            <div className="stat-label text-xs font-medium text-gray-400 mt-1">Daily Neural Queries</div>
          </div>
          <div className="stat-card glass-card p-6 text-center rounded-xl border border-[#383E45] bg-[#282C31]">
            <div className="stat-value text-2xl sm:text-3xl font-extrabold text-white">Zero-Trust</div>
            <div className="stat-label text-xs font-medium text-gray-400 mt-1">Enterprise Security</div>
          </div>
        </div>

        {/* Interactive Dashboard Frame */}
        <div className="hero-visual-frame glass-panel p-6 rounded-2xl border border-[#383E45] bg-[#282C31]">
          <div className="frame-header flex items-center justify-between pb-4 mb-6 border-b border-[#383E45]">
            <div className="frame-dots flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            <div className="frame-title text-xs font-mono text-gray-300">WRONYX AI Core Engine v4.8 — Live Dashboard</div>
            <div className="frame-status flex items-center gap-2 text-xs text-cyan-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span> 4 Swarm Agents Active
            </div>
          </div>

          <div className="frame-body">
            <div className="dashboard-grid-preview grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="dash-card bg-[#1E2226] p-5 rounded-xl border border-[#383E45]">
                <div className="dash-card-header flex items-center gap-3 mb-4 text-sm font-bold text-white">
                  <i className="fa-solid fa-brain text-[#00A3E0]"></i>
                  <span>Agentic Workflow Orchestrator</span>
                </div>
                <div className="agent-nodes flex items-center justify-between text-xs">
                  <div className="node active flex flex-col items-center gap-1 p-2 rounded bg-[#282C31] text-[#00A3E0] font-bold">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <span>Ingest</span>
                  </div>
                  <div className="h-0.5 w-6 bg-[#00A3E0]"></div>
                  <div className="node active flex flex-col items-center gap-1 p-2 rounded bg-[#282C31] text-[#00A3E0] font-bold">
                    <i className="fa-solid fa-microchip"></i>
                    <span>Reason</span>
                  </div>
                  <div className="h-0.5 w-6 bg-[#00A3E0]"></div>
                  <div className="node active flex flex-col items-center gap-1 p-2 rounded bg-[#00A3E0] text-white font-bold shadow-[0_0_12px_#00A3E0]">
                    <i className="fa-solid fa-code"></i>
                    <span>Execute</span>
                  </div>
                </div>
              </div>

              <div className="dash-card bg-[#1E2226] p-5 rounded-xl border border-[#383E45]">
                <div className="dash-card-header flex items-center gap-3 mb-4 text-sm font-bold text-white">
                  <i className="fa-solid fa-chart-line text-[#00A3E0]"></i>
                  <span>Real-Time Output Velocity</span>
                </div>
                <div className="dash-chart-mock flex items-end justify-between h-20 gap-2 px-2 pt-2">
                  <div className="bar w-full bg-[#00A3E0]/30 rounded-t h-[40%]"></div>
                  <div className="bar w-full bg-[#00A3E0]/50 rounded-t h-[65%]"></div>
                  <div className="bar w-full bg-[#00A3E0]/70 rounded-t h-[85%]"></div>
                  <div className="bar w-full bg-[#00A3E0] rounded-t h-[100%] shadow-[0_0_10px_#00A3E0]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
