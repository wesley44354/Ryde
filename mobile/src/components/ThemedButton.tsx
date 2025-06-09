import React from "react";
import * as Haptics from "expo-haptics";
import ThemedLoading from "./ThemedLoading";
import { II18nextTypes } from "@/types/i18next";
import { ThemedText, ThemedTextProps } from "./ThemedText";
import {
  View,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  iconLeft?: any;
  iconRight?: any;
  loading?: boolean;
  className?: string;
  text: keyof II18nextTypes;
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
      return "bg-transparent border text-secondary-light-900 dark:border-secondary-dark-900";
    default:
      return "bg-primary-light dark:bg-primary-dark shadow-general-light";
  }
};

const getTextVariantStyle = (variant: Props["bgVariant"]) => {
  switch (variant) {
    case "primary":
    case "danger":
    case "success":
      return "text-white";
    default:
      return "text-secondary-light-900 dark:text-secondary-dark-900";
  }
};

export const ThemedButton = ({
  text,
  onPress,
  disabled,
  iconLeft,
  iconRight,
  className,
  bgVariant = "primary",
  textVariant = "subtitle",
  loading = false,
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
      disabled={disabled || loading}
      onPressIn={handlePressIn}
      className={`
        rounded-full h-12 px-4 w-full gap-5 flex flex-row items-center justify-center
        ${disabled || loading ? "opacity-40" : "opacity-100"}
        ${getBgVariantStyle(bgVariant)} 
        ${className}
      `}
      {...rest}
    >
      {iconLeft && !loading && (
        <View className="h-[50%] aspect-square ml-5 flex items-center">
          <Image
            source={iconLeft}
            resizeMode="contain"
            className="flex-1 color-general-light-200 dark:color-general-dark-200"
          />
        </View>
      )}
      {loading ? (
        <ThemedLoading />
      ) : (
        <ThemedText
          text={text}
          numberOfLines={1}
          type={textVariant}
          className={`text-center ${getTextVariantStyle(bgVariant)}`}
        />
      )}
      {iconRight && !loading && (
        <View className="h-[50%] aspect-square flex items-center">
          <Image
            source={iconRight}
            resizeMode="contain"
            className="flex-1 color-general-light-200 dark:color-general-dark-200"
          />
        </View>
      )}
    </TouchableOpacity>
  );
};
