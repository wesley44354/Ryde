const AppConfig = {
  name: "Ryde",
  slug: "rydeapp",
  owner: "ryde_app",
  version: "1.0.0",
  runtimeVersion: "1.0.0",
  identifier: "com.ryde.ryde_app",
  extra: {
    clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    eas: {
      projectId: "76c83c83-5fa9-44e4-8440-736815537755",
    },
  },
};

module.exports = AppConfig;
