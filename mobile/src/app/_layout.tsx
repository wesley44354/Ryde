import "../lang/i18n";
import "../global.css";
import "react-native-reanimated";
import { colors } from "common";
import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
export { ErrorBoundary } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import Toast from "react-native-toast-message";
import { LoaderProvider } from "@/context/Load";
import * as SplashScreen from "expo-splash-screen";
import { ThemedToast } from "@/components/ThemedToast";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import {
  ThemeProvider,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  Ionicons,
  JakartaSansBold,
  JakartaSansExtraBold,
  JakartaSansExtraLight,
  JakartaSansLight,
  JakartaSansMedium,
  JakartaSansRegular,
  JakartaSansSemiBold,
  setZodErrorMessages,
} from "ui";

const clerkKey = Constants.expoConfig?.extra?.clerkPublishableKey;

if (typeof setImmediate === "undefined") {
  (global as any).setImmediate = (fn: Function) => {
    const wrappedFn = () => fn();

    (wrappedFn as any).__promisify__ = wrappedFn;

    return setTimeout(wrappedFn, 0);
  };
}

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Ionicons,
    "Jakarta-Bold": JakartaSansBold,
    "Jakarta-Light": JakartaSansLight,
    "Jakarta-Medium": JakartaSansMedium,
    "Jakarta-Regular": JakartaSansRegular,
    "Jakarta-SemiBold": JakartaSansSemiBold,
    "Jakarta-ExtraBold": JakartaSansExtraBold,
    "Jakarta-ExtraLight": JakartaSansExtraLight,
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

      <ClerkProvider publishableKey={clerkKey} tokenCache={tokenCache}>
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

      <Toast
        autoHide
        swipeable
        avoidKeyboard
        position="bottom"
        config={{
          success: (props) => <ThemedToast {...props} type="success" />,
          error: (props) => <ThemedToast {...props} type="error" />,
          info: (props) => <ThemedToast {...props} type="info" />,
        }}
      />
    </LoaderProvider>
  );
}
