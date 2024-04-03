import React, { useState } from 'react';
import './App.css';
// Importing child components used within the App component
import CitySelector from './components/CitySelector';
import CityDetails from './components/CityDetails';
import WeatherDetails from './components/WeatherDetails';

// The main App component that serves as the root of your application
function App() {
  // State for managing the currently selected city
  const [selectedCity, setSelectedCity] = useState(null);

  /**
   * Handles selection of a city from the CitySelector component.
   * It updates the selectedCity state with the selected city object.
   *
   * @param {Object} city - The city object selected from the CitySelector.
   */
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    console.log(`Selected city: ${city.label}`);
  };

  // Render method for the App component
  return (
    <div className="App">
      <div className="gradient-card">
        <h1 className="heading">Travel Planner</h1> 
        <div className="card-container">
          {/* Dropdown for selecting a city */}
          <div className="card dropdown">
            <CitySelector onCitySelect={handleCitySelect} />
          </div>
          
          {/* Container for displaying details of the selected city */}
          <div className="card details">
            {selectedCity ? (
              <CityDetails city={selectedCity} />
            ) : (
              <p>Select a city to view details.</p>
            )}
          </div>
          
          {/* Container for displaying weather details of the selected city */}
          <div className="card weather">
            {selectedCity ? (
              <WeatherDetails city={selectedCity} />
            ) : (
              <p>Weather Details</p>  
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; // Exports the App component for use in other parts of the application
