import { Tabs } from "expo-router";
import { icons } from "@/constants";
import { GetColorByTheme } from "@/constants/colors";
import { useColorScheme, useWindowDimensions, View } from "react-native";
import { Image, ImageSourcePropType } from "react-native";

const TabIcon = ({
  focused,
  icon,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
}) => {
  const colorScheme = useColorScheme();

  const getBg = () => {
    switch (focused) {
      case true:
        return "bg-primary-light dark:bg-primary-dark";
      default:
        return "";
    }
  };

  const IconColor = GetColorByTheme({
    theme: colorScheme!,
    color: "background",
    intensity: "400",
  });

  return (
    <View
      style={{ height: focused ? "200%" : "80%" }}
      className={`aspect-square flex justify-center items-center rounded-full ${getBg()}`}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={IconColor}
        style={{ height: focused ? "30%" : "50%" }}
      />
    </View>
  );
};

const Layout = () => {
  const colorScheme = useColorScheme();

  const { width } = useWindowDimensions();
  const marginHorizontal = width * (width >= 1024 ? 0.3 : 0.1);

  const tabBgColor = GetColorByTheme({
    theme: colorScheme!,
    color: "secondary",
    intensity: "900",
  });

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: false,
        sceneStyle: {
          width,
        },
        tabBarIconStyle: {
          height: 60,
          aspectRatio: 1,
        },
        tabBarStyle: {
          height: "auto",
          display: "flex",
          marginBottom: 20,
          borderRadius: 50,
          paddingBottom: 0,
          marginHorizontal,
          overflow: "hidden",
          alignSelf: "center",
          alignItems: "center",
          position: "absolute",
          flexDirection: "row",
          backgroundColor: tabBgColor,
          justifyContent: "space-between",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.list} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.chat} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.profile} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
