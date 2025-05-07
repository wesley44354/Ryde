import { ThemedInputController } from "@/components/ThemedInput/ThemedInputController";
import { useVerificationStore } from "@/stores/auth/VerificationStore";
import AuthRedirectLink from "@/components/auth/RedirectLink";
import AuthContrainer from "@/components/auth/Contrainer";
import { ThemedButton } from "@/components/ThemedButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThemedText } from "@/components/ThemedText";
import Toast from "react-native-toast-message";
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
    nameComplet: z.string().min(3).regex(/\s/, "VALIDATION_FULL_NAME_REQUIRED"),
    password: z.string().min(8),
    email: z.string().email(),
  });

  type SignUpSchemaType = z.infer<typeof signUpSchema>;

  const { control, handleSubmit, setFocus } = useForm<SignUpSchemaType>({
    defaultValues: {
      nameComplet: "Wesley Alves",
      email: "wesleyalvesdeveloper99@gmail.com",
      password: "123456Wwee",
    },
    resolver: zodResolver(signUpSchema),
  });

  const onSignUpPress = async (forms: z.infer<typeof signUpSchema>) => {
    if (!isLoaded) {
      return;
    }
    showLoader();
    try {
      const [firstName, ...lastName] = forms.nameComplet.split(" ");
      const fullLastName = lastName.join(" ");
      await signUp.create({
        emailAddress: forms.email,
        password: forms.password,
        lastName: fullLastName,
        firstName,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerification({
        ...verification,
        email: forms.email,
        state: "pending",
      });
      router.push("/(auth)/verificationModal");
    } catch (e: any) {
      Toast.show({
        type: "error",
        text1: "ERROR",
        text2: e.errors[0].longMessage || e.errors[0].message,
      });
    } finally {
      hideLoader();
    }
  };

  return (
    <AuthContrainer scrollPaddingTop={200} heightAuthImage="30%">
      <ThemedText type="title" numberOfLines={1} text="CREATE_YOUR_ACCOUNT" />

      <ThemedInputController
        control={control}
        name="nameComplet"
        icon={icons.person}
        label="NAME_COMPLET"
        placeholder="ENTER_NAME_COMPLET"
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
