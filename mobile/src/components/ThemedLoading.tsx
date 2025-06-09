import React from "react";
import { ActivityIndicator, useColorScheme } from "react-native";
import { colors, ColorTypes, ColorIntensity } from "@/constants/colors";

interface Props {
  size?: number;
  color?: ColorTypes;
  customColor?: string;
  colorIntensity?: keyof ColorIntensity;
}

const ThemedLoading = ({
  size = 24,
  color = "secondary",
  colorIntensity = "900",
  customColor,
}: Props) => {
  const theme = useColorScheme();

  const getColor = (): string => {
    if (customColor) return customColor;

    const palette = colors[color];
    return palette?.[theme ?? "light"]?.[colorIntensity] ?? "#000";
  };

  return <ActivityIndicator size={size} color={getColor()} />;
};

export default ThemedLoading;
