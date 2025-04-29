import "i18next";

declare interface II18nextTypes {
  SKIP: string;
  NEXT: string;
  THE_JOURNEY_BEGINS_WITH_APP_NAME: string;
  THE_PERFECT_RIDE_IS_JUST_A_TAP_AWAY: string;
  BEST_CAR_IN_YOUR_HANDS_WITH_APP_NAME: string;
}

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: II18nextTypes;
    };

    defaultNS: "translation";
  }
}
