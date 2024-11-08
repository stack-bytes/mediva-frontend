import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Calendar, Clock, Info, MapPin } from "lucide-react-native";

import { View } from "react-native";

import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface IAppointmentCardProps {
  name: string;
  avatar: string;
  specialty: string;
  grade: "specialist" | "primary";

  location: string;
  time: string;
  date: string;
}

export const AppointmentCard: React.FC<IAppointmentCardProps> = (props) => {
  return (
    <Card className="h-fit w-full flex-col gap-y-4">
      <View className="flex h-fit w-full flex-row items-center justify-start gap-x-2">
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

      <View className="flex h-fit w-full flex-row items-center justify-center gap-x-4">
        <View className="flex w-fit flex-col items-center justify-center text-primary">
          <MapPin size={24} color="#8E6EEA" />
          <Text className="text-base font-medium text-primary">
            {props.location.slice(0, 10)}...
          </Text>
        </View>

        <Separator
          orientation="vertical"
          className="h-1/2 bg-text-foreground"
        />

        <View className="flex w-fit flex-col items-center justify-center text-accent">
          <Clock size={24} color="#3DBEFF" />
          <Text className="text-base font-medium text-accent">
            {props.time}
          </Text>
        </View>

        <Separator
          orientation="vertical"
          className="h-1/2 bg-text-foreground"
        />

        <View className="flex w-fit flex-col items-center justify-center text-secondary">
          <Calendar size={24} color="#B36EEA" />
          <Text className="text-base font-medium text-secondary">
            {props.date}
          </Text>
        </View>
      </View>

      <Button className="w-full text-text-foreground" variant="shadow">
        <Info size={20} color="#9F9F9F" />
        <Text>See details</Text>
      </Button>
    </Card>
  );
};
