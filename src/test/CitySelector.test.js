import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySelector from '../components/CitySelector';


beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ name: 'city1', label: 'City 1' }, { name: 'city2', label: 'City 2' }]),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('CitySelector', () => {
  it('renders correctly', async () => {
    render(<CitySelector onCitySelect={() => {}} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Select a city' })).toBeInTheDocument();
  });

  it('displays options after fetching cities', async () => {
    render(<CitySelector onCitySelect={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText('City 1')).toBeInTheDocument();
      expect(screen.getByText('City 2')).toBeInTheDocument();
    });
  });

  it('allows user to select a city', async () => {
    const mockOnCitySelect = jest.fn();
    render(<CitySelector onCitySelect={mockOnCitySelect} />);

    await waitFor(() => {
      userEvent.selectOptions(screen.getByRole('combobox'), 'city1');
    });

    expect(mockOnCitySelect).toHaveBeenCalledWith({ name: 'city1', label: 'City 1' });
  });
});
