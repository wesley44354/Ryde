import "i18next";

declare interface II18nextTypes {
  SKIP: string;
  NAME: string;
  NEXT: string;
  GET_STARTED: string;
  CREATE_YOUR_ACCOUNT: string;
  YOUR_RIDE_YOUR_WAY_LETS_GO: string;
  BEST_CAR_IN_YOUR_HANDS_WITH: string;
  THE_JOURNEY_BEGINS_WITH_APP_NAME: string;
  THE_PERFECT_RIDE_IS_JUST_A_TAP_AWAY: string;
  ENTER_YOUR_DESTINATION_SIT_BACK_AND_LET_US_TAKE_CARE_OF_THE_REST: string;
  DISCOVER_THE_CONVENIENCE_OF_FINDING_YOUR_PERFECT_RIDE_WITH_APP_NAME: string;
}

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: II18nextTypes;
    };

    defaultNS: "translation";
  }
}
