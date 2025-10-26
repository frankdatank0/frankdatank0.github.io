document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mini-cards .archive__item').forEach(card => {
    const link = card.querySelector('.archive__item-title a, .btn, a[href]');
    if (!link || !link.href) return;

    const href = link.href;
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', e => {
      // ignore clicks on real links inside to avoid double nav
      if (e.target.closest('a')) return;
      window.location.href = href;
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.location.href = href; }
    });
  });
});

