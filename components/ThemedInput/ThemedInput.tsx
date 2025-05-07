import { colors } from "@/constants/colors";
import { useTranslation } from "react-i18next";
import { II18nextTypes } from "@/types/i18next";
import React, { useState, forwardRef } from "react";
import { masks, MasksType } from "@/constants/masks";
import { ThemedInputContainer } from "./ThemedInputContainer";
import {
  View,
  Image,
  Text,
  Keyboard,
  Platform,
  Pressable,
  TextInput,
  TextInputProps,
  useColorScheme,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface InputProps extends TextInputProps {
  icon?: any;
  value: string;
  error?: string;
  mask?: MasksType;
  scannerEnabled?: boolean;
  secureTextEntry?: boolean;
  label?: keyof II18nextTypes;
  onSubmitEditing?: () => void;
  placeholder?: keyof II18nextTypes;
  onChangeText: (text: string | undefined) => void;
  keyboardType?: "default" | "email-address" | "numeric";
  inputMode?: "none" | "text" | "numeric" | "tel" | "search" | "email" | "url";
}

export const ThemedInput = forwardRef<TextInput, InputProps>(
  (
    {
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
      error,
      ...rest
    },
    ref
  ) => {
    const { t } = useTranslation();
    const colorScheme = useColorScheme();
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleOnChangeText = (text: string) => {
      let value = text;
      if (mask) {
        value = masks[mask](String(value));
      }
      onChangeText && onChangeText(value);
    };

    const shadowStyle = () => {
      if (error) {
        return `0 0 0 1px ${colors.danger[colorScheme!]}`;
      }

      if (isFocused) {
        return `0 0 0 1px ${colors.primary[colorScheme!].DEFAULT}`;
      }

      return "none";
    };

    return (
      <Pressable
        className="w-full"
        onPress={Platform.OS !== "web" ? Keyboard.dismiss : undefined}
      >
        <ThemedInputContainer label={label ? t(label) : undefined}>
          <View
            style={{ boxShadow: shadowStyle() }}
            className="h-12 flex-row items-center justify-between rounded-3xl bg-general-light-500 dark:bg-general-dark-500"
          >
            {icon && (
              <View className="h-[50%] aspect-square ml-5 flex items-center">
                <Image
                  source={icon}
                  resizeMode="contain"
                  className="flex-1 color-general-light-200 dark:color-general-dark-200"
                />
              </View>
            )}
            <TextInput
              ref={ref}
              value={value}
              inputMode={inputMode}
              keyboardType={keyboardType}
              onSubmitEditing={onSubmitEditing}
              onChangeText={handleOnChangeText}
              secureTextEntry={secureTextEntry && !showPassword}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              cursorColor={colors.primary[colorScheme!].DEFAULT}
              placeholder={placeholder ? t(placeholder) : undefined}
              placeholderTextColor={colors.general[colorScheme!][400]}
              className="flex-1 h-full outline-0 px-4 text-[16px] color-secondary-light-900 dark:color-secondary-dark-900"
              {...rest}
            />
            {secureTextEntry && (
              <Pressable
                className="pr-4 pl-2"
                onPress={() => setShowPassword((prev) => !prev)}
              >
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={20}
                  color={colors.general[colorScheme!][800]}
                />
              </Pressable>
            )}
          </View>
          {!!error && (
            <Text className="text-xs mt-1 ml-2 text-danger-light dark:text-danger-dark">
              {error}
            </Text>
          )}
        </ThemedInputContainer>
      </Pressable>
    );
  }
);
