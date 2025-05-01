import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

export type ColorIntensity = {
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
  DEFAULT: string;
};
export type ColorTypes =
  | "danger"
  | "primary"
  | "success"
  | "warning"
  | "general"
  | "secondary";

export type ThemeColorGroup = {
  light: ColorIntensity;
  dark: ColorIntensity;
};

export type GeneralColorGroup = {
  light: {
    DEFAULT: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
  };
  dark: {
    DEFAULT: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
  };
};

export type AppColors = {
  background: {
    light: string;
    dark: string;
  };
  primary: ThemeColorGroup;
  secondary: ThemeColorGroup;
  success: ThemeColorGroup;
  danger: ThemeColorGroup;
  warning: ThemeColorGroup;
  general: GeneralColorGroup;
};

const fullConfig = resolveConfig(tailwindConfig);
export const colors: AppColors = fullConfig.theme?.colors as any;
