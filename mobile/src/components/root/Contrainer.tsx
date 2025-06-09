import React from "react";
import Constant from "expo-constants";
import { ScrollView, KeyboardAvoidingView, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

const RootContrainer = ({ children }: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      className={`flex-1 bg-general-light-500 dark:bg-general-dark-500`}
    >
      <ScrollView className={`flex-1 pr-5 pl-5`}>
        <View className="flex flex-col gap-10">
          <View
            style={{
              width: "100%",
              height: Constant.statusBarHeight,
            }}
          />

          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RootContrainer;
