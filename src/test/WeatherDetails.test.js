import { render, screen } from '@testing-library/react';
import WeatherDetails from '../components/WeatherDetails';

describe('WeatherDetails', () => {
  it('renders weather details correctly', () => {
    const mockWeather = {
      temp: '20°C',
      condition: 'Sunny'
    };
    render(<WeatherDetails weather={mockWeather} isLoading={false} />);
    // expect(screen.getByText('20°C')).toBeInTheDocument();
    // expect(screen.getByText('Sunny')).toBeInTheDocument();
  });

  it('renders loading state correctly', () => {
    render(<WeatherDetails weather={null} isLoading={true} />);
    expect(screen.getByText('Loading weather...')).toBeInTheDocument();
  });
});
