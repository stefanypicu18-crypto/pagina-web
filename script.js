const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();

const heroVisual = document.querySelector('.hero-visual');
const visualCore = document.querySelector('.visual-core');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroVisual && visualCore && !reduceMotion) {
  heroVisual.addEventListener('pointermove', (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    visualCore.style.transform = `translate(${x * 14}px, ${y * 14}px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
    heroVisual.classList.add('is-active');
  });

  heroVisual.addEventListener('pointerleave', () => {
    visualCore.style.transform = '';
    heroVisual.classList.remove('is-active');
  });
}
