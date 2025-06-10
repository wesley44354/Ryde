import { ImageSourcePropType } from "react-native";
import { II18nextTypes } from "../lang/type";
import { onboarding1, onboarding2, onboarding3 } from "../images";

interface IOnboardingListType {
  id: number;
  appNameDestack?: boolean;
  image: ImageSourcePropType;
  title: keyof II18nextTypes;
  description: keyof II18nextTypes;
}

export const onboardingList: IOnboardingListType[] = [
  {
    id: 1,
    appNameDestack: true,
    image: onboarding1,
    title: "BEST_CAR_IN_YOUR_HANDS_WITH",
    description:
      "DISCOVER_THE_CONVENIENCE_OF_FINDING_YOUR_PERFECT_RIDE_WITH_APP_NAME",
  },
  {
    id: 2,
    image: onboarding2,
    title: "THE_PERFECT_RIDE_IS_JUST_A_TAP_AWAY",
    description: `THE_JOURNEY_BEGINS_WITH_APP_NAME`,
  },

  {
    id: 3,
    image: onboarding3,
    title: "YOUR_RIDE_YOUR_WAY_LETS_GO",
    description:
      "ENTER_YOUR_DESTINATION_SIT_BACK_AND_LET_US_TAKE_CARE_OF_THE_REST",
  },
];
