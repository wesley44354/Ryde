import { useTranslation } from "react-i18next";
import { II18nextTypes } from "@/types/i18next";
import { Text, type TextProps, useColorScheme } from "react-native";

export type ThemedTextProps = TextProps & {
  className?: string;
  children: keyof II18nextTypes;
  type?: "default" | "title" | "subtitle" | "small" | "bold";
  color?:
    | "danger"
    | "primary"
    | "success"
    | "warning"
    | "general"
    | "secondary";
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
  children,
  className,
  type = "default",
  fontFamily = "Jakarta",
  ...rest
}: ThemedTextProps) {
  const { t } = useTranslation();
  const theme = useColorScheme();

  let textStyle = "";

  if (type === "bold") textStyle = "text-md font-JakartaBold";
  if (type === "default") textStyle = "text-base leading-6 Jakarta";
  if (type === "small") textStyle = "text-xs leading-5 JakartaThin";
  if (type === "subtitle") textStyle = "text-xl font-bold JakartaMedium";
  if (type === "title") textStyle = "text-4xl leading-8 JakartaSemiBold";

  const colorClass = !color
    ? theme === "dark"
      ? "text-white"
      : "text-black"
    : `text-${color}-light-100 dark:text-${color}-dark-100`;

  return (
    <Text
      className={`${colorClass} font-${fontFamily} ${textStyle} ${className}`}
      style={style}
      {...rest}
    >
      {t(children, { APP_NAME: "aqui faz ele pegar o real nome do app" })}
    </Text>
  );
}
