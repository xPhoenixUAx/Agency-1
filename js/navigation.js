(function () {
  "use strict";

  function init() {
    var header = document.querySelector("[data-header]");
    var menu = document.querySelector("[data-mobile-menu]");
    var openButton = document.querySelector("[data-menu-open]");
    var closeButton = document.querySelector("[data-menu-close]");
    if (!header || !menu || !openButton || !closeButton) return;

    var previousFocus = null;
    var servicesDropdown = document.querySelector("[data-nav-services]");
    var servicesButton = document.querySelector("[data-nav-services-toggle]");
    var servicesMenu = document.querySelector("[data-nav-services-menu]");
    var servicesCloseTimer = 0;
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
      menu.querySelectorAll(".mobile-menu__services a, .mobile-menu__nav a, .mobile-menu__bottom a").forEach(function (link) { link.tabIndex = -1; });
      if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
    }

    function setServicesOpen(open, focusFirstLink) {
      if (!servicesDropdown || !servicesButton || !servicesMenu) return;
      window.clearTimeout(servicesCloseTimer);
      servicesDropdown.classList.toggle("is-open", open);
      servicesButton.setAttribute("aria-expanded", String(open));
      servicesMenu.setAttribute("aria-hidden", String(!open));
      if (open && focusFirstLink) {
        var firstLink = servicesMenu.querySelector("a[href]");
        if (firstLink) firstLink.focus();
      }
    }

    function scheduleServicesClose() {
      window.clearTimeout(servicesCloseTimer);
      servicesCloseTimer = window.setTimeout(function () { setServicesOpen(false, false); }, 140);
    }

    openButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    menu.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });

    if (servicesDropdown && servicesButton && servicesMenu) {
      servicesButton.addEventListener("click", function () {
        setServicesOpen(servicesButton.getAttribute("aria-expanded") !== "true", false);
      });
      servicesButton.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowDown") return;
        event.preventDefault();
        setServicesOpen(true, true);
      });
      servicesDropdown.addEventListener("focusin", function (event) {
        if (event.target !== servicesButton) setServicesOpen(true, false);
      });
      servicesDropdown.addEventListener("focusout", function (event) {
        if (!servicesDropdown.contains(event.relatedTarget)) scheduleServicesClose();
      });
      servicesMenu.addEventListener("keydown", function (event) {
        var links = Array.from(servicesMenu.querySelectorAll("a[href]"));
        var index = links.indexOf(document.activeElement);
        if (event.key === "Escape") {
          event.preventDefault();
          setServicesOpen(false, false);
          servicesButton.focus();
        } else if ((event.key === "ArrowDown" || event.key === "ArrowUp") && index !== -1) {
          event.preventDefault();
          var direction = event.key === "ArrowDown" ? 1 : -1;
          links[(index + direction + links.length) % links.length].focus();
        }
      });
      document.addEventListener("click", function (event) {
        if (!servicesDropdown.contains(event.target)) setServicesOpen(false, false);
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && servicesButton && servicesButton.getAttribute("aria-expanded") === "true") {
        setServicesOpen(false, false);
        servicesButton.focus();
      }
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
      var servicePaths = ["/services.html", "/paid-media.html", "/lead-generation-measurement.html", "/automation-reporting.html"];
      if (servicesButton) servicesButton.classList.toggle("is-current", servicePaths.indexOf(currentPath) !== -1);
      document.querySelectorAll(".site-nav a, .mobile-menu__services a, .mobile-menu__nav a").forEach(function (link) {
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

    requestAnimationFrame(function () { document.body.classList.add("page-transition-ready"); });

    document.addEventListener("click", function (event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      var link = event.target.closest("a[href]");
      if (!link || link.target || link.hasAttribute("download")) return;
      var destination;
      try { destination = new URL(link.href, window.location.href); } catch (error) { return; }
      if (destination.origin !== window.location.origin || destination.protocol !== window.location.protocol) return;
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) return;
      event.preventDefault();
      document.body.classList.add("is-page-leaving");
      window.setTimeout(function () { window.location.href = destination.href; }, 180);
    });

    window.addEventListener("pageshow", function () { document.body.classList.remove("is-page-leaving"); });
  }

  if (document.readyState === "loading") document.addEventListener("sitecomponentsready", init, { once: true });
  else init();
})();
