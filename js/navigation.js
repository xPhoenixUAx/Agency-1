(function () {
  "use strict";

  function init() {
    var header = document.querySelector("[data-header]");
    var menu = document.querySelector("[data-mobile-menu]");
    var openButton = document.querySelector("[data-menu-open]");
    var closeButton = document.querySelector("[data-menu-close]");
    if (!header || !menu || !openButton || !closeButton) return;

    var previousFocus = null;
    var focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    function setHeaderState() { header.classList.toggle("is-scrolled", window.scrollY > 28); }

    function openMenu() {
      previousFocus = document.activeElement;
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
      openButton.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
      menu.querySelectorAll('a[tabindex="-1"]').forEach(function (link) { link.removeAttribute("tabindex"); });
      closeButton.focus();
      requestAnimationFrame(function () { closeButton.focus(); });
    }

    function closeMenu() {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      openButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
      menu.querySelectorAll(".mobile-menu__nav a, .mobile-menu__bottom a").forEach(function (link) { link.tabIndex = -1; });
      if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
    }

    openButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    menu.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (event) {
      if (!menu.classList.contains("is-open")) return;
      if (event.key === "Escape") { event.preventDefault(); closeMenu(); return; }
      if (event.key !== "Tab") return;
      var focusable = Array.from(menu.querySelectorAll(focusableSelector)).filter(function (element) { return !element.hidden; });
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });

    function setActiveLinks() {
      var currentPath = window.location.pathname.replace(/\/$/, "/index.html");
      document.querySelectorAll(".site-nav a, .mobile-menu__nav a").forEach(function (link) {
        try {
          var linkUrl = new URL(link.href, window.location.origin);
          var linkPath = linkUrl.pathname.replace(/\/$/, "/index.html");
          var matchesPage = linkPath === currentPath;
          var matchesAnchor = !linkUrl.hash || linkUrl.hash === window.location.hash;
          if (matchesPage && matchesAnchor) link.setAttribute("aria-current", "page");
        } catch (error) { /* Leave malformed optional links inactive. */ }
      });
    }

    setHeaderState();
    setActiveLinks();
    window.addEventListener("scroll", setHeaderState, { passive: true });
  }

  if (document.readyState === "loading") document.addEventListener("sitecomponentsready", init, { once: true });
  else init();
})();
