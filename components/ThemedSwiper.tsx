import Swiper, { SwiperProps } from "react-native-swiper";
import { Dimensions, Platform, View } from "react-native";
import { forwardRef } from "react";

const { width } = Dimensions.get("window");

const ThemedSwiper = forwardRef<Swiper, SwiperProps>((props, ref) => {
  console.log(ref);
  return (
    <Swiper
      style={{ width: Platform.OS === "web" ? width : undefined }}
      ref={ref}
      dot={
        <View className="w-[32px] h-[4px] mx-1 bg-general-light-200 dark:bg-general-dark-200 rounded-full" />
      }
      activeDot={
        <View className="w-[32px] h-[4px] mx-1 bg-primary-light dark:bg-primary-dark rounded-full" />
      }
      index={2}
      {...props}
    />
  );
});

export default ThemedSwiper;
