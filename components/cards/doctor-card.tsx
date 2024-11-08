import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { CalendarCheck, Eye, Hospital, Star } from "lucide-react-native";

import { View } from "react-native";

import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

interface IDoctorCardProps {
  name: string;
  avatar: string;
  specialty: string;
  grade: "specialist" | "primary";
  yearsActive: number;
  rating: number;
  hospital: string;
}

export const DoctorCard: React.FC<IDoctorCardProps> = (props) => {
  return (
    <Card className="h-fit w-full flex-col gap-y-4">
      <View className="flex w-full flex-row items-center justify-start gap-x-2">
        <ImageBackground
          source={props.avatar}
          style={{
            height: 65,
            width: 65,
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
              borderRadius: 12,
            }}
          />
        </ImageBackground>
        <View className="flex flex-col items-center justify-start">
          <Text className="w-full text-left font-medium text-text-foreground">
            {props.specialty}, {props.grade}
          </Text>
          <Text className="w-full text-left text-2xl font-semibold text-primary">
            Dr. {props.name}
          </Text>
        </View>
      </View>

      <View className="flex h-fit w-full gap-y-2">
        <View className="flex w-full flex-row items-center justify-start gap-x-2 text-primary">
          <CalendarCheck size={24} color="#8E6EEA" />
          <Text className="text-base font-medium text-text-foreground">
            {props.yearsActive} years active
          </Text>
        </View>

        <View className="flex w-full flex-row items-center justify-start gap-x-2 text-warning">
          <Star size={24} fill="#F2BC08" color="#F2BC08" />
          <Text className="text-base font-medium text-text-foreground">
            {props.rating} stars (125 ratings)
          </Text>
        </View>

        <View className="text- flex w-full flex-row items-center justify-start gap-x-2 text-destructive">
          <Hospital size={24} color="#B02E2E" />
          <Text className="text-base font-medium text-text-foreground">
            {props.hospital}
          </Text>
        </View>
      </View>

      <Button
        className="absolute bottom-3 right-3 aspect-square"
        variant="default"
      >
        <Eye size={24} color="#fff" />
      </Button>
    </Card>
  );
};
