import React from "react";
import { FlatList, FlatListProps } from "react-native";

export function ThemedFlatList<T>(props: FlatListProps<T>) {
  return <FlatList {...props} />;
}
