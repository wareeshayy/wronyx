'use client';

import React from 'react';
import WronyxLogo from './WronyxLogo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="#" className="brand-logo-container">
            <WronyxLogo size="md" />
          </a>
          <p className="footer-desc">
            Architecting next-generation autonomous AI systems, knowledge graphs, and cognitive enterprise automation solutions.
          </p>
          <div className="social-links">
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-discord"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>
          <a href="#solutions">Agentic Orchestration</a>
          <a href="#solutions">Knowledge Graphs</a>
          <a href="#solutions">Process Automation</a>
          <a href="#solutions">Zero-Trust Security</a>
        </div>

        <div className="footer-column">
          <h4>Platform</h4>
          <a href="#playground">Interactive Sandbox</a>
          <a href="#architecture">Architecture Topology</a>
          <a href="#roi-calculator">ROI Quantifier</a>
          <a href="#brand-system">Brand System</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About WRONYX</a>
          <a href="#">Careers</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom text-center">
        <p>&copy; 2026 WRONYX AI Solutions Inc. All rights reserved. INNOVATE. CONNECT. LEAD.</p>
      </div>
    </footer>
  );
}
