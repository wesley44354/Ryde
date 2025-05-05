import { ThemedInputController } from "@/components/ThemedInput/ThemedInputController";
import AuthRedirectLink from "@/components/auth/RedirectLink";
import AuthContrainer from "@/components/auth/Contrainer";
import { ThemedButton } from "@/components/ThemedButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThemedText } from "@/components/ThemedText";
import { useSignUp } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";
import OAuth from "@/components/auth/OAuth";
import { useLoader } from "@/context/Load";
import { useForm } from "react-hook-form";
import { router } from "expo-router";
import { icons } from "@/constants";
import { z } from "zod";

const SignUp = () => {
  const { showLoader, hideLoader } = useLoader();

  const { isLoaded, signUp, setActive } = useSignUp();

  const [verification, setVerification] = useState({
    state: "loading",
    error: "",
    code: "",
  });

  const signUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  type SignUpSchemaType = z.infer<typeof signUpSchema>;

  const { control, handleSubmit, setFocus } = useForm<SignUpSchemaType>({
    defaultValues: {},
    resolver: zodResolver(signUpSchema),
  });

  const onSignUpPress = async (forms: z.infer<typeof signUpSchema>) => {
    router.push("/(auth)/verificationModal");

    if (!isLoaded) {
      return;
    }
    try {
      await signUp.create({
        emailAddress: forms.email,
        password: forms.password,
        firstName: forms.name,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerification({
        ...verification,
        state: "pending",
      });
    } catch (e) {
      console.error(e);
    }
  };

  const OnPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        //TODO where
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
      console.error(e);
      setVerification({
        ...verification,
        error: e.errors[0].longMessage,
        state: "failed",
      });
    }
  };

  useEffect(() => {
    if (verification.state === "success") {
      hideLoader();
      router.replace("/(auth)/verificationModal");
    }
    if (verification.state === "loading") {
      showLoader();
    }
  }, [verification.state]);

  return (
    <AuthContrainer scrollPaddingTop={200} heightAuthImage="30%">
      <ThemedText type="title" numberOfLines={1} text="CREATE_YOUR_ACCOUNT" />

      <ThemedInputController
        name="name"
        label="NAME"
        control={control}
        icon={icons.person}
        placeholder="ENTER_NAME"
        onSubmitEditing={() => setFocus("email")}
      />
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
        onSubmitEditing={handleSubmit(onSignUpPress)}
      />

      <ThemedButton text="SIGN_UP" onPress={handleSubmit(onSignUpPress)} />

      <OAuth />

      <AuthRedirectLink i18nText="ALREADY_HAVE_AN_ACCOUNT" i18nLink="LOG_IN" />
    </AuthContrainer>
  );
};

export default SignUp;
