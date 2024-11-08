import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { SafeAreaView, ScrollView, View } from "react-native";

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

import {
  BadgeCheck,
  Bell,
  Calendar,
  CalendarCheck,
  CalendarClock,
  ChevronRight,
  Cog,
  Hospital,
  Phone,
  Smile,
  Star,
  Wallet,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/ui/separator";
import { AppointmentCard } from "@/components/cards/appointment-card";
import { Card } from "@/components/ui/card";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLocalSearchParams } from "expo-router";

export default function ProfileScreen() {
  const { userId } = useLocalSearchParams<{ userId: string }>();

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
              <Button className="aspect-square rounded-full border border-border bg-card">
                <CalendarClock size={24} color={Colors.dark.text_secondary} />
              </Button>

              <Button className="aspect-square rounded-full border border-border bg-card">
                <Cog size={24} color={Colors.dark.text_secondary} />
              </Button>
            </View>
          </View>
          <View className="flex w-full flex-col items-center justify-center gap-y-2">
            <Avatar
              alt="Profile image"
              className="aspect-square h-fit w-1/2 border-4 border-primary"
            >
              <AvatarImage
                source={{ uri: "https://thispersondoesnotexist.com" }}
              />
              <AvatarFallback>
                <Text>DP</Text>
              </AvatarFallback>
            </Avatar>

            <Text className="text-3xl font-bold text-text-primary">
              {userId}
            </Text>

            <Text className="text-xl font-semibold text-text-primary">
              @popescumarian
            </Text>

            <View className="flex flex-row gap-x-1">
              <BadgeCheck
                size={24}
                color={Colors.dark.text_white}
                fill={Colors.dark.primary}
              />
              <Text className="text-xl font-semibold text-primary">
                Orthopedist
              </Text>
            </View>

            <View className="flex flex-row gap-x-2">
              <Hospital size={24} color={Colors.dark.error_primary} />
              <Text className="text-lg font-semibold text-destructive">
                Spitalul Clinic de Urgenta Timisoara
              </Text>
            </View>
          </View>

          <View className="w-full gap-y-4 px-8">
            <Button>
              <Wallet size={24} color={Colors.dark.text_white} />
              <Text>Health Wallet</Text>
            </Button>

            <Text className="text-lg font-medium">Appointments</Text>

            <View className="flex w-full flex-row justify-center gap-x-2">
              <Button className="flex-1" variant="destructive">
                <CalendarCheck color={Colors.dark.text_white} />
                <Text className="text-text-white">Book an appointment</Text>
              </Button>
              <Button variant="destructive" className="aspect-square">
                <Phone color={Colors.dark.text_white} />
              </Button>
            </View>

            {/* MEDIC INFORMATION */}
            <Text className="text-lg font-medium">Information</Text>

            <Card className="flex h-fit w-full flex-row items-center justify-center gap-x-4">
              <View className="flex w-fit flex-col items-center justify-center text-primary">
                <Smile size={24} color={Colors.dark.primary} />
                <Text className="text-base font-medium text-primary">
                  24 patients
                </Text>
              </View>

              <Separator
                orientation="vertical"
                className="h-1/2 bg-text-foreground"
              />

              <View className="flex w-fit flex-col items-center justify-center text-accent">
                <Star
                  fill={Colors.dark.accent}
                  size={24}
                  color={Colors.dark.accent}
                />
                <Text className="text-base font-medium text-accent">
                  4.5 stars
                </Text>
              </View>

              <Separator
                orientation="vertical"
                className="h-1/2 bg-text-foreground"
              />

              <View className="flex w-fit flex-col items-center justify-center text-secondary">
                <Calendar size={24} color={Colors.dark.secondary} />
                <Text className="text-base font-medium text-secondary">
                  10 years active
                </Text>
              </View>
            </Card>

            <Text className="text-lg font-medium">Bio</Text>

            <Card className="flex w-full flex-row items-center justify-center gap-x-4">
              <Text className="text-base text-text-foreground">
                Professional medical consultant since 2014. Graduated from
                Harvard University, specialization neurology. Mail:
                robbin.edward@doctor.edu Phone: +40794232412
              </Text>
            </Card>

            <View className="flex w-full flex-row items-center justify-between">
              <Text className="text-lg font-medium">Appointments</Text>

              <ChevronRight size={24} color={Colors.dark.accent} />
            </View>

            <AppointmentCard
              avatar="https://thispersondoesnotexist.com"
              name="Popescu Marian"
              specialty="Orthopedist"
              grade="primary"
              location="Spitalul Clinic de Urgenta"
              time="10:00-10:15 AM"
              date="03.12.2021"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
