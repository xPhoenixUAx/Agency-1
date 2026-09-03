(function () {
  "use strict";
  function init() {
    var elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach(function (element) { element.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    elements.forEach(function (element, index) {
      element.classList.add("is-pending");
      element.style.setProperty("--reveal-delay", String(Math.min(index % 5, 4) * 70) + "ms");
      observer.observe(element);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
