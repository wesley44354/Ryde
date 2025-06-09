import { pt } from "@/lang/pt";
import "i18next";

declare type II18nextTypes = typeof pt;

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: II18nextTypes;
    };
    defaultNS: "translation";
  }
}
