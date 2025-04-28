import { SafeAreaView, Text } from "react-native";

const Welcome = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red dark:bg-black">
      <Text className="color-red">Welcome</Text>
    </SafeAreaView>
  );
};

export default Welcome;
