import React from "react";
import { ViewProps, SafeAreaView } from "react-native";

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
    <SafeAreaView
      {...rest}
      className={`flex-1 items-center bg-background-light dark:bg-background-dark pb-[2%] ${className}`}
    >
      {children}
    </SafeAreaView>
  );
};
