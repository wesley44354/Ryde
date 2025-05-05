import { Platform } from "react-native";
import Swiper, { SwiperProps } from "react-native-swiper";
import { forwardRef, useImperativeHandle, useRef } from "react";
import {
  View,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

const { width } = Dimensions.get("window");

const ThemedSwiperWeb = forwardRef<Swiper, SwiperProps>((props, ref: any) => {
  const index = useRef(0);
  const swiperRef = useRef<Swiper>(null);
  const isScrollingProgrammatically = useRef(false);

  useImperativeHandle(ref, () => ({
    scrollBy: (delta: number) => {
      const newIndex = index.current + delta;
      const clampedIndex = Math.max(0, newIndex);
      index.current = clampedIndex;
      if (swiperRef.current && index) {
        isScrollingProgrammatically.current = true;
        swiperRef.current.scrollTo(index.current, true);
      }
    },
  }));

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isScrollingProgrammatically.current) {
      isScrollingProgrammatically.current = false;
      return;
    }

    const offsetX = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / width);
    if (swiperRef.current && index.current !== newIndex) {
      index.current = newIndex;
      swiperRef.current.scrollTo(newIndex, true);
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      style={{ width }}
      index={index.current}
      onScroll={handleScroll}
      scrollEventThrottle={1000}
      decelerationRate={0}
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

const ThemedSwiperDefault = forwardRef<Swiper, SwiperProps>((props, ref) => {
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

const ThemedSwiper =
  Platform.OS === "web" ? ThemedSwiperWeb : ThemedSwiperDefault;

export default ThemedSwiper;
