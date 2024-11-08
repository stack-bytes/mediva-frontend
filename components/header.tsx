import React from "react";

import { View } from "react-native";
import { Text } from "./ui/text";
import { cn } from "@/lib/utils";
import { Colors } from "@/constants/Colors";

export interface IHeaderProps {
  icon: React.ReactElement;
  icon_color?: string;
  title: string;
  subtitle?: string;

  //For pages that don't have a subtitle
  centered?: boolean;
}

// Custom header component for pages
export const Header: React.FC<IHeaderProps> = ({
  centered = false,
  icon_color = Colors.dark.primary,
  ...props
}) => {
  return (
    <View className="w-full px-8 pt-10">
      <View
        className={cn(
          "flex flex-row items-center justify-start gap-x-2",
          centered && "justify-center"
        )}
      >
        {React.cloneElement(props.icon, { size: 36, color: icon_color })}
        <Text className="text-4xl font-bold">{props.title}</Text>
      </View>

      {props.subtitle && (
        <Text className="text-lg text-[#9F9F9F]">{props.subtitle}</Text>
      )}
    </View>
  );
};
