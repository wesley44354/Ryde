import { II18nextTypes } from "@/types/i18next";
import { images } from ".";

interface IOnboardingListType {
  id: number;
  image: string;
  title: keyof II18nextTypes;
  description: keyof II18nextTypes;
}

export const onboarding: IOnboardingListType[] = [
  {
    id: 1,
    image: images.onboarding1,
    title: "THE_PERFECT_RIDE_IS_JUST_A_TAP_AWAY",
    description: `THE_JOURNEY_BEGINS_WITH_APP_NAME`,
  },
  // {
  //   id: 2,
  //   title: "BEST_CAR_IN_YOUR_HANDS_WITH_APP_NAME",
  //   description:
  //     "Discover the convenience of finding your perfect ride with Ryde",
  //   image: images.onboarding2,
  // },
  // {
  //   id: 3,
  //   title: "Your ride, your way. Let's go!",
  //   description:
  //     "Enter your destination, sit back, and let us take care of the rest.",
  //   image: images.onboarding3,
  // },
];
