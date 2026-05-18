const sidebarLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".view-section");
const themeToggle = document.getElementById("themeToggle");
const themeToggleMobile = document.getElementById("themeToggleMobile");
const predictionForm = document.getElementById("predictionForm");
const sosButton = document.getElementById("sosButton");
const activeAlertsEl = document.getElementById("activeAlerts");
const riskPercentEl = document.getElementById("riskPercent");
const riskLabelEl = document.getElementById("riskLabel");
const riskLevelBar = document.getElementById("riskLevelBar");
const predictionSummary = document.getElementById("predictionSummary");
const predictionMessage = document.getElementById("predictionMessage");
const predictionLevel = document.getElementById("predictionLevel");
const alertHistoryEl = document.getElementById("alertHistory");
const predictionHistoryEl = document.getElementById("predictionHistory");
const fullAlertHistoryEl = document.getElementById("fullAlertHistory");
const fullPredictionHistoryEl = document.getElementById("fullPredictionHistory");
const statPredictions = document.getElementById("statPredictions");
const statAlerts = document.getElementById("statAlerts");
const statResolved = document.getElementById("statResolved");
const emergencyStatusEl = document.getElementById("emergencyStatus");
const currentAlertPanel = document.getElementById("currentAlertPanel");

const root = document.documentElement;
let currentRisk = 0;

function toggleSidebar() {
  document.body.classList.toggle("sidebar-open");
}

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("safesphere-theme", theme);
}

function loadTheme() {
  const saved = localStorage.getItem("safesphere-theme") || "dark";
  setTheme(saved);
}

function toggleTheme() {
  const nextTheme = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  setTheme(nextTheme);
}

function setActiveSection(targetId) {
  sections.forEach((section) => {
    section.classList.toggle("hidden-section", section.id !== targetId);
  });

  sidebarLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.target === targetId);
  });
}

function createHistoryItem(entry) {
  const item = document.createElement("li");
  item.innerHTML = `<strong>${entry.title}</strong><span>${entry.detail}</span>`;
  return item;
}

function renderPredictionList(listElement, list) {
  listElement.innerHTML = "";
  if (list.length === 0) {
    listElement.innerHTML = '<li>No prediction history yet.</li>';
    return;
  }

  list.forEach((entry) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${entry.disaster}</strong><span>${entry.level} - ${entry.score}%</span><strong>${entry.timestamp}</strong>`;
    listElement.appendChild(item);
  });
}

function renderAlertList(listElement, list) {
  listElement.innerHTML = "";
  if (list.length === 0) {
    listElement.innerHTML = '<li>No alerts sent yet.</li>';
    return;
  }

  list.forEach((entry) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${entry.severity} Alert</strong><span>${entry.message}</span><strong>${entry.timestamp}</strong>`;
    listElement.appendChild(item);
  });
}

function updateDashboard() {
  activeAlertsEl.textContent = alertHistory.length;
  statPredictions.textContent = predictionHistory.length;
  statAlerts.textContent = alertHistory.length;
  statResolved.textContent = Math.max(0, Math.floor(alertHistory.length * 0.45));

  const latestPrediction = predictionHistory[0];
  if (latestPrediction) {
    currentRisk = latestPrediction.score;
    riskPercentEl.textContent = `${latestPrediction.score}%`;
    riskLabelEl.textContent = latestPrediction.level;
    riskLevelBar.style.width = `${latestPrediction.score}%`;
    predictionSummary.textContent = `${latestPrediction.level} detected for ${latestPrediction.disaster}.`;
    predictionMessage.textContent = latestPrediction.message;
    predictionLevel.textContent = latestPrediction.level;
  } else {
    currentRisk = 0;
    riskPercentEl.textContent = "0%";
    riskLabelEl.textContent = "Low risk";
    riskLevelBar.style.width = "0%";
    predictionSummary.textContent = "Awaiting inputs to simulate hazard risk.";
    predictionMessage.textContent = "Select a disaster type and adjust the risk inputs to begin analysis.";
    predictionLevel.textContent = "No Data";
  }

  renderPredictionList(predictionHistoryEl, predictionHistory);
  renderPredictionList(fullPredictionHistoryEl, predictionHistory);
  renderAlertList(alertHistoryEl, alertHistory);
  renderAlertList(fullAlertHistoryEl, alertHistory);
}

function handlePredictionSubmit(event) {
  event.preventDefault();

  const disasterType = document.getElementById("disasterType").value;
  const factorOne = Number(document.getElementById("factorOne").value) || 0;
  const factorTwo = Number(document.getElementById("factorTwo").value) || 0;
  const factorThree = Number(document.getElementById("factorThree").value) || 0;

  const result = analyzeRisk(disasterType, {
    factorOne,
    factorTwo,
    factorThree,
  });

  showPredictionResult(result, {
    disaster: disasterType,
    factorOne,
    factorTwo,
    factorThree,
  });
  updateDashboard();
}

function handleSOS() {
  const alert = sendSOS();
  showEmergencyAlert(alert);
  updateDashboard();
}

function loadHistory() {
  loadPredictions();
  loadAlerts();
  updateDashboard();
}

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => setActiveSection(link.dataset.target));
});

themeToggle.addEventListener("click", toggleTheme);
if (themeToggleMobile) {
  themeToggleMobile.addEventListener("click", toggleTheme);
}

if (predictionForm) {
  predictionForm.addEventListener("submit", handlePredictionSubmit);
}

if (sosButton) {
  sosButton.addEventListener("click", handleSOS);
}

loadTheme();
loadHistory();
