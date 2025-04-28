import { II18nextTypes } from "@/interfaces/Ii18nextTypes";
import { Text, type TextProps, useColorScheme } from "react-native";
import { useTranslation } from "react-i18next";

export type ThemedTextProps = TextProps & {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "general";
  type?: "default" | "title" | "subtitle" | "small";
  children: keyof II18nextTypes;
  className?: string;
};

export function ThemedText({
  style,
  className,
  children,
  type = "default",
  color,
  ...rest
}: ThemedTextProps) {
  const { t } = useTranslation();
  const theme = useColorScheme();

  let textStyle = "";

  if (type === "title") textStyle = "text-4xl font-bold leading-8";
  if (type === "default") textStyle = "text-base leading-6";
  if (type === "subtitle") textStyle = "text-xl font-bold";
  if (type === "small") textStyle = "text-xs leading-5";

  const colorClass = !color
    ? theme === "dark"
      ? "text-white"
      : "text-black"
    : `text-${color}-light-100 dark:text-${color}-dark-100`;

  return (
    <Text
      className={`${textStyle} ${colorClass} ${className}`}
      style={style}
      {...rest}
    >
      {t(children)}
    </Text>
  );
}
