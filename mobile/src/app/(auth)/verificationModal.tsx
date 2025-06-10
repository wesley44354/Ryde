import { useVerificationStore } from "@/stores/auth/VerificationStore";
import { ThemedInput } from "@/components/ThemedInput/ThemedInput";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import ThemedModal from "@/components/ThemedModal";
import { useSignUp } from "@clerk/clerk-expo";
import { Image, View } from "react-native";
import { fetchAPI } from "@/lib/fetch";
import { router } from "expo-router";
import { icons, images } from "ui";
import { useState } from "react";

const VerificationModal = () => {
  const [loading, setLoading] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const { verification, setVerification } = useVerificationStore();

  const OnPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    setLoading(true);
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code!,
      });

      if (completeSignUp.status === "complete") {
        fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({ ...verification.forms }),
        });

        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({ ...verification, state: "success" });
      } else {
        setVerification({
          ...verification,
          error: "VERIFICATION_FAILED",
          state: "failed",
        });
      }
    } catch (e: any) {
      setVerification({
        ...verification,
        error: e.errors[0].longMessage || e.errors[0].message,
        state: "failed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedModal
      onClose={() => {
        if (verification.state === "success") {
          router.replace("/(root)/(tabs)/home");
        }
      }}
    >
      {(verification.state === "pending" ||
        verification.state === "failed") && (
        <>
          <View className="self-start gap-2">
            <ThemedText
              className="self-start font-bold"
              text="VERIFICATION"
              type="title"
            />

            <ThemedText
              type="default"
              className="self-start"
              i18nTextArgs={{ email: verification.forms?.email }}
              text="WEVE_SENT_A_VERIFICATION_CODE_TO"
            />
          </View>

          <ThemedInput
            label="CODE"
            icon={icons.lock}
            keyboardType="numeric"
            value={verification.code}
            error={verification.error}
            onChangeText={(code) => {
              if (code !== undefined) {
                setVerification({ ...verification, code });
              }
            }}
            placeholder="VERIFICATION_MODAL_PLACEHOLDER"
          />

          <ThemedButton
            loading={loading}
            text="VERIFY_EMAIL"
            bgVariant="success"
            onPress={OnPressVerify}
            disabled={verification.code.length <= 5}
          />
        </>
      )}

      {verification.state === "success" && (
        <>
          <View className="w-[40%] aspect-square flex items-center justify-center">
            <Image
              source={images.check}
              resizeMode="contain"
              className="flex-1"
            />
          </View>
          <ThemedText type="title" text="VERIFIED" />
          <ThemedText
            type="subtitle"
            text="YOU_HAVE_SUCCESSFULLY_VERIFIED_YOUR_ACCOUNT"
          />

          <ThemedButton
            text="BROWSE_HOME"
            onPress={() => router.replace("/(root)/(tabs)/home")}
          />
        </>
      )}
    </ThemedModal>
  );
};

export default VerificationModal;
