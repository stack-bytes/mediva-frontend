import { Calendar, Clock, Info, MapPin } from "lucide-react-native";

import { Pressable, View } from "react-native";

import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IUser } from "@/types/user";
import { IAppointment } from "@/types/appointment";
import React, { useEffect } from "react";
import { GenericUsers } from "@/generics/user";
import { cn } from "@/lib/utils";

interface IAppointmentCardProps
  extends Omit<IAppointment, "title" & "geolocation" & "pacientId"> {
  className: string;
}

export const AppointmentCard: React.FC<IAppointmentCardProps> = ({
  id,
  doctorId,
  dateTime,
  location,
  className,
}) => {
  const router = useRouter();

  const date = new Date(dateTime);

  const [foundDoctor, setFoundDoctor] = React.useState<IUser | null>(null);

  const onDetailsPress = async () => {
    router.push(`/appointments/${id}`);
  };

  useEffect(() => {
    // Fetch the doctor's data
    setFoundDoctor(GenericUsers.filter((user) => user.medic !== null)[0]);
  }, [doctorId]);

  if (!foundDoctor || !foundDoctor.medic) {
    return;
  }

  return (
    <Card key={id} className={cn("h-fit w-full flex-col gap-y-4", className)}>
      <View className="flex h-fit w-full flex-row items-center justify-start gap-x-2">
        <Pressable onPress={() => router.push(`/profile/${foundDoctor.id}`)}>
          <Avatar alt="Avatar" className="h-16 w-16 border-2 border-border">
            <AvatarImage source={{ uri: foundDoctor.avatar }} />
            <AvatarFallback>
              <Text>ZN</Text>
            </AvatarFallback>
          </Avatar>
        </Pressable>

        <View className="flex flex-col items-center justify-start">
          <Text className="w-full text-left font-medium text-text-foreground">
            {foundDoctor.medic.specialty}, {foundDoctor.medic.grade}
          </Text>
          <Text className="w-full text-left text-2xl font-semibold text-primary">
            Dr. {foundDoctor.fullName}
          </Text>
        </View>
      </View>

      <View className="flex h-fit w-full flex-row items-center justify-center gap-x-4">
        <View className="flex w-fit flex-col items-center justify-center text-primary">
          <MapPin size={24} color={Colors.dark.primary} />
          <Text className="text-base font-medium text-primary">
            {location.slice(0, 10)}...
          </Text>
        </View>

        <Separator
          orientation="vertical"
          className="h-1/2 bg-text-foreground"
        />

        <View className="flex w-fit flex-col items-center justify-center text-text-primary">
          <Clock size={24} color={Colors.dark.text_secondary} />
          <Text className="text-base font-medium text-text-foreground">
            {date.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </Text>
        </View>

        <Separator
          orientation="vertical"
          className="h-1/2 bg-text-foreground"
        />

        <View className="flex w-fit flex-col items-center justify-center text-primary">
          <Calendar size={24} color={Colors.dark.primary} />
          <Text className="text-base font-medium text-primary">
            {date.toLocaleDateString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </Text>
        </View>
      </View>

      <Button
        className="flex w-full items-center justify-center text-text-foreground"
        variant="shadow"
        onPress={onDetailsPress}
      >
        <Info size={24} color={Colors.dark.text_primary} />
        <Text className="text-text-primary">See details</Text>
      </Button>
    </Card>
  );
};
