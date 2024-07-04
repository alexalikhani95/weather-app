import React from 'react';
import { formatDate } from '../../../utils/FormatDate';
import { WeatherDay } from '../../../types/Weather';

type FiveDayForecastProps = {
  weatherData: WeatherDay[];
};

const FiveDayForecast = ({ weatherData }: FiveDayForecastProps) => {
  return (
    <>
      <div style={{ color: 'white', marginTop: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>5 Day Forecast</h2>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '800px',
        }}
      >
        {weatherData.length > 0 &&
          weatherData.slice(1, 6).map((day, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1F1C36',
                color: 'white',
                padding: '20px',
                margin: '10px',
                textAlign: 'center',
                width: '200px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                }}
              >
                {index === 0 ? 'Tomorrow' : formatDate(day.datetime)}
              </div>
              <div style={{ marginBottom: '10px' }}>{day.conditions}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>High: {Math.round(day.tempmax)}°C</div>
                <div>Low: {Math.round(day.tempmin)}°C</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FiveDayForecast;
