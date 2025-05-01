import React from "react";
import { Controller, Control } from "react-hook-form";
import { InputProps, ThemedInput } from "./ThemedInput";

interface Props extends Omit<InputProps, "onChangeText" | "value"> {
  name: string;
  control: Control<any>;
}

export const ThemedInputController = ({ name, control, ...rest }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <ThemedInput
          {...rest}
          onChangeText={onChange}
          error={error?.message}
          value={value}
        />
      )}
    />
  );
};
