import ThemedTabBar from "@/components/ThemedTabBar/Tab";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      tabBar={(props) => <ThemedTabBar {...props} />}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default Layout;
