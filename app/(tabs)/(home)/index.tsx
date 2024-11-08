import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { SafeAreaView } from "react-native";

import { Text } from "@/components/ui/text";

export default function HomeScreen() {
  return (
    <ImageBackground
      className="absolute h-full w-full"
      contentFit="contain"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: 20,
      }}
      source={Gradient}
    >
      <SafeAreaView className="flex h-full w-full gap-y-10">
        <Text className="text-white">Test</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}
