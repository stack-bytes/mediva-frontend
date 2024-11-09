import { Colors } from "@/constants/Colors";
import React from "react";
import { Pressable, View } from "react-native";
import { Text } from "@/components/ui/text";
import { ChevronRight } from "lucide-react-native";

export interface ISectionHeaderProps {
  title: string;
  action?: () => void;
}

export const SectionHeader: React.FC<ISectionHeaderProps> = ({
  title,
  action,
}) => {
  return (
    <Pressable
      className="flex w-full flex-row items-center justify-between"
      onPress={action}
    >
      <Text className="text-lg font-medium">{title}</Text>

      {action && <ChevronRight size={24} color={Colors.dark.accent} />}
    </Pressable>
  );
};
