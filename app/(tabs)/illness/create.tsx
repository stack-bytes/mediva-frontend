import { FlatList, Pressable, SafeAreaView, View } from "react-native";

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

import {
  ClipboardPlus,
  HeartPulse,
  PillBottle,
  Trash,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useLocalSearchParams, useRouter } from "expo-router";
import { GenericSymptomReports } from "@/generics/illness";
import { ISymptomReport } from "@/types/illness";
import { Header } from "@/components/header";
import { SymptomCard } from "@/components/cards/symptom-card";
import { SectionHeader } from "@/components/section-header";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

export default function CreateIllnessScreen() {
  const { reportId } = useLocalSearchParams<{ reportId: string }>();
  const router = useRouter();

  const [symptomReport, setSymptomReport] =
    React.useState<null | ISymptomReport>(null);

  const [medication, setMedication] = React.useState<
    { name: string; dosage: string }[]
  >([]);

  const [medicationName, setMedicationName] = React.useState("");
  const [dosage, setDosage] = React.useState("");

  const addMedication = async () => {
    if (medicationName.trim() === "" || dosage.trim() === "") {
      return;
    }
    setMedication([
      ...medication,
      {
        name: medicationName,
        dosage: dosage,
      },
    ]);

    //Reset the input fields
    setMedicationName("");
    setDosage("");
  };

  const removeMedication = async (itemName: string) => {
    setMedication(medication.filter((item) => item.name !== itemName));
  };

  const createIllness = async () => {
    router.push("/illness");
  };

  React.useEffect(() => {
    // Fetch the illness by ID
    setSymptomReport(
      GenericSymptomReports.find((item) => item.id === reportId) ||
        GenericSymptomReports[0]
    );
  }, []);

  if (!symptomReport) {
    return <Text>Couldn't find report</Text>;
  }

  return (
    <SafeAreaView className="flex h-full w-full">
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, rowGap: 20 }}
        enableOnAndroid={true}
        extraScrollHeight={100}
        keyboardShouldPersistTaps="handled"
        decelerationRate={0.25}
        style={{ height: "100%", width: "100%", display: "flex" }}
      >
        <Header
          title="Create illness"
          icon={<ClipboardPlus />}
          subtitle="Create a new illness for your patient"
        />

        <View className="w-full items-center gap-y-4 px-8">
          <SymptomCard id={GenericSymptomReports[0].id} viewOnly={true} />

          <View className="w-full flex-col gap-y-2">
            <SectionHeader title="Name" />
            <Input placeholder="Name" />
          </View>

          <Separator className="w-1/2" />

          <View className="w-full flex-col gap-y-4">
            <View className="w-full flex-col gap-y-2">
              <SectionHeader title="Medication" />

              <Input
                value={medicationName}
                onChangeText={setMedicationName}
                placeholder="Medication"
              />
            </View>
            <View className="w-full flex-col gap-y-2">
              <SectionHeader title="Dosage info" />
              <Input
                value={dosage}
                onChangeText={setDosage}
                placeholder="Dosage info"
              />
            </View>

            <Button className="w-full" onPress={addMedication}>
              <PillBottle size={24} color={Colors.dark.text_white} />
              <Text>Add medication</Text>
            </Button>
          </View>

          {medication.length > 0 && (
            <>
              <Separator className="w-1/2" />
              <SectionHeader title="Prescribed" />
            </>
          )}
          <FlatList
            scrollEnabled={false}
            data={medication}
            style={{ width: "100%" }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Card className="flex w-full flex-row justify-between gap-x-2">
                <View className="flex flex-row items-center gap-x-2">
                  <Text className="text-lg font-semibold">{item.name}</Text>
                  <Text>{item.dosage}</Text>
                </View>

                <Pressable onPress={() => removeMedication(item.name)}>
                  <Trash color={Colors.dark.primary} />
                </Pressable>
              </Card>
            )}
            contentContainerStyle={{
              width: "100%",
              rowGap: 10,
            }}
          />
          <Button className="w-full" onPress={createIllness}>
            <HeartPulse size={24} color={Colors.dark.text_white} />
            <Text>Create illness</Text>
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
