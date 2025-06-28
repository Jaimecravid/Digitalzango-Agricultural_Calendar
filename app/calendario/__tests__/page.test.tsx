import { render, screen } from '@testing-library/react';
import CalendarioPage from '../page';

// Mock the contexts and components
jest.mock('../../contexts/region-context', () => ({
  RegionProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useRegion: () => ({
    getCurrentRegion: () => ({ name: 'Luanda', capital: 'Luanda' }),
  }),
}));

jest.mock('../../contexts/weather-context', () => ({
  WeatherProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('CalendarioPage', () => {
  it('should render the calendar with default values', () => {
    render(<CalendarioPage />);
    expect(screen.getByText('Calendário Agrícola')).toBeInTheDocument();
  });

  it('should render region selector label', () => {
    render(<CalendarioPage />);
    expect(screen.getByText('Selecione a Província')).toBeInTheDocument();
  });
});
