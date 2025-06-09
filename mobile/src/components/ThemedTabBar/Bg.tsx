import { useColorScheme } from "react-native";
import { GetColorByTheme } from "@/constants/colors";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const ThemedTabBg = ({
  tabPositionX,
  buttonWidth,
  dimensions,
}: {
  buttonWidth: number;
  tabPositionX: SharedValue<number>;
  dimensions: { height: number; width: number };
}) => {
  const colorScheme = useColorScheme();

  const Color = GetColorByTheme({
    theme: colorScheme!,
    color: "primary",
    intensity: "DEFAULT",
  });

  const size = dimensions.height / 16;

  const animatedStyle = useAnimatedStyle(() => {
    const offset = (buttonWidth - size) / 2;
    return {
      transform: [{ translateX: tabPositionX.value + offset }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: size,
          height: size,
          borderRadius: 30,
          position: "absolute",
          backgroundColor: Color,
        },
        animatedStyle,
      ]}
    />
  );
};

export default ThemedTabBg;
