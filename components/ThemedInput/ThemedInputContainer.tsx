import React from "react";
import { ThemedText } from "../ThemedText";
import { View } from "react-native";

interface Props {
  labelCenter?: boolean;
  label: string | undefined;
  children: React.ReactNode;
}

export const ThemedInputContainer = ({
  label,
  children,
  labelCenter = false,
}: Props) => {
  return (
    <View className="flex-1 my-2">
      {label && (
        <ThemedText
          className={`text-base mb-2 ${
            labelCenter ? "text-center" : "text-left"
          }`}
        >
          {label}
        </ThemedText>
      )}
      {children}
    </View>
  );
};
