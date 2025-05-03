import { ThemedInputController } from "@/components/ThemedInput/ThemedInputController";
import { ThemedButton } from "@/components/ThemedButton";
import { Image, KeyboardAvoidingView, ScrollView, View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThemedText } from "@/components/ThemedText";
import { icons, images } from "@/constants";
import { useForm } from "react-hook-form";
import { Link } from "expo-router";
import { z } from "zod";

const SignUp = () => {
  const signUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  type SignUpSchemaType = z.infer<typeof signUpSchema>;

  const { control, handleSubmit } = useForm<SignUpSchemaType>({
    defaultValues: {},
    resolver: zodResolver(signUpSchema),
  });

  const onSignUpPress = async (forms: z.infer<typeof signUpSchema>) => {
    console.log(forms);
  };

  return (
    <View className="flex-1">
      <Image
        resizeMode="stretch"
        style={{ width: "100%" }}
        source={images.signUpCar}
        className="absolute top-0 left-0 right-0 h-[30%] z-10 rounded-b-2xl"
      />
      <KeyboardAvoidingView className="flex-1" behavior={"padding"}>
        <ScrollView className="pr-5 pl-5 pt-48">
          <View className="gap-5 pb-5">
            <ThemedText
              type="title"
              numberOfLines={1}
              text="CREATE_YOUR_ACCOUNT"
            />

            <ThemedInputController
              name="name"
              label="NAME"
              control={control}
              icon={icons.person}
              placeholder="ENTER_NAME"
            />
            <ThemedInputController
              name="email"
              label="EMAIL"
              control={control}
              icon={icons.email}
              placeholder="ENTER_EMAIL"
            />
            <ThemedInputController
              name="password"
              secureTextEntry
              label="PASSWORD"
              icon={icons.lock}
              control={control}
              placeholder="ENTER_PASSWORD"
            />
            <ThemedButton
              text="SIGN_UP"
              onPress={handleSubmit(onSignUpPress)}
            />

            <View className="flex items-center justify-center flex-row gap-1">
              <ThemedText
                color="general"
                colorIntensity="200"
                text="ALREADY_HAVE_AN_ACCOUNT"
              />
              <Link href={"/(auth)/sign-in"}>
                <ThemedText type="bold" color="primary" text="LOG_IN" />
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
