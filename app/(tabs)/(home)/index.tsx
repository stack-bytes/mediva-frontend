import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

import {
  Bell,
  CalendarClock,
  Check,
  Cog,
  InfoIcon,
  MessageCircleWarning,
  Stethoscope,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AppointmentCard } from "@/components/cards/appointment-card";
import React from "react";
import { useRouter } from "expo-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GenericAppointments } from "@/generics/appointment";
import { SectionHeader } from "@/components/section-header";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      style={{
        height: "100%",
        width: "100%",
      }}
      source={Gradient}
    >
      <SafeAreaView className="flex h-full w-full">
        <ScrollView
          className="flex h-full w-full"
          contentContainerStyle={{
            display: "flex",
            rowGap: 40,
          }}
          showsVerticalScrollIndicator={false}
          decelerationRate={0.25}
        >
          <View className="flex w-full flex-row items-center justify-between px-8 pt-10">
            <Button className="aspect-square rounded-full border border-border bg-card">
              <Bell color={Colors.dark.text_secondary} size={24} />
            </Button>

            <View className="flex-row gap-x-4">
              <Button
                className="aspect-square rounded-full border border-border bg-card"
                onPress={() => router.push("/(home)/appointments")}
              >
                <CalendarClock size={24} color={Colors.dark.text_secondary} />
              </Button>

              <Button className="aspect-square rounded-full border border-border bg-card">
                <Cog size={24} color={Colors.dark.text_secondary} />
              </Button>
            </View>
          </View>
          <View className="flex flex-col items-center justify-center gap-y-6">
            <Text className="text-4xl font-semibold">
              Good Morning,{"  "}
              <Text className="text-4xl text-primary">David!</Text>
            </Text>

            <Text className="text-lg font-light text-text-foreground">
              This is the latest data about your health!
            </Text>
          </View>

          <View className="gap-y-4 px-8">
            <Button
              className="w-full gap-x-2"
              onPress={() => router.push("/illness/report")}
            >
              <MessageCircleWarning color={Colors.dark.text_white} size={20} />
              <Text>Report symtomps</Text>
            </Button>
          </View>

          <View className="flex w-full flex-1 flex-row justify-center gap-x-4 px-8">
            <View className="flex flex-1 flex-col items-center justify-start gap-y-4">
              <View className="flex aspect-square h-36 items-center justify-center gap-y-2 rounded-2xl border-2 border-border bg-card p-2">
                <Text className="w-full text-center font-medium text-[##9F9F9F]">
                  Monthly Screening
                </Text>

                <Text className="w-full text-center text-xl font-bold text-text-primary">
                  10:00 AM
                </Text>

                <View className="flex w-full flex-row items-center justify-center gap-x-2 px-6">
                  <CalendarClock size={20} color={Colors.dark.text_secondary} />
                  <Text className="text-xl font-semibold text-[#9F9F9F]">
                    03.12
                  </Text>
                </View>
              </View>
              <View className="flex aspect-square h-36 items-center justify-center rounded-2xl border-2 border-border bg-card p-2">
                <Pressable
                  onPress={() => router.push(`/profile/test`)}
                  className="flex w-full items-center justify-center"
                >
                  <Avatar
                    alt="Avatar"
                    className="h-24 w-24 border-2 border-border"
                  >
                    <AvatarImage
                      source={{ uri: "https://thispersondoesnotexist.com" }}
                    />

                    <AvatarFallback>
                      <Text>ZN</Text>
                    </AvatarFallback>
                  </Avatar>
                </Pressable>

                <View className="-bottom-2 flex w-full flex-col items-center justify-center gap-x-2 px-2">
                  <Text className="w-full text-center text-sm font-semibold text-primary">
                    ORTHOPEDIST
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex h-fit flex-1 items-center justify-center gap-y-4 rounded-2xl border-2 border-border bg-card px-4 py-2">
              <Text className="text-text-primart w-full text-center text-2xl font-semibold">
                Chickenpox
              </Text>
              <Separator className="w-[50%]" />
              <View className="flex w-full flex-row items-center justify-start gap-x-2">
                <Stethoscope size={20} color="#9F9F9F" />
                <Text className="text-lg font-semibold text-[#9F9F9F]">
                  Dr. Popescu (GP)
                </Text>
              </View>
              <View className="flex w-full flex-row items-center justify-start gap-x-2">
                <CalendarClock size={20} color="#9F9F9F" />
                <Text className="text-lg font-semibold text-[#9F9F9F]">
                  03.12.2021
                </Text>
              </View>

              <View className="flex flex-row gap-x-2">
                <Badge
                  className="flex flex-row items-center justify-center gap-x-1 py-2"
                  variant="success"
                >
                  <Check size={16} color={Colors.dark.success_primary} />
                  <Text>Active</Text>
                </Badge>
              </View>
              <Button className="flex h-32 flex-row gap-x-2">
                <InfoIcon color={Colors.dark.text_white} size={20} />
                <Text>Prescription</Text>
              </Button>
            </View>
          </View>

          <View className="flex w-full items-center justify-center gap-y-4 px-8">
            <SectionHeader title="Appointments" />

            <FlatList
              data={GenericAppointments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <AppointmentCard {...item} className="w-[82vw]" />
              )}
              ItemSeparatorComponent={() => <View className="h-4 w-4" />}
              horizontal
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
