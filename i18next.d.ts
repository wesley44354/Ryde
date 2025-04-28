import "i18next";
import { II18nextTypes } from "@/interfaces/Ii18nextTypes";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: II18nextTypes;
    };

    defaultNS: "translation";
  }
}
