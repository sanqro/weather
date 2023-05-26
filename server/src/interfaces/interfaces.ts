export interface WeatherData {
  location?: {
    name: string;
  };
  current?: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
  };
}
