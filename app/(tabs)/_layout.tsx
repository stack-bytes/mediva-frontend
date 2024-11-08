import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { View } from "react-native";
import { Image } from "expo-image";
import { AppLogo } from "@/components/images";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="(home)"
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.primary,
        headerShown: false,
        tabBarShowLabel: false,
        headerTransparent: true,

        tabBarStyle: {
          zIndex: 20,
          position: "absolute",
          bottom: 50,

          paddingTop: 20,
          marginHorizontal: 20,
          height: 80,

          backgroundColor: "rgba(16,16,16,0.5)",
          borderWidth: 2,
          borderColor: "rgba(18,18,18,0.93)",
          borderRadius: 40,
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
            <TabBarIcon
              name="user-doctor"
              color={color}
              size={focused ? 30 : 28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(illnesses)"
        options={{
          title: "Illnesses",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="virus" color={color} size={focused ? 30 : 28} />
          ),
        }}
      />
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View className="pr-3 pt-4">
              <Image
                style={{
                  width: focused ? 50 : 40,
                  height: focused ? 50 : 40,
                }}
                source={AppLogo}
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
            <TabBarIcon name="map" color={color} size={focused ? 30 : 28} />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "profile",
          tabBarIcon: ({ color, focused }) => (
            <View className="pr-3 pt-2">
              <Image
                style={{
                  width: focused ? 36 : 34,
                  height: focused ? 36 : 34,
                  borderRadius: 20,
                  borderWidth: 3,
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
