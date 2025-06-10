/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    CLERK_PUBLISHABLE_KEY: string;
    EXPO_PUBLIC_GEOAPIFY_API_KEY: string;
  }
}
