import { Header } from "@/components/header";
import { Gradient } from "@/components/images";
import { ImageBackground } from "expo-image";
import { SafeAreaView, SectionList, View } from "react-native";

import { Button } from "@/components/ui/button";

import { CalendarClock, Filter } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { AppointmentCard } from "@/components/cards/appointment-card";
import { GenericAppointments } from "@/generics/appointment";
import { IAppointment } from "@/types/appointment";

export default function AppointmentsScreen() {
  const [appointments, setAppointments] = React.useState<null | IAppointment[]>(
    []
  );

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  React.useEffect(() => {
    // Fetch the user's appointments
    setAppointments(GenericAppointments);
  }, []);

  if (!appointments) {
    return null;
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
        <Header
          icon={<CalendarClock />}
          title="Appointments"
          subtitle="View all your appointments in one place"
          icon_color={Colors.dark.secondary}
        />

        <View className="flex w-full flex-row justify-center gap-x-2 px-8">
          <Input className="flex-1" />
          <Button variant="shadow" className="aspect-square">
            <Filter color={Colors.dark.text_secondary} />
          </Button>
        </View>

        <Separator className="w-[40%]" />

        <View className="h-full w-full flex-1 px-8">
          <SectionList
            sections={[
              {
                title: "Today",
                data: appointments.filter((appointment) =>
                  isToday(new Date(appointment.dateTime))
                ),
              },
              {
                title: "Upcoming",
                data: appointments.filter(
                  (appointment) => !isToday(new Date(appointment.dateTime))
                ),
              },
            ].filter((section) => section.data.length > 0)}
            renderSectionHeader={({ section: { title } }) => (
              <Text className="bg-card text-lg font-semibold">{title}</Text>
            )}
            renderItem={({ item }) => <AppointmentCard {...item} />}
            className="w-full"
            contentContainerStyle={{
              rowGap: 15,
            }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
