import React from "react";
import { View, Pressable, Text } from "react-native";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TriangleAlert, CalendarClock, PlusCircle } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { IUser } from "@/types/user";
import { ISymptom } from "@/types/illness";
import { GenericSymptoms } from "@/generics/illness";
import { GenericUsers } from "@/generics/user";

interface ISymptomCardProps {
  id: string;
  viewOnly?: boolean;
}

export const SymptomCard: React.FC<ISymptomCardProps> = ({
  id,
  viewOnly = false,
}) => {
  const router = useRouter();

  const [pacient, setPacient] = React.useState<IUser | null>(null);
  const [symptom, setsymptom] = React.useState<ISymptom | null>(null);

  React.useEffect(() => {
    // Fetch the user's illnesses

    const foundsymptom = GenericSymptoms.find((item) => item.id === id);

    if (!foundsymptom) return;

    setsymptom(foundsymptom);

    setPacient(GenericUsers[0]);
  }, []);

  if (!symptom || !pacient) {
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
        <Text className="text-lg font-medium italic text-text-foreground">
          {symptom.description}
        </Text>
      </View>

      <View className="flex w-full flex-row items-center justify-start gap-x-2">
        <TriangleAlert size={20} color={Colors.dark.secondary} />
        <Text className="text-lg font-semibold text-secondary">
          {symptom.name}
        </Text>
      </View>

      <View className="flex w-full flex-row items-center justify-start gap-x-2">
        <CalendarClock size={20} color={Colors.dark.text_secondary} />
        <Text className="text-lg font-medium text-text-primary">
          {symptom.date.toLocaleDateString("en-US", {
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
            onPress={() => {
              router.push("/illness/middleware");
              router.setParams({ symptomId: id });
            }}
          >
            <PlusCircle color={Colors.dark.text_white} />
          </Button>
        </>
      )}
    </Card>
  );
};
