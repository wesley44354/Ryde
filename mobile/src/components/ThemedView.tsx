import React from "react";
import { View, ViewProps, useColorScheme } from "react-native";
import { colors, ColorTypes, ColorIntensity } from "@/constants/colors";

type ThemedViewProps = ViewProps & {
  className?: string;
  color?: ColorTypes;
  colorIntensity?: keyof ColorIntensity;
};

export function ThemedView({
  colorIntensity = "DEFAULT",
  className,
  color,
  style,
  ...rest
}: ThemedViewProps) {
  const theme = useColorScheme();

  const getBackgroundColor = (): string | undefined => {
    if (!color) return undefined;

    if (
      className?.includes("bg-") &&
      (className.includes("light") ||
        className.includes("dark") ||
        className.includes("white"))
    ) {
      return undefined;
    }

    const intensity = colorIntensity === "DEFAULT" ? "900" : colorIntensity;
    return colors[color]?.[theme!]?.[intensity];
  };

  return (
    <View
      className={className}
      style={[
        style,
        getBackgroundColor() ? { backgroundColor: getBackgroundColor() } : {},
      ]}
      {...rest}
    />
  );
}
