import React from "react";
import { router } from "expo-router";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
import { Pressable, View } from "react-native";
import Animated from "react-native-reanimated";
import ReactNativeModal from "react-native-modal";

interface Props {
  children: React.ReactNode;
}

const ThemedModal = ({ children }: Props) => {
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const SCREEN_HEIGTH =
    Dimensions.get("window").height + Constants.statusBarHeight;

  return (
    <ReactNativeModal
      avoidKeyboard
      isVisible={true}
      statusBarTranslucent
      deviceWidth={SCREEN_WIDTH}
      deviceHeight={SCREEN_HEIGTH}
      customBackdrop={
        <Animated.View
          style={{
            backgroundColor: "rgba(0, 0, 0, 1)",
            justifyContent: "center",
            height: SCREEN_HEIGTH,
            position: "absolute",
            alignItems: "center",
            width: SCREEN_WIDTH,
          }}
        >
          <Pressable
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              }
            }}
            style={{
              height: SCREEN_HEIGTH,
              width: SCREEN_WIDTH,
              position: "absolute",
            }}
          />
        </Animated.View>
      }
    >
      <View
        className={`max-h-[85%] xl:w-[50%] xl:self-center gap-10 rounded-lg pr-5 pl-5 pt-10 pb-10 flex items-center justify-center  bg-white dark:bg-secondary-dark-100`}
      >
        {children}
      </View>
    </ReactNativeModal>
  );
};

export default ThemedModal;
