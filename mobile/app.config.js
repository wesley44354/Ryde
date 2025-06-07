const AppConfig = require("./constants/appConfig.ts");

export default {
  name: AppConfig.name,
  slug: AppConfig.slug,
  newArchEnabled: true,
  owner: AppConfig.owner,
  scheme: AppConfig.slug,
  orientation: "portrait",
  version: AppConfig.version,
  userInterfaceStyle: "automatic",
  icon: "./assets/images/icon.png",
  runtimeVersion: AppConfig.runtimeVersion,
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: ["expo-font", ["expo-router", { "origin": `https://ryde.com/` }], "expo-web-browser"],
  experiments: {
    typedRoutes: true,
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/" + AppConfig.extra.eas.projectId,
  },
  extra: AppConfig.extra,
};
