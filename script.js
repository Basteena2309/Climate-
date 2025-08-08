<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Carbon Footprint Estimator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f1f8e9;
      padding: 20px;
      color: #33691e;
    }

    h1 {
      color: #558b2f;
    }

    .calculator {
      background-color: #dcedc8;
      padding: 20px;
      border-radius: 8px;
      max-width: 500px;
      margin: auto;
    }

    label {
      display: block;
      margin-top: 15px;
    }

    input[type="number"] {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border: 1px solid #c5e1a5;
      border-radius: 4px;
    }

    button {
      margin-top: 20px;
      background-color: #7cb342;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #689f38;
    }

    .result {
      margin-top: 20px;
      font-weight: bold;
      font-size: 1.2em;
      color: #2e7d32;
    }
  </style>
</head>
<body>

  <h1>🌍 Carbon Footprint Estimator</h1>
  <p>Estimate your CO₂ emissions from travel.</p>

  <div class="calculator">
    <label for="carKm">Kilometers driven by car per week:</label>
    <input type="number" id="carKm" placeholder="e.g. 100" />

    <label for="busKm">Kilometers traveled by bus per week:</label>
    <input type="number" id="busKm" placeholder="e.g. 50" />

    <label for="flightKm">Kilometers flown per month:</label>
    <input type="number" id="flightKm" placeholder="e.g. 500" />

    <button onclick="calculateFootprint()">Calculate CO₂ Emissions</button>

    <div class="result" id="result"></div>
  </div>

  <script>
    function calculateFootprint() {
      const carKm = parseFloat(document.getElementById('carKm').value) || 0;
      const busKm = parseFloat(document.getElementById('busKm').value) || 0;
      const flightKm = parseFloat(document.getElementById('flightKm').value) || 0;

      // Emission factors in kg CO₂
