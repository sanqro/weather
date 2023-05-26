import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styled } from "nativewind";
import { IWeatherData, WeatherComponentProps } from "../interfaces/interfaces";

const StyledView = styled(View);
const StyledText = styled(Text);

const WeatherComponent: React.ComponentType<WeatherComponentProps> = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://weather.sanqro.me/weather/get/${latitude}/${longitude}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  if (!weatherData) {
    return null;
  }

  return (
    <StyledView className="flex items-center justify-center h-full">
      <StyledText className="font-bold text-4xl">{weatherData.location}</StyledText>
      <StyledText className="text-2xl">Temp {weatherData.temperature}</StyledText>
      <StyledText className="text-2xl">Feels Like {weatherData.feelsLike}</StyledText>
      <StyledText className="text-2xl" style={{ opacity: 0.8 }}>
        {weatherData.humidity}
      </StyledText>
    </StyledView>
  );
};

export default WeatherComponent;
