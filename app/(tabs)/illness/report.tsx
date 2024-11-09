import { FlatList, Pressable, SafeAreaView, View } from "react-native";

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

import {
  ActivityIcon,
  BriefcaseMedical,
  SquareActivity,
  Trash,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRouter } from "expo-router";
import { ISymptom, ISymptomReport } from "@/types/illness";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import Slider from "@react-native-community/slider";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export default function ReportScreen() {
  const router = useRouter();

  const [symptomReport, setSymptomReport] = React.useState<ISymptomReport>({
    id: "53",
    description: "",
    symptoms: [],
    emergency: false,
    date: new Date(),
    pacientId: "",
    doctorId: [],
  });

  const [symptomName, setSymptomName] = React.useState<ISymptom["name"]>("");
  const [sliderValue, setSliderValue] = React.useState<ISymptom["severity"]>(0);

  const addSymptom = async () => {
    if (symptomName.trim() === "") {
      return;
    }

    //Add the symptom to the list
    setSymptomReport({
      ...symptomReport,
      symptoms: [
        ...symptomReport.symptoms,
        {
          name: symptomName,
          severity: sliderValue,
        },
      ],
    });

    //Reset the input fields
    setSymptomName("");
    setSliderValue(0);
  };

  const removeSymptom = async (itemName: string) => {
    setSymptomReport({
      ...symptomReport,
      symptoms: symptomReport.symptoms.filter((item) => item.name !== itemName),
    });
  };

  const createIllness = async () => {
    router.push("/illness");
  };

  React.useEffect(() => {
    // Fetch the illness by ID
  }, []);

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
          title="Report symptoms"
          icon={<SquareActivity />}
          subtitle="Tell us about the symptoms"
        />

        <View className="w-full items-center gap-y-4 px-8">
          <View className="w-full flex-col gap-y-2">
            <SectionHeader title="Emergency" />
            <Switch
              checked={symptomReport.emergency}
              onCheckedChange={() =>
                setSymptomReport({
                  ...symptomReport,
                  emergency: !symptomReport.emergency,
                })
              }
            />
          </View>

          <View className="w-full flex-col gap-y-2">
            <SectionHeader title="Description" />
            <Textarea
              value={symptomReport.description}
              onChangeText={(text) =>
                setSymptomReport({ ...symptomReport, description: text })
              }
            />
          </View>

          <View className="w-full flex-col items-center gap-y-4">
            <View className="w-full flex-col gap-y-2">
              <SectionHeader title="Symptom" />

              <Input
                value={symptomName}
                onChangeText={setSymptomName}
                placeholder="Symptom"
              />
            </View>

            <View className="w-full flex-col gap-y-2">
              <SectionHeader title="Intensity" />

              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={Colors.dark.primary}
                maximumTrackTintColor={Colors.dark.text_primary}
              />
            </View>

            <Button className="w-full" onPress={addSymptom}>
              <ActivityIcon size={24} color={Colors.dark.text_white} />
              <Text>Add symptom</Text>
            </Button>

            {symptomReport.symptoms.length > 0 && (
              <>
                <Separator className="w-1/2" />
                <SectionHeader title="Symptoms" />
              </>
            )}
            <FlatList
              scrollEnabled={false}
              data={symptomReport.symptoms}
              style={{ width: "100%" }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Card className="flex w-full flex-row justify-between gap-x-2">
                  <View className="flex flex-row items-center gap-x-2">
                    <Text className="text-lg font-semibold">{item.name}</Text>
                  </View>

                  <Pressable onPress={() => removeSymptom(item.name)}>
                    <Trash color={Colors.dark.primary} />
                  </Pressable>
                </Card>
              )}
              contentContainerStyle={{
                width: "100%",
                rowGap: 10,
              }}
            />
          </View>

          {symptomReport.symptoms.length > 0 && (
            <Button className="w-full" onPress={createIllness}>
              <BriefcaseMedical size={24} color={Colors.dark.text_white} />
              <Text>Send report</Text>
            </Button>
          )}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
