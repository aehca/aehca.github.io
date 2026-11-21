(() => {
  document.querySelectorAll('[data-aehca-carousel]').forEach(carousel => {
  const slides = Array.from(carousel.querySelectorAll('.carousel-item'));
  const indicators = Array.from(carousel.querySelectorAll('[data-slide-to]'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let timer;

  function show(index) {
    slides[current].classList.remove('active');
    indicators[current].classList.remove('active');
    indicators[current].removeAttribute('aria-current');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    indicators[current].classList.add('active');
    indicators[current].setAttribute('aria-current', 'true');
  }
  function stop() { clearInterval(timer); }
  function start() {
    stop();
    if (!reducedMotion.matches && !document.hidden && !carousel.matches(':hover') && !carousel.contains(document.activeElement)) {
      timer = setInterval(() => show(current + 1), 9000);
    }
  }
  carousel.querySelectorAll('[data-slide]').forEach(control => control.addEventListener('click', () => {
    show(current + (control.dataset.slide === 'next' ? 1 : -1));
    start();
  }));
  indicators.forEach((indicator, index) => indicator.addEventListener('click', () => { show(index); start(); }));
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', () => setTimeout(start, 0));
  document.addEventListener('visibilitychange', start);
  reducedMotion.addEventListener('change', start);
  start();
  });
})();
