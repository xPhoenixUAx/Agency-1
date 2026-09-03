(function () {
  "use strict";
  function init() {
    var group = document.querySelector("[data-case-filters]");
    var grid = document.querySelector("[data-case-grid]");
    var status = document.querySelector("[data-filter-status]");
    if (!group || !grid) return;
    var buttons = Array.from(group.querySelectorAll("button[data-filter]"));
    var cards = Array.from(grid.querySelectorAll("[data-case-category]"));
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.dataset.filter;
        buttons.forEach(function (item) { item.setAttribute("aria-pressed", String(item === button)); });
        var count = 0;
        cards.forEach(function (card) {
          var visible = filter === "All" || card.dataset.caseCategory === filter;
          card.hidden = !visible;
          if (visible) count += 1;
        });
        if (status) status.textContent = count + (count === 1 ? " case study shown." : " case studies shown.");
      });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
