document.querySelectorAll('img[data-hover]').forEach(img => {
  const original = img.src;
  const hover = img.getAttribute('data-hover');

  img.addEventListener('mouseenter', () => { img.src = hover; });
  img.addEventListener('mouseleave', () => { img.src = original; });
});