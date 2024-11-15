import React, { useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  BadgeCheck,
  BriefcaseMedical,
  Clock,
  FireExtinguisher,
  HeartPulse,
  Plus,
  TriangleAlert,
  User,
  Users,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { Button } from "@/components/ui/button";
import { IUtil } from "@/types/util";
import { getUtils } from "@/actions/util";
import { IGroup } from "@/types/group";
import { getGroups } from "@/actions/group";
import { GenericUtils } from "@/generics/util";
import { GenericGroups } from "@/generics/group";

const INITIAL_REGION = {
  latitude: 45.75719888144093,
  longitude: 21.228961458729717,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
interface IMarker {
  id: string;
  name: string;
  locationName: string;
  locationPhoto: string;
  type: "util" | "group";
}

const utilTitles: { [key in IUtil["type"]]: string } = {
  oxygen: "Oxygen Supply",
  defibrillator: "Defibrillator",
  medkit: "Medical Kit",
  group: "Group",
};

export default function IndexScreen() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [utils, setUtils] = useState<IUtil[]>([]);
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<IMarker | null>(null);

  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleMarkerPress = <T extends IUtil | IGroup>(marker: T) => {
    if ("geolocationX" in marker) {
      setSelectedMarker({
        id: marker.id,
        name: marker.name,
        locationName: marker.location,
        locationPhoto: marker.description,
        type: "group",
      });
    } else {
      setSelectedMarker({
        id: marker.id,
        name: utilTitles[marker.type as IUtil["type"]],
        locationName: marker.locationName,
        locationPhoto: marker.locationPhoto,
        type: "util",
      });
    }

    handlePresentModalPress();
  };

  const snapPoints = React.useMemo(() => ["25%", "52%", "70%"], []);

  React.useEffect(() => {
    setUtils(GenericUtils);

    setGroups(GenericGroups);
    /*
    getUtils().then((data) => {
      console.log("MAP_UTILS: ", data);
      setUtils(data);
    });

    getGroups().then((data) => {
      console.log("MAP_GROUPS: ", data);
      setGroups(data);
    });*/
  }, []);

  if (utils.length === 0 || groups.length === 0) {
    return <Text>Loading...</Text>;
  }

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
        {utils.map((util) => (
          <Marker
            key={util.id}
            coordinate={{
              latitude: util.coordinates.first,
              longitude: util.coordinates.second,
            }}
            title={util.type}
            description={util.locationName}
            onPress={() => handleMarkerPress(util)}
          >
            <View className="flex h-8 w-8 items-center justify-center rounded-full bg-primary p-6">
              {util.type === "oxygen" && (
                <FireExtinguisher color="white" size={24} />
              )}
              {util.type === "defibrillator" && (
                <HeartPulse color="white" size={24} />
              )}
              {util.type === "medkit" && (
                <BriefcaseMedical color="white" size={24} />
              )}
              {util.type === "group" && <Users color="white" size={24} />}
            </View>
          </Marker>
        ))}

        {groups.map((group) => (
          <Marker
            key={group.id}
            coordinate={{
              latitude: group.geolocationX,
              longitude: group.geolocationY,
            }}
            title={group.name}
            description={group.location}
            onPress={() => handleMarkerPress(group)}
          >
            <View className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary p-6">
              <Users size={24} color="white" />
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
                  {selectedMarker?.name}
                </Text>
                <BadgeCheck
                  fill={Colors.dark.primary}
                  color={Colors.dark.text_white}
                  size={24}
                />
              </View>
              <View className="flex w-full flex-row items-center justify-start gap-x-2">
                <Text className="text-xl font-medium text-text-foreground">
                  near {selectedMarker?.locationName}
                </Text>
              </View>
            </View>

            <Image
              source={selectedMarker?.locationPhoto}
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
