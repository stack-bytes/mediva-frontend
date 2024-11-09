import React from "react";
import { View, Pressable, Text } from "react-native";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  TriangleAlert,
  CalendarClock,
  ShieldPlus,
  CircleCheck,
  Eye,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { IUser } from "@/types/user";
import { IIllness } from "@/types/illness";
import { GenericIllnesses } from "@/generics/illness";
import { GenericUsers } from "@/generics/user";

interface IIllnessCardProps {
  id: string;
  viewOnly?: boolean;
}

export const IllnessCard: React.FC<IIllnessCardProps> = ({
  id,
  viewOnly = false,
}) => {
  const router = useRouter();

  const [pacient, setPacient] = React.useState<IUser | null>(null);
  const [illness, setIllness] = React.useState<IIllness | null>(null);

  React.useEffect(() => {
    // Fetch the user's illnesses

    const foundIllnesses = GenericIllnesses.find((item) => item.id === id);

    if (!foundIllnesses) return;

    setIllness(foundIllnesses);

    setPacient(GenericUsers[0]);
  }, []);

  if (!illness || !pacient) {
    return <Text>Loading...</Text>;
  }

  return (
    <Card
      key={id}
      className="flex w-full flex-col items-center justify-start gap-y-4"
    >
      <View className="flex h-fit w-full flex-row items-center justify-start gap-x-2">
        <Pressable onPress={() => router.push(`/profile/${pacient.id}`)}>
          <Avatar alt="Avatar" className="h-12 w-12 border-2 border-border">
            <AvatarImage source={{ uri: pacient.avatar ?? "" }} />
            <AvatarFallback>
              <Text>ZN</Text>
            </AvatarFallback>
          </Avatar>
        </Pressable>

        <Text className="text-xl font-semibold text-primary">
          {pacient.fullName ?? "Loading..."}, {pacient.age ?? "..."}
        </Text>
      </View>

      <View className="flex w-full flex-row items-center justify-start gap-x-2">
        <ShieldPlus size={20} color={Colors.dark.text_secondary} />
        <Text className="text-lg font-medium text-text-foreground">
          Diagnosed with {illness.name}
        </Text>
      </View>

      <View className="flex w-full flex-row items-center justify-start gap-x-2">
        {illness.prescriptionId === "" ? (
          <>
            <TriangleAlert size={20} color={Colors.dark.secondary} />
            <Text className="text-lg font-semibold text-secondary">
              Prescription missing
            </Text>
          </>
        ) : (
          <>
            <CircleCheck size={20} color={Colors.dark.success_primary} />
            <Text className="text-lg font-semibold text-success">
              Prescription valid
            </Text>
          </>
        )}
      </View>

      <View className="flex w-full flex-row items-center justify-start gap-x-2">
        <CalendarClock size={20} color={Colors.dark.text_secondary} />
        <Text className="text-lg font-medium text-text-primary">
          {illness.date.toLocaleDateString("en-US", {
            hour: "2-digit",
            month: "numeric",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
      </View>

      {!viewOnly && (
        <>
          <Button
            className="absolute bottom-4 right-4 aspect-square h-10"
            onPress={() => router.push(`/illness/${illness.id}`)}
          >
            <Eye color={Colors.dark.text_white} />
          </Button>
        </>
      )}
    </Card>
  );
};
