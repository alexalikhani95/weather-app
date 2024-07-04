type WeatherDay = {
  datetime: string;
  tempmax: number;
  tempmin: number;
  conditions: string;
};

type CurrentWeather = {
  temp: number;
  conditions: string;
};

export type WeatherData = {
  days: WeatherDay[];
  currentConditions: CurrentWeather;
  address: string;
};

export type WeatherState = {
  weatherData: WeatherDay[];
  currentWeather: CurrentWeather | null;
  cityName: string;
};
