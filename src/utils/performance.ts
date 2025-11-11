// Performance optimization utilities

// Defer non-critical CSS
export const deferStyles = () => {
  const loadDeferredStyles = () => {
    const addStylesNode = document.getElementById('deferred-styles');
    if (addStylesNode) {
      const replacement = document.createElement('div');
      replacement.innerHTML = addStylesNode.textContent || '';
      document.body.appendChild(replacement);
      addStylesNode.parentElement?.removeChild(addStylesNode);
    }
  };

  const raf = window.requestAnimationFrame || window.setTimeout;
  raf(() => {
    window.addEventListener('load', loadDeferredStyles);
  });
};

// Preload critical images
export const preloadImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Lazy load images with Intersection Observer
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img.lazy').forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

// Reduce JavaScript execution time
export const deferScripts = () => {
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach((script) => {
    const newScript = document.createElement('script');
    newScript.src = script.getAttribute('src') || '';
    newScript.defer = true;
    document.body.appendChild(newScript);
  });
};
