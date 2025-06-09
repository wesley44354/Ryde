import React from "react";
import { icons } from "@/constants";
import * as Haptics from "expo-haptics";
import ThemedLoading from "./ThemedLoading";
import { ThemedImage } from "./ThemedImage";
import { PlatformPressable } from "@react-navigation/elements";
import {
  View,
  StyleProp,
  ViewStyle,
  PressableProps,
  GestureResponderEvent,
  Pressable,
} from "react-native";

type CustomPressableProps = Omit<PressableProps, "style" | "onPress"> & {
  href?: string;
  hoverEffect?: any;
  pressColor?: string;
  pressOpacity?: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: (e: GestureResponderEvent) => void;
};

interface Props extends CustomPressableProps {
  loading?: boolean;
  className?: string;
  onPress?: () => void;
  icon: keyof typeof icons;
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
      return "bg-white dark:bg-general-dark-300";
  }
};

export const ThemedCircleButton = ({
  icon,
  onPress,
  disabled,
  className,
  loading = false,
  bgVariant = "primary",
  ...rest
}: Props) => {
  return (
    <Pressable
      onPress={() => {
        if (!disabled && !loading && onPress) {
          onPress();
        }
      }}
      onPressIn={() => {
        if (!disabled && !loading && process.env.EXPO_OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
      }}
      disabled={disabled || loading}
      className={`
        rounded-full h-12 px-4 aspect-square items-center justify-center
        ${disabled || loading ? "opacity-40" : "opacity-100"}
        ${getBgVariantStyle(bgVariant)} 
        ${className ?? ""}
      `}
      {...rest}
    >
      {loading ? (
        <ThemedLoading color="secondary" colorIntensity="900" size={20} />
      ) : (
        <View className="h-[50%] aspect-square flex items-center">
          <ThemedImage
            color="secondary"
            colorIntensity="900"
            source={icons[icon]}
            resizeMode="contain"
            className={`flex-1`}
          />
        </View>
      )}
    </Pressable>
  );
};
