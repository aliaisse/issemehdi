// Light/dark toggle. With no saved choice the site follows the visitor's
// system setting; a click saves an explicit choice for this browser.
// The saved choice is applied before first paint by the inline script in
// _includes/site/head.html.
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  var systemDark = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var themeColors = document.querySelectorAll('meta[name="theme-color"]');

  function currentTheme() {
    var chosen = root.getAttribute("data-theme");
    if (chosen === "light" || chosen === "dark") return chosen;
    return systemDark && systemDark.matches ? "dark" : "light";
  }

  function sync() {
    toggle.setAttribute("aria-pressed", String(currentTheme() === "dark"));
    // Keep the browser's toolbar colour in step with the page background.
    var paper = getComputedStyle(root).getPropertyValue("--paper").trim();
    for (var i = 0; i < themeColors.length; i++) themeColors[i].setAttribute("content", paper);
  }

  toggle.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  });

  if (systemDark) {
    if (systemDark.addEventListener) systemDark.addEventListener("change", sync);
    else if (systemDark.addListener) systemDark.addListener(sync);
  }
  sync();
})();
