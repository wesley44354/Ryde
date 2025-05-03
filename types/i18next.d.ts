import "i18next";
import { string } from "zod";

declare interface II18nextTypes {
  // auth
  SKIP: string;
  NAME: string;
  NEXT: string;
  EMAIL: string;
  LOG_IN: string;
  SIGN_UP: string;
  PASSWORD: string;
  ENTER_NAME: string;
  ENTER_EMAIL: string;
  GET_STARTED: string;
  ENTER_PASSWORD: string;
  LET_GET_STARTED: string;
  CREATE_YOUR_ACCOUNT: string;
  ALREADY_HAVE_AN_ACCOUNT: string;
  SIGN_UP_OR_LOG_IN_TO_FIND_OUT_THE_BEST_CAR_FOR_YOU: string;

  // validation
  VALIDATION_SHORT_PASSWORD: string;
  VALIDATION_INVALID_EMAIL: string;
  VALIDATION_REQUIRED: string;

  // onbording
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
