import React from "react";
import { Image, ImageProps, useColorScheme } from "react-native";
import { colors, ColorTypes, ColorIntensity } from "@/constants/colors";

type ThemedImageProps = ImageProps & {
  className?: string;
  color?: ColorTypes;
  colorIntensity?: keyof ColorIntensity;
};

export function ThemedImage({
  colorIntensity = "DEFAULT",
  className,
  color,
  style,
  ...rest
}: ThemedImageProps) {
  const theme = useColorScheme();

  const getTintColor = (): string | undefined => {
    if (
      className?.includes("tint-") &&
      (className.includes("light") ||
        className.includes("dark") ||
        className.includes("white"))
    ) {
      return undefined;
    }

    const selectedColor = color || "secondary";
    const intensity = colorIntensity === "DEFAULT" ? "900" : colorIntensity;
    return colors[selectedColor]?.[theme!]?.[intensity];
  };

  return (
    <Image
      {...rest}
      className={className}
      style={[style, { tintColor: getTintColor() }]}
    />
  );
}
