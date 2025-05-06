import React from "react";
import { View } from "react-native";
import { router } from "expo-router";
import ReactNativeModal from "react-native-modal";

interface Props {
  children: React.ReactNode;
}

const ThemedModal = ({ children }: Props) => {
  return (
    <ReactNativeModal
      isVisible={true}
      onBackdropPress={() => {
        if (router.canGoBack()) {
          router.back();
        }
      }}
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
