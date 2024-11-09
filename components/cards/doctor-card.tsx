import { CalendarCheck, Eye, Hospital, Star } from "lucide-react-native";

import { Pressable, View } from "react-native";

import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useRouter } from "expo-router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IUser } from "@/types/user";
import { Colors } from "@/constants/Colors";

interface IDoctorCardProps {
  doctor: IUser; //An user with an existing medical license
}

export const DoctorCard: React.FC<IDoctorCardProps> = ({ doctor }) => {
  const router = useRouter();

  if (!doctor.medic) {
    return null;
  }

  return (
    <Card className="h-fit w-full flex-col gap-y-4">
      <View className="flex w-full flex-row items-center justify-start gap-x-2">
        <Pressable onPress={() => router.push(`/profile/${doctor.username}`)}>
          <Avatar alt="Avatar" className="h-16 w-16 border-2 border-border">
            <AvatarImage source={{ uri: doctor.avatar }} />
            <AvatarFallback>
              <Text>ZN</Text>
            </AvatarFallback>
          </Avatar>
        </Pressable>
        <View className="flex flex-col items-center justify-start">
          <Text className="w-full text-left font-medium text-text-foreground">
            {doctor.medic.specialty}, {doctor.medic.grade}
          </Text>
          <Text className="w-full text-left text-2xl font-semibold text-primary">
            Dr. {doctor.fullName}
          </Text>
        </View>
      </View>

      <View className="flex h-fit w-full gap-y-2">
        <View className="flex w-full flex-row items-center justify-start gap-x-2 text-secondary">
          <CalendarCheck size={24} color={Colors.dark.secondary} />
          <Text className="text-base font-medium text-text-foreground">
            active since{" "}
            {doctor.medic.activeSince.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </View>

        <View className="flex w-full flex-row items-center justify-start gap-x-2 text-warning">
          <Star
            size={24}
            fill={Colors.dark.warning_primary}
            color={Colors.dark.warning_primary}
          />
          <Text className="text-base font-medium text-text-foreground">
            {doctor.medic.ratings} stars (125 ratings)
          </Text>
        </View>

        <View className="text- flex w-full flex-row items-center justify-start gap-x-2 text-primary">
          <Hospital size={24} color={Colors.dark.primary} />
          <Text className="text-base font-medium text-text-foreground">
            {doctor.medic.workplace}
          </Text>
        </View>
      </View>

      <Button
        className="absolute bottom-3 right-3 aspect-square"
        variant="default"
        onPress={() => router.push(`/profile/${doctor.username}`)}
      >
        <Eye size={24} color="#fff" />
      </Button>
    </Card>
  );
};
