import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./resources/en/common.json";
import enNavigation from "./resources/en/navigation.json";
import enError from "./resources/en/error.json";

import deCommon from "./resources/de/common.json";
import deNavigation from "./resources/de/navigation.json";
import deError from "./resources/de/error.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs: ["en", "de"],

        defaultNS: "common",
        ns: ["common", "navigation", "error"],

        interpolation: {
            escapeValue: false,
        },

        resources: {
            en: {
                common: enCommon,
                navigation: enNavigation,
                error: enError,
            },
            de: {
                common: deCommon,
                navigation: deNavigation,
                error: deError,
            },
        },
    });
