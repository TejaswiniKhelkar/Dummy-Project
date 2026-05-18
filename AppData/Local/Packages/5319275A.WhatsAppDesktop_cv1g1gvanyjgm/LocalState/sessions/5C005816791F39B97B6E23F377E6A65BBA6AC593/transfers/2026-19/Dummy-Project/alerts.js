let alertHistory = [];

function showEmergencyAlert(alert) {
  const statusNode = document.getElementById("emergencyStatus");
  const alertPanel = document.getElementById("currentAlertPanel");

  if (statusNode) {
    statusNode.textContent = `${alert.status}: ${alert.message}`;
  }

  if (alertPanel) {
    alertPanel.innerHTML = `
      <div class="alert-pill">
        <strong>${alert.severity} SOS</strong>
        <p>${alert.message}</p>
        <small>${alert.timestamp}</small>
      </div>
    `;
  }
}

function sendSOS() {
  const levels = ["Critical", "Major", "Moderate"];
  const severityLevels = ["Red", "Orange", "Yellow"];
  const index = Math.floor(Math.random() * 3);
  const alert = {
    id: Date.now().toString(),
    severity: severityLevels[index],
    status: "Dispatching units",
    message: `SOS signal active. Command notified of ${levels[index]} threat.`,
    timestamp: new Date().toLocaleString(),
  };

  alertHistory.unshift(alert);
  saveAlertHistory();
  return alert;
}

function saveAlertHistory() {
  localStorage.setItem("safesphere-alerts", JSON.stringify(alertHistory));
}

function loadAlerts() {
  const saved = localStorage.getItem("safesphere-alerts");
  alertHistory = saved ? JSON.parse(saved) : [];
}
