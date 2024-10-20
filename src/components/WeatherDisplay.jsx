import React from "react";

const WeatherDisplay = ({ currentWeather, forecast, unit }) => {
  const tempUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div className="weather-display">
      {currentWeather && (
        <div className="current-weather">
          <h2>Current Weather in {currentWeather.name}</h2>
          <p>Temperature: {currentWeather.main.temp}{tempUnit}</p>
          <p>Weather: {currentWeather.weather[0].description}</p>
        </div>
      )}
      <h3>5-Day Forecast:</h3>
      {forecast && forecast.map((day, index) => (
        <div className="forecast" key={index}>
          <p>{day.dt_txt}</p>
          <p>Temp: {day.main.temp}{tempUnit}</p>
          <p>Condition: {day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDisplay;
