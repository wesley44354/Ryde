import React, { createContext, useContext, useState } from "react";
import { ActivityIndicator, View } from "react-native";

interface LoaderContextType {
  showLoader: () => void;
  hideLoader: () => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const LoaderProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {loading && (
        <View
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            alignItems: "center",
            position: "absolute",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        >
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
      {children}
    </LoaderContext.Provider>
  );
};
