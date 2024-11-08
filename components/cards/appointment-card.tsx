import { Image, ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Calendar, Clock, Info, MapPin } from "lucide-react-native";

import { Pressable, View } from "react-native";

import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Colors } from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
  const router = useRouter();

  return (
    <Card className="h-fit w-full flex-col gap-y-4">
      <View className="flex h-fit w-full flex-row items-center justify-start gap-x-2">
        <Pressable onPress={() => router.push(`/profile/${props.name}`)}>
          <Avatar alt="Avatar" className="h-16 w-16 border-2 border-primary">
            <AvatarImage source={{ uri: props.avatar }} />
            <AvatarFallback>
              <Text>ZN</Text>
            </AvatarFallback>
          </Avatar>
        </Pressable>

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
          <MapPin size={24} color={Colors.dark.primary} />
          <Text className="text-base font-medium text-primary">
            {props.location.slice(0, 10)}...
          </Text>
        </View>

        <Separator
          orientation="vertical"
          className="h-1/2 bg-text-foreground"
        />

        <View className="flex w-fit flex-col items-center justify-center text-accent">
          <Clock size={24} color={Colors.dark.accent} />
          <Text className="text-base font-medium text-accent">
            {props.time}
          </Text>
        </View>

        <Separator
          orientation="vertical"
          className="h-1/2 bg-text-foreground"
        />

        <View className="flex w-fit flex-col items-center justify-center text-secondary">
          <Calendar size={24} color={Colors.dark.secondary} />
          <Text className="text-base font-medium text-secondary">
            {props.date}
          </Text>
        </View>
      </View>

      <Button
        className="flex w-full items-center justify-center text-text-foreground"
        variant="shadow"
      >
        <Info size={24} color="#9F9F9F" />
        <Text>See details</Text>
      </Button>
    </Card>
  );
};
