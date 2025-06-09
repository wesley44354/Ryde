import {
  View,
  ScrollView,
  DimensionValue,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import AuthImageTop from "./ImageTop";

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
        <ScrollView className={`pr-5 pl-5 `}>
          <View
            className="gap-10 pb-10 z-10"
            style={{ paddingTop: scrollPaddingTop }}
          >
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthContrainer;
