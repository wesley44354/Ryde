import Swiper, { SwiperProps } from "react-native-swiper";
import { View } from "react-native";
import { forwardRef } from "react";

const ThemedSwiper = forwardRef<Swiper, SwiperProps>((props, ref) => {
  return (
    <Swiper
      ref={ref}
      dot={
        <View className="w-[32px] h-[4px] mx-1 bg-general-light-200 dark:bg-general-dark-200 rounded-full" />
      }
      activeDot={
        <View className="w-[32px] h-[4px] mx-1 bg-primary-light dark:bg-primary-dark rounded-full" />
      }
      {...props}
    />
  );
});

export default ThemedSwiper;
