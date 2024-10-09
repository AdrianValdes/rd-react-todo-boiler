import i18next from "i18next";
import de from "./locales/de.json";
import { initReactI18next } from "react-i18next";

const resources = {
  de: {
    translation: de,
  },
};

i18next.use(initReactI18next).init({ lng: "de", resources });

export default i18next;
