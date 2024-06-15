import axios from "axios";

const API_KEY = "06d1bc50232c3416c9190f2bd6f496c2";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherData = async (location) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: location,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};

export const fetchForecastData = async (location) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: location,
      appid: API_KEY,
      units: "metric",
    },
  });
  return response.data;
};
