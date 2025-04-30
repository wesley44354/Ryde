import { ThemedInput } from "@/components/ThemedInput/ThemedInput";
import { ThemedButton } from "@/components/ThemedButton";
import { Image, ScrollView, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { icons, images } from "@/constants";
import { useState } from "react";

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

        <ThemedInput
          label="NAME"
          value={name}
          icon={icons.person}
          onChangeText={setName}
          placeholder="ENTER_NAME"
        />
        <ThemedInput
          value={name}
          label="EMAIL"
          icon={icons.email}
          onChangeText={setName}
          placeholder="ENTER_EMAIL"
        />
        <ThemedInput
          value={name}
          secureTextEntry
          label="PASSWORD"
          icon={icons.lock}
          onChangeText={setName}
          placeholder="ENTER_PASSWORD"
        />
        <ThemedButton text="SIGN_UP" />
      </ScrollView>
    </View>
  );
};

export default SignUp;
