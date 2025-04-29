import React from "react";
import * as Haptics from "expo-haptics";
import { II18nextTypes } from "@/types/i18next";
import { ThemedText, ThemedTextProps } from "./ThemedText";
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  className?: string;
  text: keyof II18nextTypes;
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  textVariant?: ThemedTextProps["type"];
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
}

const getBgVariantStyle = (variant: Props["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-general-light-200 dark:bg-white";
    case "danger":
      return "bg-danger-light dark:bg-danger-dark";
    case "success":
      return "bg-success-light dark:bg-success-dark";
    case "outline":
      return "bg-transparent border border-general-light-200 dark:border-white";
    default:
      return "bg-primary-light dark:bg-primary-dark ";
  }
};

const getTextVariantStyle = (variant: Props["bgVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-white";
    case "danger":
      return "text-danger-light-100  dark:text-danger-dark-100";
    case "success":
      return "text-success-light-100 dark:text-success-dark-100";
    default:
      return "text-black dark:text-white";
  }
};

export const ThemedButton = ({
  onPress,
  text,
  disabled,
  className,
  bgVariant = "primary",
  textVariant = "subtitle",
  ...rest
}: Props) => {
  const handlePressIn = (ev: GestureResponderEvent) => {
    if (process.env.EXPO_OS === "ios") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      onPressIn={handlePressIn}
      className={`
        
          rounded-full py-3 px-4 w-full flex items-center justify-center
          ${getBgVariantStyle(bgVariant)} 
          ${disabled ? "opacity-60" : "opacity-100"}
          ${className}
          `}
      {...rest}
    >
      <ThemedText
        text={text}
        type={textVariant}
        className={`text-center ${getTextVariantStyle(bgVariant)}`}
      />
    </TouchableOpacity>
  );
};
