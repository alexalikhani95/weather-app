import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Sidebar from '../src/app/components/Sidebar';
import { WeatherDay } from '../types/Weather';
import { formatDate } from '../utils/FormatDate';

describe('Sidebar', () => {
  const mockWeatherDay: WeatherDay = {
    datetime: '2024-07-04',
    temp: 25,
    tempmax: 28,
    tempmin: 22,
    humidity: 70,
    cloudcover: 50,
    sunrise: '06:00',
    sunset: '20:00',
    conditions: 'Sunny',
  };

  it('should render successfully', () => {
    render(<Sidebar cityName="brighton" currentDay={mockWeatherDay} onCityChange={jest.fn()} />);
    
    expect(screen.getByText('Brighton')).toBeInTheDocument();
    
    expect(screen.getByText(formatDate(new Date().toISOString()))).toBeInTheDocument();
    
    expect(screen.getByText('25°C')).toBeInTheDocument();
    
    expect(screen.getByText('Sunny')).toBeInTheDocument();
  });

  it('should update the input value on change', () => {
    render(<Sidebar cityName="brighton" currentDay={mockWeatherDay} onCityChange={jest.fn()} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'london' } });
    
    expect(input).toHaveValue('london');
  });

  it('should call onCityChange with the new city when form is submitted', () => {
    const onCityChangeMock = jest.fn();
    render(<Sidebar cityName="brighton" currentDay={mockWeatherDay} onCityChange={onCityChangeMock} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'london' } });
    
    const button = screen.getByRole('button', { name: /change/i });
    fireEvent.click(button);
    
    expect(onCityChangeMock).toHaveBeenCalledWith('london');
  });
});
