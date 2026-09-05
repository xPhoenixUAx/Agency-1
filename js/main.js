(function () {
  "use strict";

  var iconPaths = {
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    "circle-dollar": '<circle cx="12" cy="12" r="9"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 6v12"/>',
    gauge: '<path d="M20.4 15a9 9 0 1 0-16.8 0"/><path d="M12 13l3.5-3.5"/><path d="M7.5 18.5h9"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    "shopping-bag": '<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
    "map-pin": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    "shopping-cart": '<circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M3 4h2l2.7 11h10.8l2-7H6"/>',
    chart: '<path d="M4 19V5M4 19h16"/><path d="m7 15 4-4 3 2 5-6"/>',
    workflow: '<rect x="3" y="3" width="6" height="6" rx="2"/><rect x="15" y="15" width="6" height="6" rx="2"/><path d="M9 6h4a4 4 0 0 1 4 4v5M15 18h-4a4 4 0 0 1-4-4V9"/>',
    "file-chart": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 17v-4M12 17v-7M16 17v-2"/>',
    activity: '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    refresh: '<path d="M20 6v5h-5M4 18v-5h5"/><path d="M18 9a7 7 0 0 0-12-3L4 8M6 15a7 7 0 0 0 12 3l2-2"/>',
    route: '<circle cx="5" cy="18" r="2"/><circle cx="19" cy="6" r="2"/><path d="M7 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3h1"/>',
    sparkles: '<path d="m12 3 1.1 3.1L16 7.2l-2.9 1.1L12 11l-1.1-2.7L8 7.2l2.9-1.1L12 3ZM5 13l.9 2.1L8 16l-2.1.9L5 19l-.9-2.1L2 16l2.1-.9L5 13ZM19 12l.9 2.1L22 15l-2.1.9L19 18l-.9-2.1L16 15l2.1-.9L19 12Z"/>',
    "scan-search": '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="11" cy="11" r="4"/><path d="m14 14 3 3"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z"/>',
    smartphone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    "badge-check": '<path d="M12 2.5 15 4l3.3.2.8 3.2 2.4 2.3-1.5 3 .2 3.3-3.2.8L15 20l-3 1.5L9 20l-3.3-.2-.8-3.2L2.5 14l1.5-3-.2-3.3L7 7l2-2.8L12 2.5Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
    "mouse-pointer": '<path d="m4 3 7.5 17 2.2-6.3L20 11.5 4 3Z"/><path d="m14 14 4 4"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v2M21 12h-2M12 21v-2M3 12h2"/>',
    'target-arrow': '<circle cx="10" cy="14" r="7"/><circle cx="10" cy="14" r="3"/><path d="M10 14 21 3M16 3h5v5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    "arrow-up-right": '<path d="M7 17 17 7M7 7h10v10"/>',
    "arrow-up": '<path d="M12 19V5M6 11l6-6 6 6"/>',
    "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    "chevron-down": '<path d="m7 10 5 5 5-5"/>'
    ,calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>'
  };

  function hydrateIcons(root) {
    (root || document).querySelectorAll("[data-icon]").forEach(function (element) {
      if (element.dataset.iconRendered === "true") return;
      var paths = iconPaths[element.dataset.icon] || iconPaths.sparkles;
      element.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + paths + '</svg>';
      element.dataset.iconRendered = "true";
    });
  }

  function hydrateTitleAccents(root) {
    if (!window.SiteConfig) return;
    (root || document).querySelectorAll("[data-accent-config]").forEach(function (heading) {
      var accent = window.SiteConfig.get(heading.dataset.accentConfig);
      var fullText = heading.textContent;
      if (!accent || !fullText || heading.dataset.accentRendered === "true") return;
      var start = fullText.lastIndexOf(String(accent));
      if (start < 0) return;
      heading.textContent = "";
      heading.appendChild(document.createTextNode(fullText.slice(0, start)));
      var accentSpan = document.createElement("span");
      accentSpan.className = "text-accent";
      accentSpan.textContent = fullText.slice(start, start + String(accent).length);
      heading.appendChild(accentSpan);
      heading.appendChild(document.createTextNode(fullText.slice(start + String(accent).length)));
      heading.dataset.accentRendered = "true";
    });
  }

  function initSignalMarquee(root) {
    (root || document).querySelectorAll("[data-signal-marquee]").forEach(function (marquee) {
      if (marquee.dataset.marqueeReady === "true") return;

      var track = marquee.querySelector("[data-signal-track]");
      var source = track && track.querySelector(".signal-strip");
      if (!track || !source) return;

      var clone = source.cloneNode(true);
      clone.removeAttribute("aria-label");
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach(function (element) {
        element.tabIndex = -1;
      });

      track.appendChild(clone);
      marquee.dataset.marqueeReady = "true";
    });
  }

  function renderHeader() {
    var host = document.querySelector("[data-site-header]");
    if (!host || host.dataset.rendered) return;
    host.className = "site-header-shell";
    host.innerHTML = '<header class="site-header" data-header>' +
      '<div class="site-header__inner">' +
        '<a class="site-brand" href="/index.html" aria-label="Home"><span class="site-logo brand-lockup"><img alt="" data-config-src="brand.logo" width="32" height="44"><strong data-config="brand.name"></strong></span><small data-config="brand.tagline"></small></a>' +
        '<nav class="site-nav" aria-label="Primary navigation">' +
          '<div class="nav-services" data-nav-services>' +
            '<button class="nav-services__toggle" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="nav-services-menu" data-nav-services-toggle><span>Services</span><span data-icon="chevron-down" aria-hidden="true"></span></button>' +
            '<div class="nav-services__menu" id="nav-services-menu" aria-label="Services" aria-hidden="true" data-nav-services-menu>' +
              '<div class="nav-services__links">' +
                '<a href="/paid-media.html" data-config-href="pages.services.groups.paidMedia.url"><strong data-config="pages.services.groups.paidMedia.title">Paid Media</strong></a>' +
                '<a href="/lead-generation-measurement.html" data-config-href="pages.services.groups.leadMeasurement.url"><strong data-config="pages.services.groups.leadMeasurement.title">Lead Generation &amp; Measurement</strong></a>' +
                '<a href="/automation-reporting.html" data-config-href="pages.services.groups.automationReporting.url"><strong data-config="pages.services.groups.automationReporting.title">Automation &amp; Reporting</strong></a>' +
              '</div>' +
              '<a class="nav-services__all" href="/services.html"><span>All services</span><span data-icon="arrow-right" aria-hidden="true"></span></a>' +
            '</div>' +
          '</div>' +
          '<div class="site-nav__primary" data-config-list="navigation"><template><a data-config-item="label" data-config-item-href="url"></a></template></div>' +
        '</nav>' +
        '<div class="site-header__actions">' +
          '<a class="button button--primary button--small site-header__cta site-header__cta--audit" data-config-href="cta.primary.url"><span data-config="cta.primary.shortLabel">Get Free Audit</span></a>' +
          '<button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu" data-menu-open><span class="menu-toggle__icon" aria-hidden="true"></span></button>' +
        '</div>' +
      '</div>' +
    '</header>' +
    '<div class="mobile-menu" id="mobile-menu" aria-hidden="true" data-mobile-menu>' +
      '<div class="mobile-menu__top">' +
        '<a class="mobile-menu__brand" href="/index.html" aria-label="Home"><span class="mobile-menu__logo brand-lockup"><img alt="" data-config-src="brand.logo" width="32" height="44"><strong data-config="brand.name"></strong></span><small data-config="brand.tagline"></small></a>' +
        '<button class="mobile-menu__close" type="button" aria-label="Close menu" data-menu-close><span class="mobile-menu__close-icon" aria-hidden="true"></span></button>' +
      '</div>' +
      '<div class="mobile-menu__services"><p>Services</p><a href="/paid-media.html" data-config-href="pages.services.groups.paidMedia.url" tabindex="-1"><span data-config="pages.services.groups.paidMedia.title">Paid Media</span><span data-icon="arrow-right" aria-hidden="true"></span></a><a href="/lead-generation-measurement.html" data-config-href="pages.services.groups.leadMeasurement.url" tabindex="-1"><span data-config="pages.services.groups.leadMeasurement.title">Lead Generation &amp; Measurement</span><span data-icon="arrow-right" aria-hidden="true"></span></a><a href="/automation-reporting.html" data-config-href="pages.services.groups.automationReporting.url" tabindex="-1"><span data-config="pages.services.groups.automationReporting.title">Automation &amp; Reporting</span><span data-icon="arrow-right" aria-hidden="true"></span></a><a class="mobile-menu__all-services" href="/services.html" tabindex="-1"><span>All services</span><span data-icon="arrow-right" aria-hidden="true"></span></a></div>' +
      '<nav class="mobile-menu__nav" aria-label="Mobile navigation" data-config-list="navigation"><template><a data-config-item="label" data-config-item-href="url" tabindex="-1"></a></template></nav>' +
      '<div class="mobile-menu__bottom"><p data-config="pages.home.hero.trustLine">Built for growth teams.</p><div class="mobile-menu__actions"><a class="button button--primary" data-config-href="cta.primary.url" tabindex="-1"><span data-config="cta.primary.shortLabel">Get Free Audit</span></a></div></div>' +
    '</div>';
    host.dataset.rendered = "true";
  }

  function renderFooter() {
    var host = document.querySelector("[data-site-footer]");
    if (!host || host.dataset.rendered) return;
    host.className = "site-footer";
    host.innerHTML = '<div class="container site-footer__main">' +
      '<div class="site-footer__brand"><a class="brand-lockup" href="/index.html" aria-label="Home"><img alt="" data-config-src="brand.logo" width="32" height="44"><strong data-config="brand.name"></strong></a><p data-config="footer.description">Performance advertising connected to outcomes.</p></div>' +
      '<div class="site-footer__group"><h2 data-config="footer.servicesTitle">Services</h2><nav class="site-footer__links" aria-label="Footer services" data-config-list="footer.services"><template><a data-config-item="label" data-config-item-href="url"></a></template></nav></div>' +
      '<div class="site-footer__group"><h2 data-config="footer.companyTitle">Company</h2><nav class="site-footer__links" aria-label="Footer company" data-config-list="footer.company"><template><a data-config-item="label" data-config-item-href="url"></a></template></nav></div>' +
      '<div class="site-footer__group site-footer__contact"><h2 data-config="footer.contactTitle">Get in touch</h2><p class="text-soft" data-config="footer.contactText">Tell us what you want to improve and we’ll reply through the secure enquiry process.</p><a class="button button--secondary button--small" data-config="cta.primary.shortLabel" data-config-href="cta.primary.url">Get Free Audit</a></div>' +
    '</div>' +
    '<div class="container site-footer__bottom"><span>© <span data-current-year></span> <span data-config="brand.copyrightHolder"></span>. <span data-config="footer.copyright">All rights reserved.</span></span><nav class="site-footer__legal" aria-label="Legal"><a data-config="legal.privacyLabel" data-config-href="legal.privacyUrl">Privacy Policy</a><a data-config="legal.cookiesLabel" data-config-href="legal.cookiesUrl">Cookie Policy</a><button type="button" data-cookie-settings>Cookie settings</button><a data-config="legal.termsLabel" data-config-href="legal.termsUrl">Terms of Service</a></nav></div>';
    host.dataset.rendered = "true";
  }

  function renderLegal() {
    var articleHost = document.querySelector("[data-legal-article]");
    var tocHost = document.querySelector("[data-legal-toc]");
    if (!articleHost || !tocHost || !window.SiteConfig || articleHost.dataset.rendered) return;
    var pageKey = document.body.dataset.page;
    var sections = window.SiteConfig.get("pages." + pageKey + ".sections");
    if (!Array.isArray(sections)) return;
    function legalText(value) {
      return window.SiteConfig.format ? window.SiteConfig.format(value) : String(value == null ? "" : value);
    }
    sections.forEach(function (section, index) {
      var link = document.createElement("a");
      link.href = "#" + section.id;
      link.textContent = legalText(section.title);
      if (index === 0) link.setAttribute("aria-current", "location");
      tocHost.appendChild(link);

      var wrapper = document.createElement("section");
      wrapper.id = section.id;
      wrapper.className = "legal-section";
      var heading = document.createElement("h2");
      heading.id = section.id + "-title";
      heading.textContent = legalText(section.title);
      wrapper.setAttribute("aria-labelledby", heading.id);
      wrapper.appendChild(heading);
      (section.paragraphs || []).forEach(function (copy) {
        var paragraph = document.createElement("p");
        paragraph.textContent = legalText(copy);
        wrapper.appendChild(paragraph);
      });
      if (Array.isArray(section.bullets) && section.bullets.length) {
        var list = document.createElement("ul");
        section.bullets.forEach(function (copy) {
          var item = document.createElement("li"); item.textContent = legalText(copy); list.appendChild(item);
        });
        wrapper.appendChild(list);
      }
      if (section.table && Array.isArray(section.table.headers) && Array.isArray(section.table.rows)) {
        var tableRegion = document.createElement("div");
        tableRegion.className = "legal-table-wrap";
        tableRegion.tabIndex = 0;
        tableRegion.setAttribute("role", "region");
        tableRegion.setAttribute("aria-label", section.table.caption || section.title);
        var table = document.createElement("table");
        table.className = "legal-table";
        var caption = document.createElement("caption");
        caption.className = "sr-only";
        caption.textContent = section.table.caption || section.title;
        table.appendChild(caption);
        var head = document.createElement("thead");
        var headRow = document.createElement("tr");
        section.table.headers.forEach(function (copy) {
          var cell = document.createElement("th");
          cell.scope = "col";
          cell.textContent = legalText(copy);
          headRow.appendChild(cell);
        });
        head.appendChild(headRow);
        table.appendChild(head);
        var body = document.createElement("tbody");
        section.table.rows.forEach(function (row) {
          var bodyRow = document.createElement("tr");
          row.forEach(function (copy) {
            var cell = document.createElement("td");
            cell.textContent = legalText(copy);
            bodyRow.appendChild(cell);
          });
          body.appendChild(bodyRow);
        });
        table.appendChild(body);
        tableRegion.appendChild(table);
        wrapper.appendChild(tableRegion);
      }
      if (Array.isArray(section.links) && section.links.length) {
        var resources = document.createElement("ul");
        resources.className = "legal-resource-links";
        section.links.forEach(function (resource) {
          var resourceItem = document.createElement("li");
          var resourceLink = document.createElement("a");
          resourceLink.href = resource.url;
          resourceLink.textContent = legalText(resource.label);
          if (/^https?:\/\//i.test(resource.url)) {
            resourceLink.target = "_blank";
            resourceLink.rel = "noopener noreferrer";
          }
          resourceItem.appendChild(resourceLink);
          resources.appendChild(resourceItem);
        });
        wrapper.appendChild(resources);
      }
      articleHost.appendChild(wrapper);

      if (index === 0) {
        var note = document.createElement("aside");
        note.className = "notice legal-notice";
        var badge = document.createElement("span"); badge.className = "icon-badge"; badge.dataset.icon = "info";
        var body = document.createElement("div");
        var strong = document.createElement("strong"); strong.dataset.config = "pages." + pageKey + ".noticeTitle";
        var paragraph = document.createElement("p"); paragraph.dataset.config = "pages." + pageKey + ".noticeText";
        body.appendChild(strong); body.appendChild(paragraph); note.appendChild(badge); note.appendChild(body);
        articleHost.appendChild(note);
      }
    });
    var contact = document.createElement("aside");
    contact.className = "notice legal-contact";
    var contactBadge = document.createElement("span"); contactBadge.className = "icon-badge"; contactBadge.dataset.icon = "mail";
    var contactBody = document.createElement("div");
    var contactTitle = document.createElement("strong"); contactTitle.textContent = "Questions about this page?";
    var contactText = document.createElement("p"); contactText.textContent = "Send your question through the ";
    var contactLink = document.createElement("a"); contactLink.dataset.configHref = "cta.primary.url"; contactLink.textContent = "contact form";
    contactText.appendChild(contactLink); contactText.appendChild(document.createTextNode(".")); contactBody.appendChild(contactTitle); contactBody.appendChild(contactText); contact.appendChild(contactBadge); contact.appendChild(contactBody);
    articleHost.appendChild(contact);
    articleHost.dataset.rendered = "true";
  }

  function clearAccordionAnimation(panel) {
    panel.style.removeProperty("overflow");
    panel.style.removeProperty("height");
    panel.style.removeProperty("opacity");
    panel.style.removeProperty("padding-top");
    panel.style.removeProperty("padding-bottom");
    panel._accordionAnimation = null;
  }

  function setAccordionState(button, panel, expanded) {
    button.setAttribute("aria-expanded", String(expanded));
    if (!panel) return;

    if (panel._accordionAnimation) {
      panel._accordionAnimation.onfinish = null;
      panel._accordionAnimation.oncancel = null;
      panel._accordionAnimation.cancel();
      clearAccordionAnimation(panel);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof panel.animate !== "function") {
      panel.hidden = !expanded;
      return;
    }

    if (expanded) panel.hidden = false;

    var styles = window.getComputedStyle(panel);
    var fullHeight = panel.scrollHeight;
    var paddingTop = styles.paddingTop;
    var paddingBottom = styles.paddingBottom;
    panel.style.overflow = "hidden";

    var animation = panel.animate(
      expanded
        ? [
            { height: "0px", paddingTop: "0px", paddingBottom: "0px", opacity: 0 },
            { height: fullHeight + "px", paddingTop: paddingTop, paddingBottom: paddingBottom, opacity: 1 }
          ]
        : [
            { height: fullHeight + "px", paddingTop: paddingTop, paddingBottom: paddingBottom, opacity: 1 },
            { height: "0px", paddingTop: "0px", paddingBottom: "0px", opacity: 0 }
          ],
      { duration: 360, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    );

    panel._accordionAnimation = animation;
    animation.onfinish = function () {
      if (panel._accordionAnimation !== animation) return;
      if (!expanded) panel.hidden = true;
      clearAccordionAnimation(panel);
    };
    animation.oncancel = function () {
      if (panel._accordionAnimation !== animation) return;
      clearAccordionAnimation(panel);
    };
  }

  function initAccordions(root) {
    (root || document).querySelectorAll("[data-accordion-button]").forEach(function (button) {
      if (button.dataset.bound) return;
      button.addEventListener("click", function () {
        var expanded = button.getAttribute("aria-expanded") === "true";
        var panel = document.getElementById(button.getAttribute("aria-controls"));
        setAccordionState(button, panel, !expanded);
      });
      button.dataset.bound = "true";
    });
  }

  function initCapabilityAccordion(root) {
    var cards = Array.from((root || document).querySelectorAll("[data-capability-card]"));
    if (!cards.length) return;
    var mobileQuery = window.matchMedia("(max-width: 767px)");

    function getParts(card) {
      return {
        button: card.querySelector("[data-capability-toggle]"),
        panel: card.querySelector("[data-capability-panel], .capability-card__content, .capability-product-flow")
      };
    }

    function setCardState(card, expanded) {
      var parts = getParts(card);
      if (!parts.button || !parts.panel) return;
      var panelId = parts.button.getAttribute("aria-controls");
      if (panelId && !parts.panel.id) parts.panel.id = panelId;
      parts.button.setAttribute("aria-expanded", String(expanded));
      var title = card.querySelector("h3");
      if (title) parts.button.setAttribute("aria-label", (expanded ? "Collapse " : "Expand ") + title.textContent + " details");
      card.classList.toggle("is-expanded", expanded);
      parts.panel.hidden = mobileQuery.matches ? !expanded : false;
    }

    cards.forEach(function (card) {
      var parts = getParts(card);
      if (!parts.button || !parts.panel || parts.button.dataset.bound) return;
      parts.button.addEventListener("click", function () {
        if (!mobileQuery.matches) return;
        var expand = parts.button.getAttribute("aria-expanded") !== "true";
        cards.forEach(function (item) { setCardState(item, item === card ? expand : false); });
        if (expand) requestAnimationFrame(function () { window.dispatchEvent(new Event("resize")); });
      });
      parts.button.dataset.bound = "true";
    });

    function setPresentation() {
      if (mobileQuery.matches) {
        cards.forEach(function (card, index) { setCardState(card, index === 0); });
      } else {
        cards.forEach(function (card) { setCardState(card, true); });
      }
    }

    setPresentation();
    if (typeof mobileQuery.addEventListener === "function") mobileQuery.addEventListener("change", setPresentation);
  }

  function initLegalToc() {
    var toc = document.querySelector(".legal-toc");
    if (!toc) return;
    var desktopQuery = window.matchMedia("(min-width: 1200px)");
    function setDefaultState() { toc.open = desktopQuery.matches; }
    setDefaultState();
    if (typeof desktopQuery.addEventListener === "function") desktopQuery.addEventListener("change", setDefaultState);
  }

  function initTabs() {
    document.querySelectorAll("[data-tabs]").forEach(function (tabs) {
      var buttons = Array.from(tabs.querySelectorAll('[role="tab"]'));
      var panels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
      var panelHost = tabs.querySelector("[data-tab-panels]");
      var tabList = tabs.querySelector('[role="tablist"]');
      if (!buttons.length) return;
      function activate(button, focus) {
        var accordionMode = tabs.dataset.mode === "accordion";
        buttons.forEach(function (item) {
          var active = item === button;
          if (accordionMode) item.removeAttribute("aria-selected");
          else item.setAttribute("aria-selected", String(active));
          item.setAttribute("aria-expanded", String(active));
          item.tabIndex = accordionMode ? 0 : (active ? 0 : -1);
        });
        panels.forEach(function (panel) { panel.hidden = panel.id !== button.getAttribute("aria-controls"); });
        if (focus) button.focus();
      }
      buttons.forEach(function (button, index) {
        button.addEventListener("click", function () { activate(button, false); });
        button.addEventListener("keydown", function (event) {
          if (tabs.dataset.mode === "accordion") return;
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
          event.preventDefault();
          var direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
          activate(buttons[(index + direction + buttons.length) % buttons.length], true);
        });
      });
      activate(buttons.find(function (button) { return button.getAttribute("aria-selected") === "true"; }) || buttons[0], false);
      var mobileQuery = window.matchMedia("(max-width: 767px)");
      function setPresentation() {
        if (mobileQuery.matches) {
          tabs.dataset.mode = "accordion";
          if (tabList) tabList.removeAttribute("role");
          buttons.forEach(function (button) { button.removeAttribute("role"); button.removeAttribute("aria-selected"); button.tabIndex = 0; });
          panels.forEach(function (panel) { panel.setAttribute("role", "region"); });
          buttons.forEach(function (button) {
            var panel = panels.find(function (item) { return item.id === button.getAttribute("aria-controls"); });
            if (panel) button.insertAdjacentElement("afterend", panel);
          });
        } else {
          tabs.dataset.mode = "tabs";
          if (tabList) tabList.setAttribute("role", "tablist");
          buttons.forEach(function (button) { button.setAttribute("role", "tab"); });
          panels.forEach(function (panel) { panel.setAttribute("role", "tabpanel"); });
          if (panelHost) panels.forEach(function (panel) { panelHost.appendChild(panel); });
          activate(buttons.find(function (button) { return button.getAttribute("aria-expanded") === "true"; }) || buttons[0], false);
        }
      }
      setPresentation();
      if (typeof mobileQuery.addEventListener === "function") mobileQuery.addEventListener("change", setPresentation);
    });
  }

  function init() {
    renderHeader();
    renderFooter();
    renderLegal();
    if (window.SiteConfig) window.SiteConfig.bind(document);
    hydrateTitleAccents(document);
    initSignalMarquee(document);
    hydrateIcons(document);
    initAccordions(document);
    initCapabilityAccordion(document);
    initLegalToc();
    initTabs();
    document.dispatchEvent(new CustomEvent("sitecomponentsready"));
    if (window.location.hash) {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          var target = document.getElementById(window.location.hash.slice(1));
          if (target) target.scrollIntoView({ block: "start", inline: "nearest" });
        });
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
