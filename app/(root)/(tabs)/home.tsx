import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SignOutButton } from "@clerk/clerk-react";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { ThemedText } from "@/components/ThemedText";

const Home = () => {
  const { user } = useUser();

  console.log(user?.fullName);

  return (
    <View>
      <ThemedText>{user?.fullName}</ThemedText>
    </View>
  );
};

export default Home;
