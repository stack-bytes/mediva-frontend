import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="prescription" />
      <Stack.Screen name="create-prescription" />
    </Stack>
  );
}
