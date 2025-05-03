import {
  DimensionValue,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from "react-native";
import AuthImageTop from "./ImageTop";
import React from "react";

interface Props {
  scrollPaddingTop: DimensionValue | undefined;
  heightAuthImage: DimensionValue | undefined;
  children: React.ReactNode;
}

const AuthContrainer = ({
  scrollPaddingTop,
  heightAuthImage,
  children,
}: Props) => {
  return (
    <View className="flex-1">
      <AuthImageTop height={heightAuthImage} />
      <KeyboardAvoidingView className="flex-1" behavior={"padding"}>
        <ScrollView
          className={`pr-5 pl-5 pt-${scrollPaddingTop}`}
          style={{ paddingTop: scrollPaddingTop }}
        >
          <View className="gap-5 pb-5 z-10">{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthContrainer;
