import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { TouchableOpacity, View } from "react-native";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedScreenContrainer } from "@/components/ThemedScreenContrainer";
import { onboarding } from "@/constants/onboarding";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <ThemedScreenContrainer className="justify-between">
      <TouchableOpacity
        className="w-full flex justify-end items-end"
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
      >
        <ThemedText type="bold" children={"SKIP"} />
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-['32px'] h-[4px] mx-1 bg-red-100 rounded-full" />
        }
        activeDot={
          <View className="w-['32px'] h-[4px] mx-1 bg-blue-100 rounded-full" />
        }
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
      >
        {onboarding.map((item) => {
          return (
            <View key={item.id}>
              <ThemedText children={item.title} />
              <ThemedText children={item.description} />
            </View>
          );
        })}
      </Swiper>

      <ThemedButton onPress={() => {}} children="NEXT" />
    </ThemedScreenContrainer>
  );
};

export default Welcome;
