/* ==========================================================================
   WRONYX AI Solutions — Main Interactive JavaScript Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initCanvasParticles();
    initSolutionsFilter();
    initPlaygroundTerminal();
    initROICalculator();
    initModals();
    initMobileNav();
});

/* -------------------------------------------------------------------------- */
/* 1. Dynamic Canvas Neural Background                                        */
/* -------------------------------------------------------------------------- */
function initCanvasParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor(width / 18), 70);

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 2 + 1,
            alpha: Math.random() * 0.5 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 140) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 163, 224, ${0.15 * (1 - dist / 140)})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        // Draw particles
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 163, 224, ${p.alpha})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#00A3E0';
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* -------------------------------------------------------------------------- */
/* 2. Solutions Category Filter                                               */
/* -------------------------------------------------------------------------- */
function initSolutionsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.solution-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const cat = card.getAttribute('data-category');
                if (filter === 'all' || cat === filter) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });
}

/* -------------------------------------------------------------------------- */
/* 3. Interactive AI Playground Terminal                                      */
/* -------------------------------------------------------------------------- */
function initPlaygroundTerminal() {
    const agentBtns = document.querySelectorAll('.agent-btn');
    const promptInput = document.getElementById('prompt-input');
    const runBtn = document.getElementById('run-agent-btn');
    const terminalBody = document.getElementById('terminal-body');

    let currentAgent = 'analyst';

    const prompts = {
        analyst: "Analyze Q3 revenue trends, identify top churn factors, and generate executive summary.",
        coder: "Audit microservices repository, optimize Docker build layer caching, and refactor REST routes.",
        outreach: "Scrape 1st-degree LinkedIn connections, personalize 50% APC cover letters, and log outreach status."
    };

    const terminalLogs = {
        analyst: [
            "[AGENT]: Initializing Enterprise Data Analyst Persona...",
            "[DATA]: Connected to PostgreSQL Data Warehouse & Snowflake RAG Vector Index.",
            "[REASONING]: Parsing Q3 revenue metrics across North America & EMEA regions...",
            "[OUTPUT]: Detected 14.2% ARR growth in Enterprise tier; identified onboarding latency as primary churn vector.",
            "[ACTION]: Executive summary report compiled & published to Notion Knowledge Hub."
        ],
        coder: [
            "[AGENT]: Initializing Autonomous Full-Stack Engineer Persona...",
            "[SYSTEM]: Inspecting codebase AST & dependency manifest files...",
            "[REASONING]: Evaluating Dockerfile multi-stage layers & FastAPI async endpoints...",
            "[OPTIMIZE]: Reduced Docker image footprint by 62% (480MB -> 182MB).",
            "[ACTION]: Generated 14 unit test assertions. PR #409 created with 100% CI pass rate."
        ],
        outreach: [
            "[AGENT]: Initializing WRONYX Outreach & Communications Agent...",
            "[SEARCH]: Querying LinkedIn 1st-degree connections matching 'AI & Knowledge Engineering'...",
            "[PARSER]: Ingesting cover letter template '50% APC Promotion Cover Letter_Rev.docx'...",
            "[PERSONALIZATION]: Tailored personalized outreach for 12 approved recipients without hallucination.",
            "[STATUS]: Batch dispatch completed cleanly with 60s human delay jitter."
        ]
    };

    agentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            agentBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentAgent = btn.getAttribute('data-agent');
            promptInput.value = prompts[currentAgent];

            appendTerminalLogs([
                `[SYSTEM]: Switched persona to WRONYX ${btn.querySelector('.agent-name').textContent}.`
            ]);
        });
    });

    runBtn.addEventListener('click', () => {
        const customPrompt = promptInput.value.trim();
        if (!customPrompt) return;

        appendTerminalLogs([
            `[USER PROMPT]: "${customPrompt}"`,
            ...terminalLogs[currentAgent]
        ], true);
    });

    function appendTerminalLogs(logs, clearFirst = false) {
        if (clearFirst) terminalBody.innerHTML = '';

        logs.forEach((log, idx) => {
            setTimeout(() => {
                const line = document.createElement('div');
                line.className = 'log-line';
                
                if (log.startsWith('[SYSTEM]')) line.classList.add('text-muted');
                else if (log.startsWith('[USER')) line.style.color = '#FFFFFF';
                else if (log.startsWith('[OUTPUT]') || log.startsWith('[ACTION]') || log.startsWith('[STATUS]')) line.classList.add('text-cyan');
                else line.style.color = '#CBD5E1';

                line.textContent = log;
                terminalBody.appendChild(line);
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }, idx * 400);
        });
    }
}

/* -------------------------------------------------------------------------- */
/* 4. Enterprise ROI Calculator                                               */
/* -------------------------------------------------------------------------- */
function initROICalculator() {
    const teamSlider = document.getElementById('team-slider');
    const rateSlider = document.getElementById('rate-slider');
    const hoursSlider = document.getElementById('hours-slider');

    const teamVal = document.getElementById('team-val');
    const rateVal = document.getElementById('rate-val');
    const hoursVal = document.getElementById('hours-val');

    const savingsAmount = document.getElementById('savings-amount');
    const hoursSaved = document.getElementById('hours-saved');
    const efficiencyBoost = document.getElementById('efficiency-boost');

    function calculate() {
        const team = parseInt(teamSlider.value);
        const rate = parseInt(rateSlider.value);
        const hours = parseInt(hoursSlider.value);

        teamVal.textContent = `${team} Employees`;
        rateVal.textContent = `$${rate} / hr`;
        hoursVal.textContent = `${hours} Hours`;

        const totalHoursSaved = team * hours * 52;
        const totalSavings = totalHoursSaved * rate;

        const efficiency = Math.min(Math.round((hours / 40) * 100), 75);

        savingsAmount.textContent = `$${totalSavings.toLocaleString()}`;
        hoursSaved.textContent = `${totalHoursSaved.toLocaleString()} hours`;
        efficiencyBoost.textContent = `${efficiency}%`;
    }

    [teamSlider, rateSlider, hoursSlider].forEach(slider => {
        if (slider) slider.addEventListener('input', calculate);
    });

    calculate();
}

/* -------------------------------------------------------------------------- */
/* 5. Modal & Contact Handlers                                                */
/* -------------------------------------------------------------------------- */
function initModals() {
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.getElementById('modal-close');
    const openBtns = document.querySelectorAll('#open-contact-btn, .open-contact, #mobile-contact-btn');

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });
}

function handleFormSubmit() {
    const modal = document.getElementById('contact-modal');
    alert('Thank you for reaching out to WRONYX! An AI Solutions Architect will contact you shortly.');
    modal.classList.remove('active');
}

/* -------------------------------------------------------------------------- */
/* 6. Mobile Navigation Drawer                                                */
/* -------------------------------------------------------------------------- */
function initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    toggle.addEventListener('click', () => {
        const isVisible = menu.style.display === 'flex';
        menu.style.display = isVisible ? 'none' : 'flex';
    });

    links.forEach(l => {
        l.addEventListener('click', () => {
            menu.style.display = 'none';
        });
    });
}
