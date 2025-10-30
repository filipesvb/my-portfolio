import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

const isDev = import.meta.env.DEV

export const supportedLngs = ['pt', 'en'];

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    // Bind i18next to React
    .use(initReactI18next)
    // InContext Editor of locize
    .init({
        debug: isDev, // Enable logging for development
        supportedLngs,
        ns: ['header', 'hero', 'service_section'],
        fallbackLng: ['en'],
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
    });


export default i18n;