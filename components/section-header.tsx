import { Colors } from "@/constants/Colors";
import React from "react";
import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { ChevronRight } from "lucide-react-native";

export interface ISectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<ISectionHeaderProps> = ({ title }) => {
  return (
    <View className="flex w-full flex-row items-center justify-between">
      <Text className="text-lg font-medium">{title}</Text>

      <ChevronRight size={24} color={Colors.dark.accent} />
    </View>
  );
};
