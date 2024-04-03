import React, { useState, useEffect } from 'react';
import '../CitySelector.css';

/**
 * A component for selecting a city from a dropdown list.
 * 
 * It fetches a list of cities from a backend upon component mounting and populates
 * a dropdown select element with these cities. When a city is selected, it calls the
 * `onCitySelect` callback function, passing the selected city object to it.
 * 
 * @param {Object} props - Component props.
 * @param {function} props.onCitySelect - Callback function to be called with the selected city object.
 */
function CitySelector({ onCitySelect }) {
  // State to hold the list of cities fetched from the backend
  const [cities, setCities] = useState([]);

  // useEffect hook to fetch the list of cities when the component mounts
  useEffect(() => {
    // Fetch cities from the backend API endpoint
    fetch('https://frozen-sea-07084-acf2dc3cd045.herokuapp.com/api/cities')
      .then(response => response.json()) // Parse the JSON response
      .then(setCities) // Update the cities state with the fetched data
      .catch(console.error); // Log any errors to the console
  }, []); // The empty dependency array ensures this effect runs only once after initial render

  /**
   * Handles changes to the select element.
   * Finds the selected city object based on the select element's value and calls
   * the `onCitySelect` callback function with this city object.
   * 
   * @param {Event} event - The change event from the select element.
   */
  const handleChange = (event) => {
    const city = cities.find(c => c.name === event.target.value); // Find the city object that matches the selected value
    onCitySelect(city); // Call the onCitySelect callback with the selected city
  };

  // Render a dropdown select element populated with cities
  return (
    <div className="select-container">
      <select onChange={handleChange} defaultValue="">
        {/* Default option that prompts user to select a city */}
        <option value="" disabled>Select a city</option>
        {/* Map through the cities state to render an option for each city */}
        {cities.map((city) => (
          <option key={city.name} value={city.name}>{city.label}</option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector; // Export CitySelector for use in other components
