import { Header } from "@/components/header";
import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { FlatList, SafeAreaView, View } from "react-native";

import { Button } from "@/components/ui/button";

import {
  CalendarClock,
  ClipboardPlus,
  Eye,
  Filter,
  Tablets,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

import { useRouter } from "expo-router";
import { IIllness } from "@/types/illness";
import { GenericIllnesses } from "@/generics/illness";

export default function IllnessesScreen() {
  const router = useRouter();

  const [illnesses, setIllnesses] = React.useState<null | IIllness[]>([]);

  React.useEffect(() => {
    // Fetch the user's illnesses

    setIllnesses(GenericIllnesses);
  }, []);

  if (!illnesses) {
    return null;
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
            data={illnesses}
            keyExtractor={(item) => item.id}
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
                    {item.date.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </Text>
                </View>

                <Button
                  className="absolute bottom-4 right-4 aspect-square h-10"
                  onPress={() => router.push("/illness/1")}
                >
                  <Eye color={Colors.dark.text_white} />
                </Button>
              </Card>
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
