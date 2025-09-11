// Smooth scroll ke section
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = a.getAttribute('href');
    if (target.length > 1) {
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
