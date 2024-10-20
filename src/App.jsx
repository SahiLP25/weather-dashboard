import React, { useState, useEffect } from "react";
import SearchComponent from "./components/SearchComponent";
import WeatherDisplay from "./components/WeatherDisplay";
import FavoriteCities from "./components/FavoriteCities";
import axios from "axios";

const API_KEY = "d26d63f3bdfe459febb298dc8264dd22";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState("metric"); // Default to Celsius

  const fetchWeather = async (city) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`
      );
      setCurrentWeather(weatherResponse.data);
      setForecast(forecastResponse.data.list.slice(0, 5)); // 5-day forecast
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const addFavoriteCity = async (city) => {
    try {
      const response = await axios.post("http://localhost:5000/favorites", { city });
      setFavorites([...favorites, response.data]);
    } catch (error) {
      console.error("Error adding favorite city", error);
    }
  };

  const removeFavoriteCity = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/favorites/${id}`);
      setFavorites(favorites.filter(fav => fav.id !== id));
    } catch (error) {
      console.error("Error removing favorite city", error);
    }
  };

  useEffect(() => {
    // Fetching initial favorite cities from JSON server
    const fetchFavorites = async () => {
      const response = await axios.get("http://localhost:5000/favorites");
      setFavorites(response.data);
    };
    fetchFavorites();
  }, []);

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  return (
    <div className="App">
      <p className="heading">Weather Dashboard</p>
      <button className="togglebtn" onClick={toggleUnit}>
        Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
      </button>
      <SearchComponent onSearch={fetchWeather} />
      <WeatherDisplay currentWeather={currentWeather} forecast={forecast} unit={unit} />
      <FavoriteCities favorites={favorites} onRemove={removeFavoriteCity} />
      <button className="favbtn" onClick={() => addFavoriteCity(currentWeather?.name)}>Add to Favorites</button>
    </div>
  );
};

export default App;
