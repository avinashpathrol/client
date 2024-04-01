import React, { useState, useEffect } from 'react';

function WeatherDetails({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city && city.lat && city.lon) {
      fetch(`http://localhost:3001/weather?lat=${city.lat}&lon=${city.lon}`)
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
        })
        .catch((error) => {
          console.error(error);
          setError('Failed to load weather data');
        });
    }
  }, [city]);
  

  if (error) {
    return <p>{error}</p>;
  }

  // Ensure weather data is loaded before trying to access it
  if (!weather || !weather.current || !weather.current.condition) {
    return <p>Loading weather...</p>;
  }

  return (
    <div>
      <h3>Weather in {city.label}</h3>
      <p>{weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt="Weather icon" />
      <p>Temperature: {weather.current.temp_c}°C</p>
      {/* Display more weather details as needed */}
    </div>
  );
}

export default WeatherDetails;
