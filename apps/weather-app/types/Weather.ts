type WeatherDay = {
  datetime: string;
  temp: number;
  tempmax: number;
  tempmin: number;
  conditions: string;
  sunrise: string;
  sunset: string;
};

export type WeatherData = {
  days: WeatherDay[];
  address: string;
};

export type WeatherState = {
  weatherData: WeatherDay[];
  cityName: string;
};
