import "i18next";
import { II18nextTypes } from "ui";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: II18nextTypes;
    };
    defaultNS: "translation";
  }
}
