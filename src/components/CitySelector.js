import React, { useState, useEffect } from 'react';

function CitySelector({ onCitySelect }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch cities from the backend
    fetch('http://localhost:3001/api/cities')
      .then(response => response.json())
      .then(setCities)
      .catch(console.error);
  }, []);

  const handleChange = (event) => {
    // Find the full city object matching the selected value
    const city = cities.find(c => c.name === event.target.value);
    onCitySelect(city); // Pass the entire city object to the handler
  };

  return (
    <div className="select-container">
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>Select a city</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>{city.label}</option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
