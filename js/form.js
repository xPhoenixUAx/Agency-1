(function () {
  "use strict";
  function formConfig() { return window.SITE_CONFIG && window.SITE_CONFIG.form ? window.SITE_CONFIG.form.audit || {} : {}; }
  function setStatus(form, state, message) {
    var status = form.querySelector("[data-form-status]");
    if (!status) return;
    status.dataset.state = state; status.textContent = message;
    status.setAttribute("role", state === "error" ? "alert" : "status");
    if (state === "success") status.focus({ preventScroll: true });
  }
  function fieldByName(form, name) {
    var field = form.elements.namedItem(name);
    if (!field) return null;
    return field.length && !field.tagName ? field[0] : field;
  }
  function setFieldError(form, name, message) {
    var field = fieldByName(form, name);
    var error = form.querySelector('[data-error-for="' + name + '"]');
    if (field) { field.setAttribute("aria-invalid", "true"); if (error && error.id) field.setAttribute("aria-describedby", error.id); }
    if (error) error.textContent = message;
  }
  function clearErrors(form) {
    form.querySelectorAll('[aria-invalid="true"]').forEach(function (field) { field.removeAttribute("aria-invalid"); });
    form.querySelectorAll("[data-error-for]").forEach(function (error) { error.textContent = ""; });
    var status = form.querySelector("[data-form-status]");
    if (status) { status.textContent = ""; status.removeAttribute("data-state"); status.removeAttribute("role"); }
  }
  function clientErrors(form) {
    var errors = {};
    ["name", "email", "need_help", "message", "consent"].forEach(function (name) {
      var field = fieldByName(form, name);
      if (!field) return;
      var missing = field.type === "checkbox" ? !field.checked : !String(field.value).trim();
      if (missing) errors[name] = "This field is required.";
    });
    var email = fieldByName(form, "email");
    if (email && email.value && !email.validity.valid) errors.email = "Enter a valid business email.";
    var website = fieldByName(form, "website");
    if (website && website.value && !website.validity.valid) errors.website = "Enter a valid website URL including https://";
    var message = fieldByName(form, "message");
    if (message && message.value.trim() && message.value.trim().length < 10) errors.message = "Please add at least 10 characters.";
    return errors;
  }
  function showErrors(form, errors) {
    Object.keys(errors).forEach(function (name) { setFieldError(form, name, errors[name]); });
    var first = fieldByName(form, Object.keys(errors)[0]);
    if (first && typeof first.focus === "function") first.focus();
  }
  function initForm(form) {
    var config = formConfig();
    var sending = false;
    form.addEventListener("input", function (event) {
      var name = event.target && event.target.name;
      if (!name) return;
      var error = form.querySelector('[data-error-for="' + name + '"]');
      event.target.removeAttribute("aria-invalid"); if (error) error.textContent = "";
    });
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      if (sending) return;
      clearErrors(form);
      var errors = clientErrors(form);
      if (Object.keys(errors).length) { showErrors(form, errors); setStatus(form, "error", config.validationMessage || "Please check the highlighted fields."); return; }
      var submit = form.querySelector('[type="submit"]');
      var originalLabel = submit ? submit.textContent : "";
      sending = true;
      if (submit) { submit.disabled = true; submit.textContent = config.sendingLabel || "Sending…"; }
      try {
        var response = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" }, credentials: "same-origin" });
        var data;
        try { data = await response.json(); } catch (parseError) { throw new Error("The server returned an invalid response."); }
        if (!response.ok || !data.ok) { if (data.errors) showErrors(form, data.errors); throw new Error(data.message || config.failureMessage || "We could not send your request."); }
        form.reset();
        setStatus(form, "success", data.message || config.successMessage || "Thank you. Your request was sent.");
      } catch (error) { setStatus(form, "error", error.message || config.failureMessage || "We could not send your request."); }
      finally { sending = false; if (submit) { submit.disabled = false; submit.textContent = originalLabel || config.submitLabel || "Send request"; } }
    });
  }
  function init() { document.querySelectorAll("[data-audit-form]").forEach(initForm); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
