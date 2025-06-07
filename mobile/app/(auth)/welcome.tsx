import { router } from "expo-router";
import OAuth from "@/mobile-app/components/auth/OAuth";
import { ThemedText } from "@/mobile-app/components/ThemedText";
import { ThemedButton } from "@/mobile-app/components/ThemedButton";
import AuthContrainer from "@/mobile-app/components/auth/Contrainer";
import AuthRedirectLink from "@/mobile-app/components/auth/RedirectLink";

const Welcome = () => {
  return (
    <AuthContrainer heightAuthImage="50%" scrollPaddingTop={300}>
      <ThemedText type="title" className="text-center" text="LET_GET_STARTED" />

      <ThemedText
        color="general"
        colorIntensity="200"
        className="text-center"
        text="SIGN_UP_OR_LOG_IN_TO_FIND_OUT_THE_BEST_CAR_FOR_YOU"
      />

      <ThemedButton
        text="SIGN_UP"
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
      />

      <OAuth />

      <AuthRedirectLink i18nText="ALREADY_HAVE_AN_ACCOUNT" i18nLink="LOG_IN" />
    </AuthContrainer>
  );
};

export default Welcome;
