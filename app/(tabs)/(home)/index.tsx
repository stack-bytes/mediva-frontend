import { Header } from "@/components/header";
import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { SafeAreaView, ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
  TriangleAlert,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AppointmentCard } from "@/components/cards/appointment-card";
import { Card } from "@/components/ui/card";
import { DoctorCard } from "@/components/cards/doctor-card";
import React from "react";
import { useRouter } from "expo-router";

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
            <Button className="aspect-square rounded-full bg-[#101010]">
              <Bell color={Colors.dark.text_secondary} size={24} />
            </Button>

            <View className="flex-row gap-x-4">
              <Button className="aspect-square rounded-full bg-[#101010]">
                <CalendarClock size={24} color={Colors.dark.text_secondary} />
              </Button>

              <Button className="aspect-square rounded-full bg-[#101010]">
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

          <View className="flex h-[21rem] w-[100%] flex-row justify-center gap-x-4 px-8">
            <View className="flex w-[40%] flex-col items-center justify-start">
              <View className="flex aspect-square h-[50%] items-center justify-center gap-y-2 rounded-2xl border-2 border-border bg-card p-2">
                <Text className="w-full text-center font-medium text-[##9F9F9F]">
                  Monthly Screening
                </Text>
                <Separator className="w-1/2" />
                <Text className="w-full text-center text-3xl font-bold text-text-primary">
                  10:00 AM
                </Text>

                <View className="flex w-full flex-row items-center justify-center gap-x-2 px-6">
                  <CalendarClock size={20} color={Colors.dark.text_secondary} />
                  <Text className="text-xl font-semibold text-[#9F9F9F]">
                    03.12
                  </Text>
                </View>
              </View>
              <View className="aspect-square h-[50%] rounded-2xl border-2 border-border bg-card p-2">
                <ImageBackground
                  source="https://thispersondoesnotexist.com/"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  imageStyle={{
                    borderRadius: 12,
                  }}
                >
                  <LinearGradient
                    colors={["rgba(30, 30, 30, 0.4)", "rgba(10, 10, 10, 0.95)"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1.2 }}
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                    }}
                  />

                  <View className="absolute top-2 flex w-full flex-row items-center justify-center gap-x-2 px-2">
                    <Text className="w-full text-left text-xl font-bold text-white">
                      Doctors
                    </Text>
                  </View>

                  <View className="absolute bottom-3 flex w-full flex-row items-center justify-center gap-x-2 px-2">
                    <Stethoscope size={20} color={Colors.dark.text_secondary} />
                    <Text className="font-semibold text-[#9F9F9F]">
                      Dr. Popescu
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View className="flex h-full w-[60%] items-center justify-center gap-y-6 rounded-2xl border-2 border-border bg-card p-2">
              <Text className="w-full text-center text-2xl font-semibold text-[##9F9F9F]">
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
                <Badge
                  className="flex flex-row items-center justify-center gap-x-1"
                  variant="destructive"
                >
                  <TriangleAlert size={16} color={Colors.dark.error_primary} />
                  <Text>Restrictions</Text>
                </Badge>
              </View>
              <Button variant="shadow" className="flex flex-row gap-x-2">
                <InfoIcon color={Colors.dark.text_secondary} size={20} />
                <Text>View Prescription</Text>
              </Button>
            </View>
          </View>

          <View className="flex h-32 w-full px-8">
            <Button
              className="h-16 w-full gap-x-2"
              variant="shadow"
              onPress={() => router.push("/symtomps")}
            >
              <MessageCircleWarning
                color={Colors.dark.text_secondary}
                size={20}
              />
              <Text>Report symtomps</Text>
            </Button>
          </View>

          <View className="flex w-full items-center justify-center px-8">
            <AppointmentCard
              avatar="https://thispersondoesnotexist.com"
              date="03.12.2021"
              grade="primary"
              location="Bucharest"
              name="Popescu"
              specialty="GP"
              time="10:00 AM"
            />

            <DoctorCard
              avatar="https://thispersondoesnotexist.com/"
              name="Popescu Marian"
              specialty="Orthopedist"
              grade="primary"
              hospital="Spitalul Clinic de Urgenta"
              rating={4.5}
              yearsActive={10}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
