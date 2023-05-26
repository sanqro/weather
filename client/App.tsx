import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import WeatherComponent from "./src/components/weather";
import { withExpoSnack, styled } from "nativewind";
import { Text, View, ActivityIndicator } from "react-native";

const App: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const StyledView = styled(View);
  const StyledText = styled(Text);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          console.log("Permission to access location was denied");
          setIsLoading(false);
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        setIsLoading(false);
      } catch (error) {
        console.log("Error getting location", error);
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      // default styling react native because it does not work properly with native wind
      <StyledView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <StyledText>Loading...</StyledText>
      </StyledView>
    );
  }

  if (latitude === null || longitude === null) {
    return (
      <StyledView>
        <StyledText>Error fetching location.</StyledText>
      </StyledView>
    );
  }

  return <WeatherComponent latitude={latitude} longitude={longitude} />;
};

export default withExpoSnack(App);
