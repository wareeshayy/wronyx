'use client';

import React from 'react';

export default function Solutions() {
  const solutionsList = [
    {
      icon: 'fa-robot',
      title: 'Autonomous Multi-Agent Systems',
      desc: 'Deploy specialized AI agent swarms that collaborate, self-correct, and execute complex workflows without manual supervision.'
    },
    {
      icon: 'fa-diagram-project',
      title: 'Enterprise Knowledge Graphs',
      desc: 'Connect disparate data silos into unified, queryable neural knowledge structures with real-time vector indexing.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Zero-Trust Guardrails',
      desc: 'Enforce enterprise compliance, automatic PII masking, and role-based access controls across all agent memory states.'
    },
    {
      icon: 'fa-bolt-lightning',
      title: 'Predictive Neural Pipelines',
      desc: 'Transform raw data feeds into instantaneous action triggers and automated decision matrix outputs.'
    },
    {
      icon: 'fa-sliders',
      title: 'Custom Model Fine-Tuning',
      desc: 'Adapt open-weights models and proprietary architectures on your secure infrastructure with LoRA fine-tuning.'
    },
    {
      icon: 'fa-server',
      title: 'Sovereign On-Prem Deployment',
      desc: 'Complete air-gapped security for sensitive enterprise operations with dedicated hardware acceleration.'
    }
  ];

  return (
    <section class="section" id="solutions">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag"><i class="fa-solid fa-cubes"></i> Core Suite</div>
          <h2 class="section-title">Enterprise <span class="text-gradient">AI Capabilities</span></h2>
          <p class="section-subtitle">Architected for mission-critical reliability, extreme speed, and infinite scale.</p>
        </div>

        <div class="solutions-grid">
          {solutionsList.map((sol, index) => (
            <div key={index} class="glass-card solution-card">
              <div class="solution-icon">
                <i class={`fa-solid ${sol.icon}`}></i>
              </div>
              <h3 class="solution-title">{sol.title}</h3>
              <p class="solution-desc">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
