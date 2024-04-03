import React, { useState, useEffect } from 'react';

function WeatherDetails({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city || !city.label) return;

      try {
        const weatherResponse = await fetch(`https://frozen-sea-07084-acf2dc3cd045.herokuapp.com/weather/${encodeURIComponent(city.label)}`);
        const weatherData = await weatherResponse.json();
        if (!weatherResponse.ok) throw new Error(weatherData.message || 'Failed to fetch weather data');
        setWeather(weatherData);
      } catch (error) {
        console.error('Weather fetching error:', error);
        setError('Failed to load weather data');
      }
    };

    fetchWeather();
  }, [city]);

  if (error) return <p>{error}</p>;

  if (!weather || !weather.weather || weather.weather.length === 0) {
    return <p>Loading weather...</p>;
  }

  const tempCelsius = (weather.main.temp - 273.15).toFixed(2);

  return (
    <div>
      <h3>Weather in {city.label}</h3>
      <p>{weather.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
      <p>Temperature: {tempCelsius}°C</p>
    </div>
  );
}

export default WeatherDetails;
