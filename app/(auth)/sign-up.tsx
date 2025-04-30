import { ThemedInput } from "@/components/ThemedInput/ThemedInput";
import { ThemedText } from "@/components/ThemedText";
import { images } from "@/constants";
import { Image, KeyboardAvoidingView, ScrollView, View } from "react-native";
import { useState } from "react";
import { ThemedButton } from "@/components/ThemedButton";

const SignUp = () => {
  const [name, setName] = useState("");

  return (
    <View className="flex-1">
      <Image
        resizeMode="stretch"
        style={{ width: "100%" }}
        source={images.signUpCar}
        className="absolute top-0 left-0 right-0 h-[30%] z-0 rounded-b-2xl"
      />

      <ScrollView className="pr-5 pl-5 top-48">
        <ThemedText type="title" numberOfLines={1} text="CREATE_YOUR_ACCOUNT" />

        <ThemedInput label="NAME" value={name} onChangeText={setName} />
        <ThemedButton text="SIGN_UP" />
      </ScrollView>
    </View>
  );
};

export default SignUp;
