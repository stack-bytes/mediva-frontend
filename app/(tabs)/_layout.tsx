import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { View } from "react-native";
import { Image } from "expo-image";
import { AppLogoMono } from "@/components/images";
import { ClipboardPlus, MapIcon, Stethoscope, User } from "lucide-react-native";
import { cn } from "@/lib/utils";
import { useSessionStore } from "@/hooks/useSession";

export default function TabLayout() {
  const { user } = useSessionStore((state) => state);
  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.primary,
        headerShown: false,
        tabBarShowLabel: true,
        headerTransparent: true,

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "semibold",
        },
        tabBarStyle: {
          height: 100,

          backgroundColor: "#fff",

          borderColor: Colors.dark.border,

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        },
      }}
    >
      <Tabs.Screen
        name="(doctors)"
        options={{
          title: "Doctors",
          tabBarIcon: ({ color, focused }) => (
            <Stethoscope
              style={{
                marginBottom: -20,
              }}
              color={color}
              size={focused ? 32 : 30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="illness"
        options={{
          title: "Illnesses",
          tabBarIcon: ({ color, focused }) => (
            <ClipboardPlus
              style={{
                marginBottom: -20,
              }}
              color={color}
              size={focused ? 32 : 30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarLabel: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              className={cn(
                "mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-destructive",
                focused && "h-16 w-16"
              )}
            >
              <Image
                style={{
                  width: focused ? 40 : 32,
                  height: focused ? 40 : 32,
                }}
                source={AppLogoMono}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(map)"
        options={{
          title: "Map",
          tabBarIcon: ({ color, focused }) => (
            <MapIcon
              style={{
                marginBottom: -20,
              }}
              color={color}
              size={focused ? 32 : 30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          href: `/profile/${user.username}`,
          tabBarIcon: ({ color, focused }) => (
            <User
              style={{
                marginBottom: -20,
              }}
              color={color}
              size={focused ? 32 : 30}
            />
          ),
        }}
      />
    </Tabs>
  );
}
