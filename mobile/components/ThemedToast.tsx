import { GetColorByTheme } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { View, Platform } from "react-native";
import { ThemedText } from "./ThemedText";
import { BlurView } from "expo-blur";

type ToastType = "success" | "error" | "info";

type Props = {
  type: ToastType;
  text1?: string;
  text2?: string;
};

export function ThemedToast({ type, text1, text2 }: Props) {
  const theme = useColorScheme() ?? "light";

  let borderColor: string;
  let icon: keyof typeof Ionicons.glyphMap;

  switch (type) {
    case "success":
      borderColor = GetColorByTheme({
        theme: theme,
        color: "success",
        intensity: "DEFAULT",
      });
      icon = "checkmark-circle";
      break;
    case "error":
      borderColor = GetColorByTheme({
        theme: theme,
        color: "danger",
        intensity: "DEFAULT",
      });
      icon = "alert-circle";
      break;
    default:
      borderColor = GetColorByTheme({
        theme: theme,
        color: "general",
        intensity: "DEFAULT",
      });
      icon = "information-circle";
  }

  const Container: React.ElementType = Platform.OS === "ios" ? BlurView : View;

  return (
    <Container
      tint={theme}
      intensity={60}
      className="flex-row items-center p-5 m-5 gap-5 rounded-xl shadow-lg overflow-hidden"
      style={{
        borderColor,
        borderWidth: 2,
        backgroundColor:
          Platform.OS !== "ios"
            ? GetColorByTheme({
                theme: theme,
                color: "background",
                intensity: "DEFAULT",
              })
            : "transparent",
      }}
    >
      <View className="flex-2">
        <Ionicons size={30} name={icon} color={borderColor} />
      </View>
      <View className="flex-1">
        <ThemedText type="subtitle">{text1}</ThemedText>
        <ThemedText type="small" color="secondary">
          {text2}
        </ThemedText>
      </View>
    </Container>
  );
}
