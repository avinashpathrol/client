import React, { useState } from 'react';
import './App.css';
import CitySelector from './components/CitySelector';
import CityDetails from './components/CityDetails';
import WeatherDetails from './components/WeatherDetails';
function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city); // Assuming city is now an object
    console.log(`Selected city: ${city.label}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Travel Planner</h1>
        <CitySelector onCitySelect={handleCitySelect} />
        <CityDetails city={selectedCity} />
        {selectedCity && <WeatherDetails city={selectedCity} />}
      </header>
    </div>
  );
}

export default App;
