const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function loadTheme() {
  const savedTheme = localStorage.getItem("taskglow-theme") || "dark";
  root.setAttribute("data-theme", savedTheme);
}

function saveTheme(theme) {
  localStorage.setItem("taskglow-theme", theme);
}

function toggleTheme() {
  const currentTheme = root.getAttribute("data-theme") === "light" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  root.setAttribute("data-theme", nextTheme);
  saveTheme(nextTheme);
}

themeToggle.addEventListener("click", toggleTheme);
loadTheme();
