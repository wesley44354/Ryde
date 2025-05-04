import { icons } from "@/constants";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedButton } from "../ThemedButton";

const OAuth = () => {
  const handleGoogleSignIn = async () => {};
  return (
    <View className="gap-8">
      <View className="flex flex-row justify-center items-center gap-x-5 pr-5 pl-5">
        <View className="flex-1 h-[1px] bg-secondary-light-900 dark:bg-secondary-dark-900" />
        <ThemedText className="text-lg" text="OR" />
        <View className="flex-1 h-[1px] bg-secondary-light-900 dark:bg-secondary-dark-900" />
      </View>

      <ThemedButton
        bgVariant="outline"
        iconLeft={icons.google}
        text="LOGIN_IN_WITH_GOOGLE"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
