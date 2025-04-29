import { ImageSourcePropType } from "react-native";
import { II18nextTypes } from "@/types/i18next";
import { images } from ".";

interface IOnboardingListType {
  id: number;
  appNameDestack?: boolean;
  image: ImageSourcePropType;
  title: keyof II18nextTypes;
  description: keyof II18nextTypes;
}

export const onboarding: IOnboardingListType[] = [
  {
    id: 1,
    appNameDestack: true,
    image: images.onboarding1,
    title: "BEST_CAR_IN_YOUR_HANDS_WITH",
    description:
      "DISCOVER_THE_CONVENIENCE_OF_FINDING_YOUR_PERFECT_RIDE_WITH_APP_NAME",
  },
  {
    id: 2,
    image: images.onboarding2,
    title: "THE_PERFECT_RIDE_IS_JUST_A_TAP_AWAY",
    description: `THE_JOURNEY_BEGINS_WITH_APP_NAME`,
  },

  {
    id: 3,
    image: images.onboarding3,
    title: "YOUR_RIDE_YOUR_WAY_LETS_GO",
    description:
      "ENTER_YOUR_DESTINATION_SIT_BACK_AND_LET_US_TAKE_CARE_OF_THE_REST",
  },
];
