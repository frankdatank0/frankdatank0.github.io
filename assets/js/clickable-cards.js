// assets/js/clickable-cards.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.feature__wrapper .archive__item').forEach(card => {
    const link = card.querySelector('.archive__item-title a, .btn, a[href]');
    if (!link || !link.href) return;

    const href = link.href;
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');

    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      window.location.href = href;
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.location.href = href; }
    });
  });
});

