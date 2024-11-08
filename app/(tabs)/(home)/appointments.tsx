import { Header } from "@/components/header";
import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { FlatList, SafeAreaView, SectionList, View } from "react-native";

import { Button } from "@/components/ui/button";

import {
  CalendarClock,
  Check,
  Eye,
  Filter,
  Stethoscope,
  Tablets,
  TriangleAlert,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AppointmentCard } from "@/components/cards/appointment-card";

export default function IllnessesScreen() {
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
          icon={<CalendarClock />}
          title="Appointments"
          subtitle="View all your appointments in one place"
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
                title: "Today",
                data: [
                  {
                    avatar: "https://thispersondoesnotexist.com/",
                    name: "Chickenpox",
                    date: "2021-10-10",
                    doctor: "John Doe",
                  },
                ],
              },
              {
                title: "Upcoming",
                data: [
                  {
                    avatar: "https://thispersondoesnotexist.com/",
                    name: "Polirt Joseph",
                    date: "2021-10-10",
                    doctor: "John Doe",
                  },
                ],
              },
            ]}
            renderSectionHeader={({ section: { title } }) => (
              <Text className="bg-card text-lg font-semibold">{title}</Text>
            )}
            renderItem={({ item }) => (
              <AppointmentCard
                avatar="https://thispersondoesnotexist.com/"
                name={item.name}
                date="2021-10-10"
                grade="primary"
                location="Bucharest, Romania"
                specialty="Dermatology"
                time="10:00-10:15 AM"
              />
            )}
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
