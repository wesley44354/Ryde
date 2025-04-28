import { SafeAreaView, TouchableOpacity } from "react-native";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";

const Welcome = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background-light dark:bg-background-dark">
      <TouchableOpacity>
        <ThemedText children={"SKIP"} />
      </TouchableOpacity>

      <ThemedButton onPress={() => {}} title="NEXT" />
    </SafeAreaView>
  );
};

export default Welcome;
