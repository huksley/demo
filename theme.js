(function initTheme() {
  var theme = localStorage.getItem("theme") || "light";
  if (theme === "dark") {
    const html = document.querySelector("html");
    html.classList.add("dark");
    html.style.backgroundColor = "#020914";
  }
})();
