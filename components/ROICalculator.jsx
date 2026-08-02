'use client';

import React, { useState } from 'react';

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(50);
  const [hourlyRate, setHourlyRate] = useState(65);
  const [automationPercent, setAutomationPercent] = useState(40);

  const hoursPerYear = 2000;
  const totalPayroll = teamSize * hourlyRate * hoursPerYear;
  const annualSavings = Math.round(totalPayroll * (automationPercent / 100));
  const hoursSavedPerYear = Math.round(teamSize * hoursPerYear * (automationPercent / 100));
  const velocityGain = Math.round((automationPercent / 10) * 2.5);

  return (
    <section class="section" id="roi-calculator">
      <div class="container">
        <div class="section-header text-center">
          <div class="section-tag"><i class="fa-solid fa-calculator"></i> Value Quantifier</div>
          <h2 class="section-title">Calculate Your <span class="text-gradient">Enterprise ROI</span></h2>
          <p class="section-subtitle">See projected annual savings when automating knowledge workflows with WRONYX.</p>
        </div>

        <div class="roi-calculator-box glass-panel p-8">
          <div class="roi-inputs space-y-6">
            <div>
              <div class="flex justify-between text-sm mb-2 font-semibold">
                <span>Knowledge Worker Team Size:</span>
                <span class="text-cyan-400 font-bold">{teamSize} Engineers / Ops</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="500" 
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                class="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div class="flex justify-between text-sm mb-2 font-semibold">
                <span>Average Hourly Rate ($):</span>
                <span class="text-cyan-400 font-bold">${hourlyRate} / hour</span>
              </div>
              <input 
                type="range" 
                min="25" 
                max="200" 
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                class="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div>
              <div class="flex justify-between text-sm mb-2 font-semibold">
                <span>Workflow Automation Target (%):</span>
                <span class="text-cyan-400 font-bold">{automationPercent}% Automate</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="80" 
                value={automationPercent}
                onChange={(e) => setAutomationPercent(Number(e.target.value))}
                class="w-full accent-cyan-400 cursor-pointer"
              />
            </div>
          </div>

          <div class="roi-results glass-card p-6 bg-gray-900 border border-gray-700 rounded-lg flex flex-col justify-center text-center">
            <div class="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Projected Annual Savings</div>
            <div class="text-4xl font-extrabold text-gradient mb-4">
              ${annualSavings.toLocaleString()}
            </div>

            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800 text-sm">
              <div>
                <div class="text-cyan-400 font-bold text-lg">{hoursSavedPerYear.toLocaleString()} hrs</div>
                <div class="text-gray-400 text-xs">Hours Freed / Year</div>
              </div>
              <div>
                <div class="text-cyan-400 font-bold text-lg">{velocityGain}x</div>
                <div class="text-gray-400 text-xs">Execution Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
