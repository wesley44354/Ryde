import { ThemedButton } from "@/components/ThemedButton";
import ThemedModal from "@/components/ThemedModal";
import { ThemedText } from "@/components/ThemedText";
import { images } from "@/constants";
import { router } from "expo-router";
import { Image, View } from "react-native";

const VerificationModal = () => {
  return (
    <ThemedModal>
      <View className="w-[40%] aspect-square flex items-center justify-center">
        <Image source={images.check} resizeMode="contain" className="flex-1" />
      </View>
      <ThemedText type="title" text="VERIFIED" />
      <ThemedText
        type="subtitle"
        text="YOU_HAVE_SUCCESSFULLY_VERIFIED_YOUR_ACCOUNT"
      />

      <ThemedButton
        text="BROWSE_HOME"
        onPress={() => router.replace("/(root)/(tabs)/home")}
      />
    </ThemedModal>
  );
};

export default VerificationModal;
