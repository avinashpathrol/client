import { render, screen } from '@testing-library/react';
import WeatherDetails from '../components/WeatherDetails';

describe('WeatherDetails', () => {
  it('renders weather details correctly', () => {
    const mockWeather = {
      temp: '20°C',
      condition: 'Sunny'
    };
    // Ensure isLoading is set to false to bypass the loading state
    render(<WeatherDetails weather={mockWeather} isLoading={false} />);
    expect(screen.getByText('20°C')).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();
  });

  it('renders loading state correctly', () => {
    // Explicitly passing isLoading true to simulate loading state
    render(<WeatherDetails weather={null} isLoading={true} />);
    expect(screen.getByText('Loading weather...')).toBeInTheDocument();
  });
});
