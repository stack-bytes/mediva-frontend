import React, { useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  BadgeCheck,
  Clock,
  HeartPulse,
  Plus,
  TriangleAlert,
  User,
  Users,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { Button } from "@/components/ui/button";

const INITIAL_REGION = {
  latitude: 45.75719888144093,
  longitude: 21.228961458729717,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const markers = [
  {
    id: "1",
    title: "Defribillator",
    description: "Nicoale Balcescu 1",
    coordinate: { latitude: 45.75719888144093, longitude: 21.228961458729717 },
  },
  {
    id: "2",
    title: "Marker 2",
    description: "Description 2",
    coordinate: { latitude: 37.78825, longitude: -122.4324 },
  },
  // Add more markers as needed
];

export default function IndexScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    handlePresentModalPress();
  };

  const snapPoints = React.useMemo(() => ["25%", "52%", "70%"], []);

  return (
    <View className="h-full w-full bg-red-500">
      <View className="absolute right-3 top-[15%] z-50 flex w-fit flex-col items-center justify-center gap-y-4">
        <Pressable className="flex aspect-square h-16 w-16 items-center justify-center rounded-3xl bg-primary">
          <Plus color="white" size={36} />
        </Pressable>
        <Pressable className="flex aspect-square h-16 w-16 items-center justify-center rounded-3xl bg-secondary">
          <Users color="white" size={36} />
        </Pressable>
      </View>

      <MapView
        initialRegion={INITIAL_REGION}
        showsUserLocation
        style={{ flex: 1 }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            onPress={() => handleMarkerPress(marker)}
          >
            <View className="flex h-8 w-8 items-center justify-center rounded-full bg-primary p-6">
              <HeartPulse color="white" size={24} />
            </View>
          </Marker>
        ))}
      </MapView>

      <BottomSheetModalProvider>
        <BottomSheetModal
          index={1}
          snapPoints={snapPoints}
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}
        >
          <BottomSheetView
            style={{
              flex: 1,
              padding: 20,
              alignItems: "center",
              zIndex: 100,
              height: 70,
              flexDirection: "column",
              rowGap: 20,
            }}
          >
            <View className="w-full">
              <View className="flex w-full flex-row items-center justify-start gap-x-2">
                <Text className="text-3xl font-semibold text-text-primary">
                  Heart defribillator
                </Text>
                <BadgeCheck
                  fill={Colors.dark.primary}
                  color={Colors.dark.text_white}
                  size={24}
                />
              </View>
              <View className="flex w-full flex-row items-center justify-start gap-x-2">
                <Text className="text-xl font-medium text-text-foreground">
                  near Strada Porumbacului nr. 56-60
                </Text>
              </View>
            </View>

            <Image
              source={require("@/assets/images/map.png")}
              style={{
                width: "100%",
                height: 150,
                borderRadius: 20,
              }}
            />

            <View className="w-full flex-row items-center justify-center gap-x-10">
              <View className="flex w-fit flex-row items-center justify-start gap-x-2">
                <Clock color={Colors.dark.primary} size={24} />
                <Text className="text-xl font-semibold text-text-primary">
                  24/7
                </Text>
              </View>

              <View className="flex w-fit flex-row items-center justify-start gap-x-2">
                <User color={Colors.dark.primary} size={24} />
                <Text className="text-xl font-semibold text-text-primary">
                  155
                </Text>
              </View>
            </View>

            <Button className="w-full">
              <TriangleAlert color={Colors.dark.text_white} size={24} />
              <Text className="text-lg font-medium text-text-white">
                Report an issue
              </Text>
            </Button>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
}
