import React from "react";
import { useTranslation } from "react-i18next";
import { II18nextTypes } from "@/types/i18next";
import { Text, type TextProps, useColorScheme } from "react-native";
import { ColorIntensity, ColorTypes, colors } from "@/constants/colors";

export type ThemedTextProps = TextProps & {
  className?: string;
  color?: ColorTypes;
  text?: keyof II18nextTypes;
  children?: React.ReactNode;
  i18nTextArgs?: Record<string, any>;
  colorIntensity?: keyof ColorIntensity;
  type?: "default" | "title" | "subtitle" | "small" | "bold";
  fontFamily?:
    | "Jakarta"
    | "JakartaBold"
    | "JakartaThin"
    | "extralight"
    | "JakartaLight"
    | "JakartaMedium"
    | "JakartaSemiBold"
    | "JakartaExtraBold";
};

export function ThemedText({
  style,
  color,
  text,
  children,
  className,
  i18nTextArgs,
  type = "default",
  fontFamily = "Jakarta",
  colorIntensity = "DEFAULT",
  ...rest
}: ThemedTextProps) {
  const { t } = useTranslation();
  const theme = useColorScheme();

  let textStyle = "";

  if (type === "bold") textStyle = "text-md font-JakartaBold";
  if (type === "default") textStyle = "text-base leading-6 Jakarta";
  if (type === "small") textStyle = "text-xs leading-5 JakartaThin";
  if (type === "subtitle") textStyle = "text-xl font-bold JakartaMedium";
  if (type === "title") textStyle = "text-4xl leading-10 JakartaSemiBold";

  const getColorFromTheme = (): string | undefined => {
    if (
      className?.includes("text-") &&
      (className.includes("light") ||
        className?.includes("dark") ||
        className?.includes("white") ||
        className?.includes("dark"))
    )
      return undefined;

    if (!color) {
      return colors["secondary"]?.[theme!]?.["900"];
    }

    const intensity = colorIntensity === "DEFAULT" ? "DEFAULT" : colorIntensity;
    const palette: any = colors[color];

    return palette?.[theme!]?.[intensity];
  };

  return (
    <Text
      className={`font-${fontFamily} ${textStyle} ${className || ""}`}
      style={[getColorFromTheme() ? { color: getColorFromTheme() } : {}, style]}
      {...rest}
    >
      {children ? children : t(text!, i18nTextArgs)}
    </Text>
  );
}
