import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./utils/locales/en.json";
import ar from "./utils/locales/ar.json";
import fr from "./utils/locales/fr.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // debug: true,
    // fallbackLng: "en",
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
      fr: {
        translation: fr,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["cookie", "htmlTag"],
      caches: ["cookie"],
    },
  });

export default i18n;
