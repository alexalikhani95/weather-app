import React from 'react';
import { formatDate } from '../../../utils/FormatDate';
import { WeatherDay } from '../../../types/Weather';

type SidebarProps = {
  cityName: string;
  currentDay: WeatherDay;
};

const Sidebar = ({ cityName, currentDay }: SidebarProps) => {
  return (
    <div
      style={{ width: '300px', backgroundColor: '#1F1C36', padding: '20px' }}
    >
      <div
        style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}
      >
        {cityName.charAt(0).toUpperCase() + cityName.slice(1)}
      </div>
      <div style={{ marginBottom: '10px' }}>
        {formatDate(new Date().toISOString())}
      </div>
      {currentDay && (
        <>
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
          >
            {Math.round(currentDay.temp)}°C
          </div>
          <div>{currentDay.conditions}</div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
