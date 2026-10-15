const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-img');

function openLightbox(src) {
  lightboxImage.src = src;
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
}

document.querySelectorAll('.cert-card[data-cert-src]').forEach((card) => {
  card.addEventListener('click', () => openLightbox(card.dataset.certSrc));
});

lightbox.addEventListener('click', closeLightbox);
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
