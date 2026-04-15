/* ═══════════════════════════════════════════════════════════
   FADHIL ZAKKI ZULVA — PORTFOLIO
   File : js/data-loader.js
   Tugas: Baca semua file JSON di /data/ lalu render ke HTML
   ─────────────────────────────────────────────────────────
   Mau ubah data? Edit file di folder /data/ saja.
   Mau ubah tampilan? Edit css/style.css saja.
   Mau ubah logika? Edit js/main.js saja.
═══════════════════════════════════════════════════════════ */

/* ── SVG ICON LIBRARY ──────────────────────────────────── */
const ICONS = {
  linkedin:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  github:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  email:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  whatsapp:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  location:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  server:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  terminal:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  shield:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  code:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  globe:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  heart:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  layers:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
};

/* ── HELPERS ───────────────────────────────────────────── */
async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Gagal load ${path}`);
  return res.json();
}

function icon(name) {
  return ICONS[name] || ICONS['globe'];
}

/* ── RENDER: HERO ──────────────────────────────────────── */
function renderHero(p) {
  // Avatar — foto kalau ada, fallback inisial
  const avatarEl = document.getElementById('avatar-img');
  avatarEl.innerHTML = `<img src="${p.photo}" alt="${p.name}"
    onerror="this.parentElement.textContent='${p.initials}'">`; 

  document.getElementById('hero-name').innerHTML =
    `Halo, Saya<br><span class="accent">${p.shortName}</span><br>
     <span class="line2">${p.role}</span>`;

  document.getElementById('hero-desc').textContent = p.tagline;

  document.getElementById('hero-tags').innerHTML =
    p.tags.map(t => `<span class="hero-tag">${t}</span>`).join('');

  document.getElementById('card-name').textContent = p.name;
  document.getElementById('card-role').textContent = p.role;

  document.getElementById('stat-row').innerHTML =
    p.stats.map(s => `
      <div class="stat-item">
        <div class="stat-num">${s.value}</div>
        <div class="stat-lbl">${s.label}</div>
      </div>`).join('');

  document.getElementById('social-row').innerHTML =
    p.socials.map(s => `
      <a href="${s.url}" target="_blank" class="soc-btn" title="${s.name}">
        ${icon(s.icon)}
      </a>`).join('');
}

/* ── RENDER: ABOUT ─────────────────────────────────────── */
function renderAbout(p) {
  document.getElementById('about-paragraphs').innerHTML =
    p.about.map(t => `<p>${t}</p>`).join('');

  document.getElementById('about-info').innerHTML =
    p.infoCards.map(c => `
      <div class="info-item">
        <div class="info-label">${c.label}</div>
        <div class="info-val ${c.highlight ? 'highlight' : ''}">${c.value}</div>
      </div>`).join('');

  document.getElementById('about-cards').innerHTML =
    p.toolSections.map(sec => `
      <div class="about-card">
        <div class="about-card-title">${sec.title}</div>
        <div class="tools-grid">
          ${sec.items.map(i => `<span class="tool-pill">${i}</span>`).join('')}
        </div>
        ${sec.note ? `<div class="beginner-note">${sec.note}</div>` : ''}
      </div>`).join('');
}

/* ── RENDER: SKILLS ────────────────────────────────────── */
function renderSkills(skills) {
  document.getElementById('skills-grid').innerHTML =
    skills.map(s => `
      <div class="skill-card">
        <div class="skill-icon">${icon(s.icon)}</div>
        <div class="skill-name">${s.name}</div>
        <div class="skill-bar-bg">
          <div class="skill-bar" data-width="${s.percent}"></div>
        </div>
        <div class="skill-pct">${s.percent}%</div>
        <div class="skill-note">${s.note}</div>
      </div>`).join('');
}

/* ── RENDER: PROJECTS ──────────────────────────────────── */
function renderProjects(projects) {
  document.getElementById('projects-grid').innerHTML =
    projects.map(p => `
      <div class="proj-card" ${p.link ? `onclick="window.open('${p.link}','_blank')"` : ''}>
        <div class="proj-thumb">
          ${p.image
            ? `<img src="${p.image}" alt="${p.title}"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : ''}
          <div class="proj-thumb-icon" ${p.image ? 'style="display:none"' : ''}>
            ${icon(p.icon)}
          </div>
          <div class="proj-accent-line"></div>
        </div>
        <div class="proj-body">
          <div class="proj-title">${p.title}</div>
          <div class="proj-desc">${p.description}</div>
          <div class="proj-tags">
            ${p.tags.map(t => `<span class="ptag">${t}</span>`).join('')}
          </div>
        </div>
      </div>`).join('');
}

/* ── RENDER: EXPERIENCE ────────────────────────────────── */
function renderExperience(items) {
  document.getElementById('timeline').innerHTML =
    items.map(e => `
      <div class="timeline-item">
        <div class="timeline-dot" style="border-color:${e.accentColor}"></div>
        <div class="timeline-card">
          <div class="tl-header">
            <div class="tl-role">${e.role}</div>
            <div class="tl-year">${e.year}</div>
          </div>
          <div class="tl-org" style="color:${e.accentColor}">${e.org}</div>
          <div class="tl-desc">${e.description}</div>
          <div class="tl-tags">
            ${e.tags.map(t => `<span class="tl-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>`).join('');
}

/* ── RENDER: CONTACT ───────────────────────────────────── */
function renderContact(p) {
  const contacts = [
    { label:'Email',     val: p.email,                      url: `mailto:${p.email}`,              icon:'email'    },
    { label:'WhatsApp',  val: `0${p.whatsapp.slice(2)}`,    url: `https://wa.me/${p.whatsapp}`,    icon:'whatsapp' },
    ...p.socials.filter(s => ['linkedin','github','instagram'].includes(s.icon))
       .map(s => ({ label: s.name, val: s.url.replace('https://',''), url: s.url, icon: s.icon })),
    { label:'Lokasi',    val: p.location,                   url: null,                             icon:'location' },
  ];

  document.getElementById('contact-info').innerHTML =
    contacts.map(c => `
      <${c.url ? `a href="${c.url}" target="_blank"` : 'div'} class="contact-item">
        <div class="contact-icon">${icon(c.icon)}</div>
        <div>
          <div class="contact-label">${c.label}</div>
          <div class="contact-val">${c.val}</div>
        </div>
      </${c.url ? 'a' : 'div'}>`).join('');
}

/* ── RENDER: FOOTER ────────────────────────────────────── */
function renderFooter(p) {
  document.getElementById('footer-copy').textContent =
    `© ${new Date().getFullYear()} ${p.name} · ${p.location}`;

  document.getElementById('footer-socials').innerHTML =
    p.socials.slice(0,3).map(s => `
      <a href="${s.url}" target="_blank" class="soc-btn" title="${s.name}">
        ${icon(s.icon)}
      </a>`).join('');
}

/* ── MAIN LOADER ───────────────────────────────────────── */
async function loadAll() {
  try {
    const [profile, skills, projects, experience] = await Promise.all([
      loadJSON('data/profile.json'),
      loadJSON('data/skills.json'),
      loadJSON('data/projects.json'),
      loadJSON('data/experience.json'),
    ]);

    renderHero(profile);
    renderAbout(profile);
    renderSkills(skills);
    renderProjects(projects);
    renderExperience(experience);
    renderContact(profile);
    renderFooter(profile);

  } catch (err) {
    console.error('Data loader error:', err);
  }
}

document.addEventListener('DOMContentLoaded', loadAll);
