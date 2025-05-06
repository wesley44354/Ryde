import { router } from "expo-router";
import { II18nextTypes } from "@/types/i18next";
import { ThemedText } from "@/components/ThemedText";
import { TouchableOpacity, View } from "react-native";

interface Props {
  i18nLink: "SIGN_UP" | "LOG_IN";
  i18nText: keyof II18nextTypes;
}

const AuthRedirectLink = ({ i18nLink, i18nText }: Props) => {
  return (
    <View className="flex items-baseline justify-center flex-row gap-1">
      <ThemedText color="general" colorIntensity="200" text={i18nText} />
      <TouchableOpacity
        onPress={() => {
          router.replace(
            i18nLink === "LOG_IN" ? "/(auth)/sign-in" : "/(auth)/sign-up"
          );
        }}
      >
        <ThemedText type="bold" color="primary" text={i18nLink} />
      </TouchableOpacity>
    </View>
  );
};

export default AuthRedirectLink;
