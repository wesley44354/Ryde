import { Link } from "expo-router";
import { View } from "react-native";
import { II18nextTypes } from "@/types/i18next";
import { ThemedText } from "@/components/ThemedText";

interface Props {
  i18nLink: keyof II18nextTypes;
  i18nText: keyof II18nextTypes;
}

const AuthRedirectLink = ({ i18nLink, i18nText }: Props) => {
  return (
    <View className="flex items-center justify-center flex-row gap-1">
      <ThemedText color="general" colorIntensity="200" text={i18nText} />
      <Link href={"/(auth)/sign-in"}>
        <ThemedText type="bold" color="primary" text={i18nLink} />
      </Link>
    </View>
  );
};

export default AuthRedirectLink;
