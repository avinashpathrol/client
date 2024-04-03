import React, { useState } from 'react';
import './App.css';
import CitySelector from './components/CitySelector';
import CityDetails from './components/CityDetails';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    console.log(`Selected city: ${city.label}`);
  };

  return (
    <div className="App">
      <div className="gradient-card">
      <h1 className="heading">Travel Planner</h1> {/* Add this line */}
        <div className="card-container">
          <div className="card dropdown">
            <CitySelector onCitySelect={handleCitySelect} />
          </div>
          
          <div className="card details">
            {selectedCity ? (
              <CityDetails city={selectedCity} />
            ) : (
              <p>Select a city to view details.</p>
            )}
          </div>
          
          <div className="card weather">
            {selectedCity ?( <WeatherDetails city={selectedCity} />
            ):(<p>Weather Details</p>)  
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
