import { View } from "react-native";

import MapView from "react-native-maps";

const INITIAL_REGION = {
  latitude: 45.76,
  longitude: 21.22,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export default function MapScreen() {
  return (
    <View className="h-full w-full bg-red-500">
      <MapView
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
        style={{ width: "100%", height: "100%" }}
      ></MapView>
    </View>
  );
}
