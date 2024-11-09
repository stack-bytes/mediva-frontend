import { Tabs, useRouter } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { AppLogo, AppLogoMono } from "@/components/images";
import { Text } from "@/components/ui/text";
import {
  ClipboardPlus,
  Hospital,
  MapIcon,
  Stethoscope,
} from "lucide-react-native";
import { cn } from "@/lib/utils";

export default function TabLayout() {
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
          href: `/profile/333`,
          tabBarIcon: ({ color, focused }) => (
            <View className="">
              <Image
                style={{
                  width: focused ? 32 : 30,
                  height: focused ? 32 : 30,
                  borderRadius: 20,
                  borderWidth: 3,
                  marginBottom: -20,
                  borderColor: focused ? Colors.dark.primary : "transparent",
                }}
                source="https://thispersondoesnotexist.com/"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
