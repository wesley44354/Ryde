import { ThemedInputController } from "@/components/ThemedInput/ThemedInputController";
import AuthRedirectLink from "@/components/auth/RedirectLink";
import AuthContrainer from "@/components/auth/Contrainer";
import { ThemedButton } from "@/components/ThemedButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThemedText } from "@/components/ThemedText";
import OAuth from "@/components/auth/OAuth";
import { useForm } from "react-hook-form";
import { icons } from "@/constants";
import { z } from "zod";

const SignIn = () => {
  const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  type SignInSchemaType = z.infer<typeof signInSchema>;

  const { control, handleSubmit, setFocus } = useForm<SignInSchemaType>({
    defaultValues: {},
    resolver: zodResolver(signInSchema),
  });

  const onSignInPress = async (forms: z.infer<typeof signInSchema>) => {
    console.log(forms);
  };

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

      <ThemedButton text="SIGN_UP" onPress={handleSubmit(onSignInPress)} />

      <OAuth />

      <AuthRedirectLink i18nText="DON_HAVE_AN_ACCOUNT" i18nLink="SIGN_UP" />
    </AuthContrainer>
  );
};

export default SignIn;
