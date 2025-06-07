import { ThemedInputController } from "@/mobile-app/components/ThemedInput/ThemedInputController";
import AuthRedirectLink from "@/mobile-app/components/auth/RedirectLink";
import AuthContrainer from "@/mobile-app/components/auth/Contrainer";
import { ThemedButton } from "@/mobile-app/components/ThemedButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThemedText } from "@/mobile-app/components/ThemedText";
import Toast from "react-native-toast-message";
import { useCallback, useState } from "react";
import { useSignIn } from "@clerk/clerk-expo";
import OAuth from "@/mobile-app/components/auth/OAuth";
import { useForm } from "react-hook-form";
import { useRouter } from "expo-router";
import { icons } from "@/constants";
import { z } from "zod";

const SignIn = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  type SignInSchemaType = z.infer<typeof signInSchema>;

  const { control, handleSubmit, setFocus } = useForm<SignInSchemaType>({
    defaultValues: {},
    resolver: zodResolver(signInSchema),
  });

  const onSignInPress = useCallback(
    async (forms: z.infer<typeof signInSchema>) => {
      if (!isLoaded) {
        return;
      }
      setLoading(true);

      try {
        const signInAttempt = await signIn.create({
          identifier: forms.email,
          password: forms.password,
        });

        if (signInAttempt.status === "complete") {
          await setActive({ session: signInAttempt.createdSessionId });
          router.replace("/");
        } else {
          Toast.show({
            type: "error",
            text1: "ERROR",
            text2: JSON.stringify(signInAttempt, null, 2),
          });
        }
      } catch (e: any) {
        Toast.show({
          type: "error",
          text1: "ERROR",
          text2: e.errors[0].longMessage || e.errors[0].message,
        });
      } finally {
        setLoading(false);
      }
    },
    [isLoaded]
  );

  return (
    <AuthContrainer scrollPaddingTop={200} heightAuthImage="30%">
      <ThemedText type="title" numberOfLines={1} text="LOG_IN" />

      <ThemedInputController
        name="email"
        label="EMAIL"
        control={control}
        icon={icons.email}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="ENTER_EMAIL"
        keyboardType="email-address"
        onSubmitEditing={() => setFocus("password")}
      />

      <ThemedInputController
        name="password"
        secureTextEntry
        label="PASSWORD"
        icon={icons.lock}
        control={control}
        autoCorrect={false}
        placeholder="ENTER_PASSWORD"
        onSubmitEditing={handleSubmit(onSignInPress)}
      />

      <ThemedButton
        text="LOG_IN"
        loading={loading}
        onPress={handleSubmit(onSignInPress)}
      />

      <OAuth />

      <AuthRedirectLink i18nText="DON_HAVE_AN_ACCOUNT" i18nLink="SIGN_UP" />
    </AuthContrainer>
  );
};

export default SignIn;
