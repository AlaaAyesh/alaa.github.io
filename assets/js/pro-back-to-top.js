/**
 * Floating “back to top” — visible after ~25% scroll depth on any page.
 */
(function () {
  var btn = document.getElementById('pro-scroll-top');
  if (!btn) return;

  function scrollableDistance() {
    var el = document.documentElement;
    return Math.max(1, el.scrollHeight - window.innerHeight);
  }

  function updateVisibility() {
    var ratio = window.scrollY / scrollableDistance();
    var show = ratio >= 0.25;
    btn.classList.toggle('is-visible', show);
    btn.setAttribute('aria-hidden', show ? 'false' : 'true');
    if (show) {
      btn.removeAttribute('tabindex');
    } else {
      btn.setAttribute('tabindex', '-1');
    }
  }

  btn.addEventListener('click', function () {
    var reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reduce ? 'auto' : 'smooth',
    });
  });

  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility, { passive: true });
  updateVisibility();
})();
