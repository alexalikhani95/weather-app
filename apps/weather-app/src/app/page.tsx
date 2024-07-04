"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherData, WeatherState } from '../../types/Weather';
import WeatherInfoCard from './components/WeatherInfoCard';
import { Line } from 'rc-progress';
import Sidebar from './components/Sidebar';
import FiveDayForecast from './components/FiveDayForecast';

export default function Index() {
  const [weatherState, setWeatherState] = useState<WeatherState>({
    weatherData: [],
    cityName: '',
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const { data } = await axios.get<WeatherData>('/api/weather');
        setWeatherState({
          weatherData: data.days || [],
          cityName: data.address,
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  const { cityName, weatherData } = weatherState;

  const currentDay = weatherData.length > 0 ? weatherData[0] : null;

  const progressBarStyle = {
    width: '100%',
    height: '20px',
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#100E1D', height: '100%', color: 'white' }}>
      {currentDay && <Sidebar  cityName={cityName} currentDay={currentDay} />}

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <div style={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Day Overview</h2>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', maxWidth: '800px' }}>
          {currentDay && (
            <>
              <div style={{ backgroundColor: '#1F1C36', color: 'white', padding: '20px', margin: '10px', borderRadius: '10px', width: '45%', textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>Humidity</div>
                <div style={{ fontSize: '24px', marginTop: '5px', marginBottom: '5px' }}>{currentDay.humidity}%</div>
                <Line
                  percent={currentDay.humidity}
                  strokeWidth={4}
                  strokeColor={currentDay.humidity >= 50 ? 'green' : 'yellow'}
                  trailWidth={4}
                  trailColor='#D9D9D9'
                  style={progressBarStyle}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                  <p>0</p>
                  <p>100</p>
                </div>
              </div>

              <div style={{ backgroundColor: '#1F1C36', color: 'white', padding: '20px', margin: '10px', borderRadius: '10px', width: '45%', textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>Cloud Cover</div>
                <div style={{ fontSize: '24px', marginTop: '5px', marginBottom: '5px' }}>{currentDay.cloudcover}%</div>
                <Line
                  percent={currentDay.cloudcover}
                  strokeWidth={4}
                  strokeColor={currentDay.cloudcover >= 50 ? 'green' : 'yellow'}
                  trailWidth={4}
                  trailColor='#D9D9D9'
                  style={progressBarStyle}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                  <p>0</p>
                  <p>100</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '800px', marginTop: '20px' }}>
          {currentDay && (
            <>
              <WeatherInfoCard title="Max Temp" value={`${Math.round(currentDay.tempmax)}°C`} />
              <WeatherInfoCard title="Min Temp" value={`${Math.round(currentDay.tempmin)}°C`} />
              <WeatherInfoCard title="Sunrise" value={currentDay.sunrise.split(':').slice(0, 2).join(':')} />
              <WeatherInfoCard title="Sunset" value={currentDay.sunset.split(':').slice(0, 2).join(':')} />
            </>
          )}
        </div>

          <FiveDayForecast weatherData={weatherData} />
      </div>
    </div>
  );
}
