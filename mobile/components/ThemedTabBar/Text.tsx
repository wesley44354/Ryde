import { useColorScheme } from "react-native";
import { GetColorByTheme } from "@/constants/colors";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const ThemedTabText = ({
  label,
  scale,
}: {
  label: string;
  isFocused: boolean;
  scale: SharedValue<number>;
}) => {
  const colorScheme = useColorScheme();

  const Color = GetColorByTheme({
    theme: colorScheme!,
    color: "secondary",
    intensity: "400",
  });

  const animatedTextStyles = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return { opacity };
  });

  return (
    <Animated.Text
      numberOfLines={1}
      style={[
        { color: Color, flex: 1, width: "80%", textAlign: "center" },
        animatedTextStyles,
      ]}
    >
      {label}
    </Animated.Text>
  );
};

export default ThemedTabText;
