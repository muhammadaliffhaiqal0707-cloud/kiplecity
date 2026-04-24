const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => links.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox?.querySelector('img');
const closeBtn = lightbox?.querySelector('.lightbox-close');

if (gallery) {
  for (let i = 1; i <= 22; i++) {
    const num = String(i).padStart(2, '0');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = `<img src="assets/slides/page-${num}.png" alt="Deck slide ${i}" loading="lazy">`;
    btn.addEventListener('click', () => {
      lightboxImage.src = `assets/slides/page-${num}.png`;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
    gallery.appendChild(btn);
  }
}

closeBtn?.addEventListener('click', () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
});

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeBtn.click();
});

window.addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', window.scrollY > 20);
});
