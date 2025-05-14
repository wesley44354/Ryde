import { SafeAreaView } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { ThemedText } from "@/components/ThemedText";

const Home = () => {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <ThemedText>{user?.fullName}</ThemedText>
    </SafeAreaView>
  );
};

export default Home;
