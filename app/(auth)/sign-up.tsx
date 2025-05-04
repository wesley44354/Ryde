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

const SignUp = () => {
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
    console.log(forms);
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
        placeholder="ENTER_EMAIL"
        onSubmitEditing={() => setFocus("password")}
      />
      <ThemedInputController
        name="password"
        secureTextEntry
        label="PASSWORD"
        icon={icons.lock}
        control={control}
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
