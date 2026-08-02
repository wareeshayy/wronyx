'use client';

import React, { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    objective: 'Agentic Workflow Orchestration'
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg('Executive briefing request logged successfully! An AI Solutions Architect will contact you shortly.');
        setTimeout(() => {
          setSuccessMsg('');
          onClose();
        }, 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="modal-overlay active" onClick={(e) => { if (e.target.classList.contains('modal-overlay')) onClose(); }}>
      <div class="modal-box glass-panel relative p-8 max-w-lg w-full">
        <button class="modal-close absolute top-4 right-4 text-gray-400 hover:text-white" onClick={onClose}>
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>
        
        <div class="modal-header mb-6">
          <h3 class="modal-title text-2xl font-bold">Get Started With <span class="text-gradient">WRONYX</span></h3>
          <p class="modal-subtitle text-sm text-gray-400">Speak with an AI Solutions Architect to customize your deployment.</p>
        </div>

        {successMsg ? (
          <div class="p-4 bg-emerald-950 border border-emerald-700 text-emerald-300 rounded-lg text-sm mb-4">
            <i class="fa-solid fa-circle-check mr-2"></i> {successMsg}
          </div>
        ) : (
          <form onSubmit={handleSubmit} class="space-y-4">
            <div class="form-group">
              <label class="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-300">Full Name</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Alex Morgan"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                class="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white text-sm outline-none focus:border-cyan-400"
              />
            </div>

            <div class="form-group">
              <label class="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-300">Work Email</label>
              <input 
                type="email" 
                required 
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                class="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white text-sm outline-none focus:border-cyan-400"
              />
            </div>

            <div class="form-group">
              <label class="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-300">Company / Organization</label>
              <input 
                type="text" 
                required 
                placeholder="NexaCorp AI"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                class="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white text-sm outline-none focus:border-cyan-400"
              />
            </div>

            <div class="form-group">
              <label class="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-300">Select Primary Objective</label>
              <select 
                value={formData.objective}
                onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                class="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white text-sm outline-none focus:border-cyan-400"
              >
                <option>Agentic Workflow Orchestration</option>
                <option>Enterprise Knowledge Graph (RAG)</option>
                <option>Custom Model Fine-Tuning</option>
                <option>Executive Demo & Consulting</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>
              {loading ? 'Submitting Request...' : 'Submit Executive Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
