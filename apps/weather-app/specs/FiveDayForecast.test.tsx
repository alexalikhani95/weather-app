import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FiveDayForecast from '../src/app/components/FiveDayForecast';

describe('FiveDayForecast', () => {
  const mockWeatherData = [
    {
      datetime: '2024-07-04',
      temp: 25,
      tempmax: 27,
      tempmin: 21,
      humidity: 70,
      cloudcover: 50,
      sunrise: '06:00',
      sunset: '20:00',
      conditions: 'Sunny',
    },
    {
      datetime: '2024-07-05',
      temp: 23,
      tempmax: 27,
      tempmin: 21,
      humidity: 70,
      cloudcover: 50,
      sunrise: '06:00',
      sunset: '20:00',
      conditions: 'Sunny',
    },
    {
      datetime: '2024-07-06',
      temp: 27,
      tempmax: 29,
      tempmin: 23,
      humidity: 70,
      cloudcover: 50,
      sunrise: '06:00',
      sunset: '20:00',
      conditions: 'Sunny',
    },
    {
      datetime: '2024-07-07',
      temp: 28,
      tempmax: 30,
      tempmin: 24,
      humidity: 70,
      cloudcover: 50,
      sunrise: '06:00',
      sunset: '20:00',
      conditions: 'Sunny',
    },
    {
      datetime: '2024-07-08',
      temp: 29,
      tempmax: 31,
      tempmin: 25,
      humidity: 70,
      cloudcover: 50,
      sunrise: '06:00',
      sunset: '20:00',
      conditions: 'Sunny',
    },
  ];

  it('should render successfully', () => {
    render(<FiveDayForecast weatherData={mockWeatherData} />);

    // Check heading
    expect(screen.getByText('5 Day Forecast')).toBeInTheDocument();

    // Check temperature values in the first card
    expect(screen.getByTestId('max-temp-0')).toHaveTextContent('27°C');
    expect(screen.getByTestId('min-temp-0')).toHaveTextContent('21°C');
  });
});
