import React from 'react';

function CityDetails({ city }) {
  if (!city) {
    return <p>No city selected</p>;
  }

  return (
    <div>
      <h2>Details for {city.label}</h2>
      <p>{city.description}</p>
    </div>
  );
}

export default CityDetails;
