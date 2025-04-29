import React from "react";
import { View, ViewProps, SafeAreaView } from "react-native";

interface ThemedScreenContrainerProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export const ThemedScreenContrainer = ({
  children,
  className,
  ...rest
}: ThemedScreenContrainerProps) => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background-light dark:bg-background-dark pl-4 pr-4">
      <View
        className={`w-['90%'] pt-5 pb-5 h-full flex-1 items-center gap-5 ${className}`}
        {...rest}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};
