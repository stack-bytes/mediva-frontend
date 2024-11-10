import { Header } from "@/components/header";
import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { Pressable, SafeAreaView, ScrollView, View } from "react-native";

import { Button } from "@/components/ui/button";

import {
  Calendar,
  CalendarClock,
  ChevronRight,
  ChevronsRight,
  ClipboardPlus,
  Clock,
  EllipsisIcon,
  File,
  Filter,
  MapPin,
  Pill,
  Plus,
  PlusCircle,
  SquareActivity,
} from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IIllness } from "@/types/illness";
import { GenericIllnesses } from "@/generics/illness";
import { FlatList } from "react-native";
import { Card } from "@/components/ui/card";
import { AppointmentCard } from "@/components/cards/appointment-card";
import { GenericAppointments } from "@/generics/appointment";
import { SectionHeader } from "@/components/section-header";
import { IAppointment } from "@/types/appointment";
import { DoctorCard } from "@/components/cards/doctor-card";
import { GenericUsers } from "@/generics/user";

export default function AppointmentScreen() {
  const { appointmentId } = useLocalSearchParams<{ appointmentId: string }>();
  const router = useRouter();

  const [appointment, setAppointment] = React.useState<null | IAppointment>(
    null
  );

  React.useEffect(() => {
    // Fetch the illness by ID
    setAppointment(GenericAppointments[0]);
  }, []);

  if (!appointment) {
    return <Text>Couldn't find illness</Text>;
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
            icon={<CalendarClock />}
            title={appointment.title}
            subtitle={appointment.dateTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            icon_color={Colors.dark.secondary}
          />

          <Separator className="w-[40%]" />

          <View className="w-full gap-y-4 px-8">
            <SectionHeader title="Your doctor" />
            <DoctorCard doctor={GenericUsers[7]} />
          </View>

          <View className="w-full gap-y-4 px-8">
            <SectionHeader title="Details" />
            <Card className="w-full flex-row justify-center gap-x-8">
              <View className="flex w-fit flex-row items-center justify-center gap-x-2 text-primary">
                <Clock size={24} color={Colors.dark.primary} />
                <Text className="text-lg font-medium text-primary">
                  {appointment.dateTime.toLocaleString("en-US", {
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

              <View className="flex w-fit flex-row items-center justify-center gap-x-2 text-secondary">
                <Calendar size={24} color={Colors.dark.secondary} />
                <Text className="text-lg font-medium text-secondary">
                  {appointment.dateTime.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </Text>
              </View>
            </Card>
          </View>

          <View className="w-full gap-y-4 px-8">
            <SectionHeader title="Location" />
            <Card className="h-48 flex-col justify-end">
              <Button
                className="absolute right-3 top-3 aspect-square"
                variant="default"
                onPress={() => router.push(`/profile/${doctor.id}`)}
              >
                <EllipsisIcon size={24} color="#fff" />
              </Button>

              <View className="flex w-full flex-col">
                <Text className="text-xl font-semibold text-primary">
                  Spitalul Judetean Timis
                </Text>
                <Text className="text-lg font-medium text-text-primary">
                  at str. Unirii nr. 56
                </Text>
              </View>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
