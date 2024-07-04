import React, { useState } from 'react';
import { formatDate } from '../../../utils/FormatDate';
import { WeatherDay } from '../../../types/Weather';

type SidebarProps = {
  cityName: string;
  currentDay: WeatherDay;
  onCityChange: (newCity: string) => void;
};

const Sidebar = ({ cityName, currentDay, onCityChange }: SidebarProps) => {
  const [inputCity, setInputCity] = useState(cityName);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCity(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCityChange(inputCity);
  };

  return (
    <div style={{ width: '300px', backgroundColor: '#1F1C36', padding: '20px' }}>
      <form onSubmit={handleFormSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          type="text"
          value={inputCity}
          onChange={handleInputChange}
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            fontSize: '16px',
            marginRight: '10px',
          }}
        />
        <button type="submit" style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#4A4A4A', border: 'none', color: 'white', cursor: 'pointer' }}>
            Change
        </button>
      </form>
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
        {cityName.charAt(0).toUpperCase() + cityName.slice(1)}
      </div>
      <div style={{ marginBottom: '10px' }}>
        {formatDate(new Date().toISOString())}
      </div>
      {currentDay && (
        <>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
            {Math.round(currentDay.temp)}°C
          </div>
          <div>{currentDay.conditions}</div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
