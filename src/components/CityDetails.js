import React from 'react';

function CityDetails({ city }) {
    console.log(city);
  if (!city) {
    return <p>No city selected</p>;
  }

  // Assuming the city object contains name, label, and description
  return (
    <div>
      <h2>Details for {city.label}</h2>
      <p>{city.description}</p>
      {/* Display more details as needed */}
    </div>
  );
}

export default CityDetails;
