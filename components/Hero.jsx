'use client';
import React from 'react';
export default function Hero({ onOpenContact }) {
  return <section className="reference-hero">
    <button className="business-tab" onClick={onOpenContact}>Let's Talk Business</button>
    <div className="reference-hero-inner">
      <h1>Building at the Speed of AI</h1>
      <p>We help companies across North America, Middle East, Africa and Asia Pacific with technological development</p>
      <button className="teal-pill" onClick={onOpenContact}>Get in Touch</button>
      <div className="featured"><span>Featured In:</span><div><b className="serif">Forbes</b><b>BUSINESS<br/>INSIDER</b><b className="serif small">NEW YORK WEEKLY</b><b>Mashable</b><b className="serif small">Khaleej Times</b><b>yahoo!<small> finance</small></b></div></div>
    </div>
  </section>;
}
