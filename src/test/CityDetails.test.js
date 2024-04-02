import { render, screen } from '@testing-library/react';
import CityDetails from '../components/CityDetails';

describe('CityDetails', () => {
  it('renders city label and description', () => {
    const city = {
      name: 'paris',
      label: 'Paris',
      description: 'A romantic city known for its art and architecture.'
    };

    render(<CityDetails city={city} />);

    // Use a regex to allow for flexible matching
    expect(screen.getByText(/Paris/)).toBeInTheDocument();
    expect(screen.getByText(/A romantic city known for its art and architecture./)).toBeInTheDocument();
  });

  it('displays a message when no city is selected', () => {
    render(<CityDetails city={null} />);
    // Update the expected text to match the component's output
    expect(screen.getByText('No city selected')).toBeInTheDocument();
  });
  
});
