import { z } from "zod";
import i18n from "./i18n";

export const setZodErrorMessages = () => {
  z.setErrorMap((error: any) => {
    switch (error.code) {
      case "too_small":
        if (error.message === "String cannot be empty") {
          return {
            message: i18n.t("VALIDATION_REQUIRED"),
          };
        }
        return {
          message: i18n.t("VALIDATION_SHORT_PASSWORD", {
            min: error.minimum,
          }),
        };
      case "invalid_type":
        return {
          message: i18n.t("VALIDATION_REQUIRED"),
        };
      case "invalid_string":
        if (error.validation === "email") {
          return {
            message: i18n.t("VALIDATION_INVALID_EMAIL"),
          };
        }

        if (error.message === "VALIDATION_FULL_NAME_REQUIRED") {
          return {
            message: i18n.t("VALIDATION_FULL_NAME_REQUIRED"),
          };
        }
        return { message: error.message };
      default:
        return { message: error.message };
    }
  });
};
