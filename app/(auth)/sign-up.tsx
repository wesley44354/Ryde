import { ThemedInputController } from "@/components/ThemedInput/ThemedInputController";
import { useVerificationStore } from "@/stores/auth/VerificationStore";
import AuthRedirectLink from "@/components/auth/RedirectLink";
import AuthContrainer from "@/components/auth/Contrainer";
import { ThemedButton } from "@/components/ThemedButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThemedText } from "@/components/ThemedText";
import { useSignUp } from "@clerk/clerk-expo";
import OAuth from "@/components/auth/OAuth";
import { useLoader } from "@/context/Load";
import { useForm } from "react-hook-form";
import { router } from "expo-router";
import { icons } from "@/constants";
import { z } from "zod";

const SignUp = () => {
  const { showLoader, hideLoader } = useLoader();
  const { isLoaded, signUp } = useSignUp();
  const { verification, setVerification } = useVerificationStore();

  const signUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  });

  type SignUpSchemaType = z.infer<typeof signUpSchema>;

  const { control, handleSubmit, setFocus } = useForm<SignUpSchemaType>({
    defaultValues: {},
    resolver: zodResolver(signUpSchema),
  });

  const onSignUpPress = async (forms: z.infer<typeof signUpSchema>) => {
    if (!isLoaded) {
      return;
    }
    showLoader();
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
      router.push("/(auth)/verificationModal");
    } catch (e) {
      console.error(e);
    } finally {
      hideLoader();
    }
  };

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
