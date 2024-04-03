import React from 'react';

/**
 * Displays details for a selected city.
 * 
 * This component is responsible for rendering the details of a city that has been selected.
 * It expects a `city` object as a prop, which contains details like the city's label and description.
 * If no city is selected (i.e., `city` is null or undefined), it renders a message indicating
 * that no city has been selected.
 * 
 * @param {Object} props - Component props.
 * @param {Object|null} props.city - The selected city object. Must have `label` and `description` properties.
 *                                   `null` if no city is selected.
 * @returns {React.Element} The rendered component.
 */
function CityDetails({ city }) {
  // Conditionally render content based on whether a city has been selected
  if (!city) {
    // Render a fallback message if no city is selected
    return <p>No city selected</p>;
  }

  // Render the details of the selected city
  return (
    <div>
      <h2>Details for {city.label}</h2> {/* Display the city's label */}
      <p>{city.description}</p> {/* Display the city's description */}
    </div>
  );
}

export default CityDetails; // Export the CityDetails component for use in other parts of the application
