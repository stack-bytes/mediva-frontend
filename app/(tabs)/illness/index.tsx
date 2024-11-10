import { Header } from "@/components/header";
import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { SafeAreaView, SectionList, View } from "react-native";

import { Button } from "@/components/ui/button";

import { ClipboardPlus, Filter } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";

import { useRouter } from "expo-router";
import { IIllness, ISymptom } from "@/types/illness";
import { GenericIllnesses, GenericSymptoms } from "@/generics/illness";
import { SymptomCard } from "@/components/cards/symptom-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IllnessCard } from "@/components/cards/illness-card";
import { useSessionStore } from "@/hooks/useSession";
import { getUserSymptoms } from "@/actions/symptoms";

export default function IllnessesScreen() {
  const router = useRouter();

  const { user } = useSessionStore((state) => state);

  const [value, setValue] = useState<"reports" | "illnesses">("reports");

  const [illnesses, setIllnesses] = React.useState<null | IIllness[]>([]);
  const [symptomReports, setSymptomReports] = React.useState<null | ISymptom[]>(
    null
  );

  React.useEffect(() => {
    // Fetch the user's illnesses

    setIllnesses(GenericIllnesses);

    const getSymptoms = async () => {
      // Fetch the user's symptom reports

      //const symptoms = (await getUserSymptoms(user.id)).slice(0, 2);

      setSymptomReports(GenericSymptoms);

      //console.log("FRONT_END: Symptoms fetched", symptoms);
    };
    getSymptoms();
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

        <View className="h-full w-full flex-1 px-8">
          <Tabs
            value={value}
            onValueChange={setValue}
            className="mx-auto w-full flex-col gap-1.5"
          >
            <TabsList className="w-full flex-row">
              <TabsTrigger value="reports" className="flex-1">
                <Text>Reports</Text>
              </TabsTrigger>
              <TabsTrigger value="illnesses" className="flex-1">
                <Text>Illnesses</Text>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="reports">
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
            </TabsContent>
            <TabsContent value="illnesses">
              <SectionList
                sections={[
                  {
                    title: "Patient Illnesses",
                    data: illnesses,
                  },
                ].filter((section) => section.data.length > 0)}
                renderSectionHeader={({ section: { title } }) => (
                  <Text className="bg-card text-lg font-semibold">{title}</Text>
                )}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <IllnessCard id={item.id} />}
                className="w-full"
                contentContainerStyle={{
                  rowGap: 15,
                }}
              />
            </TabsContent>
          </Tabs>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
