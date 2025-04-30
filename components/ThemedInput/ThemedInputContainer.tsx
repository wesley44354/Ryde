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
          type="bold"
          className={`color-secondary-light-900 dark:color-secondary-dark-900 mb-2 ml-1 ${
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
