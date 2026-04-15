/* ═══════════════════════════════════════════════════════════
   FADHIL ZAKKI ZULVA — PORTFOLIO
   File : js/main.js
   Tugas: Semua interaksi UI (navbar, scroll, animasi)
═══════════════════════════════════════════════════════════ */

/* ── MOBILE MENU ───────────────────────────────────────── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── CONTACT FORM ──────────────────────────────────────── */
function handleSend() {
  const btn = document.querySelector('.form-btn');
  btn.textContent = 'Terkirim!';
  btn.style.background = '#1d9e75';
  setTimeout(() => {
    btn.textContent = 'Kirim Pesan';
    btn.style.background = '';
  }, 2500);
}

/* ── ACTIVE NAV ON SCROLL ──────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });
}

/* ── REVEAL ON SCROLL ──────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ── SKILL BAR ANIMATION ───────────────────────────────── */
function initSkillBars() {
  // Dijalankan ulang setelah data-loader selesai render
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const w = e.target.getAttribute('data-width');
        setTimeout(() => { e.target.style.width = w + '%'; }, 200);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  // Polled karena skill bars dibuat dinamis oleh data-loader
  const poll = setInterval(() => {
    const bars = document.querySelectorAll('.skill-bar');
    if (bars.length > 0) {
      bars.forEach(b => obs.observe(b));
      clearInterval(poll);
    }
  }, 200);
}

/* ── INIT ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initActiveNav();
  initReveal();
  initSkillBars();
});
