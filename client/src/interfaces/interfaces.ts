export interface IWeatherData {
  location: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
}

export interface WeatherComponentProps {
  latitude: number;
  longitude: number;
}
