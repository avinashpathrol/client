import React, { useState, useEffect } from 'react';

/**
 * A component that displays weather details for a selected city.
 * 
 * It fetches weather data from a backend service for the provided city and displays the weather
 * description, an icon representing the weather, and the temperature in Celsius. If there's an error
 * during data fetching, it displays an error message. While fetching data, it shows a loading message.
 * 
 * @param {Object} props - Component props.
 * @param {Object} props.city - The city object for which to fetch and display weather data.
 */
function WeatherDetails({ city }) {
  // State to hold weather data
  const [weather, setWeather] = useState(null);
  // State to hold any error that occurs while fetching weather data
  const [error, setError] = useState('');

  useEffect(() => {
    // Asynchronously fetches weather data for the city
    const fetchWeather = async () => {
      // If no city is selected, early return
      if (!city || !city.label) return;

      try {
        // Fetch weather data from the backend service using the city label
        const weatherResponse = await fetch(`https://frozen-sea-07084-acf2dc3cd045.herokuapp.com/weather/${encodeURIComponent(city.label)}`);
        const weatherData = await weatherResponse.json();
        
        // If the response is not OK, throw an error with the message from the response or a default message
        if (!weatherResponse.ok) throw new Error(weatherData.message || 'Failed to fetch weather data');
        
        // Set the fetched weather data to state
        setWeather(weatherData);
      } catch (error) {
        // Log the error and set an error message to be displayed
        console.error('Weather fetching error:', error);
        setError('Failed to load weather data');
      }
    };

    // Call the fetchWeather function
    fetchWeather();
  }, [city]); // Depend on the city prop so that the effect runs when the selected city changes

  // Render an error message if there's an error
  if (error) return <p>{error}</p>;

  // Render a loading message if weather data is not yet available or if there's no weather information
  if (!weather || !weather.weather || weather.weather.length === 0) {
    return <p>Loading weather...</p>;
  }

  // Calculate the temperature in Celsius
  const tempCelsius = (weather.main.temp - 273.15).toFixed(2);

  // Render the weather details
  return (
    <div>
      <h3>Weather in {city.label}</h3> {/* Display the city name */}
      <p>{weather.weather[0].description}</p> {/* Weather description */}
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" /> {/* Weather icon */}
      <p>Temperature: {tempCelsius}°C</p> {/* Temperature in Celsius */}
    </div>
  );
}

export default WeatherDetails; // Export WeatherDetails for use in other parts of the application
