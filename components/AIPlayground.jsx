'use client';

import React, { useState } from 'react';

export default function AIPlayground() {
  const [prompt, setPrompt] = useState('Analyze multi-region sales pipeline anomalies and trigger automated executive report generation.');
  const [agentType, setAgentType] = useState('orchestrator');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [executionResult, setExecutionResult] = useState(null);

  const mockExecutionMap = {
    orchestrator: {
      name: 'Workflow Swarm',
      steps: [
        '[0.05s] [INSPECT]: Parsing enterprise directive and extracting domain intent parameters...',
        '[0.22s] [ORCHESTRATE]: Spawning 4 sub-agent worker nodes (Data Ingest, Reasoner, Code Engine, Verifier).',
        '[0.48s] [KNOWLEDGE GRAPH]: Traversing 14 vector schemas with Zero-Trust compliance check.',
        '[0.85s] [EXECUTE]: Running neural decision tree with 99.8% task precision.',
        '[1.10s] [COMPLETE]: Autonomous workflow executed successfully! All agent outputs synchronized.'
      ],
      metrics: { latency: '110ms', tokens: '1,420', score: '99.8%', status: 'SUCCESS' }
    },
    knowledge: {
      name: 'Neural RAG Graph',
      steps: [
        '[0.04s] [INGEST]: Querying dense HNSW vector index across 12,000,000 document embeddings...',
        '[0.18s] [GRAPH RAG]: Identified top 8 cross-entity relation nodes across financial and operational schemas.',
        '[0.52s] [RERANK]: Applied cross-encoder reranking with PII masking guardrails.',
        '[0.76s] [SYNTHESIS]: Context payload assembled with 0.00% hallucination rate.',
        '[0.95s] [COMPLETE]: Neural knowledge retrieval finished cleanly.'
      ],
      metrics: { latency: '95ms', tokens: '980', score: '99.9%', status: 'SUCCESS' }
    },
    code: {
      name: 'Self-Healing Code Engine',
      steps: [
        '[0.08s] [AST PARSE]: Inspecting code syntax trees and API contract signatures...',
        '[0.35s] [MUTATION TEST]: Simulated 32 unit test scenarios across isolated sandbox threads.',
        '[0.68s] [SELF-HEAL]: Automatically refactored path alias resolution & null check assertions.',
        '[0.92s] [VERIFY]: Zero regression failures detected in automated build check.',
        '[1.25s] [COMPLETE]: Code patch deployed to live staging environment.'
      ],
      metrics: { latency: '125ms', tokens: '1,850', score: '99.6%', status: 'SUCCESS' }
    }
  };

  const handleRunAgent = () => {
    if (isRunning) return;

    setIsRunning(true);
    setProgress(0);
    setVisibleSteps([]);
    setExecutionResult(null);

    const currentConfig = mockExecutionMap[agentType] || mockExecutionMap.orchestrator;
    const totalSteps = currentConfig.steps.length;

    currentConfig.steps.forEach((stepText, index) => {
      setTimeout(() => {
        setVisibleSteps((prev) => [...prev, stepText]);
        const currentProgress = Math.round(((index + 1) / totalSteps) * 100);
        setProgress(currentProgress);

        if (index === totalSteps - 1) {
          setIsRunning(false);
          setExecutionResult(currentConfig.metrics);
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <section className="section bg-[#1A1D21] py-20 relative" id="playground">
      <div className="container mx-auto px-4 max-w-[1240px]">
        <div className="section-header text-center mb-12">
          <div className="section-tag inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/30 text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-terminal"></i> Live Interactive Sandbox
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-extrabold text-white">
            WRONYX <span className="text-gradient">AI Sandbox</span>
          </h2>
          <p className="section-subtitle text-gray-400 max-w-2xl mx-auto mt-2">
            Test autonomous agent reasoning, neural graph indexing, and self-healing execution pipelines in real time.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="playground-container glass-panel p-6 md:p-8 rounded-2xl border border-[#383E45] bg-[#282C31] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Controls (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                Select Agent Orchestration Strategy:
              </label>
              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all text-left ${
                    agentType === 'orchestrator'
                      ? 'bg-gradient-to-r from-[#00A3E0] to-[#0A60A8] text-white shadow-[0_0_15px_rgba(0,163,224,0.4)] border border-cyan-400'
                      : 'bg-[#1E2226] text-gray-300 border border-[#383E45] hover:border-[#00A3E0] hover:text-[#00A3E0]'
                  }`}
                  onClick={() => setAgentType('orchestrator')}
                >
                  <i className="fa-solid fa-network-wired text-cyan-400 text-lg"></i>
                  <div className="flex flex-col">
                    <span>Workflow Swarm</span>
                    <span className="text-[11px] font-normal text-gray-300 opacity-80">Multi-agent node orchestration</span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all text-left ${
                    agentType === 'knowledge'
                      ? 'bg-gradient-to-r from-[#00A3E0] to-[#0A60A8] text-white shadow-[0_0_15px_rgba(0,163,224,0.4)] border border-cyan-400'
                      : 'bg-[#1E2226] text-gray-300 border border-[#383E45] hover:border-[#00A3E0] hover:text-[#00A3E0]'
                  }`}
                  onClick={() => setAgentType('knowledge')}
                >
                  <i className="fa-solid fa-database text-cyan-400 text-lg"></i>
                  <div className="flex flex-col">
                    <span>Neural RAG Graph</span>
                    <span className="text-[11px] font-normal text-gray-300 opacity-80">Vector indexing & relation retrieval</span>
                  </div>
                </button>

                <button
                  type="button"
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all text-left ${
                    agentType === 'code'
                      ? 'bg-gradient-to-r from-[#00A3E0] to-[#0A60A8] text-white shadow-[0_0_15px_rgba(0,163,224,0.4)] border border-cyan-400'
                      : 'bg-[#1E2226] text-gray-300 border border-[#383E45] hover:border-[#00A3E0] hover:text-[#00A3E0]'
                  }`}
                  onClick={() => setAgentType('code')}
                >
                  <i className="fa-solid fa-code text-cyan-400 text-lg"></i>
                  <div className="flex flex-col">
                    <span>Self-Healing Code</span>
                    <span className="text-[11px] font-normal text-gray-300 opacity-80">AST analysis & automated patching</span>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Enterprise Task Directive:
              </label>
              <textarea
                rows="3"
                className="w-full p-4 rounded-xl bg-[#1E2226] border border-[#383E45] text-white font-mono text-sm outline-none focus:border-[#00A3E0] focus:ring-1 focus:ring-[#00A3E0] transition-all resize-none"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter directive instructions for agents..."
              ></textarea>
            </div>

            <button
              type="button"
              onClick={handleRunAgent}
              disabled={isRunning}
              className="btn-primary w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              <i className={`fa-solid ${isRunning ? 'fa-circle-notch fa-spin' : 'fa-bolt'}`}></i>
              {isRunning ? `Running ${mockExecutionMap[agentType]?.name}...` : 'Dispatch Autonomous Agent'}
            </button>
          </div>

          {/* Right Column: Terminal & Metrics Display (col-span-7) */}
          <div className="lg:col-span-7 w-full flex flex-col h-full">
            <div className="p-6 bg-[#16191C] rounded-xl border border-[#383E45] font-mono text-sm min-h-[380px] flex flex-col justify-between shadow-inner">
              
              {/* Terminal Header Bar */}
              <div>
                <div className="flex justify-between items-center pb-3 mb-4 border-b border-[#383E45] text-xs text-gray-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] animate-pulse"></span>
                    <span className="text-[#00A3E0] font-bold">Agent Terminal Stream</span>
                  </span>
                  <span className="font-semibold text-gray-300">
                    Status: <span className={isRunning ? 'text-amber-400 animate-pulse' : executionResult ? 'text-emerald-400 font-bold' : 'text-gray-400'}>
                      {isRunning ? 'Executing Graph...' : executionResult ? 'Completed' : 'Ready'}
                    </span>
                  </span>
                </div>

                {/* Animated Progress Bar */}
                {isRunning && (
                  <div className="w-full bg-[#1E2226] h-1.5 rounded-full mb-4 overflow-hidden border border-[#383E45]">
                    <div
                      className="bg-gradient-to-r from-[#00A3E0] to-[#00E5FF] h-full transition-all duration-300 shadow-[0_0_10px_#00A3E0]"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                )}

                {/* Log Stream */}
                <div className="space-y-3 py-2 overflow-y-auto max-h-[260px] pr-2">
                  {visibleSteps.length === 0 && !isRunning && (
                    <div className="text-gray-500 italic text-center py-12 flex flex-col items-center gap-2">
                      <i className="fa-solid fa-terminal text-2xl text-gray-600"></i>
                      <span>Click <strong className="text-[#00A3E0]">"Dispatch Autonomous Agent"</strong> to launch live neural execution.</span>
                    </div>
                  )}

                  {visibleSteps.map((step, idx) => {
                    const parts = step.split(']:');
                    return (
                      <div key={idx} className="text-gray-200 animate-fadeIn flex items-start gap-2 leading-relaxed text-xs sm:text-sm">
                        <span className="text-[#00A3E0] font-bold flex-shrink-0">{parts[0]}:</span>
                        <span className="text-gray-300">{parts[1] || ''}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Execution Metrics Footer */}
              {executionResult && (
                <div className="mt-6 pt-4 border-t border-[#383E45] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#1E2226] p-4 rounded-xl border border-[#383E45]">
                  <div>
                    <span className="text-gray-400 block mb-0.5">Execution Speed</span>
                    <span className="text-white font-bold text-sm">{executionResult.latency}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-0.5">Tokens Processed</span>
                    <span className="text-white font-bold text-sm">{executionResult.tokens}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-0.5">Task Accuracy</span>
                    <span className="text-[#00A3E0] font-bold text-sm">{executionResult.score}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-0.5">Execution Status</span>
                    <span className="text-emerald-400 font-bold text-sm">{executionResult.status}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
