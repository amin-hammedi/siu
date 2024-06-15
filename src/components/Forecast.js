import React from "react";
import "../App.css";

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="forecast-container">
      {forecast.list.slice(0, 5).map((item) => (
        <div className="forecast-card" key={item.dt}>
          <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
          <p>{item.weather[0].description}</p>
          <p>Temp: {item.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
