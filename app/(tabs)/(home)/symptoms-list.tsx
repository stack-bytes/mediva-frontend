import { ImageBackground } from "expo-image";
import {
  ChevronLeft,
  Filter,
  HeartCrack,
  SquareActivity,
} from "lucide-react-native";
import React, { useCallback } from "react";
import { FlatList, Pressable, SafeAreaView, View } from "react-native";

import { Gradient } from "@/components/images";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Colors } from "@/constants/Colors";

import { Input } from "@/components/ui/input";
import { useRouter } from "expo-router";

export default function SymptomsListScreen() {
  const router = useRouter();

  const onSubmit = React.useCallback((symptomName: string) => {
    console.log("Clicked ", symptomName);
    router.setParams({ item: symptomName });
  }, []);

  return (
    <ImageBackground
      className="absolute h-full w-full"
      contentFit="contain"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: 20,
      }}
      source={Gradient}
    >
      <SafeAreaView className="flex h-full w-full gap-y-10">
        <Header
          title="All symptoms (325)"
          icon={<SquareActivity />}
          subtitle="Select the symtomps you are experiencing"
        />

        <View className="h-full w-full flex-1 gap-y-4 px-8">
          <View className="flex w-full flex-row justify-center gap-x-2">
            <Input className="flex-1" />
            <Button variant="shadow" className="aspect-square">
              <Filter color={Colors.dark.text_secondary} />
            </Button>
          </View>
          <View className="w-full flex-1 flex-row items-center justify-start gap-x-4">
            <FlatList
              data={[
                {
                  name: "Cough",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
                {
                  name: "Fever",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
                {
                  name: "Headache",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
                {
                  name: "Sore Throat",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
                {
                  name: "Cough",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
                {
                  name: "Fever",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
                {
                  name: "Headache",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
                {
                  name: "Sore Throat",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
                {
                  name: "Cough",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
                {
                  name: "Fever",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
                {
                  name: "Headache",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
                {
                  name: "Sore Throat",
                  icon: <HeartCrack size={36} color={Colors.dark.primary} />,
                },
              ]}
              renderItem={({ item }) => (
                <Card className="flex w-full flex-row items-center justify-start gap-x-2">
                  <Pressable
                    className="absolute h-full w-full"
                    onPress={() => onSubmit(item.name)}
                  />
                  <Text className="text-lg font-medium">{item.name}</Text>
                </Card>
              )}
              ItemSeparatorComponent={() => <View className="h-4 w-4" />}
            />
          </View>
        </View>

        <View className="w-full gap-y-4 px-8">
          <Button onPress={() => router.back()} variant="shadow">
            <ChevronLeft size={24} color={Colors.dark.text_secondary} />
            <Text>Go back</Text>
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
