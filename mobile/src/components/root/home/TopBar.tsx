import { View } from "react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { ThemedText } from "@/components/ThemedText";
import { ThemedCircleButton } from "@/components/ThemedCircleButton";

const HomeTopBar = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
      router.replace("/(auth)/sign-in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-row items-center justify-between">
      <ThemedText type="title" children={user?.fullName} />

      <ThemedCircleButton
        onPress={handleSignOut}
        bgVariant="primary"
        loading={loading}
        disabled={loading}
        icon="out"
      />
    </View>
  );
};

export default React.memo(HomeTopBar);
