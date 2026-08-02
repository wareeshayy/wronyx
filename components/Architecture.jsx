'use client';

import React from 'react';

export default function Architecture() {
  const steps = [
    {
      num: '01',
      title: 'Multimodal Ingestion',
      desc: 'Streams structured SQL, unstructured docs, APIs, and real-time event logs into low-latency memory frames.'
    },
    {
      num: '02',
      title: 'Neural Graph Embedding',
      desc: 'Translates high-dimensional enterprise context into interconnected graph vector nodes for instant recall.'
    },
    {
      num: '03',
      title: 'Agentic Consensus',
      desc: 'Multiple specialized worker agents cross-validate proposed execution steps with zero-hallucination guardrails.'
    },
    {
      num: '04',
      title: 'Deterministic Action',
      desc: 'Executes verified API actions, code updates, or database mutations with transactional rollback protection.'
    }
  ];

  return (
    <section class="section" id="architecture">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag"><i class="fa-solid fa-microchip"></i> System Topology</div>
          <h2 class="section-title">Cognitive <span class="text-gradient">Agent Architecture</span></h2>
          <p class="section-subtitle">Designed from the ground up for zero-latency neural reasoning and enterprise safety.</p>
        </div>

        <div class="architecture-steps-grid">
          {steps.map((step, index) => (
            <div key={index} class="glass-card arch-card">
              <div class="arch-number text-gradient">{step.num}</div>
              <h3 class="arch-title">{step.title}</h3>
              <p class="arch-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
