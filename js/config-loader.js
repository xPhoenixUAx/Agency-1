(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};

  function getValue(path, source) {
    if (path === "" && source !== undefined) return source;
    if (!path) return undefined;
    return path.split(".").reduce(function (value, key) {
      return value != null ? value[key] : undefined;
    }, source || config);
  }

  function stringValue(value) {
    if (value == null) return "";
    return String(value).replace(/\{\{\s*([\w.-]+)\s*\}\}/g, function (match, path) {
      var replacement = getValue(path);
      return replacement == null || typeof replacement === "object" ? match : String(replacement);
    });
  }

  function setTextBindings(root) {
    root.querySelectorAll("[data-config]").forEach(function (element) {
      var value = getValue(element.dataset.config);
      if (value !== undefined && !Array.isArray(value) && typeof value !== "object") {
        element.textContent = stringValue(value);
      }
    });
  }

  function setAttributeBindings(root) {
    [
      ["data-config-href", "href"], ["data-config-action", "action"], ["data-config-src", "src"],
      ["data-config-alt", "alt"], ["data-config-content", "content"],
      ["data-config-value", "value"], ["data-config-placeholder", "placeholder"],
      ["data-config-values", "data-values"], ["data-config-x-labels", "data-x-labels"],
      ["data-config-y-labels", "data-y-labels"], ["data-config-center-label", "data-center-label"]
    ].forEach(function (binding) {
      root.querySelectorAll("[" + binding[0] + "]").forEach(function (element) {
        var value = getValue(element.getAttribute(binding[0]));
        if (value !== undefined && value !== "") element.setAttribute(binding[1], stringValue(value));
      });
    });
  }

  function bindListItem(fragment, item) {
    fragment.querySelectorAll("[data-config-item]").forEach(function (element) {
      var value = getValue(element.dataset.configItem, item);
      if (value !== undefined) element.textContent = stringValue(value);
    });

    [
      ["data-config-item-href", "href"], ["data-config-item-src", "src"],
      ["data-config-item-alt", "alt"], ["data-config-item-value", "value"],
      ["data-config-item-category", "data-case-category"], ["data-config-item-id", "data-case-id"],
      ["data-config-item-values", "data-values"], ["data-config-item-icon", "data-icon"]
    ].forEach(function (binding) {
      fragment.querySelectorAll("[" + binding[0] + "]").forEach(function (element) {
        var value = getValue(element.getAttribute(binding[0]), item);
        if (value !== undefined) element.setAttribute(binding[1], stringValue(value));
      });
    });
  }

  function setListBindings(root) {
    root.querySelectorAll("[data-config-list]").forEach(function (container) {
      if (container.dataset.configBound === "true") return;
      var items = getValue(container.dataset.configList);
      var template = container.querySelector(":scope > template");
      if (!Array.isArray(items) || !template) return;
      items.forEach(function (item) {
        var fragment = template.content.cloneNode(true);
        bindListItem(fragment, item);
        container.appendChild(fragment);
      });
      container.dataset.configBound = "true";
    });
  }

  function setOptionBindings(root) {
    root.querySelectorAll("[data-config-options]").forEach(function (select) {
      if (select.dataset.configBound === "true") return;
      var items = getValue(select.dataset.configOptions);
      if (!Array.isArray(items)) return;
      items.forEach(function (item) {
        var option = document.createElement("option");
        option.value = stringValue(item);
        option.textContent = stringValue(item);
        select.appendChild(option);
      });
      select.dataset.configBound = "true";
    });
  }

  function applyTheme() {
    var colors = config.colors || {};
    var map = { brand: "--brand", brandSecondary: "--brand-2", brandDark: "--brand-dark", success: "--success", warning: "--warning", danger: "--danger" };
    Object.keys(map).forEach(function (key) {
      if (colors[key]) document.documentElement.style.setProperty(map[key], colors[key]);
    });
  }

  function applySeo() {
    var pageKey = document.body ? document.body.dataset.page : "";
    var seo = getValue("seo.pages." + pageKey);
    if (!seo) return;
    if (seo.title) document.title = stringValue(seo.title);
    var description = document.querySelector('meta[name="description"]');
    if (description && seo.description) description.setAttribute("content", stringValue(seo.description));
  }

  function applyFavicon() {
    var faviconPath = getValue("brand.favicon");
    if (!faviconPath) return;
    var favicon = document.querySelector('link[rel~="icon"]') || document.createElement("link");
    favicon.rel = "icon";
    favicon.href = faviconPath;
    if (!favicon.parentNode) document.head.appendChild(favicon);
  }

  function applyUtilities(root) {
    root.querySelectorAll("[data-current-year]").forEach(function (element) { element.textContent = String(new Date().getFullYear()); });
    root.querySelectorAll("[data-config-hide-empty]").forEach(function (element) {
      var value = getValue(element.dataset.configHideEmpty);
      element.hidden = !value;
    });
  }

  function bind(root) {
    var scope = root || document;
    setTextBindings(scope);
    setAttributeBindings(scope);
    setListBindings(scope);
    setOptionBindings(scope);
    applyUtilities(scope);
  }

  function init() {
    applyTheme();
    bind(document);
    applySeo();
    applyFavicon();
    window.SiteConfig = { get: getValue, format: stringValue, bind: bind, data: config };
    document.dispatchEvent(new CustomEvent("siteconfigready", { detail: config }));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
