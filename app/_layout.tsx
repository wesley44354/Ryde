import "../lang/i18n";
import "../global.css";
import "react-native-reanimated";
import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { colors } from "@/constants/colors";
export { ErrorBoundary } from "expo-router";
import { useColorScheme } from "react-native";
import { setZodErrorMessages } from "@/lang/zod";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import * as SplashScreen from "expo-splash-screen";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import {
  ThemeProvider,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { LoaderProvider } from "@/context/Load";
import { StatusBar } from "expo-status-bar";

if (typeof setImmediate === "undefined") {
  (global as any).setImmediate = (fn: Function) => {
    const wrappedFn = () => fn();

    (wrappedFn as any).__promisify__ = wrappedFn;

    return setTimeout(wrappedFn, 0);
  };
}

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      setZodErrorMessages();
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const MyLightTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,

      background: colors.background.light,
    },
  };

  const MyDarkTheme = {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      background: colors.background.dark,
    },
  };

  return (
    <LoaderProvider>
      <StatusBar translucent />
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <ClerkLoaded>
          <ThemeProvider
            value={colorScheme === "dark" ? MyDarkTheme : MyLightTheme}
          >
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(root)" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ThemeProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </LoaderProvider>
  );
}
