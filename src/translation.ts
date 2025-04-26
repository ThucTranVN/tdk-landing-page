import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import translationEn from "./locales/en/translation.json";
import translationVi from "./locales/vi/translation.json";

const resources = {
  en: {
    translations: translationEn,
  },
  vi: {
    translations: translationVi,
  },
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    resources,
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;