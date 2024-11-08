import { Header } from "@/components/header";
import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { FlatList, SafeAreaView, View } from "react-native";

import { Button } from "@/components/ui/button";

import { Filter, Stethoscope } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/ui/separator";
import { DoctorCard } from "@/components/cards/doctor-card";
import React from "react";
import { Input } from "@/components/ui/input";
import { BlurView } from "expo-blur";

export default function HomeScreen() {
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
          icon={<Stethoscope />}
          title="Doctors"
          subtitle="Discover doctors through the network"
          icon_color={Colors.dark.secondary}
        />

        <View className="flex w-full flex-row justify-center gap-x-2 px-8">
          <Input className="flex-1" />
          <Button variant="shadow" className="aspect-square">
            <Filter color={Colors.dark.text_secondary} />
          </Button>
        </View>

        <Separator className="w-[40%] bg-text-foreground" />

        <View className="h-full w-full flex-1 px-8">
          <FlatList
            data={[
              {
                avatar: "https://thispersondoesnotexist.com/",
                name: "Popescu Marian",
                specialty: "Orthopedist",
                grade: "primary",
                hospital: "Spitalul Clinic de Urgenta",
                rating: 4.5,
                yearsActive: 10,
              },
              {
                avatar: "https://thispersondoesnotexist.com/",
                name: "Popescu Marian",
                specialty: "Orthopedist",
                grade: "primary",
                hospital: "Spitalul Clinic de Urgenta",
                rating: 4.5,
                yearsActive: 10,
              },
              {
                avatar: "https://thispersondoesnotexist.com/",
                name: "Popescu Marian",
                specialty: "Orthopedist",
                grade: "primary",
                hospital: "Spitalul Clinic de Urgenta",
                rating: 4.5,
                yearsActive: 10,
              },
            ]}
            renderItem={({ item }) => (
              <DoctorCard
                avatar={item.avatar}
                name={item.name}
                specialty={item.specialty}
                grade={item.grade as "primary" | "specialist"}
                hospital={item.hospital}
                rating={item.rating}
                yearsActive={item.yearsActive}
              />
            )}
            className="w-full"
            contentContainerStyle={{
              rowGap: 15,
            }}
          />
        </View>

        <BlurView
          className="absolute bottom-0 h-40 w-full opacity-40"
          tint="proeminent"
          intensity={20}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
