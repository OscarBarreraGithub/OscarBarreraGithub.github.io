document.addEventListener('DOMContentLoaded', () => {
  const img         = document.getElementById('bh-scrub-img');
  const totalFrames = 44;
  const cacheRadius = 10;
  const cache       = new Set();

  function frameUrl(i) {
    const idx = String(i).padStart(4, '0');
    return `/assets/img/blackhole-frames/FRAME_${idx}.png`;
  }

  function preload(i) {
    if (i < 0 || i >= totalFrames || cache.has(i)) return;
    const pre = new Image();
    pre.src   = frameUrl(i);
    cache.add(i);
  }

  function preloadWindow(center) {
    for (let off = -cacheRadius; off <= cacheRadius; off++) {
      preload(center + off);
    }
  }

  function computeFrame() {
    const scrollY   = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct       = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    return Math.floor(pct * (totalFrames - 1));
  }

  function update() {
    const frame = computeFrame();
    img.src     = frameUrl(frame);
    preloadWindow(frame);
  }

  preloadWindow(0);
  update();

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }
  });
});
