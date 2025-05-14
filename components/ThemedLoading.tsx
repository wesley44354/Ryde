import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

interface Props {
  size?: number;
}

const ThemedLoading = ({ size = 24 }: Props) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    spin.start();
    return () => spin.stop();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      className="border-general-light dark:border-general-dark shadow-general-light"
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size * 0.1,
        borderTopColor: "transparent",
        transform: [{ rotate }],
      }}
    />
  );
};

export default ThemedLoading;
