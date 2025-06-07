import { icons } from "@/constants";
import { GetColorByTheme } from "@/constants/colors";
import { Image, useColorScheme } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const ThemedTabIcon = ({
  icon,
  scale,
  isFocused,
}: {
  isFocused: boolean;
  scale: SharedValue<number>;
  icon: keyof typeof icons;
}) => {
  const colorScheme = useColorScheme();

  const IconColor = GetColorByTheme({
    theme: colorScheme!,
    color: "secondary",
    intensity: "400",
  });

  const animatedIconStyles = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 0.95]);

    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return { top, transform: [{ scale: scaleValue }] };
  });

  return (
    <Animated.View style={[{ height: "70%" }, animatedIconStyles]}>
      <Image
        source={icons[icon]}
        resizeMode="contain"
        style={{ height: "100%" }}
        tintColor={isFocused ? "white" : IconColor}
      />
    </Animated.View>
  );
};

export default ThemedTabIcon;
