let predictionHistory = [];

function calculatePrediction(score) {
  if (score < 40) {
    return { level: "Low Risk", color: "#4ade80", message: "Conditions remain stable for the selected disaster." };
  }
  if (score < 70) {
    return { level: "Medium Risk", color: "#fcd34d", message: "Potential hazard detected; monitor the location closely." };
  }
  return { level: "High Risk", color: "#fb7185", message: "Critical threat detected. Activate emergency protocols immediately." };
}

function analyzeRisk(disasterType, factors) {
  const { factorOne, factorTwo, factorThree } = factors;
  let score = 0;

  switch (disasterType) {
    case "flood":
      score = factorOne * 0.38 + factorTwo * 0.35 + factorThree * 0.27;
      break;
    case "earthquake":
      score = factorOne * 0.42 + factorTwo * 0.34 + factorThree * 0.24;
      break;
    case "storm":
      score = factorOne * 0.36 + factorTwo * 0.33 + factorThree * 0.31;
      break;
    case "wildfire":
      score = factorOne * 0.41 + factorTwo * 0.32 + factorThree * 0.27;
      break;
    default:
      score = factorOne * 0.33 + factorTwo * 0.33 + factorThree * 0.34;
  }

  const normalized = Math.min(100, Math.round(score));
  const prediction = calculatePrediction(normalized);

  return {
    disaster: disasterType.charAt(0).toUpperCase() + disasterType.slice(1),
    score: normalized,
    level: prediction.level,
    color: prediction.color,
    message: prediction.message,
    timestamp: new Date().toLocaleString(),
  };
}

function showPredictionResult(result, inputs) {
  const levelNode = document.getElementById("predictionLevel");
  const summaryNode = document.getElementById("predictionSummary");
  const messageNode = document.getElementById("predictionMessage");

  if (levelNode) {
    levelNode.textContent = result.level;
    levelNode.style.backgroundColor = result.color;
  }

  if (summaryNode) {
    summaryNode.textContent = `${result.level} detected for ${result.disaster}.`;
  }

  if (messageNode) {
    messageNode.textContent = result.message;
  }

  savePredictionHistory(result, inputs);
}

function savePredictionHistory(result, inputs) {
  const record = {
    id: Date.now().toString(),
    disaster: result.disaster,
    score: result.score,
    level: result.level,
    message: result.message,
    detail: `Factors: ${inputs.factorOne}, ${inputs.factorTwo}, ${inputs.factorThree}`,
    timestamp: result.timestamp,
  };

  predictionHistory.unshift(record);
  localStorage.setItem("safesphere-predictions", JSON.stringify(predictionHistory));
}

function loadPredictions() {
  const saved = localStorage.getItem("safesphere-predictions");
  predictionHistory = saved ? JSON.parse(saved) : [];
}
