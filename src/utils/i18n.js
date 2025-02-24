import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzLang from "./locales/uz.json";
import ruLang from "./locales/ru.json";

const resources = {
    ru: {
        translation: ruLang
    },
    uz: {
        translation: uzLang
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru",


        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;