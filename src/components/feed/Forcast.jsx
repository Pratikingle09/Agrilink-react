import React, { useState, useEffect } from 'react';

import './forcast.css'

function Forcast() {
  const [weather, setWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      }, () => {
        setErrorMessage('Geolocation is not supported by this browser.');
      });
    } else {
      setErrorMessage('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d9ac7e81afaa607af356f9ce0db02af2`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setErrorMessage('Failed to fetch weather data.');
    }
  };

  return (
    <div>
      {weather ? (
        <div className="weather-card">
          <div className="header">
            <h2>Weather in {weather.name}, {weather.sys.country}</h2>
          </div>
          <div className="weather-icon">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          </div>
          <div className="details">
            <p><strong>Temperature:</strong> {(weather.main.temp - 273.15).toFixed(2)} °C</p>
            <p><strong>Feels Like:</strong> {(weather.main.feels_like - 273.15).toFixed(2)} °C</p>
            <p><strong>Humidity:</strong> {weather.main.humidity} %</p>
            <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
            <p><strong>Weather:</strong> {weather.weather[0].description}</p>
          </div>
        </div>
      ) : (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Forcast
