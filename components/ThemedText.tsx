import React from "react";
import { useTranslation } from "react-i18next";
import { II18nextTypes } from "@/types/i18next";
import { ColorIntensity, ColorTypes } from "@/constants/colors";
import { Text, type TextProps, useColorScheme } from "react-native";

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

  const getColorFromTheme = (): string => {
    if (!color) return theme === "dark" ? "text-white" : "text-black";

    const intensity = colorIntensity === "DEFAULT" ? "" : `-${colorIntensity}`;
    const lightColor = `text-${color}-light${intensity}`;
    const darkColor = `dark:text-${color}-dark${intensity}`;
    return theme === "dark" ? darkColor : lightColor;
  };

  return (
    <Text
      className={`font-${fontFamily} ${textStyle} ${getColorFromTheme()} ${className} `}
      style={style}
      {...rest}
    >
      {children ? children : t(text!, i18nTextArgs)}
    </Text>
  );
}
