(() => {
  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const els = Array.from(document.querySelectorAll(".reveal"));
  if (els.length === 0) return;

  if (prefersReduced || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  els.forEach((el, idx) => {
    el.style.transitionDelay = `${Math.min(idx * 70, 280)}ms`;
    io.observe(el);
  });
})();

(() => {
  const host = document.querySelector(".pro-typebox");
  if (!host) return;

  const textEl = host.querySelector(".pro-typebox__text");
  if (!textEl) return;

  const itemsRaw = host.getAttribute("data-typed-items") || "";
  const items = itemsRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (items.length === 0) return;

  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Always show something immediately (prevents an empty-looking box).
  textEl.textContent = items[0];

  if (prefersReduced) {
    return;
  }

  let itemIndex = 0;
  let charIndex = items[0].length;
  let deleting = true;

  const TYPE_MS = 62;
  const DELETE_MS = 38;
  const HOLD_MS = 1350;

  const tick = () => {
    const current = items[itemIndex];

    if (!deleting) {
      charIndex += 1;
      textEl.textContent = current.slice(0, charIndex);
      if (charIndex >= current.length) {
        deleting = true;
        setTimeout(tick, HOLD_MS);
        return;
      }
      setTimeout(tick, TYPE_MS);
      return;
    }

    charIndex -= 1;
    textEl.textContent = current.slice(0, Math.max(0, charIndex));
    if (charIndex <= 0) {
      deleting = false;
      itemIndex = (itemIndex + 1) % items.length;
      setTimeout(tick, 280);
      return;
    }
    setTimeout(tick, DELETE_MS);
  };

  setTimeout(tick, HOLD_MS);
})();

