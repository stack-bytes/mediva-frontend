import { Header } from "@/components/header";
import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { FlatList, SafeAreaView, View } from "react-native";

import { Button } from "@/components/ui/button";

import {
  CalendarClock,
  Check,
  ClipboardPlus,
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
import { BlurView } from "expo-blur";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
          icon={<ClipboardPlus />}
          title="Illnesses"
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
                name: "Chickenpox",
                date: "2021-10-10",
                doctor: "John Doe",
                tags: [
                  {
                    name: "Infectious",
                    category: "destructive",
                    icon: <TriangleAlert color={Colors.dark.error_primary} />,
                  },
                  {
                    name: "Active",
                    category: "success",
                    icon: <Check color={Colors.dark.success_primary} />,
                  },
                ],
              },
            ]}
            renderItem={({ item }) => (
              <Card className="flex flex-col items-center justify-start gap-y-4">
                <View className="flex w-full flex-row items-center justify-start gap-x-2">
                  <Tablets size={30} color={Colors.dark.secondary} />
                  <Text className="text-2xl font-semibold text-secondary">
                    {item.name}
                  </Text>
                </View>

                <View className="flex w-full flex-row items-center justify-start gap-x-2">
                  <CalendarClock size={20} color={Colors.dark.text_secondary} />
                  <Text className="text-lg font-medium text-text-primary">
                    {item.date}
                  </Text>
                </View>

                <View className="flex w-full flex-row items-center justify-start gap-x-2">
                  <Stethoscope size={20} color={Colors.dark.text_secondary} />
                  <Text className="text-lg font-medium text-text-primary">
                    Diagnosed by Dr. {item.doctor}
                  </Text>
                </View>

                <View className="flex w-full flex-row items-center justify-start gap-x-2 pt-4">
                  {item.tags.map((tag) => (
                    <Badge
                      variant={tag.category ?? "outline"}
                      className="flex-row gap-x-2"
                    >
                      {tag.icon}
                      <Text
                        className={cn(
                          "text-text-primary",
                          `text-${tag.category ?? "text-primary"}`
                        )}
                      >
                        {tag.name}
                      </Text>
                    </Badge>
                  ))}
                </View>

                <Button className="absolute bottom-4 right-4 aspect-square h-10">
                  <Eye color={Colors.dark.text_secondary} />
                </Button>
              </Card>
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
