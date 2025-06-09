import i18n from "@/lang/i18n";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
const AppConfig = require("@/constants/appConfig");
import { Image, SafeAreaView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import ThemedSwiper from "@/components/ThemedSwiper";
import { TouchableOpacity, View } from "react-native";
import { onboardingList } from "@/constants/onboarding";
import { ThemedButton } from "@/components/ThemedButton";

const onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const isLastSlide = activeIndex === onboardingList.length - 1;

  return (
    <SafeAreaView className="flex-1 items-center pb-[2%] justify-between">
      <TouchableOpacity
        className="w-full flex justify-end items-end h-[10%] p-5 pt-10"
        onPress={() => {
          router.replace("/(auth)/welcome");
        }}
      >
        <ThemedText type="bold" text={"SKIP"} />
      </TouchableOpacity>

      <ThemedSwiper
        loop={false}
        ref={swiperRef}
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
      >
        {onboardingList.map((item) => {
          return (
            <View
              key={item.id}
              className="flex w-full h-[85%] justify-between items-center p-5 gap-5"
            >
              <View className="h-[60%] aspect-square self-center items-center">
                <Image
                  source={item.image}
                  resizeMode="contain"
                  className="flex-1"
                />
              </View>

              <View className="flex h-[30%] flex-row items-center justify-center">
                <ThemedText
                  type="title"
                  className="text-center"
                  i18nTextArgs={{ APP_NAME: AppConfig.name }}
                >
                  {i18n.t(item.title)}
                  {item.appNameDestack ? (
                    <ThemedText
                      type="bold"
                      className="text-primary-light dark:text-primary-dark"
                    >
                      {AppConfig.name}
                    </ThemedText>
                  ) : (
                    <></>
                  )}
                </ThemedText>
              </View>
              <ThemedText
                type="default"
                text={item.description}
                className="text-center h-[1s0%]"
                i18nTextArgs={{ APP_NAME: AppConfig.name }}
              />
            </View>
          );
        })}
      </ThemedSwiper>

      <View className="w-full flex justify-center items-center h-[10%] p-5 pt-0">
        <ThemedButton
          bgVariant="primary"
          onPress={() => {
            isLastSlide
              ? router.replace("/(auth)/welcome")
              : swiperRef.current?.scrollBy(1);
          }}
          text={isLastSlide ? "GET_STARTED" : "NEXT"}
        />
      </View>
    </SafeAreaView>
  );
};

export default onboarding;
