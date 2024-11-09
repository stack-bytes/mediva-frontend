import { ImageBackground } from "expo-image";
import {
  ChevronRight,
  ChevronsRight,
  HeartCrack,
  Plus,
  Send,
  SquareActivity,
  X,
} from "lucide-react-native";
import React from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

import { Gradient } from "@/components/images";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";
import { SectionHeader } from "@/components/section-header";
import { Colors } from "@/constants/Colors";

import Slider from "@react-native-community/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function SymptomsScreen() {
  const router = useRouter();
  const { item } = useLocalSearchParams<{
    item: string;
  }>();

  const [symptoms, setSymptoms] = React.useState([
    {
      name: "Cough",
      icon: <ChevronsRight size={16} color="#fff" />,
    },
  ]);

  React.useEffect(() => {
    console.log("Changed item", item);
    if (item) {
      setSymptoms([]);
    }
  }, [item]);

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
            title="Symtomps"
            icon={<SquareActivity />}
            subtitle="Select the symtomps you are experiencing"
          />

          <View className="w-full gap-y-4 px-8">
            <SectionHeader
              title="Symptoms"
              action={() => router.push("/symptoms-list")}
            />
            <View className="w-full flex-row items-center justify-start gap-x-4">
              <Card className="aspect-square h-28">
                <Plus size={48} color={Colors.dark.text_primary} />
              </Card>

              <Separator orientation="vertical" className="h-1/2 bg-white" />

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
                ]}
                renderItem={({ item }) => (
                  <Card className="aspect-square h-28">
                    {item.icon}
                    <Pressable
                      className="absolute h-full w-full"
                      onPress={() => setSymptoms([...symptoms, item])}
                    />
                    <Text className="text-lg font-medium">{item.name}</Text>
                  </Card>
                )}
                horizontal={true}
                ItemSeparatorComponent={() => <View className="h-4 w-4" />}
              />
            </View>
          </View>

          <View className="w-full gap-y-4 px-8">
            <SectionHeader title="Description" />
            <Textarea
              placeholder="Tell us about how are you felling"
              className="h-32 w-full text-text-foreground"
              placeholderClassName="text-text-foreground"
            />
          </View>

          <View className="w-full gap-y-4 px-8">
            <SectionHeader title="Symptoms Intensity" />
            <View className="w-full">
              <Slider
                style={{ width: "100%", height: "100%" }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={Colors.dark.primary}
                maximumTrackTintColor={Colors.dark.text_primary}
              />
            </View>
          </View>

          <View className="w-full gap-y-4 px-8">
            <SectionHeader title="List" />
            <FlatList
              data={symptoms}
              horizontal={true}
              style={{
                width: "100%",
              }}
              renderItem={({ item }) => (
                <Card className="aspect-square h-24 px-4 py-2">
                  <Pressable
                    className="absolute h-full w-full"
                    onPress={() =>
                      setSymptoms([...symptoms.filter((s) => s !== item)])
                    }
                  />
                  <Text className="font-medium">{item.name}</Text>
                </Card>
              )}
            />

            <Button onPress={onSubmit}>
              <Send size={24} color="#fff" />
              <Text>Send Symtomps to GP</Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
