'use client';

import React from 'react';

export default function Pricing({ onOpenContact }) {
  const plans = [
    {
      name: 'Starter Acceleration',
      price: '$2,499',
      period: '/ month',
      desc: 'Ideal for fast-scaling startups launching their first agentic workflows.',
      features: [
        'Up to 5 Autonomous AI Agents',
        '1M Tokens / Month',
        'Standard Vector Knowledge Store',
        '8/5 Email & Slack Support'
      ],
      featured: false,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise Suite',
      price: '$7,999',
      period: '/ month',
      desc: 'For established companies deploying enterprise-wide neural knowledge networks.',
      features: [
        'Unlimited Autonomous Agents',
        '20M Tokens / Month',
        'Multi-Graph Neural RAG Engine',
        'Zero-Trust Guardrails & PII Masking',
        'Dedicated AI Architect & 24/7 Support'
      ],
      featured: true,
      cta: 'Deploy Enterprise'
    },
    {
      name: 'Custom Air-Gapped',
      price: 'Custom',
      period: '',
      desc: 'Full on-premise deployment with custom fine-tuned open models for sovereign data.',
      features: [
        'Dedicated On-Prem GPU Cluster',
        'Custom LLM Fine-Tuning (LoRA)',
        'Complete Air-Gapped Isolation',
        'Custom SLA & Legal Guarantee'
      ],
      featured: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section class="section" id="pricing">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag"><i class="fa-solid fa-tags"></i> Transparent Investment</div>
          <h2 class="section-title">Enterprise <span class="text-gradient">Pricing Plans</span></h2>
          <p class="section-subtitle">Scalable tiers designed for modern AI-first organizations.</p>
        </div>

        <div class="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card glass-card ${plan.featured ? 'featured glowing-border' : ''}`}
            >
              {plan.featured && <div class="popular-badge">MOST POPULAR</div>}
              <h3 class="plan-name">{plan.name}</h3>
              <div class="plan-price">{plan.price} <span>{plan.period}</span></div>
              <p class="plan-desc">{plan.desc}</p>
              <ul class="plan-features">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <i class="fa-solid fa-check text-cyan mr-2"></i> {feat}
                  </li>
                ))}
              </ul>
              <button 
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} w-full`}
                onClick={onOpenContact}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
