import { SafeAreaView } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { ThemedText } from "@/mobile-app/components/ThemedText";
import { ThemedButton } from "@/mobile-app/components/ThemedButton";
import { fetchAPI } from "@/lib/fetch";

const Home = () => {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <ThemedText>{user?.fullName}</ThemedText>

      <ThemedButton
        text="ALREADY_HAVE_AN_ACCOUNT"
        onPress={() => {
          fetchAPI("/(api)/user", {
            method: "POST",
            body: JSON.stringify({
              name: "teste",
              email: "teste@gmail.com",
              clerkId: "123456",
            }),
          });
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
