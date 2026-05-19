/* ═══════════════════════════════════════════════════════
   CASA CANE — Script
   ═══════════════════════════════════════════════════════ */

// ─── Header scroll shadow ───────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ─── Product filter ─────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    productCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});

// ─── Newsletter form ────────────────────────────────────
function handleSubscribe(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const btn = e.target.querySelector('button');
  btn.textContent = 'You\'re in the pack ✓';
  btn.style.background = '#8b6f47';
  btn.style.borderColor = '#8b6f47';
  btn.style.color = '#fff';
  input.value = '';
  input.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Subscribe';
    btn.style.cssText = '';
    input.disabled = false;
  }, 4000);
}

// ─── Smooth reveal on scroll ────────────────────────────
const revealEls = document.querySelectorAll(
  '.product-card, .lookbook-item, .detail-list li, .feature-band__content, .about__text'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity .5s ease ${(i % 4) * 0.08}s, transform .5s ease ${(i % 4) * 0.08}s`;
  observer.observe(el);
});
