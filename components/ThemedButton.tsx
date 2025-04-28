import React from "react";
import * as Haptics from "expo-haptics";
import { ThemedText } from "./ThemedText";
import { II18nextTypes } from "@/interfaces/Ii18nextTypes";
import { Pressable, GestureResponderEvent } from "react-native";

interface Props {
  title: keyof II18nextTypes;
  disabled?: boolean;
  onPress: () => void;
}

export const ThemedButton = ({ title, onPress, disabled }: Props) => {
  const handlePress = () => {
    onPress();
  };

  const handlePressIn = (ev: GestureResponderEvent) => {
    if (process.env.EXPO_OS === "ios") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      disabled={disabled}
      className={`bg-primary-light dark:bg-primary-dark rounded-2xl py-3 px-4 my-2 w-full   ${
        disabled ? "opacity-60" : "active:opacity-80 active:scale-95"
      }`}
    >
      <ThemedText
        type="subtitle"
        color="danger"
        className="text-center leading-0"
      >
        {title}
      </ThemedText>
    </Pressable>
  );
};
