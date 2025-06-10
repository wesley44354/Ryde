const AppConfig = require("../common/src/constants/config.ts");

export default {
  name: AppConfig.name,
  slug: AppConfig.slug,
  newArchEnabled: true,
  owner: AppConfig.owner,
  scheme: AppConfig.slug,
  orientation: "portrait",
  version: AppConfig.version,
  userInterfaceStyle: "automatic",
  icon: "../ui/src/logos/icon.png",
  runtimeVersion: AppConfig.runtimeVersion,
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "../ui/src/logos/icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "../ui/src/logos/favicon.png",
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
