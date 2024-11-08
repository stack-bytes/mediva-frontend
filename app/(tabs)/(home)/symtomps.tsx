import { ImageBackground } from "expo-image";
import {
  ChevronRight,
  ChevronsRight,
  Plus,
  Send,
  SquareActivity,
} from "lucide-react-native";
import React from "react";
import { FlatList, Pressable, SafeAreaView, View } from "react-native";

import { Gradient } from "@/components/images";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";

export default function SymtompsScreen() {
  const [symtomps, setSymtomps] = React.useState([
    {
      name: "Cough",
      icon: <ChevronsRight size={16} color="#fff" />,
    },
  ]);

  const onSubmit = async () => {};

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
          title="Symtomps"
          icon={<SquareActivity />}
          subtitle="Select the symtomps you are experiencing"
        />

        <View className="gap-y-4 px-8">
          <View className="flex w-full flex-row items-center justify-between">
            <Text className="text-lg font-medium">Symtomps</Text>

            <ChevronRight size={24} color="#8E6EEA" />
          </View>
          <View className="w-full flex-row items-center justify-start gap-x-4">
            <Card className="aspect-square h-28">
              <Plus size={48} color="#fff" />
            </Card>

            <Separator orientation="vertical" className="h-1/2 bg-white" />

            <FlatList
              data={[
                {
                  name: "Cough",
                  icon: <ChevronsRight size={36} color="#fff" />,
                },
                {
                  name: "Fever",
                  icon: <ChevronsRight size={36} color="#fff" />,
                },
                {
                  name: "Headache",
                  icon: <ChevronsRight size={36} color="#fff" />,
                },
                {
                  name: "Sore Throat",
                  icon: <ChevronsRight size={36} color="#fff" />,
                },
              ]}
              renderItem={({ item }) => (
                <Card className="aspect-square h-28">
                  {item.icon}
                  <Pressable
                    className="absolute h-full w-full"
                    onPress={() => setSymtomps([...symtomps, item])}
                  />
                  <Text className="text-lg font-medium">{item.name}</Text>
                </Card>
              )}
              horizontal={true}
              ItemSeparatorComponent={() => <View className="h-4 w-4" />}
            />
          </View>
        </View>

        <View className="gap-y-4 px-8">
          <View className="flex w-full flex-row items-center justify-between">
            <Text className="text-lg font-medium">Symtomp Intensity</Text>

            <ChevronRight size={24} color="#8E6EEA" />
          </View>
          <View className="w-full flex-row items-center justify-start gap-x-4">
            <Card className="aspect-square h-28">
              <Plus size={48} color="#fff" />
            </Card>

            <Separator orientation="vertical" className="h-1/2 bg-white" />
          </View>
        </View>

        <View className="w-full gap-y-4 px-8">
          <FlatList
            data={symtomps}
            horizontal={true}
            style={{
              width: "100%",
            }}
            renderItem={({ item }) => (
              <Card className="aspect-square flex-1 rounded-3xl bg-black/[0.2] p-2">
                <Text className="text-lg font-medium">{item.name}</Text>
              </Card>
            )}
          />

          <Button onPress={onSubmit}>
            <Send size={24} color="#fff" />
            <Text>Send Symtomps to GP</Text>
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
