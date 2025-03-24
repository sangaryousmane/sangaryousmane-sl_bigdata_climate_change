import React, { useState } from "react";
import "./PredictPage.css";

function PredictPage() {
  const [precipitation, setPrecipitation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [landUse, setLandUse] = useState("");
  const [populationDensity, setPopulationDensity] = useState("");
  const [prediction, setPrediction] = useState("");

  const handlePrediction = () => {
    // Here, you would replace this with actual API calls or model predictions.
    // This is a placeholder for demonstration purposes.
    let result = "Analyzing...";

    if (precipitation > 100 && humidity > 80) {
      result = "High Flood Risk";
    } else if (temperature > 40 && windSpeed > 30) {
      result = "High Wildfire Risk";
    } else if (precipitation > 150 && populationDensity > 1000){
        result = "Extreme Urban Flood Risk";
    } else if (landUse === "Deforested" && temperature > 35) {
        result = "Increased Landslide Risk";
    }else if (precipitation > 50 && temperature > 30 && humidity < 50) {
        result = "Potential for Drought";
    } else {
      result = "Moderate Risk";
    }

    setPrediction(result);
  };

  return (
    <div className="predict-container">
      <h2>Natural Disaster Prediction Form</h2>
      <form>
        <label>Precipitation (mm):</label>
        <input
          type="number"
          value={precipitation}
          onChange={(e) => setPrecipitation(e.target.value)}
        />

        <label>Temperature (°C):</label>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />

        <label>Humidity (%):</label>
        <input
          type="number"
          value={humidity}
          onChange={(e) => setHumidity(e.target.value)}
        />

        <label>Wind Speed (km/h):</label>
        <input
          type="number"
          value={windSpeed}
          onChange={(e) => setWindSpeed(e.target.value)}
        />

        <label>Land Use:</label>
        <select value={landUse} onChange={(e) => setLandUse(e.target.value)}>
            <option value="">Select Land Use</option>
            <option value="Forest">Forest</option>
            <option value="Deforested">Deforested</option>
            <option value="Urban">Urban</option>
            <option value="Agricultural">Agricultural</option>
        </select>

        <label>Population Density (people/km²):</label>
        <input
          type="number"
          value={populationDensity}
          onChange={(e) => setPopulationDensity(e.target.value)}
        />

        <button type="button" onClick={handlePrediction}>
          Predict
        </button>
      </form>

      {prediction && (
        <div className="prediction-result">
          <h3>Prediction:</h3>
          <p>
            <strong>{prediction}</strong>
          </p>
          {prediction === "High Flood Risk" && (
            <p>
              Explanation: High precipitation and humidity suggest increased flood risk.
            </p>
          )}
          {prediction === "High Wildfire Risk" && (
            <p>
              Explanation: High temperature and wind speed indicate increased wildfire risk.
            </p>
          )}
          {prediction === "Extreme Urban Flood Risk" && (
            <p>
              Explanation: High precipitation combined with high population density leads to extreme urban flooding.
            </p>
          )}
          {prediction === "Increased Landslide Risk" && (
            <p>
              Explanation: Deforested land and high temperatures result in increased landslide risk.
            </p>
          )}
          {prediction === "Potential for Drought" && (
            <p>
              Explanation: Low humidity, high temperatures, and moderate rainfall can indicate drought conditions.
            </p>
          )}
          {prediction === "Moderate Risk" && (
            <p>
              Explanation: Moderate climate conditions suggest a generally moderate risk.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default PredictPage;