import { pt } from "./pt";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: pt,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources,
  lng: "pt",
});

export default i18n;
