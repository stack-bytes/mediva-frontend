import { Header } from "@/components/header";
import { Gradient } from "@/components/images";
import { Image, ImageBackground } from "expo-image";
import { SafeAreaView, ScrollView, View } from "react-native";

import { ClipboardPlus } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { IIllness } from "@/types/illness";
import { GenericIllnesses } from "@/generics/illness";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";

export default function PrescriptionScreen() {
  const { illnessId } = useLocalSearchParams<{ illnessId: string }>();

  const [illness, setIllness] = React.useState<null | IIllness>(null);

  React.useEffect(() => {
    // Fetch the illness by ID
    setIllness(GenericIllnesses[0]);
  }, []);

  if (!illness) {
    return <Text>Couldn't find illness</Text>;
  }

  return (
    <ImageBackground
      style={{
        height: "100%",
        width: "100%",
      }}
      source={Gradient}
    >
      <SafeAreaView className="flex h-full w-full flex-1 items-center gap-y-4">
        <ScrollView
          className="flex h-full w-full"
          contentContainerStyle={{
            display: "flex",
            rowGap: 20,
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
          decelerationRate={0.25}
        >
          <Header
            icon={<ClipboardPlus />}
            title={illness.name}
            subtitle="Prescription details for the illness"
            icon_color={Colors.dark.secondary}
          />

          <Separator className="w-[40%]" />

          <View className="w-full gap-y-4 px-8">
            <SectionHeader title="Prescription" />
            <Card className="h-32 w-full">
              <Image
                source="https://www.researchgate.net/publication/345830022/figure/fig4/AS:957640029003789@1605330583881/Sample-prescription-used-as-input-to-the-GUI-developed-in-the-present-work.png"
                style={{
                  width: "100%",
                  height: "100%",
                  flex: 1,
                  position: "absolute",
                }}
              />
              <Badge
                className="flex h-12 flex-row gap-x-2 bg-card"
                variant="outline"
              >
                <Text className="tex-2xl text-text-primary">
                  Digitally signed by Dr. Mike Richard (View)
                </Text>
              </Badge>
            </Card>
          </View>

          <View className="w-full gap-y-4 px-8">
            <SectionHeader title="QR Code" />
            <View className="flex w-full flex-row items-center justify-center gap-x-4">
              <Card className="max-w-[75%] px-4">
                <Image
                  source={require("@/assets/images/qr-code.png")}
                  style={{
                    aspectRatio: 1 / 1,
                    width: "100%",
                    resizeMode: "contain",
                  }}
                />
                <Text className="text-2xl font-semibold text-text-primary">
                  ID: SF18DK294KC93K
                </Text>
              </Card>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
