import React from "react";
import { useTranslation } from "react-i18next";
import { View, TextInput } from "react-native";
import { II18nextTypes } from "@/types/i18next";
import { masks, MasksType } from "@/constants/masks";
import { ThemedInputContainer } from "./ThemedInputContainer";

interface Props {
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
  const handleOnChangeText = (text: string) => {
    let value = text;
    if (mask) {
      value = masks[mask](String(value));
    }
    onChangeText && onChangeText(value);
  };

  return (
    <ThemedInputContainer label={label ? t(label) : undefined}>
      <View className="flex-row items-center justify-between">
        <TextInput
          value={value}
          inputMode={inputMode}
          keyboardType={keyboardType}
          onSubmitEditing={onSubmitEditing}
          onChangeText={handleOnChangeText}
          secureTextEntry={secureTextEntry}
          // placeholderTextColor={colors.icon}
          placeholder={placeholder ? t(placeholder) : undefined}
          className={`flex-1 h-12 px-4 text-base border rounded-2xl my-2 text-white focus:border-red-500 bg-pri`}
        />
      </View>
    </ThemedInputContainer>
  );
};
