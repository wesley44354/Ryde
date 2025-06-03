import ThemedTabText from "./Text";
import ThemedTabIcon from "./Icon";
import { HapticTab } from "./HapticTab";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { withSpring, useSharedValue } from "react-native-reanimated";

interface Props {
  onLongPress: () => void;
  onPress: () => void;
  isFocused: boolean;
  routeName: string;
  label: string;
}

const TabBarButton = (props: Props) => {
  const { isFocused, label, routeName } = props;

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  return (
    <HapticTab tabIndex={-1} {...props} style={styles.container}>
      <ThemedTabIcon
        scale={scale}
        isFocused={isFocused}
        icon={routeName as any}
      />
      <ThemedTabText label={label} scale={scale} isFocused={isFocused} />
    </HapticTab>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flex: 1,
  },
});

export default TabBarButton;
