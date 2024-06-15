import React, { useState } from "react";
import { fetchWeatherData, fetchForecastData } from "../api";
import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import "../App.css";

const HomePage = ({ onAddFavorite }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (location) => {
    try {
      const weatherData = await fetchWeatherData(location);
      const forecastData = await fetchForecastData(location);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CurrentWeather weather={weather} />
      <Forecast forecast={forecast} />
      {weather && (
        <button
          className="favorite-button"
          onClick={() => onAddFavorite(weather.name)}
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
};

export default HomePage;
