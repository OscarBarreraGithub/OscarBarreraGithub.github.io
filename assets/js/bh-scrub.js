document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("bh-scrub-img");
  if (!img) return;

  const totalFrames = 45;
  const cacheRadius = 4;
  const cache = new Set();
  let currentFrame = -1;
  let frameExtension = "png";

  function frameUrl(i) {
    const idx = String(i).padStart(4, "0");
    return `/assets/img/blackhole-frames/FRAME_${idx}.${frameExtension}`;
  }

  function preload(i) {
    if (i < 0 || i >= totalFrames || cache.has(i)) return;
    const pre = new Image();
    pre.decoding = "async";
    pre.src = frameUrl(i);
    cache.add(i);
  }

  function preloadWindow(center) {
    preload(center);
    for (let off = 1; off <= cacheRadius; off++) {
      preload(center - off);
      preload(center + off);
    }
  }

  function computeFrame() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return 0;
    const pct = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
    return Math.floor(pct * (totalFrames - 1));
  }

  function update() {
    const frame = computeFrame();
    if (frame !== currentFrame) {
      currentFrame = frame;
      img.src = frameUrl(frame);
    }
    preloadWindow(frame);
  }

  function supportsWebp() {
    return new Promise((resolve) => {
      const test = new Image();
      test.onload = () => resolve(test.width > 0 && test.height > 0);
      test.onerror = () => resolve(false);
      test.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4TAYAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
    });
  }

  function initialize() {
    const saveData = navigator.connection && navigator.connection.saveData;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    update();

    if (saveData || prefersReducedMotion) {
      return;
    }

    preloadWindow(0);

    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  supportsWebp().then((supported) => {
    frameExtension = supported ? "webp" : "png";
    cache.clear();
    initialize();
  });
});
