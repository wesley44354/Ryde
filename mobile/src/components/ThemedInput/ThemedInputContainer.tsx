import React from "react";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";

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
    <View className="w-full my-2">
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
