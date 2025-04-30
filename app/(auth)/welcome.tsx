import i18n from "@/lang/i18n";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { AppConfig } from "@/constants/appConfig";
import { Image, SafeAreaView } from "react-native";
import { onboarding } from "@/constants/onboarding";
import { ThemedText } from "@/components/ThemedText";
import ThemedSwiper from "@/components/ThemedSwiper";
import { TouchableOpacity, View } from "react-native";
import { ThemedButton } from "@/components/ThemedButton";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex-1 items-center pb-[2%] justify-between ">
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5"
        onPress={() => {
          router.replace("/(auth)/sign-up");
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
        {onboarding.map((item) => {
          return (
            <View
              key={item.id}
              className="flex justify-between items-center p-5 gap-5"
            >
              <Image
                source={item.image}
                resizeMode="contain"
                className="w-full h-[60%]"
              />

              <View className="flex flex-row items-center justify-center">
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
                className="text-center"
                text={item.description}
                i18nTextArgs={{ APP_NAME: AppConfig.name }}
              />
            </View>
          );
        })}
      </ThemedSwiper>

      <View className="w-full flex justify-center items-center p-5 pt-0">
        <ThemedButton
          bgVariant="primary"
          onPress={() => {
            isLastSlide
              ? router.replace("/(auth)/sign-up")
              : swiperRef.current?.scrollBy(1);
          }}
          text={isLastSlide ? "GET_STARTED" : "NEXT"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
