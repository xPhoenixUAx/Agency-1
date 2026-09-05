(function () {
  "use strict";

  var cookieName = "cookie_consent";
  var cookieVersion = "v1";
  var maxAge = 60 * 60 * 24 * 180;
  var state = readConsent();

  function readConsent() {
    var match = document.cookie.split("; ").find(function (item) { return item.indexOf(cookieName + "=") === 0; });
    if (!match) return null;
    var value = decodeURIComponent(match.slice(cookieName.length + 1));
    var parsed = value.match(/^v1\|analytics:([01])\|advertising:([01])$/);
    if (!parsed) return null;
    return { essential: true, analytics: parsed[1] === "1", advertising: parsed[2] === "1" };
  }

  function publishConsent() {
    var current = state || { essential: true, analytics: false, advertising: false };
    document.documentElement.dataset.analyticsConsent = current.analytics ? "granted" : "denied";
    document.documentElement.dataset.advertisingConsent = current.advertising ? "granted" : "denied";
    window.dispatchEvent(new CustomEvent("siteconsentchange", { detail: Object.assign({}, current) }));
  }

  function writeConsent(analytics, advertising) {
    state = { essential: true, analytics: Boolean(analytics), advertising: Boolean(advertising) };
    var value = cookieVersion + "|analytics:" + (state.analytics ? "1" : "0") + "|advertising:" + (state.advertising ? "1" : "0");
    var secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = cookieName + "=" + encodeURIComponent(value) + "; Path=/; Max-Age=" + maxAge + "; SameSite=Lax" + secure;
    publishConsent();
  }

  function renderBanner() {
    var host = document.createElement("div");
    host.className = "cookie-banner";
    host.hidden = true;
    host.innerHTML =
      '<section class="cookie-banner__panel" role="dialog" aria-modal="false" aria-labelledby="cookie-title" aria-describedby="cookie-description">' +
        '<div class="cookie-banner__copy">' +
          '<p class="cookie-banner__eyebrow">Privacy controls</p>' +
          '<h2 id="cookie-title">Your privacy choices</h2>' +
          '<p id="cookie-description">We use an essential cookie for form security and your consent choice. Optional analytics and advertising technologies run only when enabled.</p>' +
          '<a href="/cookie-policy.html">Read Cookie Policy</a>' +
        '</div>' +
        '<div class="cookie-banner__preferences" data-cookie-preferences hidden>' +
          '<label><span><strong>Essential</strong><small>Form security and consent storage</small></span><input type="checkbox" checked disabled></label>' +
          '<label><span><strong>Analytics</strong><small>Website usage and performance measurement</small></span><input type="checkbox" data-consent-analytics></label>' +
          '<label><span><strong>Advertising</strong><small>Conversion measurement and remarketing</small></span><input type="checkbox" data-consent-advertising></label>' +
        '</div>' +
        '<div class="cookie-banner__actions">' +
          '<button class="button button--primary" type="button" data-cookie-accept>Accept all</button>' +
          '<button class="button button--secondary" type="button" data-cookie-reject>Reject optional</button>' +
          '<button class="cookie-banner__manage" type="button" data-cookie-manage aria-expanded="false">Manage preferences</button>' +
          '<button class="button button--primary cookie-banner__save" type="button" data-cookie-save hidden>Save preferences</button>' +
        '</div>' +
      '</section>';
    document.body.appendChild(host);
    return host;
  }

  function init() {
    var banner = renderBanner();
    var preferences = banner.querySelector("[data-cookie-preferences]");
    var manage = banner.querySelector("[data-cookie-manage]");
    var save = banner.querySelector("[data-cookie-save]");
    var analytics = banner.querySelector("[data-consent-analytics]");
    var advertising = banner.querySelector("[data-consent-advertising]");

    function open() {
      var current = state || { analytics: false, advertising: false };
      analytics.checked = current.analytics;
      advertising.checked = current.advertising;
      preferences.hidden = true;
      save.hidden = true;
      manage.hidden = false;
      manage.setAttribute("aria-expanded", "false");
      banner.hidden = false;
      requestAnimationFrame(function () { banner.classList.add("is-visible"); });
    }

    function close() {
      banner.classList.remove("is-visible");
      window.setTimeout(function () { banner.hidden = true; }, 220);
    }

    banner.querySelector("[data-cookie-accept]").addEventListener("click", function () { writeConsent(true, true); close(); });
    banner.querySelector("[data-cookie-reject]").addEventListener("click", function () { writeConsent(false, false); close(); });
    manage.addEventListener("click", function () {
      preferences.hidden = false;
      save.hidden = false;
      manage.hidden = true;
      manage.setAttribute("aria-expanded", "true");
      analytics.focus();
    });
    save.addEventListener("click", function () { writeConsent(analytics.checked, advertising.checked); close(); });
    document.addEventListener("click", function (event) {
      var trigger = event.target.closest("[data-cookie-settings]");
      if (!trigger) return;
      event.preventDefault();
      open();
    });

    window.SiteConsent = {
      get: function () { return state ? Object.assign({}, state) : null; },
      has: function (category) { return category === "essential" || Boolean(state && state[category]); },
      open: open
    };

    publishConsent();
    if (!state) open();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
