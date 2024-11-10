import { FlatList, Pressable, SafeAreaView, View } from "react-native";

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

import {
  CirclePlus,
  PlusCircle,
  SquareActivity,
  Trash,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IIllness, ISymptom } from "@/types/illness";
import { Header } from "@/components/header";
import { SectionHeader } from "@/components/section-header";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { useSessionStore } from "@/hooks/useSession";
import {
  addSymptomToExistingIllness,
  createSymptoms,
} from "@/actions/symptoms";
import { SymptomCard } from "@/components/cards/symptom-card";
import { GenericIllnesses } from "@/generics/illness";

type ISymptomWithoutId = Omit<ISymptom, "id">;

export default function MiddlewareScreen() {
  const router = useRouter();

  const { symptomId } = useLocalSearchParams<{ symptomId: string }>();

  const { user } = useSessionStore((state) => state);

  const [illnesses, setIllnesses] = React.useState<IIllness[]>([]);

  const addToExisting = async () => {
    addSymptomToExistingIllness("test", "Test");
    router.dismiss();
  };

  React.useEffect(() => {
    setIllnesses(GenericIllnesses);
    // Fetch the existing user illnesses
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
          title="Management"
          icon={<SquareActivity />}
          subtitle="Select an option"
        />

        <View className="w-full items-center gap-y-8 px-8">
          <SymptomCard id={symptomId} viewOnly={true} />

          <View className="w-full flex-col gap-y-2">
            <SectionHeader title="New case" />

            <Button
              className="w-full"
              onPress={() => {
                router.push("/illness/create");
                router.setParams({ symptomId: symptomId });
              }}
            >
              <CirclePlus size={24} color={Colors.dark.text_white} />
              <Text>Add to new illness</Text>
            </Button>
          </View>

          <Separator />

          {illnesses.length > 0 && (
            <View className="w-full gap-y-2">
              <SectionHeader title="Add to an existing case" />
              <FlatList
                scrollEnabled={false}
                data={illnesses}
                style={{ width: "100%" }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <Card className="flex w-full flex-row justify-between gap-x-2">
                    <View className="flex flex-row items-center gap-x-2">
                      <Text className="text-lg font-semibold">{item.name}</Text>
                    </View>

                    <Pressable
                      onPress={addToExisting}
                      className="absolute h-full w-full"
                    />

                    <PlusCircle color={Colors.dark.primary} />
                  </Card>
                )}
                contentContainerStyle={{
                  width: "100%",
                  rowGap: 10,
                }}
              />
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
