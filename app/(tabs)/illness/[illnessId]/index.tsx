import { Header } from "@/components/header";
import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";

import { Button } from "@/components/ui/button";

import {
  ChevronRight,
  ChevronsRight,
  ClipboardPlus,
  File,
  Filter,
  Pill,
  Plus,
  PlusCircle,
  SquareActivity,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IIllness } from "@/types/illness";
import { GenericIllnesses } from "@/generics/illness";
import { FlatList } from "react-native";
import { Card } from "@/components/ui/card";
import { AppointmentCard } from "@/components/cards/appointment-card";
import { GenericAppointments } from "@/generics/appointment";
import { SectionHeader } from "@/components/section-header";

export default function IllnessScreen() {
  const { illnessId } = useLocalSearchParams<{ illnessId: string }>();
  const router = useRouter();

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
            subtitle={illness.description}
            icon_color={Colors.dark.secondary}
          />

          <Separator className="w-[40%]" />

          <View className="w-full gap-y-4 px-8">
            <SectionHeader title="Medication" />
            <View className="w-full flex-row items-center justify-start gap-x-4">
              <FlatList
                data={[
                  {
                    name: "Aspirin",
                    icon: <Pill size={40} color={Colors.dark.secondary} />,
                    dosage: "200mg/daily",
                  },
                  {
                    name: "Paracetamol",
                    icon: <Pill size={40} color={Colors.dark.secondary} />,
                    dosage: "400mg/daily",
                  },
                  {
                    name: "Ibuprofen",
                    icon: <Pill size={40} color={Colors.dark.secondary} />,
                    dosage: "500mg/daily",
                  },
                ]}
                renderItem={({ item }) => (
                  <Card className="aspect-square h-36">
                    {item.icon}
                    <Pressable className="absolute h-full w-full" />
                    <Text className="text-lg font-medium">{item.name}</Text>
                    <Text className="text-base font-semibold text-primary">
                      {item.dosage}
                    </Text>
                  </Card>
                )}
                horizontal={true}
                ItemSeparatorComponent={() => <View className="h-4 w-4" />}
              />
            </View>
          </View>

          {/*Buttons*/}
          <View className="w-full gap-y-4 px-8">
            <Button
              variant="shadow"
              onPress={() => router.push(`/illness/${illnessId}/prescription`)}
            >
              <File size={24} color={Colors.dark.text_secondary} />
              <Text>View prescription</Text>
            </Button>
            <Button variant="default">
              <PlusCircle size={24} color={Colors.dark.text_white} />
              <Text>Create prescription</Text>
            </Button>
          </View>

          <View className="w-full gap-y-4 px-8">
            <SectionHeader title="Symptoms" />

            <View className="w-full flex-row items-center justify-start gap-x-4">
              <FlatList
                data={[
                  {
                    name: "Cough",
                    icon: (
                      <SquareActivity size={32} color={Colors.dark.secondary} />
                    ),
                  },
                  {
                    name: "Fever",
                    icon: (
                      <SquareActivity size={32} color={Colors.dark.secondary} />
                    ),
                  },
                  {
                    name: "Headache",
                    icon: (
                      <SquareActivity size={32} color={Colors.dark.secondary} />
                    ),
                  },
                ]}
                renderItem={({ item }) => (
                  <Card className="aspect-square px-4">
                    {item.icon}
                    <Pressable className="absolute h-full w-full" />
                    <Text className="text-lg font-medium">{item.name}</Text>
                  </Card>
                )}
                horizontal={true}
                ItemSeparatorComponent={() => <View className="h-4 w-4" />}
              />
            </View>
          </View>

          <View className="w-full gap-y-4 px-8">
            <SectionHeader title="Appointments" />

            <AppointmentCard {...GenericAppointments[0]} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
