import React from "react";
import { icons } from "@/constants";
import * as Haptics from "expo-haptics";
import ThemedLoading from "./ThemedLoading";
import { ThemedTextProps } from "./ThemedText";
import { PlatformPressable } from "@react-navigation/elements";
import {
  View,
  Image,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  PressableProps,
} from "react-native";

type CustomPressableProps = Omit<PressableProps, "style" | "onPress"> & {
  href?: string;
  hoverEffect?: any;
  pressColor?: string;
  pressOpacity?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: (e: GestureResponderEvent) => void;
  children?: React.ReactNode;
};

interface Props extends CustomPressableProps {
  onPress?: () => void;
  loading?: boolean;
  className?: string;
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

const getIconColor = (variant: Props["bgVariant"]) => {
  switch (variant) {
    case "danger":
    case "success":
      return "white";
    default:
      return "black";
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
    <PlatformPressable
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
        <ThemedLoading size={20} />
      ) : (
        <View className="h-[50%] aspect-square  flex items-center">
          <Image
            source={icons[icon]}
            resizeMode="contain"
            className={`flex-1`}
            tintColor={getIconColor(bgVariant)}
          />
        </View>
      )}
    </PlatformPressable>
  );
};
