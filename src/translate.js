import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from './languages/ru.json'
import kg from './languages/kg.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: ru
            },
      kg: {
                translation: kg
            }
        },
        lng: "ru", // if you're using a language detector, do not define the lng option
        fallbackLng: "ru",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

