import { Header } from "@/components/header";
import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { SafeAreaView, SectionList, View } from "react-native";

import { Button } from "@/components/ui/button";

import { ClipboardPlus, Filter } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";

import { useRouter } from "expo-router";
import { IIllness, ISymptomReport } from "@/types/illness";
import { GenericIllnesses, GenericSymptomReports } from "@/generics/illness";
import { SymptomCard } from "@/components/cards/symptom-card";

export default function IllnessesScreen() {
  const router = useRouter();

  const [illnesses, setIllnesses] = React.useState<null | IIllness[]>([]);
  const [symptomReports, setSymptomReports] = React.useState<
    null | ISymptomReport[]
  >(null);

  React.useEffect(() => {
    // Fetch the user's illnesses

    setIllnesses(GenericIllnesses);
    setSymptomReports(GenericSymptomReports.slice(0, 5));
  }, []);

  if (!illnesses || !symptomReports) {
    return null;
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
        <Header
          icon={<ClipboardPlus />}
          title="Illnesses"
          subtitle="Discover doctors through the network"
          icon_color={Colors.dark.secondary}
        />

        <View className="flex w-full flex-row justify-center gap-x-2 px-8">
          <Input className="flex-1" />
          <Button variant="shadow" className="aspect-square">
            <Filter color={Colors.dark.text_secondary} />
          </Button>
        </View>

        <Separator className="w-[40%]" />

        <View className="h-full w-full flex-1 px-8">
          <SectionList
            sections={[
              {
                title: "Symptom Reports",
                data: symptomReports,
              },
            ].filter((section) => section.data.length > 0)}
            renderSectionHeader={({ section: { title } }) => (
              <Text className="bg-card text-lg font-semibold">{title}</Text>
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SymptomCard id={item.id} />}
            className="w-full"
            contentContainerStyle={{
              rowGap: 15,
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
