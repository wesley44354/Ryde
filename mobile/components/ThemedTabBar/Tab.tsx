import ThemedTabBg from "./Bg";
import TabBarButton from "./Button";
import { BlurView } from "expo-blur";
import React, { useEffect, useCallback } from "react";
import { GetColorByTheme } from "@/constants/colors";
import { useSharedValue, withSpring } from "react-native-reanimated";
import {
  Platform,
  useColorScheme,
  useWindowDimensions,
  Keyboard,
  KeyboardEvent,
} from "react-native";

const ThemedTabBar = ({ state, descriptors, navigation }: any) => {
  const colorScheme = useColorScheme();
  const tabPositionX = useSharedValue(0);
  const { width, height } = useWindowDimensions();

  const contrainerWidth = width / (width >= 1024 ? 2 : 1.2);
  const buttonWidth = contrainerWidth / state.routes.length;

  const tabBgColor = GetColorByTheme({
    theme: colorScheme!,
    color: "background",
    intensity: "DEFAULT",
  });

  useEffect(() => {
    tabPositionX.value = withSpring(buttonWidth * state.index, {
      duration: 1500,
    });
  }, [state.index]);

  const handleKeyDown = useCallback(
    (e: any) => {
      if (e?.key === "ArrowRight") {
        if (state.index < state.routes.length - 1) {
          const nextIndex = state.index + 1;
          navigation.navigate(state.routes[nextIndex].name);
        }
      }
      if (e?.key === "ArrowLeft") {
        if (state.index > 0) {
          const prevIndex = state.index - 1;
          navigation.navigate(state.routes[prevIndex].name);
        }
      }
    },
    [navigation, state.index, state.routes]
  );

  useEffect(() => {
    if (Platform.OS === "web") {
      window.addEventListener("keydown", handleKeyDown as any);
      return () => {
        window.removeEventListener("keydown", handleKeyDown as any);
      };
    }
  }, [handleKeyDown]);

  return (
    <BlurView
      tint={colorScheme as any}
      className="backdrop-blur-sm"
      intensity={Platform.OS === "android" ? 0 : 10}
      style={{
        height: 60,
        bottom: 25,
        borderRadius: 50,
        overflow: "hidden",
        paddingVertical: 5,
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "row",
        position: "absolute",
        width: contrainerWidth,
        justifyContent: "space-between",
        backgroundColor: Platform.OS === "android" ? tabBgColor : undefined,
      }}
    >
      <ThemedTabBg
        buttonWidth={buttonWidth}
        dimensions={{ width: contrainerWidth, height }}
        tabPositionX={tabPositionX}
      />
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            label={label}
            key={route.name}
            onPress={onPress}
            isFocused={isFocused}
            routeName={route.name}
            onLongPress={onLongPress}
          />
        );
      })}
    </BlurView>
  );
};

export default ThemedTabBar;
