import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="symptoms" />
      <Stack.Screen
        name="symptoms-list"
        options={{
          presentation: "containedModal",
        }}
      />
    </Stack>
  );
}
