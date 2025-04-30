import React, { useState } from "react";
import { colors } from "@/constants/colors";
import { useTranslation } from "react-i18next";
import { II18nextTypes } from "@/types/i18next";
import { masks, MasksType } from "@/constants/masks";
import { ThemedInputContainer } from "./ThemedInputContainer";
import {
  View,
  Image,
  TextInput,
  TextInputProps,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

interface Props extends TextInputProps {
  icon?: any;
  value: string;
  mask?: MasksType;
  scannerEnabled?: boolean;
  secureTextEntry?: boolean;
  label?: keyof II18nextTypes;
  onSubmitEditing?: () => void;
  placeholder?: keyof II18nextTypes;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "email-address" | "numeric";
  inputMode?: "none" | "text" | "numeric" | "tel" | "search" | "email" | "url";
}

export const ThemedInput = ({
  icon,
  mask,
  label,
  value,
  inputMode,
  placeholder,
  onChangeText,
  onSubmitEditing,
  secureTextEntry = false,
  keyboardType = "default",
}: Props) => {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChangeText = (text: string) => {
    let value = text;
    if (mask) {
      value = masks[mask](String(value));
    }
    onChangeText && onChangeText(value);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedInputContainer label={label ? t(label) : undefined}>
          <View
            className={`h-12 flex-row items-center justify-between rounded-3xl  ${
              isFocused
                ? "border-2 border-primary-light dark:border-primary-dark"
                : "border-none"
            } bg-general-light-500 dark:bg-general-dark-500`}
          >
            {icon && (
              <Image
                source={icon}
                className="w-6 h-6 ml-4 color-general-light-200 dark:color-general-dark-200"
              />
            )}
            <TextInput
              value={value}
              inputMode={inputMode}
              keyboardType={keyboardType}
              onSubmitEditing={onSubmitEditing}
              onChangeText={handleOnChangeText}
              secureTextEntry={secureTextEntry}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              cursorColor={colors.primary[colorScheme!].DEFAULT}
              selectionColor={colors.primary[colorScheme!][500]}
              placeholder={placeholder ? t(placeholder) : undefined}
              placeholderTextColor={colors.general[colorScheme!][800]}
              className="flex-1 h-full px-4 text-[16px] color-secondary-light-900 dark:color-secondary-dark-900"
            />
          </View>
        </ThemedInputContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
