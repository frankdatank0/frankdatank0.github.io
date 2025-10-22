document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('.page__hero--overlay .page__title');
  if (!h1) return;

  const text = "Welcome to Fran's Page";
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.textContent = '█';

  const span = document.createElement('span');
  h1.textContent = '';
  h1.appendChild(span);
  h1.appendChild(cursor);

  let i = 0;
  const speed = 55;
  const timer = setInterval(() => {
    span.textContent = text.slice(0, ++i);
    if (i >= text.length) clearInterval(timer);
  }, speed);
});

