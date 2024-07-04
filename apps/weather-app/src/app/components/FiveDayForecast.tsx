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
        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>
          5 Day Forecast
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
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
                width: '150px',
                height: '300px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              data-testid={`weather-card-${index}`}
            >
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                {index === 0 ? 'Tomorrow' : formatDate(day.datetime)}
              </div>
              <div>{day.conditions}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div data-testid={`max-temp-${index}`}>{Math.round(day.tempmax)}°C</div>
                <div data-testid={`min-temp-${index}`}>{Math.round(day.tempmin)}°C</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default FiveDayForecast;
