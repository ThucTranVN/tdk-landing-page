import { validateProps } from "../../common/types";
import i18n from "i18next";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = i18n.t("Name is required");
  }
  if (!values.email) {
    errors.email = i18n.t("Email address is required");
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = i18n.t("Email address is invalid");
  }
  if (!values.message) {
    errors.message = i18n.t("Message is required");
  }
  return errors;
}
