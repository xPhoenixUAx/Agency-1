(function () {
  "use strict";
  var ns = "http://www.w3.org/2000/svg";
  function points(values, width, height, inset) {
    var min = Math.min.apply(Math, values);
    var max = Math.max.apply(Math, values);
    var range = max - min || 1;
    return values.map(function (value, index) {
      var x = inset + (index / Math.max(values.length - 1, 1)) * (width - inset * 2);
      var y = height - inset - ((value - min) / range) * (height - inset * 2);
      return [x, y];
    });
  }
  function pathData(coords) { return coords.map(function (point, index) { return (index ? "L" : "M") + point[0].toFixed(1) + " " + point[1].toFixed(1); }).join(" "); }
  function createSvg(chart) {
    var raw = chart.dataset.values || "38,44,52,49,65,78,71,86,82,96,91,108";
    var values = raw.split(",").map(Number).filter(Number.isFinite);
    if (values.length < 2) return;
    var width = 640, height = 250, inset = 14;
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("class", "line-chart");
    svg.setAttribute("aria-hidden", "true");
    svg.dataset.chartReady = "false";
    [0.25, 0.5, 0.75].forEach(function (ratio) {
      var line = document.createElementNS(ns, "line");
      line.setAttribute("x1", "0"); line.setAttribute("x2", String(width));
      line.setAttribute("y1", String(height * ratio)); line.setAttribute("y2", String(height * ratio));
      line.setAttribute("class", "grid-line"); svg.appendChild(line);
    });
    var primary = document.createElementNS(ns, "path");
    primary.setAttribute("d", pathData(points(values, width, height, inset)));
    primary.setAttribute("class", "series");
    primary.style.strokeDasharray = "1200";
    primary.style.strokeDashoffset = "1200";
    svg.appendChild(primary);
    var secondaryValues = values.map(function (value, index) { return value * 0.66 + (index % 3) * 3; });
    var secondary = document.createElementNS(ns, "path");
    secondary.setAttribute("d", pathData(points(secondaryValues, width, height, inset)));
    secondary.setAttribute("class", "series-secondary"); svg.appendChild(secondary);
    chart.appendChild(svg);
    function show() {
      svg.dataset.chartReady = "true";
      requestAnimationFrame(function () { primary.style.transition = "stroke-dashoffset 1.1s cubic-bezier(.2,.7,.2,1)"; primary.style.strokeDashoffset = "0"; });
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { primary.style.strokeDashoffset = "0"; show(); }
    else {
      var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { show(); observer.disconnect(); }
      }, { rootMargin: "160px" });
      observer.observe(chart);
    }
  }

  function numberList(value, fallback) {
    var values = String(value || "").split(",").map(Number).filter(Number.isFinite);
    return values.length ? values : fallback;
  }

  function textList(value, fallback) {
    var values = String(value || "").split(",").map(function (item) { return item.trim(); }).filter(Boolean);
    return values.length ? values : fallback;
  }

  function canvasContext(canvas) {
    var bounds = canvas.getBoundingClientRect();
    var width = Math.max(1, Math.round(bounds.width));
    var height = Math.max(1, Math.round(bounds.height));
    var ratio = Math.min(window.devicePixelRatio || 1, 2);
    if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
    }
    var context = canvas.getContext("2d");
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    return { context: context, width: width, height: height };
  }

  function drawFunnel(canvas) {
    var surface = canvasContext(canvas);
    var context = surface.context;
    var width = surface.width;
    var height = surface.height;
    var values = numberList(canvas.dataset.values, [100, 79, 57, 36]);
    var maximum = Math.max.apply(Math, values) || 1;
    var gap = 6;
    var segmentHeight = (height - gap * (values.length - 1) - 8) / values.length;
    var center = width / 2;
    var colors = ["#7661ff", "#8f7cff", "#aca0ff", "#d2ccff"];

    context.save();
    context.shadowColor = "rgba(91, 56, 245, 0.12)";
    context.shadowBlur = 12;

    if (width > height * 1.6) {
      var topInset = 3;
      var bottomInset = width * 0.13;
      var topSpan = width - topInset * 2;
      var bottomSpan = width - bottomInset * 2;
      values.forEach(function (value, index) {
        var topLeft = topInset + topSpan * index / values.length;
        var topRight = topInset + topSpan * (index + 1) / values.length;
        var bottomLeft = bottomInset + bottomSpan * index / values.length;
        var bottomRight = bottomInset + bottomSpan * (index + 1) / values.length;
        context.beginPath();
        context.moveTo(topLeft, 4);
        context.lineTo(topRight - 2, 4);
        context.lineTo(bottomRight - 2, height - 4);
        context.lineTo(bottomLeft, height - 4);
        context.closePath();
        context.fillStyle = colors[index % colors.length];
        context.fill();
      });
      context.restore();
      return;
    }

    values.forEach(function (value, index) {
      var next = values[index + 1] == null ? Math.max(value * 0.68, maximum * 0.22) : values[index + 1];
      var topWidth = Math.max(width * 0.28, width * 0.9 * Math.sqrt(value / maximum));
      var bottomWidth = Math.max(width * 0.22, width * 0.9 * Math.sqrt(next / maximum));
      var y = 4 + index * (segmentHeight + gap);
      context.beginPath();
      context.moveTo(center - topWidth / 2, y);
      context.lineTo(center + topWidth / 2, y);
      context.lineTo(center + bottomWidth / 2, y + segmentHeight);
      context.lineTo(center - bottomWidth / 2, y + segmentHeight);
      context.closePath();
      context.fillStyle = colors[index % colors.length];
      context.fill();
    });
    context.restore();
  }

  function drawLineChart(canvas) {
    var surface = canvasContext(canvas);
    var context = surface.context;
    var width = surface.width;
    var height = surface.height;
    var values = numberList(canvas.dataset.values, [32, 43, 46, 58, 52, 71, 66, 92, 79, 112]);
    var xLabels = textList(canvas.dataset.xLabels, ["Apr 29", "May 13", "May 27", "Jun 3"]);
    var yLabels = textList(canvas.dataset.yLabels, ["$150K", "$100K", "$50K", "$0"]);
    var color = canvas.dataset.chartColor || "#5b38f5";
    var padding = { top: 12, right: 8, bottom: 30, left: 40 };
    var plotWidth = Math.max(1, width - padding.left - padding.right);
    var plotHeight = Math.max(1, height - padding.top - padding.bottom);
    var minimum = Math.min.apply(Math, values);
    var maximum = Math.max.apply(Math, values);
    var spread = maximum - minimum || 1;

    context.save();
    context.font = '600 9px Manrope, system-ui, sans-serif';
    context.textBaseline = "middle";
    yLabels.forEach(function (label, index) {
      var y = padding.top + (index / Math.max(yLabels.length - 1, 1)) * plotHeight;
      context.strokeStyle = "#efedf4";
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(padding.left, y);
      context.lineTo(width - padding.right, y);
      context.stroke();
      context.fillStyle = "#737686";
      context.textAlign = "left";
      context.fillText(label, 0, y);
    });

    context.textBaseline = "alphabetic";
    xLabels.forEach(function (label, index) {
      var x = padding.left + (index / Math.max(xLabels.length - 1, 1)) * plotWidth;
      context.fillStyle = "#777a89";
      context.textAlign = index === 0 ? "left" : index === xLabels.length - 1 ? "right" : "center";
      context.fillText(label, x, height - 5);
    });

    var coords = values.map(function (value, index) {
      return {
        x: padding.left + (index / Math.max(values.length - 1, 1)) * plotWidth,
        y: padding.top + (1 - (value - minimum) / spread) * plotHeight
      };
    });

    var fill = context.createLinearGradient(0, padding.top, 0, padding.top + plotHeight);
    fill.addColorStop(0, color + "24");
    fill.addColorStop(1, color + "00");
    context.beginPath();
    coords.forEach(function (point, index) {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.lineTo(coords[coords.length - 1].x, padding.top + plotHeight);
    context.lineTo(coords[0].x, padding.top + plotHeight);
    context.closePath();
    context.fillStyle = fill;
    context.fill();

    context.beginPath();
    coords.forEach(function (point, index) {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });
    context.strokeStyle = color;
    context.lineWidth = 2.4;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
    context.restore();
  }

  function drawDonut(canvas) {
    var surface = canvasContext(canvas);
    var context = surface.context;
    var width = surface.width;
    var height = surface.height;
    var score = Math.max(0, Math.min(100, numberList(canvas.dataset.values, [98])[0]));
    var centerX = width / 2;
    var centerY = height / 2;
    var radius = Math.max(20, Math.min(width, height) / 2 - 18);
    var lineWidth = Math.max(12, Math.min(18, radius * 0.2));
    var start = -Math.PI / 2;
    var end = start + Math.PI * 2 * score / 100;

    context.lineWidth = lineWidth;
    context.lineCap = "round";
    context.strokeStyle = "#ebe8ff";
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    context.stroke();

    var gradient = context.createLinearGradient(centerX - radius, centerY + radius, centerX + radius, centerY - radius);
    gradient.addColorStop(0, "#5b38f5");
    gradient.addColorStop(1, "#2f5bff");
    context.strokeStyle = gradient;
    context.beginPath();
    context.arc(centerX, centerY, radius, start, end);
    context.stroke();

    context.fillStyle = "#161721";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = '800 28px Manrope, system-ui, sans-serif';
    context.fillText(Math.round(score) + "%", centerX, centerY - 7);
    context.fillStyle = "#6d7080";
    context.font = '650 10px Manrope, system-ui, sans-serif';
    context.fillText(canvas.dataset.centerLabel || "Complete", centerX, centerY + 19);
  }

  function drawGrowthOrbit(canvas) {
    var surface = canvasContext(canvas);
    var context = surface.context;
    var width = surface.width;
    var height = surface.height;
    var centerX = width / 2;
    var centerY = height / 2;
    var base = Math.min(width, height);
    var radii = [base * 0.18, base * 0.29, base * 0.4];

    context.save();
    radii.forEach(function (radius, index) {
      context.strokeStyle = index === 0 ? "rgba(130, 112, 255, .72)" : "rgba(128, 145, 255, .28)";
      context.lineWidth = index === 0 ? 2 : 1;
      if (index === 2) context.setLineDash([2, 6]);
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.stroke();
      context.setLineDash([]);
    });

    var nodes = [
      { x: centerX, y: centerY - base * 0.4 },
      { x: centerX - base * 0.35, y: centerY + base * 0.21 },
      { x: centerX + base * 0.35, y: centerY + base * 0.21 }
    ];
    nodes.forEach(function (node) {
      var glow = context.createLinearGradient(centerX, centerY, node.x, node.y);
      glow.addColorStop(0, "rgba(112, 83, 255, .95)");
      glow.addColorStop(1, "rgba(125, 161, 255, .55)");
      context.strokeStyle = glow;
      context.lineWidth = 1.5;
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.lineTo(node.x, node.y);
      context.stroke();
      context.shadowColor = "#8f82ff";
      context.shadowBlur = 13;
      context.fillStyle = "#dcd8ff";
      context.beginPath();
      context.arc(node.x, node.y, 3, 0, Math.PI * 2);
      context.fill();
      context.shadowBlur = 0;
    });

    for (var index = 0; index < 11; index += 1) {
      var angle = index / 11 * Math.PI * 2;
      var radius = radii[2];
      context.fillStyle = index % 3 === 0 ? "#c3bbff" : "rgba(118, 137, 255, .72)";
      context.beginPath();
      context.arc(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius, index % 3 === 0 ? 2.2 : 1.4, 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
  }

  function drawCapabilityTrend(canvas) {
    var surface = canvasContext(canvas);
    var context = surface.context;
    var width = surface.width;
    var height = surface.height;
    var values = numberList(canvas.dataset.values, [22, 29, 28, 39, 43, 41, 53, 49, 61]);
    var color = canvas.dataset.chartColor || "#5b38f5";
    var minimum = Math.min.apply(Math, values);
    var maximum = Math.max.apply(Math, values);
    var spread = maximum - minimum || 1;
    var padding = 5;
    var coords = values.map(function (value, index) {
      return {
        x: padding + index / Math.max(values.length - 1, 1) * (width - padding * 2),
        y: padding + (1 - (value - minimum) / spread) * (height - padding * 2)
      };
    });

    if (color.toLowerCase() === "#5b38f5") {
      context.setLineDash([4, 4]);
      context.strokeStyle = "rgba(91, 56, 245, .34)";
      context.lineWidth = 1.3;
      context.beginPath();
      coords.forEach(function (point, index) {
        var y = Math.min(height - padding, point.y + 16 + (index % 3) * 2);
        if (index === 0) context.moveTo(point.x, y); else context.lineTo(point.x, y);
      });
      context.stroke();
      context.setLineDash([]);
    }

    var fill = context.createLinearGradient(0, 0, 0, height);
    fill.addColorStop(0, color + "22");
    fill.addColorStop(1, color + "00");
    context.beginPath();
    coords.forEach(function (point, index) { if (index === 0) context.moveTo(point.x, point.y); else context.lineTo(point.x, point.y); });
    context.lineTo(coords[coords.length - 1].x, height - padding);
    context.lineTo(coords[0].x, height - padding);
    context.closePath();
    context.fillStyle = fill;
    context.fill();

    context.beginPath();
    coords.forEach(function (point, index) { if (index === 0) context.moveTo(point.x, point.y); else context.lineTo(point.x, point.y); });
    context.strokeStyle = color;
    context.lineWidth = 2;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  }

  function drawCapabilityConnector(canvas) {
    var surface = canvasContext(canvas);
    var context = surface.context;
    var parent = canvas.parentElement;
    var cards = parent ? Array.from(parent.querySelectorAll(".capability-card")) : [];
    if (!cards.length) return;
    var parentBox = parent.getBoundingClientRect();
    var centers = cards.map(function (card) {
      var box = card.getBoundingClientRect();
      return box.top - parentBox.top + box.height / 2;
    });
    var x = 9;
    context.strokeStyle = "rgba(91, 56, 245, .88)";
    context.lineWidth = 1.5;
    context.beginPath();
    context.moveTo(x, centers[0]);
    context.lineTo(x, centers[centers.length - 1]);
    context.stroke();
    centers.forEach(function (y) {
      context.beginPath();
      context.moveTo(x, y);
      context.bezierCurveTo(x + 2, y, surface.width - 9, y, surface.width - 2, y);
      context.stroke();
      context.fillStyle = "#5b38f5";
      context.beginPath();
      context.arc(surface.width - 3, y, 2.2, 0, Math.PI * 2);
      context.fill();
    });
  }

  function createResponsiveCanvas(canvas, draw) {
    if (canvas.dataset.responsiveCanvasReady === "true") return;
    canvas.dataset.responsiveCanvasReady = "true";
    requestAnimationFrame(function () { draw(canvas); });
    if ("ResizeObserver" in window) {
      var observer = new ResizeObserver(function () { requestAnimationFrame(function () { draw(canvas); }); });
      observer.observe(canvas);
    }
  }

  function createOutcomeCanvas(canvas) {
    if (canvas.dataset.canvasReady === "true") return;
    var draw = function () {
      if (canvas.dataset.outcomeChart === "funnel") drawFunnel(canvas);
      else if (canvas.dataset.outcomeChart === "donut") drawDonut(canvas);
      else drawLineChart(canvas);
    };
    canvas.dataset.canvasReady = "true";
    requestAnimationFrame(draw);
    if ("ResizeObserver" in window) {
      var observer = new ResizeObserver(function () { requestAnimationFrame(draw); });
      observer.observe(canvas);
    }
  }

  function init() {
    document.querySelectorAll("[data-line-chart]").forEach(createSvg);
    document.querySelectorAll("[data-outcome-chart]").forEach(createOutcomeCanvas);
    document.querySelectorAll("[data-growth-orbit]").forEach(function (canvas) { createResponsiveCanvas(canvas, drawGrowthOrbit); });
    document.querySelectorAll("[data-capability-trend]").forEach(function (canvas) { createResponsiveCanvas(canvas, drawCapabilityTrend); });
    document.querySelectorAll("[data-capability-connector]").forEach(function (canvas) { createResponsiveCanvas(canvas, drawCapabilityConnector); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
